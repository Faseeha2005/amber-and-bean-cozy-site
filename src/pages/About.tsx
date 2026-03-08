import { motion } from "framer-motion";
import cafeInterior from "@/assets/cafe-interior.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import barista from "@/assets/barista.jpg";
import { Heart, Globe, Award, Leaf } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
      <section className="relative py-32 md:py-40 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={cafeInterior} alt="Amber & Bean interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee/80 via-coffee/60 to-coffee/90" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block font-body text-xs uppercase tracking-[0.4em] text-warm-amber/90 mb-6"
          >
            ✦ &nbsp;Since 2018&nbsp; ✦
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl font-bold text-cream mb-5"
          >
            Our Story
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-warm-amber to-transparent mx-auto mb-5"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-display text-xl text-cream/80 max-w-2xl mx-auto italic font-light tracking-wide"
          >
            Born from a love of great coffee and warm conversations
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">How It Started</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  The <span className="text-gradient-warm">Beginning</span>
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed text-lg">
                  Amber & Bean was born in 2018 when two lifelong friends — a former roaster and a pastry chef —
                  decided Chennai needed a coffee shop that felt like your best friend's kitchen. A place where
                  the aroma of freshly ground beans mingles with the warmth of genuine connection.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed text-lg">
                  What started as a tiny corner shop in T. Nagar has grown into a beloved neighborhood staple,
                  but our mission has never changed: serve exceptional coffee in a space that makes
                  everyone feel at home.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-warm-lg">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  src={barista}
                  alt="Our barista at work"
                  className="w-full h-96 object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">What We Believe</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
                Our <span className="text-gradient-warm">Values</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background rounded-xl p-8 text-center shadow-warm hover:shadow-warm-lg transition-all duration-300 border border-border/50 h-full"
                >
                  <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center mx-auto mb-5">
                    <v.icon className="h-6 w-6 text-cream" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-warm-lg order-2 md:order-1">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  src={coffeeBeans}
                  alt="Our ethically sourced coffee beans"
                  className="w-full h-96 object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-6 order-1 md:order-2">
                <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">Farm to Cup</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Our <span className="text-gradient-warm">Beans</span>
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
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
