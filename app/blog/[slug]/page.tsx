import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { ButtonAnchor } from "@/components/ui/button-link";
import {
  getBlogArticle,
  getPublishedBlogArticles,
} from "@/lib/blog";
import { getBookUrl } from "@/lib/book";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config/site.config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedBlogArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return createPageMetadata({
      title: "Article Not Found",
      description: "The requested article could not be found.",
      path: `/blog/${slug}`,
    });
  }

  return {
    ...createPageMetadata({
      title: article.metaTitle,
      description: article.metaDescription,
      path: `/blog/${article.slug}`,
    }),
    keywords: [article.focusKeyword],
  };
}

function getArticleJsonLd(slug: string) {
  const article = getBlogArticle(slug);
  if (!article) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    keywords: article.focusKeyword,
    url: `${siteConfig.siteUrl}/blog/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/blog/${article.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article || !article.content || article.content.length === 0) {
    notFound();
  }

  const jsonLd = getArticleJsonLd(slug);

  return (
    <>
      <Header />
      <main id="main" className="section-padding">
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}

        <article className="section-container mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-secondary transition-colors hover:text-brand-foreground"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>

          <div className="mt-6">
            <span className="rounded-full bg-brand-primary/20 px-3 py-1 text-xs font-semibold text-brand-foreground">
              {article.focusKeyword}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand-foreground sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-brand-muted">{article.readingTime}</p>

          <div className="mt-10 space-y-10">
            {article.content.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold tracking-tight text-brand-foreground">
                  {section.heading}
                </h2>

                {section.paragraphs && (
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-brand-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <ul className="mt-4 space-y-3">
                    {section.bullets.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-base leading-relaxed text-brand-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-primary"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-brand-primary/25 bg-gradient-to-br from-brand-primary/15 via-brand-primary/5 to-white p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-brand-foreground">
              Ready to hire verified help in Bangalore?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-brand-muted">
              Book a background-checked maid, cook, babysitter or caretaker with
              BaiHub — transparent pricing and same-day replacement.
            </p>
            <ButtonAnchor
              href={getBookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="mt-6 bg-black font-semibold text-white hover:bg-black/90"
            >
              Book a Helper Now
              <ArrowRight className="size-4" />
            </ButtonAnchor>
          </div>
        </article>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
