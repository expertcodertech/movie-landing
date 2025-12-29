import { Film, Star, Play, TrendingUp, Clock, Award } from "./icons";
import { SEO_CONFIG } from "@/config/seo";

const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL || "https://vegamoviesnl.info";

const CONFIG = {
  siteName: SEO_CONFIG.siteName,
  tagline: "Your Movie Discovery Platform",
  description: SEO_CONFIG.description,
  redirectUrl,
  features: [
    {
      icon: "star",
      title: "Ratings & Reviews",
      description: "Comprehensive ratings and reviews from critics and audiences",
    },
    {
      icon: "trending",
      title: "Trending Movies",
      description: "Stay updated with the latest releases and popular films",
    },
    {
      icon: "play",
      title: "Trailers & Clips",
      description: "Watch official trailers and exclusive movie clips",
    },
    {
      icon: "clock",
      title: "Streaming Availability",
      description: "Find where to watch movies on legal OTT platforms",
    },
  ],
  stats: [
    { value: "15K+", label: "Movies Listed" },
    { value: "50+", label: "OTT Platforms" },
    { value: "1M+", label: "Monthly Users" },
  ],
};

function getIcon(name: string) {
  const icons: Record<string, React.ReactNode> = {
    star: <Star />,
    trending: <TrendingUp />,
    play: <Play />,
    clock: <Clock />,
  };
  return icons[name] || <Film />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 bg-gradient-to-br from-[#1a0a0a] via-[#0a0a0a] to-[#0a0a1a]">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-6">
            {CONFIG.siteName}
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4">
            {CONFIG.tagline}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-10 px-2">
            {CONFIG.description}
          </p>

          <a
            href={CONFIG.redirectUrl}
            className="inline-flex items-center gap-2 bg-[#e50914] hover:bg-[#f40612] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-colors duration-200"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            Explore Movies
          </a>

          <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-lg mx-auto">
            {CONFIG.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 bg-[#0d0d0d]" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
            Why Choose Us?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Everything you need to discover and explore movies from around the world
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CONFIG.features.map((feature) => (
              <article
                key={feature.title}
                className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 sm:p-6 hover:border-[#e50914]/50 transition-colors duration-200"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e50914]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 text-[#e50914]">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-20 px-4 bg-[#0a0a0a]" aria-labelledby="categories-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="categories-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Browse by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {["Bollywood", "Hollywood", "South Indian", "Web Series"].map((category) => (
              <a
                key={category}
                href={CONFIG.redirectUrl}
                className="group rounded-xl bg-[#141414] border border-[#2a2a2a] p-4 sm:p-8 text-center hover:border-[#e50914] transition-colors duration-200"
              >
                <Award className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#e50914]" />
                <h3 className="text-sm sm:text-base font-semibold">{category}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Discover?</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 px-2">
            Find your next favorite movie and where to stream it legally
          </p>
          <a
            href={CONFIG.redirectUrl}
            className="inline-flex items-center gap-2 bg-[#e50914] hover:bg-[#f40612] text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-colors duration-200"
          >
            Start Exploring
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-[#2a2a2a] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 sm:w-6 sm:h-6 text-[#e50914]" />
            <span className="text-sm sm:text-base font-semibold">{CONFIG.siteName}</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} {CONFIG.siteName}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
