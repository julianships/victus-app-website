import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Victus",
  description: "Get help with Victus. Contact our support team for assistance.",
};

export default function Support() {
  return (
    <div className="bg-black min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 hero-title text-center">
          <span className="gold-gradient">Support</span> Center
        </h1>

        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Need help? We're here to support you on your journey to victory.
        </p>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">📧</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email Support</h3>
                <p className="text-gray-400 mb-2">For app issues, feature requests, or general inquiries</p>
                <a
                  href="mailto:support@getvictus.com"
                  className="text-[#d4af37] hover:underline font-semibold"
                >
                  support@getvictus.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked <span className="gold-gradient">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How do I cancel my subscription?</h3>
              <p className="text-gray-300 leading-relaxed">
                You can manage your subscription through your App Store settings. Go to Settings → [Your Name] → Subscriptions → Victus, then select Cancel Subscription.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How does the 66-day challenge work?</h3>
              <p className="text-gray-300 leading-relaxed">
                After onboarding, Victus generates a personalized plan based on your selected Pillars (Discipline, Fitness, Wellness, etc.). Each day, you'll receive a checklist of habits to complete. Completing habits earns you XP and builds your streak.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What are XP and Ranks?</h3>
              <p className="text-gray-300 leading-relaxed">
                XP (Experience Points) are earned by completing daily habits. As you accumulate XP, you progress through ranks: Bronze → Silver → Gold → Spartan. Each rank represents your growth and mastery.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How does the leaderboard work?</h3>
              <p className="text-gray-300 leading-relaxed">
                The Global Leaderboard shows all Victus users ranked by Total XP or Current Streak. It's a way to compete with warriors worldwide and stay motivated through friendly competition.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">My streak broke. Can it be restored?</h3>
              <p className="text-gray-300 leading-relaxed">
                Streaks are part of building true discipline—they cannot be restored. However, every new day is a chance to start fresh and build an even stronger streak.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">I found a bug. How do I report it?</h3>
              <p className="text-gray-300 leading-relaxed">
                Please email us at{' '}
                <a href="mailto:support@getvictus.com" className="text-[#d4af37] hover:underline">
                  support@getvictus.com
                </a>{' '}
                with details about the issue, including your device model and iOS version. We appreciate your help in making Victus better!
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Is Victus available on Android?</h3>
              <p className="text-gray-300 leading-relaxed">
                Victus is currently iOS-only, but an Android version is in development. Email us to be notified when it launches!
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How do I delete my account?</h3>
              <p className="text-gray-300 leading-relaxed">
                You can request account deletion from within the app's settings, or email{' '}
                <a href="mailto:support@getvictus.com" className="text-[#d4af37] hover:underline">
                  support@getvictus.com
                </a>
                . All your data will be permanently deleted from our servers.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Help */}
        <div className="text-center bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our support team is ready to assist you.
          </p>
          <a
            href="mailto:support@getvictus.com"
            className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
