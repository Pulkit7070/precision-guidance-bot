import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Talk to Our Tooling Experts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized recommendations for your machining applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '75%', height: 0 }}>
              <iframe
                src="https://www.google.com/maps?q=Industrial+Area,+Andheri+East,+Mumbai,+Maharashtra,+India&output=embed"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                title="G M Machinery Store Location"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-foreground">Phone</div>
                      <div className="text-muted-foreground">+91-XXXX-XXXXXX</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-foreground">Email</div>
                      <div className="text-muted-foreground">info@gmmachinery.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-foreground">Location</div>
                      <div className="text-muted-foreground">
                        Industrial Area, Andheri East, Mumbai, Maharashtra 400093, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-card border-border shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Business Hours</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
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
