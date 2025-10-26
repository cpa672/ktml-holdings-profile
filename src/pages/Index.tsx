import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import logo from "@/assets/Logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex flex-col overflow-hidden">
        {/* Logo Area - White Background */}
        <div className="bg-background py-2 md:py-3">
          <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in">
            <div className="max-w-lg mx-auto">
              <img 
                src={logo} 
                alt="KTML Holdings - E-commerce & Retail Partnership" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Tagline Area - Solid Navy Background */}
        <div className="bg-primary py-10 md:py-14 flex items-center">
          <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-delay">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground/95 max-w-5xl mx-auto font-light leading-relaxed lg:whitespace-nowrap">
              E-commerce & Retail Partnership for Premium Brands
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-6 md:p-12 shadow-[var(--shadow-elegant)] border-border/50 animate-fade-in-delay">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              KTML Holdings is a multi-channel retail group based in Santa Monica, CA. 
              We partner with premium brands to protect online presence, expand authorized 
              distribution, and enforce MAP policies — enabling controlled growth and 
              consistent brand representation across marketplaces.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground">
            Get in Touch
          </h2>
          
          <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Email</h3>
                    <a 
                      href="mailto:partnerships@ktmlholdings.com" 
                      className="text-muted-foreground hover:text-accent transition-colors break-words"
                    >
                      partnerships@ktmlholdings.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Phone</h3>
                    <a 
                      href="tel:+13232839499" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      (323) 283-9499
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Address</h3>
                  <address className="text-muted-foreground not-italic">
                    KTML Holdings LLC<br />
                    2801 Ocean Park Blvd<br />
                    Unit #2370<br />
                    Santa Monica, CA 90405
                  </address>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full md:w-auto"
              asChild
            >
              <a href="mailto:partnerships@ktmlholdings.com">
                Contact Partnerships
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} KTML Holdings LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
