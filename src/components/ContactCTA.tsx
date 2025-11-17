import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-4 animate-fade-in-up">Talk to Our Tooling Experts</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-3 sm:mb-4 animate-scale-in"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Get personalized recommendations for your machining applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-2xl group scroll-reveal" style={{ paddingBottom: '75%', height: 0, minHeight: '250px' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5896234567!2d77.2263614!3d28.6488314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzU1LjgiTiA3N8KwMTMnMzQuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                title="G M Machinery Store Location"
                className="relative z-10"
                allowFullScreen
              />
            </div>

            <div className="space-y-5 sm:space-y-6 scroll-reveal" style={{ animationDelay: '0.1s' }}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground animate-fade-in-up">Contact Information</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4 group hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300 touch-manipulation">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold mb-1.5 sm:mb-2 text-foreground text-sm sm:text-base">Phone</div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <a href="tel:+919899804420" className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base touch-manipulation">
                          +91 98998 04420
                        </a>
                        <a href="tel:+919811065121" className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base touch-manipulation">
                          +91 98110 65121
                        </a>
                        <a href="tel:01146065101" className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base touch-manipulation">
                             <span className="text-secondary"> +</span>011-46065101
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 group hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300 touch-manipulation">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold mb-1 text-foreground text-sm sm:text-base">Email</div>
                      <a href="mailto:21shivamgupta@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all touch-manipulation">21shivamgupta@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 group hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300 touch-manipulation">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold mb-1 text-foreground text-sm sm:text-base">Location</div>
                      <div className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        346, Katra Sheikh Ranjha, Hauz Qazi, Near Chawri Bazar Metro Station, Delhi - 110006
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-4 sm:p-5 md:p-6 bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group touch-manipulation">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative">
                  <h4 className="font-semibold text-base sm:text-lg mb-2 text-foreground">Business Hours</h4>
                  <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <div>Monday - Saturday: 9:00 AM - 7:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
