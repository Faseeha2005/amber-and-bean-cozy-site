import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden gradient-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full border border-warm-amber" />
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full border border-cream" />
        </div>
        <div className="relative z-10 text-center container mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block font-body text-xs uppercase tracking-[0.4em] text-warm-amber/90 mb-6"
          >
            ✦ &nbsp;We'd Love to Hear From You&nbsp; ✦
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl font-bold text-cream mb-5"
          >
            Get in Touch
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
            className="font-display text-xl text-cream/80 italic font-light tracking-wide"
          >
            Drop by or send us a message
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              <div>
                <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">Write to Us</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
                  Send Us a <span className="text-gradient-warm">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { label: "Name", type: "text", key: "name" as const, placeholder: "Your name" },
                    { label: "Email", type: "email", key: "email" as const, placeholder: "your@email.com" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="font-body text-sm font-medium text-foreground mb-2 block">{field.label}</label>
                      <input
                        type={field.type}
                        required
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body text-foreground"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body text-foreground resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 gradient-warm text-cream font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-all duration-300 shadow-warm"
                  >
                    Send Message <Send className="h-4 w-4" />
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right">
              <div className="space-y-10">
                <div>
                  <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">Location</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
                    Visit <span className="text-gradient-warm">Us</span>
                  </h2>
                  <div className="space-y-5">
                    {[
                      { icon: MapPin, label: "Address", value: "12 Northcar Street, T. Nagar, Chennai 600017" },
                      { icon: Phone, label: "Phone", value: "(503) 555-0127" },
                      { icon: Mail, label: "Email", value: "hello@amberandbean.com" },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-body text-sm font-medium text-foreground">{label}</p>
                          <p className="font-body text-muted-foreground">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">Opening Hours</p>
                    </div>
                  </div>
                  <div className="ml-14 font-body text-muted-foreground space-y-1">
                    <p>Monday - Friday: 6:30 AM - 8:00 PM</p>
                    <p>Saturday: 7:00 AM - 9:00 PM</p>
                    <p>Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-warm border border-border/50">
                  <iframe
                    title="Amber & Bean location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d80.2337!3d13.0382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzE3LjUiTiA4MMKwMTQnMDEuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Subscribe */}
                <div className="rounded-xl bg-card border border-border/50 p-6 shadow-warm">
                  <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">Stay Updated</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">
                    Seasonal <span className="text-gradient-warm">Offers</span>
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Subscribe to receive exclusive seasonal drinks, limited-time deals, and event invites.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const input = e.currentTarget.elements.namedItem("subscribe-email") as HTMLInputElement;
                      if (input?.value) {
                        toast.success("Subscribed! You'll hear from us soon ☕");
                        input.value = "";
                      }
                    }}
                    className="flex gap-2"
                  >
                    <input
                      name="subscribe-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body text-sm text-foreground"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="gradient-warm text-cream font-body font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-all duration-300 shadow-warm text-sm whitespace-nowrap"
                    >
                      Subscribe
                    </motion.button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
