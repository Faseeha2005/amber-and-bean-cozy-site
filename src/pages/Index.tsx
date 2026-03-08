import { Link } from "react-router-dom";
import { ArrowRight, Star, Coffee, Heart, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroCoffee from "@/assets/hero-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

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
          <motion.img
            src={heroCoffee}
            alt="Amber & Bean coffee"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee/80 via-coffee/50 to-coffee/90" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-warm-amber/30"
              style={{ left: `${15 + i * 15}%`, top: `${20 + i * 10}%` }}
              animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="font-body text-xs uppercase tracking-[0.35em] text-warm-amber/90 border border-warm-amber/30 px-6 py-2.5 rounded-full backdrop-blur-md bg-warm-amber/5">
              <Sparkles className="inline h-3.5 w-3.5 mr-2 -mt-0.5" />
              Est. 2018 · Chennai
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-cream mb-6 leading-[0.9]"
          >
            Amber{" "}
            <span className="italic text-warm-amber relative">
              &
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-warm-amber/40 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>{" "}
            Bean
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-warm-amber to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-display text-xl md:text-2xl lg:text-3xl text-cream/80 mb-14 italic font-light tracking-wider"
          >
            Where Every Cup Feels Like Home
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 bg-warm-amber text-coffee font-body font-semibold px-12 py-4.5 rounded-full hover:bg-warm-amber-glow transition-all duration-500 shadow-warm-lg tracking-wide uppercase text-sm hover:shadow-[0_20px_60px_-12px_hsl(38_90%_55%_/_0.5)] hover:-translate-y-0.5"
            >
              View Our Menu
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Intro */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Crafted with <span className="text-gradient-warm">Passion</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="font-body text-muted-foreground leading-relaxed text-lg">
                At Amber & Bean, we believe that great coffee starts with ethically sourced beans,
                careful roasting, and a community that feels like family. Every cup is a love letter
                to the art of coffee making.
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="flex gap-8 pt-4">
                {[
                  { icon: Coffee, label: "Artisan Roasted" },
                  { icon: Heart, label: "Made with Love" },
                  { icon: Leaf, label: "Ethically Sourced" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 text-center group">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-body font-medium text-muted-foreground">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-warm-lg group"
            >
              <img
                src={cafeInterior}
                alt="Amber & Bean café interior"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient-warm">Drinks</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground font-body max-w-lg mx-auto text-lg">
              Hand-picked favorites from our menu, crafted to perfection every day.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDrinks.map((drink, i) => (
              <motion.div
                key={drink.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-background rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 border border-border/50 group"
              >
                <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Coffee className="h-5 w-5 text-cream" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{drink.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{drink.description}</p>
                <span className="font-display text-xl font-bold text-primary">{drink.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
          >
            What Our <span className="text-gradient-warm">Guests</span> Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-8 shadow-warm border border-border/50 hover:shadow-warm-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-warm-amber text-warm-amber" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6 italic text-lg">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center text-cream font-display font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
