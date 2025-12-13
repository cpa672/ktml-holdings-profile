import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ShieldCheck,
  DollarSign,
  BarChart2,
  MessageSquareReply,
  Radar,
  Landmark,
  SlidersHorizontal,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import logo from "@/assets/Logo.png";

const Index = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex flex-col overflow-hidden">
        {/* Client Login Button */}
        <div className="bg-background pt-2 md:pt-3 px-4 md:px-6">
          <div className="container mx-auto flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground text-xs"
              onClick={() => {
                setLoginOpen(true);
                setShowError(false);
              }}
            >
              <LogIn className="w-3 h-3 mr-1" />
              Client Login
            </Button>
          </div>
        </div>

        {/* Login Dialog */}
        <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
          <DialogContent className="sm:max-w-md top-[20%] translate-y-0">
            <DialogHeader>
              <DialogTitle>Client Login</DialogTitle>
              <DialogDescription>Enter your credentials to access your account.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>
              {showError && (
                <p className="text-sm text-destructive">Account not found or password mismatch. Please try again.</p>
              )}
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Logo Area - White Background */}
        <div className="bg-background py-2 md:py-3">
          <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in">
            <div className="max-w-sm mx-auto">
              <img src={logo} alt="KTML Holdings - E-commerce & Retail Partnership" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Tagline Area - Solid Navy Background */}
        <div className="bg-primary py-10 md:py-14 flex items-center">
          <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-delay">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground/95 max-w-5xl mx-auto font-light leading-relaxed lg:whitespace-nowrap">
              Specialized Risk Transfer Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-6 md:p-12 shadow-[var(--shadow-elegant)] border-border/50 animate-fade-in-delay">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              KTML Holdings is a boutique risk consultancy based in Santa Monica. We bridge the gap between operational
              logistics reality and global insurance capital. Focusing exclusively on non-damage business interruption
              (NDBI), we design parametric liquidity facilities that allow mid-market and enterprise shippers to hedge
              against critical chokepoint delays.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Strength 1 */}
            <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50">
              <div className="flex flex-col items-center text-center">
                <Radar className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-foreground h-14 flex items-center justify-center">
                  Parametric Architecture
                </h3>
                <p className="text-muted-foreground">
                  Designing binary triggers based on indisputable third-party data sources to eliminate claims friction.
                </p>
              </div>
            </Card>

            {/* Strength 2 */}
            <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50">
              <div className="flex flex-col items-center text-center">
                <Landmark className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-foreground h-14 flex items-center justify-center">
                  Capital Structuring
                </h3>
                <p className="text-muted-foreground">
                  Interfacing with London Market and Bermuda capacity providers to secure rated backing for novel supply
                  chain risks that traditional indemnity markets exclude.
                </p>
              </div>
            </Card>

            {/* Strength 3 */}
            <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-border/50">
              <div className="flex flex-col items-center text-center">
                <SlidersHorizontal className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-foreground h-14 flex items-center justify-center">
                  Basis Risk Optimization
                </h3>
                <p className="text-muted-foreground">
                  Calibrating payout quantums against actual operational costs to minimize the gap between trigger
                  events and balance sheet impact.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section - Simplified */}
      <section className="py-16 md:py-24 bg-secondary/20 mt-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Inquiries</h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:partnerships@ktmlholdings.com" className="hover:text-foreground transition-colors">
                partnerships@ktmlholdings.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Santa Monica, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t border-border/40">
        <div className="container mx-auto text-center text-muted-foreground/60 text-xs">
          <p>© {new Date().getFullYear()} KTML Holdings LLC. All rights reserved. Private & Confidential.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
