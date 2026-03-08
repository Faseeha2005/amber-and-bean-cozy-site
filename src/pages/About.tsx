import { motion } from "framer-motion";
import cafeInterior from "@/assets/cafe-interior.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import barista from "@/assets/barista.jpg";
import { Heart, Globe, Award, Leaf } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

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
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={cafeInterior} alt="Amber & Bean interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-coffee/75" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-4">Our Story</h1>
          <p className="font-body text-xl text-cream/80 max-w-2xl mx-auto">
            Born from a love of great coffee and warm conversations
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl md:text-5xl font-bold text-foreground">
                The <span className="text-gradient-warm">Beginning</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="font-body text-muted-foreground leading-relaxed text-lg">
                Amber & Bean was born in 2018 when two lifelong friends — a former roaster and a pastry chef —
                decided Chennai needed a coffee shop that felt like your best friend's kitchen.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground leading-relaxed text-lg">
                What started as a tiny corner shop in T. Nagar has grown into a beloved neighborhood staple,
                but our mission has never changed: serve exceptional coffee in a space that makes everyone feel at home.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-warm-lg group"
            >
              <img src={barista} alt="Our barista at work" className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
          >
            Our <span className="text-gradient-warm">Values</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-background rounded-xl p-8 text-center shadow-warm hover:shadow-warm-lg transition-all duration-300 border border-border/50"
              >
                <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                  <v.icon className="h-6 w-6 text-cream" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-warm-lg order-2 md:order-1 group"
            >
              <img src={coffeeBeans} alt="Our ethically sourced coffee beans" className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            <motion.div
              className="space-y-6 order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="text-gradient-warm">Beans</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="font-body text-muted-foreground leading-relaxed text-lg">
                We partner directly with small-scale farmers in Colombia, Ethiopia, and Guatemala.
                Every batch is roasted in-house in small quantities to ensure peak flavor and freshness.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground leading-relaxed text-lg">
                Our single-origin selections rotate seasonally, so there's always something new
                to discover in your cup.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
