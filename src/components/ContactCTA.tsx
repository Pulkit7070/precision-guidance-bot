import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-hero-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Talk to Our Tooling Experts</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Get personalized recommendations for your machining applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/95 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Request a Quote</h3>
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Industry / Application"
                    className="bg-background"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Request Quotation
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-primary-foreground/70">+91-XXXX-XXXXXX</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-primary-foreground/70">info@gmmachinery.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <div className="text-primary-foreground/70">
                        Industrial Area, Mumbai, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-primary/10 backdrop-blur border-primary/20">
                <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
                <div className="space-y-1 text-sm text-primary-foreground/70">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
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
