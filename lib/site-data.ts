export const business = {
  name: "Shi Foo",
  tagline: "Fresh Chinese Food, Made Your Way",
  city: "Chino Hills",
  address: {
    line1: "15942 Los Serranos Country Club Dr",
    line2: "Chino Hills, CA 91709",
  },
  phone: "(909) 786-1542",
  phoneHref: "tel:+19097861542",
  email: null as string | null,
  yelpUrl: "https://www.yelp.com/biz/shi-foo-chino-hills",
  orderUrl: "https://shifoo.netwaiter.com/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shi+Foo+15942+Los+Serranos+Country+Club+Dr+Chino+Hills+CA+91709",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Shi+Foo,+15942+Los+Serranos+Country+Club+Dr,+Chino+Hills,+CA+91709&output=embed",
  hours: [
    { day: "Monday", time: "11:00 AM – 8:30 PM" },
    { day: "Tuesday", time: "11:00 AM – 8:30 PM" },
    { day: "Wednesday", time: "11:00 AM – 8:30 PM" },
    { day: "Thursday", time: "11:00 AM – 8:30 PM" },
    { day: "Friday", time: "11:00 AM – 8:30 PM" },
    { day: "Saturday", time: "11:00 AM – 8:30 PM" },
    { day: "Sunday", time: "11:00 AM – 8:00 PM" },
  ],
  rating: {
    yelp: { score: 4.1, count: 559 },
  },
};

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  tag?: "Popular" | "Gluten-Free" | "Vegetarian";
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Egg Rolls", price: "$0.76", description: "Each" },
      { name: "Crispy Shrimp", price: "$1.75", description: "2 pieces" },
      { name: "Cream Cheese Wontons", price: "$1.95", description: "3 pieces" },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    items: [
      { name: "Mixed Veggies Soup", price: "$5.50", tag: "Vegetarian" },
      { name: "Egg Flower Soup", price: "$6.50" },
      { name: "Tofu Veggie Soup", price: "$6.50", tag: "Vegetarian" },
      { name: "Combo Noodle Soup", price: "$6.50" },
      { name: "Combination Soup", price: "$7.50" },
    ],
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    items: [
      { name: "Chicken Fried Rice", price: "$7.95" },
      { name: "Beef Fried Rice", price: "$7.95" },
      { name: "House Special Fried Rice", price: "$7.95", tag: "Popular" },
      { name: "BBQ Pork Fried Rice", price: "$8.95", tag: "Popular" },
    ],
  },
  {
    id: "chow-mein",
    title: "Chow Mein",
    items: [
      { name: "Chicken Chow Mein", price: "$8.50" },
      { name: "Beef Chow Mein", price: "$8.50" },
      { name: "Shrimp Chow Mein", price: "$8.95" },
      { name: "House Special Chow Mein", price: "$9.50", tag: "Popular" },
    ],
  },
  {
    id: "noodles",
    title: "Create Your Own Noodles",
    items: [
      { name: "Chicken Noodles", price: "$8.50" },
      { name: "Beef Noodles", price: "$8.50" },
      { name: "Shrimp Noodles", price: "$8.95" },
      { name: "Fish Noodles", price: "$8.95" },
      { name: "House Special Trio Noodles", price: "$8.95", tag: "Popular" },
    ],
  },
  {
    id: "meat-entrees",
    title: "Stir-Fry Entrees",
    items: [
      {
        name: "Chicken with Mixed Veggies",
        price: "$7.95",
      },
      { name: "Beef with Mixed Veggies", price: "$8.50" },
      { name: "Shrimp with Mixed Veggies", price: "$9.50" },
      { name: "Shrimp Broccoli", price: "$9.50" },
      { name: "Shrimp with Lobster Sauce", price: "$10.50" },
      { name: "Fish Entree", price: "$8.95" },
      { name: "Shrimp Entree", price: "$10.50" },
    ],
  },
  {
    id: "buffet-style",
    title: "Steam Table, Buffet Style",
    items: [
      { name: "Bowl", price: "$5.75", description: "Rice or noodles, 1 entree" },
      { name: "Combo #2", price: "$6.95", description: "Rice or noodles, 2 entrees" },
      { name: "Combo #3", price: "$7.95", description: "Rice or noodles, 3 entrees" },
    ],
  },
  {
    id: "gluten-free",
    title: "Gluten-Free Entrees",
    items: [
      {
        name: "Gluten-Free Menu",
        price: "$9.95 – $13.50",
        description:
          "Made-to-order GF versions of popular dishes, including Orange Chicken, cooked with non-GMO oils.",
        tag: "Gluten-Free",
      },
    ],
  },
  {
    id: "party-trays",
    title: "Party Trays",
    items: [
      {
        name: "Party Trays",
        price: "$7.95 – $69.95+",
        description: "Feeds a crowd — call ahead for catering orders.",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { name: "Bottled Water", price: "$1.00" },
      { name: "Coke (bottle)", price: "$2.25" },
      { name: "Thai Iced Tea", price: "$2.50" },
      { name: "Milk Tea", price: "$5.50" },
    ],
  },
];

