import { useState } from "react";
import { Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import menuEspresso from "@/assets/menu-espresso.jpg";
import menuCappuccino from "@/assets/menu-cappuccino.jpg";
import menuLatte from "@/assets/menu-latte.jpg";
import menuColdbrew from "@/assets/menu-coldbrew.jpg";
import menuSpecial from "@/assets/menu-special.jpg";
import menuPastries from "@/assets/menu-pastries.jpg";

type MenuItem = { name: string; description: string; price: string };

const menuData: Record<string, { items: MenuItem[]; image: string }> = {
  Espresso: {
    image: menuEspresso,
    items: [
      { name: "Single Espresso", description: "A bold, concentrated shot of our signature blend", price: "₹249" },
      { name: "Double Espresso", description: "Two shots for the true coffee enthusiast", price: "₹279" },
      { name: "Americano", description: "Espresso lengthened with hot water for a smooth finish", price: "₹299" },
      { name: "Macchiato", description: "Espresso marked with a dollop of velvety foam", price: "₹329" },
    ],
  },
  Cappuccino: {
    image: menuCappuccino,
    items: [
      { name: "Classic Cappuccino", description: "Equal parts espresso, steamed milk, and silky foam", price: "₹369" },
      { name: "Mocha Cappuccino", description: "Rich Belgian chocolate meets espresso perfection", price: "₹469" },
      { name: "Dry Cappuccino", description: "Extra foam for a lighter, airy experience", price: "₹369" },
    ],
  },
  Latte: {
    image: menuLatte,
    items: [
      { name: "Golden Amber Latte", description: "Turmeric-infused with oat milk and honey", price: "₹449" },
      { name: "Vanilla Bean Latte", description: "House-made vanilla syrup with silky steamed milk", price: "₹429" },
      { name: "Lavender Latte", description: "Delicate floral notes with a creamy finish", price: "₹449" },
      { name: "Matcha Latte", description: "Ceremonial-grade matcha whisked to perfection", price: "₹469" },
    ],
  },
  "Cold Brew": {
    image: menuColdbrew,
    items: [
      { name: "Classic Cold Brew", description: "24-hour steeped for a smooth, bold flavor", price: "₹369" },
      { name: "Iced Vanilla Cold Brew", description: "Cold brew with house-made vanilla and cream", price: "₹399" },
      { name: "Nitro Cold Brew", description: "Infused with nitrogen for a creamy, cascading pour", price: "₹449" },
    ],
  },
  "Special Drinks": {
    image: menuSpecial,
    items: [
      { name: "Amber Sunset", description: "Espresso, caramel, orange zest, and oat milk", price: "₹499" },
      { name: "Spiced Chai Latte", description: "House-blended chai spices with steamed milk", price: "₹429" },
      { name: "Hot Chocolate", description: "Rich dark chocolate with whipped cream", price: "₹369" },
    ],
  },
  Pastries: {
    image: menuPastries,
    items: [
      { name: "Butter Croissant", description: "Flaky, golden, and baked fresh every morning", price: "₹279" },
      { name: "Almond Danish", description: "Tender pastry with almond cream and sliced almonds", price: "₹329" },
      { name: "Blueberry Muffin", description: "Bursting with wild blueberries and a crumb top", price: "₹299" },
      { name: "Banana Bread", description: "Moist, spiced, and made with real bananas", price: "₹279" },
    ],
  },
};

const categories = Object.keys(menuData);

const MenuPage = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-dark text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-4">Our Menu</h1>
          <p className="font-body text-lg text-cream/70">Handcrafted beverages & fresh pastries</p>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                  active === cat
                    ? "gradient-warm text-cream shadow-warm-lg"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Category Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto mb-12"
            >
              <div className="rounded-2xl overflow-hidden shadow-warm-lg h-64 relative">
                <img
                  src={menuData[active].image}
                  alt={active}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/60 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <h2 className="font-display text-3xl font-bold text-cream">{active}</h2>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {menuData[active].items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 border border-border/50 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.name}
                    </h3>
                    <span className="font-display text-lg font-bold text-primary shrink-0 ml-4">{item.price}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
