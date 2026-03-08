import cafeInterior from "@/assets/cafe-interior.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import barista from "@/assets/barista.jpg";
import { Heart, Globe, Award, Leaf } from "lucide-react";

const values = [
  { icon: Heart, title: "Community First", description: "We're more than a coffee shop — we're a gathering place for neighbors, friends, and dreamers." },
  { icon: Globe, title: "Ethically Sourced", description: "Every bean is traced back to sustainable farms that treat their workers and land with respect." },
  { icon: Award, title: "Quality Obsessed", description: "From roasting profiles to pour techniques, we never settle for anything less than extraordinary." },
  { icon: Leaf, title: "Eco-Conscious", description: "Compostable cups, zero-waste goals, and a deep commitment to the planet we share." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={cafeInterior} alt="Amber & Bean interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-coffee/70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-4">Our Story</h1>
          <p className="font-body text-xl text-cream/80 max-w-2xl mx-auto">
            Born from a love of great coffee and warm conversations
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-bold text-foreground">
                The <span className="text-primary">Beginning</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Amber & Bean was born in 2018 when two lifelong friends — a former roaster and a pastry chef — 
                decided Portland needed a coffee shop that felt like your best friend's kitchen. A place where 
                the aroma of freshly ground beans mingles with the warmth of genuine connection.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                What started as a tiny corner shop has grown into a beloved neighborhood staple, 
                but our mission has never changed: serve exceptional coffee in a space that makes 
                everyone feel at home.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-warm-lg">
              <img src={barista} alt="Our barista at work" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center text-foreground mb-14">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-background rounded-xl p-8 text-center shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 border border-border/50">
                <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center mx-auto mb-5">
                  <v.icon className="h-6 w-6 text-cream" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-warm-lg order-2 md:order-1">
              <img src={coffeeBeans} alt="Our ethically sourced coffee beans" className="w-full h-96 object-cover" />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Our <span className="text-primary">Beans</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                We partner directly with small-scale farmers in Colombia, Ethiopia, and Guatemala. 
                Every batch is roasted in-house in small quantities to ensure peak flavor and freshness.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Our single-origin selections rotate seasonally, so there's always something new 
                to discover in your cup.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
