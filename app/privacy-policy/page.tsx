import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "BaiHub privacy policy — how we handle your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main" className="section-padding">
        <div className="section-container mx-auto max-w-3xl prose prose-neutral">
          <h1 className="text-4xl font-bold text-brand-foreground">Privacy Policy</h1>
          <p className="mt-2 text-sm text-brand-muted">Last Updated: 30 Nov 2025</p>

          <p className="mt-6 text-brand-muted">
            Baihub India Private Limited (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the Baihub mobile
            application, available on Android and IOS devices. BaiHub India is a trusted platform
            that connects households with verified, trained, and identity-checked part-time helpers.
            We ensure unmatched reliability with on-time arrival and uninterrupted service
            guarantees. With our easy-to-use booking system, customers can conveniently choose their
            preferred time slots and hire skilled helpers for a wide range of household needs.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">1. Information We Collect</h2>
          <p className="text-brand-muted">We may collect the following information from users:</p>
          <ul className="mt-2 list-disc pl-6 text-brand-muted">
            <li>Name</li>
            <li>Phone Number</li>
            <li>Email</li>
            <li>Address</li>
            <li>Location</li>
            <li>Payment Information</li>
            <li>Number of People in Family</li>
            <li>Age of Kid(s)</li>
            <li>Details of Senior Citizen</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">2. Location Access</h2>
          <p className="text-brand-muted">
            The application collects real-time and background location data to enable accurate
            helper matching and service delivery.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">3. Cookies and Tracking Technologies</h2>
          <p className="text-brand-muted">
            We use cookies and similar tracking tools to enhance the user experience.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">4. User Authentication</h2>
          <p className="text-brand-muted">
            Users may sign up using Mobile OTP or as Guests.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">5. Third-Party Integrations</h2>
          <p className="text-brand-muted">
            Baihub uses services like Firebase, Google Analytics, Razorpay/Paytm/Stripe, Google
            Maps, Cloud Services, and Ad Networks.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">6. Data Usage</h2>
          <p className="text-brand-muted">We use collected data for:</p>
          <ul className="mt-2 list-disc pl-6 text-brand-muted">
            <li>User account creation and verification</li>
            <li>Booking and service management</li>
            <li>Notifications and alerts</li>
            <li>Payment processing</li>
            <li>Advertisements</li>
            <li>Analytics and app improvement</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">7. Data Retention</h2>
          <p className="text-brand-muted">User data is retained until account deletion.</p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">8. Account Deletion</h2>
          <p className="text-brand-muted">
            Users cannot request deletion of personal data at this time.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">9. Minimum Age Requirement</h2>
          <p className="text-brand-muted">Users must be 16 years or older to access the app.</p>

          <h2 className="mt-8 text-xl font-semibold text-brand-foreground">10. Contact Details</h2>
          <div className="mt-2 text-brand-muted space-y-1">
            <p><span className="font-medium text-brand-foreground">Company:</span> Baihub India Private Limited</p>
            <p><span className="font-medium text-brand-foreground">Location:</span> Karnataka, India</p>
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
