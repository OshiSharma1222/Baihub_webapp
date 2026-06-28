import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "BaiHub terms and conditions for using our domestic help placement service.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="section-padding">
        <div className="section-container mx-auto max-w-3xl prose prose-neutral">
          <h1 className="text-4xl font-bold text-brand-foreground">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-brand-muted">Last Updated: 30 Nov 2025</p>

          <p className="mt-6 text-brand-muted">
            BaiHub India is a trusted platform that connects households with verified, trained, and
            identity-checked part-time helpers. We ensure unmatched reliability with on-time arrival
            and uninterrupted service guarantees. Through our easy-to-use booking system, customers
            can conveniently choose preferred time slots and hire skilled helpers for various
            household needs.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">1. Introduction</h2>
          <p className="text-brand-muted">
            BaiHub India is a trusted platform that connects households with verified, trained, and
            identity-checked part-time helpers. We ensure unmatched reliability with on-time arrival
            and uninterrupted service guarantees. Through our easy-to-use booking system, customers
            can conveniently choose preferred time slots and hire skilled helpers for various
            household needs.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">2. Nature of Service</h2>
          <p className="text-brand-muted">
            BaiHub provides helpers directly as employees of the company. BaiHub acts as the
            platform that assigns and manages helper schedules, availability, and performance.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">3. Liability Disclaimer</h2>
          <p className="text-brand-muted">
            BaiHub is not responsible for the actions of helpers during service. To ensure user
            satisfaction, we offer:
          </p>
          <ul className="mt-2 list-disc pl-6 text-brand-muted">
            <li>A 3-day free trial period.</li>
            <li>A no-questions-asked cancellation policy during the free trial.</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">4. User Responsibilities</h2>
          <p className="text-brand-muted">Users must:</p>
          <ul className="mt-2 list-disc pl-6 text-brand-muted">
            <li>Book domestic helpers only through BaiHub.</li>
            <li>Not engage or hire helpers privately outside the platform.</li>
            <li>Inform BaiHub of all communication with helpers related to scheduling or instructions.</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">5. Restricted Communication</h2>
          <p className="text-brand-muted">
            Users are strictly prohibited from contacting helpers privately. BaiHub shall act as the
            moderator for communication to ensure service quality and safety.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">6. Service Quality Guarantee</h2>
          <p className="text-brand-muted">BaiHub guarantees the quality of service. Users receive:</p>
          <ul className="mt-2 list-disc pl-6 text-brand-muted">
            <li>A free trial period to evaluate service.</li>
            <li>Full refund if dissatisfied during the trial.</li>
            <li>Pro-rated refunds if canceled after the trial.</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">7. Helper Availability &amp; Replacement</h2>
          <p className="text-brand-muted">
            If a helper is unavailable, BaiHub will provide a quality replacement. BaiHub ensures a
            30-day uninterrupted, on-time service guarantee.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">8. Payments &amp; Subscription</h2>
          <p className="text-brand-muted">BaiHub offers prepaid subscription-based services with:</p>
          <ul className="mt-2 list-disc pl-6 text-brand-muted">
            <li>Monthly plans</li>
            <li>Annual plans</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">9. Refund Policy</h2>
          <ul className="mt-2 list-disc pl-6 text-brand-muted">
            <li>Full refund during the free trial period.</li>
            <li>Pro-rated refund after the trial period.</li>
            <li>No cancellation fees.</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">10. Cancellations</h2>
          <p className="text-brand-muted">
            Users may cancel at any time during or after the trial period. Refunds are processed per
            the refund policy.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">11. Rescheduling Policy</h2>
          <p className="text-brand-muted">
            Users may reschedule bookings up to 24 hours before their next scheduled slot.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">12. Delay Policy</h2>
          <p className="text-brand-muted">
            If a helper arrives more than 10 minutes late, BaiHub credits half the cost of the
            day&apos;s slot to the user&apos;s in-app wallet.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">13. Liability for Damages</h2>
          <p className="text-brand-muted">
            Users accept full liability for any losses, damages, or theft that occur during service
            hours.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">14. Dispute Resolution</h2>
          <p className="text-brand-muted">
            BaiHub will mediate disputes between users and helpers but holds no legal responsibility
            for outcomes.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">15. Governing Law</h2>
          <p className="text-brand-muted">
            These Terms are governed by Indian law. All legal proceedings shall be under the
            jurisdiction of the courts of Bengaluru, Karnataka.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">16. Account Suspension</h2>
          <p className="text-brand-muted">
            BaiHub reserves the right to suspend or terminate user accounts in cases of:
          </p>
          <ul className="mt-2 list-disc pl-6 text-brand-muted">
            <li>Fraudulent activity</li>
            <li>Harassment of helpers or staff</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">17. Communication Consent</h2>
          <p className="text-brand-muted">Users consent to receive notifications via:</p>
          <ul className="mt-2 list-disc pl-6 text-brand-muted">
            <li>WhatsApp</li>
            <li>SMS</li>
            <li>Email</li>
            <li>Push Notifications</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">18. Contact Information</h2>
          <div className="mt-2 text-brand-muted space-y-1">
            <p>
              <span className="font-medium text-brand-foreground">Support Phone:</span>{" "}
              <a href="tel:+919810468163" className="text-brand-primary hover:underline">
                +91 98104 68163
              </a>
            </p>
            <p>
              <span className="font-medium text-brand-foreground">Email:</span>{" "}
              <a href="mailto:hello@baihub.co.in" className="text-brand-primary hover:underline">
                hello@baihub.co.in
              </a>
            </p>
            <p>
              <span className="font-medium text-brand-foreground">Website:</span>{" "}
              <a href="https://www.baihub.co.in" className="text-brand-primary hover:underline">
                www.baihub.co.in
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
