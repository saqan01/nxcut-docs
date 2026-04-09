import Link from 'next/link';
import { BookOpen, Calendar, Printer, Shield, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col h-[calc(100vh-var(--fd-nav-height))] items-center justify-center bg-background text-foreground p-6 overflow-hidden relative">
      <div className="max-w-4xl w-full space-y-12 z-10">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Comprehensive POS <br className="hidden md:block" /> Powering Modern Salons
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A secure, on-premise solution designed for the Middle Eastern market. 
            Manage your entire salon business from one seamless interface.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureItem 
            icon={<Calendar className="w-5 h-5" />}
            title="Intuitive Booking"
            description="Smart and simple scheduling and appointment booking."
          />
          <FeatureItem 
            icon={<Printer className="w-5 h-5" />}
            title="Billing & Printing"
            description="Fast checkout with multi-format (A4, 80mm) receipt support."
          />
          <FeatureItem 
            icon={<ShoppingBag className="w-5 h-5" />}
            title="Inventory Management"
            description="Real-time stock tracking and intelligent restock forecasting."
          />
          <FeatureItem 
            icon={<Shield className="w-5 h-5" />}
            title="Local Compliance"
            description="Fully localized for UAE, Qatar, and Saudi Arabia standards."
          />
        </div>

        {/* CTA Section */}
        <div className="flex justify-center pt-4">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            Explore Documentation
          </Link>
        </div>
      </div>
      
      {/* Decorative Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
    </main>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl border bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/30 text-left">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
