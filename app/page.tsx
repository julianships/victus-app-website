export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="marble-texture relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              Greco-Roman Self-Mastery
            </span>
          </div>

          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            <span className="gold-gradient">66 Days</span>
            <br />
            <span className="text-white">to a Victorious</span>
            <br />
            <span className="text-white">Lifestyle</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Build unbreakable discipline through gamified self-mastery. Track your habits, earn XP, climb the leaderboard, and become the hero of your own journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </a>
            <a
              href="#features"
              className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d4af37]/10 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 text-gray-400 text-sm">
            <p>Available on iOS • Coming soon to Android</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Forge Your <span className="gold-gradient">Discipline</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every feature designed to transform you into a stronger, more focused version of yourself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Pillar System</h3>
              <p className="text-gray-400">
                Choose your pillars of self-improvement—Discipline, Fitness, Wellness—and build a personalized 66-day challenge plan.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-3">XP & Ranks</h3>
              <p className="text-gray-400">
                Complete habits to earn XP. Progress through ranks from Bronze to Spartan and visualize your transformation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all">
              <div className="text-4xl mb-4">🥇</div>
              <h3 className="text-2xl font-bold text-white mb-3">Global Leaderboard</h3>
              <p className="text-gray-400">
                Compete with warriors worldwide. Climb the ranks based on Total XP or Current Streak. Prove your discipline.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-white mb-3">Streak Tracking</h3>
              <p className="text-gray-400">
                Build unstoppable momentum with habit and whole-day streak tracking. Don't break the chain.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-3">Achievements</h3>
              <p className="text-gray-400">
                Unlock badges for key milestones. Celebrate every victory, from your first week to becoming a Spartan.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Daily Challenges</h3>
              <p className="text-gray-400">
                Simple, tappable daily checklist auto-generated from your personalized plan. Check off, earn XP, repeat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your <span className="gold-gradient">Epic Journey</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Download Victus today and start your 66-day transformation. Your victorious lifestyle awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="https://apps.apple.com/app/victus"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </a>

            <div className="text-gray-500 text-sm">
              Android coming soon
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            Free to download • $14.99/month or $59.99/year
          </p>
        </div>
      </section>

      {/* Social Proof / Mission Section */}
      <section className="py-20 px-4 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Path of the <span className="gold-gradient">Warrior</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Victus is rooted in the principles of Stoicism—discipline, resilience, and taking command of your own life.
            You're not just tracking habits; you're forging an unbreakable spirit. Every day is a battle.
            Every completed habit is a victory. Join thousands on the path to self-mastery.
          </p>
        </div>
      </section>
    </div>
  );
}
