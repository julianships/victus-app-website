import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Victus",
  description: "Privacy Policy for Victus app",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 hero-title">
          Privacy <span className="gold-gradient">Policy</span>
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-400 mb-2">Last Updated: January 2025</p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to Victus ("we," "us," "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, Victus (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Collection of Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect via the App includes:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">A. Personal Data You Provide to Us</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect information you voluntarily provide to us during the onboarding process and when you create an account, such as:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Account Information:</strong> Your email address and a username.</li>
              <li><strong className="text-white">Onboarding Information:</strong> Your age range, self-assessed "current state," chosen "primary virtue," identified "primary obstacle," and your answers to the baseline questions regarding your habits (e.g., wake-up time, workout frequency, screen time).</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">B. Data We Collect Automatically</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Usage Data:</strong> Information about your interactions with the App, such as the habits you track, habits you complete, streaks you achieve, XP you earn, and your rank progression.</li>
              <li><strong className="text-white">Device Data:</strong> Information about your mobile device, such as your device ID, model, operating system, and language. We collect your device's push notification token if you consent to receive notifications.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. Use of Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information collected about you via the App to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Create and manage your account.</li>
              <li>Generate your personalized 66-day habit-building plan and apply progressive overload updates.</li>
              <li>Display your habit progress, streaks, XP, Pillar Levels, and Global Rank.</li>
              <li>Display your username, XP, and streak on the public in-app leaderboard.</li>
              <li>Send you push notifications to remind you of your daily habits and congratulate you on milestones.</li>
              <li>Process payments and manage your subscription.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the App.</li>
              <li>Diagnose and fix technology problems and crashes.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Disclosure of Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed to the following third-party service providers who perform services for us or on our behalf:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Backend & Database</h3>
                <p className="text-gray-300">
                  Google Firebase is our backend provider for user authentication, database storage (Firestore), and server-side logic (Cloud Functions).{' '}
                  <a href="https://policies.google.com/privacy" className="text-[#d4af37] hover:underline" target="_blank" rel="noopener noreferrer">
                    Google's Privacy Policy
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Subscription & Payment Processing</h3>
                <p className="text-gray-300">
                  RevenueCat manages our in-app subscriptions. We do not process or store your payment card details. That information is provided directly to the respective app store (Apple App Store or Google Play Store) and is handled by RevenueCat.{' '}
                  <a href="https://www.revenuecat.com/privacy" className="text-[#d4af37] hover:underline" target="_blank" rel="noopener noreferrer">
                    RevenueCat's Privacy Policy
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>
                    Mixpanel helps us understand how you use the App so we can improve it.{' '}
                    <a href="https://mixpanel.com/legal/privacy-policy" className="text-[#d4af37] hover:underline" target="_blank" rel="noopener noreferrer">
                      Mixpanel's Privacy Policy
                    </a>
                  </li>
                  <li>Firebase Crashlytics & Performance Monitoring helps us identify and fix app crashes and performance issues.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Advertising Partners</h3>
                <p className="text-gray-300 mb-2">
                  We share key conversion events (like a completed purchase) with Meta (Facebook) and Google to measure the effectiveness of our advertising campaigns and to help them show you more relevant ads. This helps us find more users like you.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>
                    <a href="https://www.facebook.com/privacy/explanation" className="text-[#d4af37] hover:underline" target="_blank" rel="noopener noreferrer">
                      Meta's Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://policies.google.com/privacy" className="text-[#d4af37] hover:underline" target="_blank" rel="noopener noreferrer">
                      Google's Advertising Privacy & Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We will retain your personal information for as long as your account is active or as needed to provide you with the App's services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to review, change, or terminate your account at any time. You can request account deletion from within the App's settings. Upon your request to terminate your account, we will permanently delete your account and information from our active databases.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:{' '}
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
