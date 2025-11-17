const companies = [
  { name: "GM Machinery Store" },
  { name: "MG Tools Co." },
  { name: "Rudra Associated" },
  { name: "GM Machinery Tools Pvt. Ltd.", subtitle: "Manufacturing Unit" },
  { name: "MG Tools Pvt. Ltd.", subtitle: "Manufacturing Unit" },
];

const Heritage = () => {
  return (
    <section id="about-us" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10 sm:mb-12 md:mb-16 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in-up">About Us</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent animate-scale-in"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20 lg:items-stretch">
            {/* Left Column - Main Description */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 scroll-reveal" style={{ animationDelay: '0.1s' }}>
              <div className="prose prose-lg max-w-none">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foreground/90">
                  <span className="font-semibold text-foreground">G M Machinery Store</span> is a family run business, having an experience of <span className="font-semibold text-foreground">over 50 years</span> of trading of metal cutting tools, throughout the country.
                </p>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground/90">
                  We, along with our group of companies, cater to a wide variety of clients with diverse applications across industries.
                </p>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground/90">
                  Having an extensive range of tools along with our vast experience gives us an edge over our competitors, allowing our customers to avail best quality services suited to their needs.
                </p>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="relative group scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-secondary/10 rounded-lg p-6 sm:p-8 lg:p-10 border-l-4 border-primary flex flex-col justify-center backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-counter">50+</h3>
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">Years of Experience</p>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1">Trusted expertise in metal cutting tools</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-counter" style={{ animationDelay: '0.2s' }}>5</h3>
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">Group Companies</p>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1">Comprehensive manufacturing & trading network</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-counter" style={{ animationDelay: '0.4s' }}>100%</h3>
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">Family Owned</p>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1">Personal service across generations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Group of Companies Section */}
          <div className="border-t border-border pt-10 sm:pt-12 md:pt-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 scroll-reveal">Our Group of Companies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="group relative bg-card rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 scroll-reveal touch-manipulation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <h4 className="font-semibold text-sm sm:text-base md:text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                          {company.name}
                        </h4>
                      </div>
                      {company.subtitle && (
                        <p className="text-xs sm:text-sm text-muted-foreground ml-4 sm:ml-5 mt-1 font-medium">
                          {company.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
