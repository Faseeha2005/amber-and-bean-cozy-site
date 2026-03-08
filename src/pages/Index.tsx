import { Link } from "react-router-dom";
import { ArrowRight, Star, Coffee, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import heroCoffee from "@/assets/hero-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import ScrollReveal from "@/components/ScrollReveal";

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
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={heroCoffee} alt="Amber & Bean coffee" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee/80 via-coffee/50 to-coffee/90" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block mb-8"
          >
            <span className="font-body text-xs uppercase tracking-[0.4em] text-warm-amber border border-warm-amber/40 px-6 py-2.5 rounded-full backdrop-blur-md bg-coffee/20">
              ✦ &nbsp;Est. 2018 · Chennai&nbsp; ✦
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-7xl md:text-9xl font-bold text-cream mb-4 leading-[0.9]"
          >
            Amber <span className="italic text-warm-amber font-light">&</span> Bean
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-warm-amber to-transparent mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="font-display text-xl md:text-2xl text-cream/80 mb-14 italic font-light tracking-wider"
          >
            Where Every Cup Feels Like Home
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 bg-warm-amber/90 backdrop-blur-sm text-coffee font-body font-semibold px-10 py-4 rounded-full hover:bg-warm-amber transition-all duration-500 shadow-warm-lg tracking-wider uppercase text-xs"
            >
              View Our Menu
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/4 left-10 w-40 h-40 rounded-full border border-warm-amber"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2, delay: 1.3 }}
          className="absolute bottom-1/3 right-16 w-64 h-64 rounded-full border border-cream"
        />
      </section>

      {/* Intro */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">Our Philosophy</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Crafted with <span className="text-gradient-warm">Passion</span>
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
                  ].map(({ icon: Icon, label }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs font-body font-medium text-muted-foreground">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-warm-lg">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  src={cafeInterior}
                  alt="Amber & Bean café interior"
                  className="w-full h-80 object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">Signature Selection</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Featured <span className="text-gradient-warm">Drinks</span>
              </h2>
              <div className="w-16 h-[1px] bg-primary/40 mx-auto mb-4" />
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                Hand-picked favorites from our menu, crafted to perfection every day.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDrinks.map((drink, i) => (
              <ScrollReveal key={drink.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 border border-border/50 h-full"
                >
                  <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center mb-4">
                    <Coffee className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{drink.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{drink.description}</p>
                  <span className="font-display text-xl font-bold text-primary">{drink.price}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">Testimonials</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
                What Our <span className="text-gradient-warm">Guests</span> Say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-xl p-8 shadow-warm border border-border/50 h-full"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-warm-amber text-warm-amber" />
                    ))}
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full gradient-warm flex items-center justify-center">
                      <span className="text-cream text-xs font-bold">{t.name[0]}</span>
                    </div>
                    <p className="font-display font-semibold text-foreground">{t.name}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
