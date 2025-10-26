import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import logoPlaceholder from "@/assets/logo-placeholder.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <img 
            src={logoPlaceholder} 
            alt="KTML Holdings Logo" 
            className="w-24 h-24 mx-auto mb-8 object-contain"
          />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            KTML Holdings
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-4xl mx-auto font-light">
            E-commerce & Retail Partnership for Premium Brands
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 shadow-[var(--shadow-elegant)] border-border/50 animate-fade-in-delay">
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
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-[var(--shadow-elegant)] border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Email</h3>
                  <a 
                    href="mailto:partnerships@ktmlholdings.com" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    partnerships@ktmlholdings.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-[var(--shadow-elegant)] border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-accent mt-1" />
                <div>
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

          <Card className="p-8 shadow-[var(--shadow-elegant)] border-border/50 mb-12">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-accent mt-1" />
              <div>
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

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
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
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} KTML Holdings LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
