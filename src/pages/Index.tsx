import { Mail, Phone, MapPin, Globe, ShieldCheck, DollarSign } from "lucide-react";
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
      <section className="py-16 md:py-24">
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

      {/* Core Strengths Section */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground">
            Our Partnership Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Strength 1 */}
            <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50">
              <div className="flex flex-col items-center text-center">
                <Globe className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-foreground">
                  Multi-Channel Expertise
                </h3>
                <p className="text-muted-foreground">
                  We specialize in marketplace and e-commerce distribution, 
                  ensuring your brand reaches its target audience effectively.
                </p>
              </div>
            </Card>
            
            {/* Strength 2 */}
            <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-foreground">
                  Brand Integrity
                </h3>
                <p className="text-muted-foreground">
                  We are committed to protecting your brand with strict 
                  MAP policy enforcement and listing optimization.
                </p>
              </div>
            </Card>
            
            {/* Strength 3 */}
            <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50">
              <div className="flex flex-col items-center text-center">
                <DollarSign className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-foreground">
                  Financial Partnership
                </h3>
                <p className="text-muted-foreground">
                  As a well-capitalized retail group, we ensure prompt 
                  payments and build long-term, reliable partnerships.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
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

            <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50 hover:shadow-lg transition-shadow duration-300 md:col-span-2">
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
