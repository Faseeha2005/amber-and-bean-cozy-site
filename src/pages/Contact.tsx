import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-dark text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-4">Get in Touch</h1>
        <p className="font-body text-lg text-cream/80">We'd love to hear from you</p>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
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
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 gradient-warm text-cream font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-all duration-300 shadow-warm"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                  Visit <span className="text-primary">Us</span>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5!2d-122.6765!3d45.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzIzLjIiTiAxMjLCsDQwJzM1LjQiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