export type FanFavorite = {
  name: string;
  price?: string;
  description: string;
  tag: string;
  image: string;
};

export const fanFavorites: FanFavorite[] = [
  {
    name: "Orange Chicken",
    description:
      "The dish regulars ask for by name — crispy, sweet-and-savory, and available made gluten-free with non-GMO oils.",
    tag: "Gluten-Free Available",
    image: "/images/orange-chicken.jpg",
  },
  {
    name: "BBQ Pork Fried Rice",
    price: "$8.95",
    description: "A steam-table staple — reviewers add shrimp for a couple bucks more and call it their favorite.",
    tag: "Popular",
    image: "/images/bbq-pork-fried-rice.jpg",
  },
  {
    name: "Mongolian Beef",
    description: "Cook-to-order specialty, hot off the wok — the dish regulars specifically wait for.",
    tag: "Cook-to-Order",
    image: "/images/mongolian-beef.jpg",
  },
  {
    name: "Walnut Shrimp",
    description: "Candied walnuts, plump shrimp, creamy sauce — a top recommendation from long-time regulars.",
    tag: "Cook-to-Order",
    image: "/images/walnut-shrimp.jpg",
  },
  {
    name: "Spicy Chicken",
    description: "Made to your heat level — order it with camarones and a 5-scoop spice for the full experience.",
    tag: "Made to Order",
    image: "/images/spicy-chicken.jpg",
  },
  {
    name: "House Special Chow Mein",
    price: "$9.50",
    description: "Thicker noodles, more flavor — reviewers put it head-to-head with the mall-food-court standard and win.",
    tag: "Popular",
    image: "/images/chow-mein.jpg",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  source: "Google";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Me and my family are all Celiac and this has been our favorite Chinese food place so far. The service was great and the server was aware of our needs and very helpful. We tried the spicy chicken, orange chicken, house special noodle soup and beef fried rice — none of us had any reaction and we will definitely be back.",
    author: "Tim Gepford",
    source: "Google",
  },
  {
    quote:
      "This place was really good. The chow mein is better than at Panda Express — more flavorful and thicker noodles as well.",
    author: "Sean Roland",
    source: "Google",
  },
  {
    quote:
      "I was looking for a better Chinese fast food restaurant that I could feel confident eating at — one that was clean and served fresh, delicious food. Shi Foo was exactly what I was looking for. My family and I eat here every Friday, sometimes even twice a week!",
    author: "Mom G",
    source: "Google",
  },
  {
    quote:
      "Tons of gluten-free options. They even offered to make me GF Orange Chicken and it was delicious! My wife and kids loved the regular non-GF stuff and said mine tasted great as well.",
    author: "Adam Aarts",
    source: "Google",
  },
  {
    quote:
      "They are a mom & pop's establishment, with the best food and the best soup I have ever tasted across the country.",
    author: "David and Kaizen",
    source: "Google",
  },
  {
    quote:
      "Always hot, fresh, fast food with quick service — usually in and out in ten minutes or so. I highly recommend the walnut shrimp dish!",
    author: "Marcos Regalado",
    source: "Google",
  },
];

export const faqs = [
  {
    question: "Do you offer gluten-free options?",
    answer:
      "Yes — Shi Foo has a dedicated gluten-free menu cooked with non-GMO oils, and can make GF versions of popular dishes like Orange Chicken on request.",
  },
  {
    question: "Do you have vegetarian dishes?",
    answer:
      "Yes. Several soups and stir-fries are vegetarian, and the kitchen can adjust most dishes to be meat-free on request.",
  },
  {
    question: "Can I order delivery?",
    answer:
      "Shi Foo is takeout and dine-in only — no delivery. Order ahead online or call (909) 786-1542 for pickup.",
  },
  {
    question: "Do you cater?",
    answer:
      "Yes. Party trays are available from $7.95 — call ahead with your headcount and the team will help you build an order.",
  },
  {
    question: "Is there parking?",
    answer: "Yes — a private parking lot is available right outside the restaurant.",
  },
];
