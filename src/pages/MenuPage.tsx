import { useState } from "react";
import { Coffee } from "lucide-react";

type MenuItem = { name: string; description: string; price: string };

const menuData: Record<string, MenuItem[]> = {
  Espresso: [
    { name: "Single Espresso", description: "A bold, concentrated shot of our signature blend", price: "₹249" },
    { name: "Double Espresso", description: "Two shots for the true coffee enthusiast", price: "₹279" },
    { name: "Americano", description: "Espresso lengthened with hot water for a smooth finish", price: "₹299" },
    { name: "Macchiato", description: "Espresso marked with a dollop of velvety foam", price: "₹329" },
  ],
  Cappuccino: [
    { name: "Classic Cappuccino", description: "Equal parts espresso, steamed milk, and silky foam", price: "₹369" },
    { name: "Mocha Cappuccino", description: "Rich Belgian chocolate meets espresso perfection", price: "₹469" },
    { name: "Dry Cappuccino", description: "Extra foam for a lighter, airy experience", price: "₹369" },
  ],
  Latte: [
    { name: "Golden Amber Latte", description: "Turmeric-infused with oat milk and honey", price: "₹449" },
    { name: "Vanilla Bean Latte", description: "House-made vanilla syrup with silky steamed milk", price: "₹429" },
    { name: "Lavender Latte", description: "Delicate floral notes with a creamy finish", price: "₹449" },
    { name: "Matcha Latte", description: "Ceremonial-grade matcha whisked to perfection", price: "₹469" },
  ],
  "Cold Brew": [
    { name: "Classic Cold Brew", description: "24-hour steeped for a smooth, bold flavor", price: "₹369" },
    { name: "Iced Vanilla Cold Brew", description: "Cold brew with house-made vanilla and cream", price: "₹399" },
    { name: "Nitro Cold Brew", description: "Infused with nitrogen for a creamy, cascading pour", price: "₹449" },
  ],
  "Special Drinks": [
    { name: "Amber Sunset", description: "Espresso, caramel, orange zest, and oat milk", price: "₹499" },
    { name: "Spiced Chai Latte", description: "House-blended chai spices with steamed milk", price: "₹429" },
    { name: "Hot Chocolate", description: "Rich dark chocolate with whipped cream", price: "₹369" },
  ],
  Pastries: [
    { name: "Butter Croissant", description: "Flaky, golden, and baked fresh every morning", price: "₹279" },
    { name: "Almond Danish", description: "Tender pastry with almond cream and sliced almonds", price: "₹329" },
    { name: "Blueberry Muffin", description: "Bursting with wild blueberries and a crumb top", price: "₹299" },
    { name: "Banana Bread", description: "Moist, spiced, and made with real bananas", price: "₹279" },
  ],
};

const categories = Object.keys(menuData);

const MenuPage = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-dark text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-4">Our Menu</h1>
        <p className="font-body text-lg text-cream/80">Handcrafted beverages & fresh pastries</p>
      </section>

      {/* Category Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                  active === cat
                    ? "gradient-warm text-cream shadow-warm"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {menuData[active].map((item) => (
              <div
                key={item.name}
                className="bg-card rounded-xl p-6 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 border border-border/50 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {item.name}
                  </h3>
                  <span className="font-display text-lg font-bold text-primary shrink-0 ml-4">{item.price}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
