import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy and Terms of Service - Victus",
  description: "Privacy Policy and Terms of Service for Victus app",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 hero-title text-center">
          Privacy Policy and <span className="gold-gradient">Terms of Service</span>
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-400 mb-2">Last Updated: October 28, 2025</p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 mb-12">
            <p className="text-gray-300 leading-relaxed">
              Welcome to Victus. Before you can use our application (the "App"), it is mandatory that you agree to these Terms of Service and Privacy Policy. By accessing or using our services, you confirm that you have read, understood, and accepted these terms and agree to be legally bound by them. If you do not agree to these terms, you must not use our App or services.
            </p>
          </div>

          {/* Terms of Service */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Terms of Service</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Use of Our Services</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Personal Use Only:</strong> Our services are intended for your personal, non-commercial use only. You are strictly prohibited from reselling, copying, or otherwise using our services for commercial purposes.</li>
                  <li><strong className="text-white">Software Protection:</strong> You may not reverse-engineer, decompile, disassemble, or attempt to discover the source code or underlying algorithms of our App.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Subscription Details</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Victus operates on a subscription basis with billing occurring on a monthly or yearly cycle.
                </p>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Your chosen payment method will be automatically billed via your Apple App Store account according to our subscription plan unless you cancel your subscription. You are responsible for all charges incurred on your account.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You can manage your subscription and turn off auto-renewal at any time through your iTunes Account Settings.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Disclaimers and Limitation of Liability</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>
                    <strong className="text-white">Services Provided "As Is":</strong> Our services are provided on an "as is" and "as available" basis. To the maximum extent permitted by law, Victus disclaims all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                  </li>
                  <li>
                    <strong className="text-white">Limitation of Liability:</strong> Under no circumstances shall Victus be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use our services. Our total liability to you for all damages shall not exceed the amount of fifty dollars ($50.00).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">4. Indemnification</h3>
                <p className="text-gray-300 leading-relaxed">
                  You agree to indemnify and hold harmless Victus, its affiliates, and employees from any claims, liabilities, damages, and expenses (including reasonable attorneys' fees) arising out of your use of our services or your breach of these Terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">5. Termination and Modification</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Termination:</strong> We reserve the right to suspend or terminate your access to our services at any time, without prior notice, if you violate these Terms.</li>
                  <li><strong className="text-white">Modification:</strong> We reserve the right to update these Terms at any time. Any changes will be posted on our website, and your continued use of our services after such changes will constitute your acceptance of the new terms.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              At Victus, we are committed to safeguarding your personal information.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">6. Information Collection</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We collect information you voluntarily provide to us when you create an account and use the App. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Account Information:</strong> Your email address and username.</li>
                  <li><strong className="text-white">Onboarding Information:</strong> Your age range, self-assessed current state, chosen primary virtue, identified primary obstacle, and your baseline habit data.</li>
                  <li><strong className="text-white">Usage Data:</strong> Information about your interactions with the App, such as habits tracked, XP earned, and rank progression.</li>
                  <li><strong className="text-white">Device Data:</strong> Your device's push notification token (if you consent) and your device's advertising identifier (IDFA) if you provide consent through Apple's App Tracking Transparency prompt.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">7. Use of Your Information</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide, operate, and improve our services.</li>
                  <li>Create and manage your account and process subscriptions.</li>
                  <li>Generate your personalized 66-day plan.</li>
                  <li>Display your progress and rank on your profile and the public leaderboard.</li>
                  <li>Send you push notifications.</li>
                  <li>Measure the effectiveness of our marketing campaigns.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">8. Disclosure of Your Information</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We share your information with trusted third-party service providers to perform services on our behalf, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Backend & Database:</strong> Google Firebase</li>
                  <li><strong className="text-white">Subscription Management:</strong> RevenueCat</li>
                  <li><strong className="text-white">Analytics:</strong> Mixpanel, Firebase Crashlytics</li>
                  <li><strong className="text-white">Attribution & Advertising:</strong> AppsFlyer, Meta (Facebook), Google, and TikTok.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">9. Data Security and Retention</h3>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical measures to protect your data. Your data is retained for as long as your account is active or as necessary to fulfill the purposes outlined in this Policy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">10. Your Data Rights</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access, correct, or update your personal data.</li>
                  <li>Request the deletion of your account and associated data from within the App's settings.</li>
                  <li>Control your tracking preferences for advertising purposes via the in-app prompt or your device's iOS settings.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h3>
                <p className="text-gray-300 leading-relaxed">
                  We do not knowingly collect information from or market to children under the age of 13.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">12. Contact Us</h3>
                <p className="text-gray-300 leading-relaxed">
                  If you have questions about these Terms or our Privacy Policy, please contact us at:{' '}
                  <a href="mailto:support@getvictus.com" className="text-[#d4af37] hover:underline">
                    support@getvictus.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
