import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { getAllBlogArticles } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog & Resources",
  description:
    "Guides and tips on hiring verified maids, cooks, babysitters and house help in Bangalore. Learn how BaiHub makes domestic help safe, reliable and affordable.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const articles = getAllBlogArticles();

  return (
    <>
      <Header />
      <main id="main" className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
              Blog &amp; Resources
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-foreground sm:text-5xl">
              BaiHub Bangalore Guides
            </h1>
            <p className="mt-4 text-lg text-brand-muted">
              Practical guides on hiring verified, reliable, and affordable
              domestic help across Bengaluru.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
            {articles.map((article) => {
              const isPublished =
                article.content && article.content.length > 0;

              const cardInner = (
                <>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-primary/20 px-3 py-1 text-xs font-semibold text-brand-foreground">
                      {article.focusKeyword}
                    </span>
                    {!isPublished && (
                      <span className="rounded-full bg-brand-surface px-3 py-1 text-xs font-medium text-brand-muted">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h2 className="mt-4 text-xl font-bold leading-snug tracking-tight text-brand-foreground">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
                    <span className="text-xs text-brand-muted">
                      {article.readingTime}
                    </span>
                    {isPublished && (
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-secondary">
                        Read article
                        <ArrowRight className="size-4" />
                      </span>
                    )}
                  </div>
                </>
              );

              if (!isPublished) {
                return (
                  <article
                    key={article.slug}
                    className="flex flex-col rounded-3xl border border-border bg-white/60 p-6 opacity-75 shadow-sm"
                  >
                    {cardInner}
                  </article>
                );
              }

              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-secondary hover:shadow-lg"
                >
                  {cardInner}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
