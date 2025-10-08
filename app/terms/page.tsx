import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Victus",
  description: "Terms of Service for Victus app",
};

export default function Terms() {
  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 hero-title">
          Terms of <span className="gold-gradient">Service</span>
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-400 mb-2">Last Updated: January 2025</p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using the Victus mobile application ("App"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed">
              Victus is a habit-tracking and self-improvement application that provides users with:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Personalized 66-day habit-building plans</li>
              <li>Daily habit tracking and progress monitoring</li>
              <li>Gamified features including XP, ranks, and achievements</li>
              <li>Global leaderboard functionality</li>
              <li>Streak tracking and notifications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To use Victus, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Payment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Subscription Plans</h3>
                <p className="text-gray-300 leading-relaxed">
                  Victus offers subscription-based access with the following options:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li>Monthly: $14.99/month</li>
                  <li>Annual: $59.99/year</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Billing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Subscriptions are billed through your Apple App Store or Google Play Store account. Payment will be charged to your account at confirmation of purchase. Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Cancellation</h3>
                <p className="text-gray-300 leading-relaxed">
                  You may cancel your subscription at any time through your App Store or Google Play Store account settings. Cancellation will take effect at the end of the current billing period. No refunds will be provided for the current subscription period.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. User Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Use the App for any illegal purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to any portion of the App</li>
              <li>Interfere with or disrupt the App or servers connected to the App</li>
              <li>Use any automated system to access the App</li>
              <li>Impersonate any person or entity or falsely represent your affiliation</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Manipulate leaderboard rankings through fraudulent means</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Leaderboard and Public Information</h2>
            <p className="text-gray-300 leading-relaxed">
              By using Victus, you understand and agree that your username, XP, and streak information will be displayed on the public Global Leaderboard. You can control your username in your account settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              The App and its original content, features, and functionality are owned by Victus and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              The App is provided "as is" and "as available" without warranties of any kind, either express or implied. Victus does not warrant that the App will be uninterrupted, secure, or error-free. We do not guarantee any specific results from using the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall Victus, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. Account Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last Updated" date. Your continued use of the App after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:support@getvictus.com" className="text-[#d4af37] hover:underline">
                support@getvictus.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
