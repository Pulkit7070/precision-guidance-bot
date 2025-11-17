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
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground px-4 animate-fade-in-up">Talk to Our Tooling Experts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 animate-scale-in"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Get personalized recommendations for your machining applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-2xl group scroll-reveal" style={{ paddingBottom: '75%', height: 0 }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <iframe
                src="https://www.google.com/maps?q=28.6488314,77.2263614&output=embed"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                title="G M Machinery Store Location"
              />
            </div>

            <div className="space-y-6 scroll-reveal" style={{ animationDelay: '0.1s' }}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground animate-fade-in-up">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2 text-foreground">Phone</div>
                      <div className="space-y-1.5">
                        <a href="tel:+919899804420" className="block text-muted-foreground hover:text-primary transition-colors">
                          +91 98998 04420
                        </a>
                        <a href="tel:+919811065121" className="block text-muted-foreground hover:text-primary transition-colors">
                          +91 98110 65121
                        </a>
                        <a href="tel:01146065101" className="block text-muted-foreground hover:text-primary transition-colors">
                             <span className="text-secondary"> +</span>011-46065101
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-foreground">Email</div>
                      <div className="text-muted-foreground">21shivamgupta@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-foreground">Location</div>
                      <div className="text-muted-foreground">
                        346, Katra Sheikh Ranjha, Hauz Qazi, Near Chawri Bazar Metro Station, Delhi - 110006
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Business Hours</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
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
