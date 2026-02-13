export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 lg:pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
            {/* Left side - Content */}
            <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-2xl text-center lg:text-left lg:pt-12 xl:pt-16">
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight">
                <span className="text-white">Stop drifting.</span>
                <br />
                <span className="gold-gradient">Start building.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Your 66-day crucible to forge discipline, compete with a global legion, and build a life of victory.
              </p>

              <a
                href="https://apps.apple.com/us/app/victus-discipline-habits/id6754204999"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on the App Store"
                  className="h-12 sm:h-14 md:h-16 w-auto"
                />
              </a>
            </div>

            {/* Right side - Screenshot */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end lg:-mt-12 xl:-mt-16">
              <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[550px]">
                <img
                  src="/App Store Screenshots/New Banner Pic Updated.png"
                  alt="Victus app"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
