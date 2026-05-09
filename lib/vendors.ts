export type VendorCategory = 'Restaurant' | 'Home Chef' | 'Cloud Kitchen' | 'Street Food' | 'Catering'
export type VendorCity = 'Delhi' | 'Noida' | 'Ghaziabad' | 'Gurugram'

export interface MenuItem {
  name: string
  price: number
  description?: string
}

export interface Vendor {
  slug: string
  name: string
  category: VendorCategory
  city: VendorCity
  area: string
  rating: number
  reviewCount: number
  shortDescription: string
  about: string
  menuItems: MenuItem[]
  tags: string[]
}

export const VENDORS: Vendor[] = [
  // Delhi
  {
    slug: 'dilli-darbar',
    name: 'Dilli Darbar',
    category: 'Restaurant',
    city: 'Delhi',
    area: 'Connaught Place',
    rating: 4.8,
    reviewCount: 124,
    shortDescription: 'Royal North Indian & Mughlai cuisine in the heart of Delhi.',
    about:
      'Dilli Darbar brings the grandeur of Mughal kitchens to your plate. Established by a family of passionate cooks, we specialise in slow-cooked curries, tandoor breads, and age-old recipes passed down for generations.',
    menuItems: [
      { name: 'Butter Chicken', price: 320, description: 'Creamy tomato-based gravy, tender chicken' },
      { name: 'Dal Makhani', price: 250, description: 'Slow-cooked black lentils, rich and buttery' },
      { name: 'Garlic Naan', price: 60, description: 'Freshly baked from the tandoor' },
      { name: 'Mutton Biryani', price: 420, description: 'Aromatic basmati rice with succulent mutton' },
      { name: 'Gulab Jamun', price: 120, description: 'Soft dumplings in rose-scented syrup' },
    ],
    tags: ['North Indian', 'Mughlai', 'Tandoor'],
  },
  {
    slug: 'nalilas-kitchen',
    name: "Nalini's Kitchen",
    category: 'Home Chef',
    city: 'Delhi',
    area: 'Lajpat Nagar',
    rating: 4.6,
    reviewCount: 89,
    shortDescription: 'Wholesome home-style South Indian meals with a Delhi twist.',
    about:
      "Nalini started cooking for her neighbours a decade ago and never stopped. Every dish in Nalini's Kitchen is made fresh each morning — no preservatives, no shortcuts, just the warmth of a home kitchen.",
    menuItems: [
      { name: 'Masala Dosa', price: 120, description: 'Crispy dosa with spiced potato filling' },
      { name: 'Sambar Rice', price: 150, description: 'Hearty lentil stew with steamed rice' },
      { name: 'Idli Set (4 pcs)', price: 90, description: 'Fluffy rice cakes with coconut chutney' },
      { name: 'Rasam', price: 60, description: 'Tangy peppery South Indian soup' },
      { name: 'Payasam', price: 100, description: 'Sweet rice pudding with cardamom' },
    ],
    tags: ['South Indian', 'Homemade', 'Tiffin'],
  },
  {
    slug: 'punjabi-tadka',
    name: 'Punjabi Tadka',
    category: 'Street Food',
    city: 'Delhi',
    area: 'Chandni Chowk',
    rating: 4.7,
    reviewCount: 203,
    shortDescription: 'Old-Delhi street bites — chaat, golgappas, and more.',
    about:
      'Punjabi Tadka has been serving the streets of Chandni Chowk for over 15 years. Our golgappas burst with flavour and our papdi chaat is legendary among locals and tourists alike.',
    menuItems: [
      { name: 'Golgappa (6 pcs)', price: 60, description: 'Crispy puri filled with tangy tamarind water' },
      { name: 'Papdi Chaat', price: 100, description: 'Crunchy wafers with chutneys and yogurt' },
      { name: 'Aloo Tikki', price: 80, description: 'Golden potato patties with chole' },
      { name: 'Raj Kachori', price: 120, description: 'Mega bowl of crispy kachori with fillings' },
      { name: 'Kulfi Falooda', price: 150, description: 'Creamy kulfi with rose falooda' },
    ],
    tags: ['Chaat', 'Street Food', 'Snacks'],
  },
  // Noida
  {
    slug: 'spice-route-kitchen',
    name: 'Spice Route Kitchen',
    category: 'Cloud Kitchen',
    city: 'Noida',
    area: 'Sector 18',
    rating: 4.5,
    reviewCount: 76,
    shortDescription: 'Pan-Asian flavours crafted for the discerning Noida palate.',
    about:
      'Spice Route Kitchen is a cloud kitchen dedicated to bold Asian flavours — Thai, Chinese, and Vietnamese — all made with fresh ingredients and zero MSG.',
    menuItems: [
      { name: 'Pad Thai', price: 280, description: 'Wok-fried rice noodles with peanuts and lime' },
      { name: 'Dim Sum Basket (6 pcs)', price: 220, description: 'Steamed dumplings with ginger soy dip' },
      { name: 'Green Thai Curry', price: 320, description: 'Aromatic coconut milk curry with veggies' },
      { name: 'Pho Bowl', price: 250, description: 'Vietnamese broth with rice noodles and herbs' },
      { name: 'Mango Sticky Rice', price: 180, description: 'Classic Thai dessert' },
    ],
    tags: ['Asian', 'Thai', 'Chinese', 'Vietnamese'],
  },
  {
    slug: 'biryani-bros',
    name: 'Biryani Bros',
    category: 'Restaurant',
    city: 'Noida',
    area: 'Sector 62',
    rating: 4.9,
    reviewCount: 315,
    shortDescription: 'Hyderabadi dum biryani — slow-cooked, richly spiced, legendary.',
    about:
      'Biryani Bros was born out of one obsession: the perfect biryani. Using century-old dum-cooking techniques from Hyderabad, our chefs layer rice and marinated meat to create a slow-cooked masterpiece in every pot.',
    menuItems: [
      { name: 'Hyderabadi Chicken Biryani', price: 380, description: 'Dum-cooked with whole spices and saffron' },
      { name: 'Mutton Dum Biryani', price: 480, description: 'Slow-cooked mutton layered in basmati' },
      { name: 'Veg Biryani', price: 280, description: 'Seasonal vegetables in aromatic rice' },
      { name: 'Mirchi Ka Salan', price: 120, description: "Peanut-sesame chilli curry, biryani's best friend" },
      { name: 'Double Ka Meetha', price: 150, description: 'Hyderabadi bread pudding in saffron syrup' },
    ],
    tags: ['Biryani', 'Hyderabadi', 'Dum Cooking'],
  },
  {
    slug: 'moms-recipe-box',
    name: "Mom's Recipe Box",
    category: 'Home Chef',
    city: 'Noida',
    area: 'Sector 44',
    rating: 4.7,
    reviewCount: 142,
    shortDescription: 'Daily tiffin with rotating home-cooked menus — like mum made it.',
    about:
      "Mom's Recipe Box started as a passion project during lockdown and grew into one of Noida's most loved tiffin services. Chef Sunita prepares every meal fresh from scratch using locally sourced produce.",
    menuItems: [
      { name: 'Weekly Tiffin (Mon–Fri)', price: 1400, description: '2 sabzi, dal, rice, roti, salad daily' },
      { name: 'Rajma Chawal', price: 180, description: 'Red kidney beans slow-cooked with rice' },
      { name: 'Kadhi Pakora', price: 180, description: 'Yogurt-based curry with besan fritters' },
      { name: 'Aloo Gobhi', price: 160, description: 'Dry potato and cauliflower sabzi' },
      { name: 'Kheer', price: 100, description: 'Creamy rice pudding with pistachios' },
    ],
    tags: ['Tiffin', 'Homemade', 'Daily Meals'],
  },
  // Ghaziabad
  {
    slug: 'royal-caterers',
    name: 'Royal Caterers',
    category: 'Catering',
    city: 'Ghaziabad',
    area: 'Vaishali',
    rating: 4.6,
    reviewCount: 58,
    shortDescription: 'Wedding and event catering with a touch of royal grandeur.',
    about:
      'Royal Caterers has been the go-to choice for weddings, corporate events, and family celebrations in Ghaziabad for over a decade. With experienced chefs and end-to-end catering, we make every event unforgettable.',
    menuItems: [
      { name: 'Live Chaat Counter', price: 5000, description: 'Per event — golgappa, papdi chaat, more' },
      { name: 'North Indian Buffet (per head)', price: 700, description: 'Full thali with 8 dishes, dessert, drinks' },
      { name: 'Biryani Handi (serves 10)', price: 2800, description: 'Dum cooked chicken or veg biryani' },
      { name: 'Dessert Station (per head)', price: 300, description: 'Gulab jamun, halwa, ice cream, more' },
      { name: 'Welcome Drinks Setup', price: 3000, description: 'Sherbets, mocktails, chaas for 50 guests' },
    ],
    tags: ['Catering', 'Wedding', 'Events'],
  },
  {
    slug: 'street-bites-gzb',
    name: 'Street Bites GZB',
    category: 'Street Food',
    city: 'Ghaziabad',
    area: 'Raj Nagar',
    rating: 4.4,
    reviewCount: 97,
    shortDescription: 'Mouthwatering street snacks and chaat from the lanes of GZB.',
    about:
      'Street Bites GZB has been delighting snack lovers in Raj Nagar with authentic street flavours for over 8 years. Our secret recipes and generous portions keep customers coming back every evening.',
    menuItems: [
      { name: 'Pani Puri (8 pcs)', price: 70, description: 'Crispy puris with spiced tamarind water' },
      { name: 'Bhel Puri', price: 90, description: 'Puffed rice with chutneys and sev' },
      { name: 'Dahi Bhalla', price: 110, description: 'Lentil dumplings soaked in yogurt' },
      { name: 'Chole Bhature', price: 130, description: 'Spicy chickpeas with fluffy bhature' },
      { name: 'Lassi (large)', price: 80, description: 'Sweet or salted, thick churned yogurt' },
    ],
    tags: ['Chaat', 'Street Snacks', 'Budget'],
  },
  {
    slug: 'cloud9-kitchen',
    name: 'Cloud9 Kitchen',
    category: 'Cloud Kitchen',
    city: 'Ghaziabad',
    area: 'Indirapuram',
    rating: 4.5,
    reviewCount: 112,
    shortDescription: 'Multi-cuisine cloud kitchen — from pizza to biryani, delivered fast.',
    about:
      "Cloud9 Kitchen is Ghaziabad's multi-cuisine delivery brand known for speed and quality. With a rotating menu covering North Indian, Continental, and Chinese, there is something for every craving.",
    menuItems: [
      { name: 'Margherita Pizza (8")', price: 250, description: 'Classic tomato, mozzarella, basil' },
      { name: 'Chicken Hakka Noodles', price: 220, description: 'Wok-tossed with veggies and soy sauce' },
      { name: 'Paneer Tikka Roll', price: 180, description: 'Smoky paneer wrapped in a rumali roti' },
      { name: 'Loaded Burger', price: 210, description: 'Double patty, cheese, jalapeños' },
      { name: 'Chocolate Lava Cake', price: 160, description: 'Warm cake with gooey molten centre' },
    ],
    tags: ['Multi-Cuisine', 'Fast Delivery', 'Cloud Kitchen'],
  },
  // Gurugram
  {
    slug: 'the-dabba-co',
    name: 'The Dabba Co.',
    category: 'Home Chef',
    city: 'Gurugram',
    area: 'Cyber Hub',
    rating: 4.8,
    reviewCount: 187,
    shortDescription: 'Healthy corporate tiffins for professionals — balanced and delicious.',
    about:
      "The Dabba Co. was created for busy professionals who crave home-cooked meals at work. Every dabba is nutritionist-approved, portion-controlled, and packed in eco-friendly containers. We've partnered with 30+ corporates in Gurugram.",
    menuItems: [
      { name: 'Monthly Tiffin Plan', price: 5500, description: 'Daily 2-course meal, Mon–Sat' },
      { name: 'Protein Power Bowl', price: 220, description: 'Quinoa, grilled chicken, mixed greens' },
      { name: 'Dal Tadka + Rice', price: 160, description: 'Yellow lentils tempered with ghee' },
      { name: 'Roti Sabzi Combo', price: 140, description: '3 rotis + seasonal vegetable' },
      { name: 'Sprouts Salad', price: 120, description: 'Mixed sprouts with lemon and herbs' },
    ],
    tags: ['Tiffin', 'Healthy', 'Corporate'],
  },
  {
    slug: 'gurgaon-grills',
    name: 'Gurgaon Grills',
    category: 'Restaurant',
    city: 'Gurugram',
    area: 'Sector 29',
    rating: 4.7,
    reviewCount: 246,
    shortDescription: 'Premium BBQ and grill experience with live fire cooking.',
    about:
      "Gurgaon Grills is the city's favourite destination for live-fire BBQ — from smoky kebabs to wood-fired platters. Every dish is cooked in open view, giving you the sizzle, the smoke, and the spectacle.",
    menuItems: [
      { name: 'Mixed Grill Platter', price: 780, description: 'Seekh kebab, chicken tikka, reshmi kebab' },
      { name: 'Tandoori Chicken (half)', price: 380, description: 'Whole leg marinated overnight, charred' },
      { name: 'Boti Kebab', price: 320, description: 'Tender mutton cubes in smoky marinade' },
      { name: 'Corn on the Cob', price: 120, description: 'Grilled with spiced butter' },
      { name: 'Masala Chai', price: 60, description: 'Spiced ginger tea to end the meal' },
    ],
    tags: ['BBQ', 'Kebabs', 'Tandoor', 'Grill'],
  },
  {
    slug: 'festive-feasts',
    name: 'Festive Feasts',
    category: 'Catering',
    city: 'Gurugram',
    area: 'DLF Phase 2',
    rating: 4.9,
    reviewCount: 74,
    shortDescription: 'Festival and corporate catering — making every gathering memorable.',
    about:
      'Festive Feasts specialises in themed catering for Diwali parties, office celebrations, and milestone events. From traditional Indian spreads to fusion menus, our team crafts experiences that match the spirit of every occasion.',
    menuItems: [
      { name: 'Diwali Special Box (per head)', price: 850, description: 'Indian sweets, savouries, and dinner' },
      { name: 'Corporate Lunch (per head)', price: 450, description: 'Executive thali with dessert' },
      { name: 'Mithai Hamper (1 kg)', price: 1200, description: 'Assorted festive sweets' },
      { name: 'Chaat Live Counter', price: 6000, description: 'Per event — full chaat setup' },
      { name: 'Cake Cutting Package', price: 2500, description: 'Custom 2 kg cake + dry snacks' },
    ],
    tags: ['Catering', 'Corporate', 'Festive'],
  },
]

export function getVendorBySlug(slug: string): Vendor | undefined {
  return VENDORS.find((v) => v.slug === slug)
}

export const CITIES: VendorCity[] = ['Delhi', 'Noida', 'Ghaziabad', 'Gurugram']
export const CATEGORIES: VendorCategory[] = [
  'Restaurant',
  'Home Chef',
  'Cloud Kitchen',
  'Street Food',
  'Catering',
]
