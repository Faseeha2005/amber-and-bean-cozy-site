import { Link } from "react-router-dom";
import { ArrowRight, Star, Coffee, Heart, Leaf } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const featuredDrinks = [
  { name: "Golden Amber Latte", description: "Turmeric-infused latte with oat milk and a touch of honey", price: "₹449" },
  { name: "Classic Espresso", description: "Rich, bold double shot pulled from our signature blend", price: "₹279" },
  { name: "Iced Vanilla Cold Brew", description: "24-hour steeped cold brew with house-made vanilla syrup", price: "₹399" },
  { name: "Mocha Cappuccino", description: "Velvety cappuccino with Belgian dark chocolate", price: "₹469" },
];

const testimonials = [
  { name: "Sarah M.", text: "The best coffee I've ever had. The amber latte is absolutely divine!", rating: 5 },
  { name: "James K.", text: "Such a cozy atmosphere. It truly feels like a second home.", rating: 5 },
  { name: "Priya L.", text: "Their ethically sourced beans make every sip guilt-free and delicious.", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCoffee} alt="Amber & Bean coffee" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/50 to-coffee/80" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="font-body text-sm uppercase tracking-[0.3em] text-warm-amber/90 border border-warm-amber/30 px-5 py-2 rounded-full backdrop-blur-sm">
              Est. 2018 · Chennai
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-cream mb-6 animate-fade-in leading-[0.95]">
            Amber <span className="italic text-warm-amber">&</span> Bean
          </h1>
          <div className="w-24 h-[2px] bg-warm-amber mx-auto mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }} />
          <p className="font-display text-xl md:text-2xl text-cream/85 mb-12 animate-fade-in italic font-light tracking-wide" style={{ animationDelay: "0.2s" }}>
            Where Every Cup Feels Like Home
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 bg-warm-amber/90 backdrop-blur-sm text-coffee font-body font-semibold px-10 py-4 rounded-full hover:bg-warm-amber transition-all duration-300 shadow-warm-lg animate-fade-in tracking-wide uppercase text-sm"
            style={{ animationDelay: "0.4s" }}
          >
            View Our Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Crafted with <span className="text-primary">Passion</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                At Amber & Bean, we believe that great coffee starts with ethically sourced beans, 
                careful roasting, and a community that feels like family. Every cup is a love letter 
                to the art of coffee making.
              </p>
              <div className="flex gap-8 pt-4">
                {[
                  { icon: Coffee, label: "Artisan Roasted" },
                  { icon: Heart, label: "Made with Love" },
                  { icon: Leaf, label: "Ethically Sourced" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-body font-medium text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-warm-lg">
              <img src={cafeInterior} alt="Amber & Bean café interior" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center text-foreground mb-4">
            Featured <span className="text-primary">Drinks</span>
          </h2>
          <p className="text-center text-muted-foreground font-body mb-14 max-w-lg mx-auto">
            Hand-picked favorites from our menu, crafted to perfection every day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDrinks.map((drink) => (
              <div
                key={drink.name}
                className="bg-background rounded-xl p-6 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 border border-border/50"
              >
                <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center mb-4">
                  <Coffee className="h-5 w-5 text-cream" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{drink.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{drink.description}</p>
                <span className="font-display text-xl font-bold text-primary">{drink.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center text-foreground mb-14">
            What Our <span className="text-primary">Guests</span> Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-xl p-8 shadow-warm border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warm-amber text-warm-amber" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
