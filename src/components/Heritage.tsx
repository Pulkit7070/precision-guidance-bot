const companies = [
  { name: "GM Machinery Store" },
  { name: "MG Tools Co." },
  { name: "Rudra Associated" },
  { name: "GM Machinery Tools Pvt. Ltd.", subtitle: "Manufacturing Unit" },
  { name: "MG Tools Pvt. Ltd.", subtitle: "Manufacturing Unit" },
];

const Heritage = () => {
  return (
    <section id="about-us" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">About Us</h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20 lg:items-stretch">
            {/* Left Column - Main Description */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground/90">
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
            <div className="bg-secondary/10 rounded-lg p-6 sm:p-8 lg:p-10 border-l-4 border-primary flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-5xl sm:text-6xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-lg sm:text-xl font-semibold text-foreground">Years of Experience</p>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">Trusted expertise in metal cutting tools</p>
                </div>
                <div className="h-px bg-border"></div>
                <div>
                  <h3 className="text-5xl sm:text-6xl font-bold text-primary mb-2">5</h3>
                  <p className="text-lg sm:text-xl font-semibold text-foreground">Group Companies</p>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">Comprehensive manufacturing & trading network</p>
                </div>
                <div className="h-px bg-border"></div>
                <div>
                  <h3 className="text-5xl sm:text-6xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-lg sm:text-xl font-semibold text-foreground">Family Owned</p>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">Personal service across generations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Group of Companies Section */}
          <div className="border-t border-border pt-12 sm:pt-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">Our Group of Companies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="group relative bg-card rounded-lg p-6 sm:p-7 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <h4 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                          {company.name}
                        </h4>
                      </div>
                      {company.subtitle && (
                        <p className="text-sm text-muted-foreground ml-5 mt-1 font-medium">
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
