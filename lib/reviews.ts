export interface Review {
  id: string
  customerName: string
  rating: number
  text: string
  createdAt: string // ISO date string
}

const SEED_REVIEWS: Record<string, Review[]> = {
  'dilli-darbar': [
    {
      id: 'seed-1',
      customerName: 'Priya Sharma',
      rating: 5,
      text: 'Best butter chicken I have had outside of a proper dhaba! The gravy is rich, not overly sweet, and the naan comes out perfectly charred. Will order every week.',
      createdAt: '2025-03-12T10:30:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Rohan Mehta',
      rating: 5,
      text: 'Dal Makhani here is something else — you can tell it has been slow-cooked for hours. Absolutely the real deal. Generous portions too.',
      createdAt: '2025-02-20T14:15:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Anita Kapoor',
      rating: 4,
      text: 'Great flavours and very authentic. Delivery was a bit delayed on a Friday evening but the food arrived hot and well-packed. Would still recommend.',
      createdAt: '2025-01-08T19:45:00Z',
    },
  ],
  'nalilas-kitchen': [
    {
      id: 'seed-1',
      customerName: 'Deepa Nair',
      rating: 5,
      text: 'Finally found proper South Indian food in Delhi! The sambar hits all the right notes and the dosa batter is clearly fermented overnight. Nalini aunty is doing god\'s work.',
      createdAt: '2025-03-18T08:20:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Suresh Iyer',
      rating: 4,
      text: 'Idlis were fluffy and the coconut chutney was freshly ground — you can taste the difference. Rasam was slightly mild for my taste but still delicious.',
      createdAt: '2025-02-05T12:00:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Kavitha Rajan',
      rating: 5,
      text: 'Feels just like home cooking. No shortcuts, no packaged masala taste. I have been ordering the tiffin thrice a week and I am never disappointed.',
      createdAt: '2024-12-22T07:30:00Z',
    },
  ],
  'punjabi-tadka': [
    {
      id: 'seed-1',
      customerName: 'Vikram Singh',
      rating: 5,
      text: 'The golgappas here are elite. The pani is perfectly balanced — spicy, tangy, and refreshing. Been coming here for 5 years and the quality never drops.',
      createdAt: '2025-04-01T17:00:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Neha Gupta',
      rating: 5,
      text: 'Raj Kachori was enormous and packed with flavour. Best street food in Chandni Chowk hands down. The kulfi falooda at the end was the perfect finish.',
      createdAt: '2025-03-10T16:30:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Amit Chauhan',
      rating: 4,
      text: 'Queue can get long on weekends but it is absolutely worth the wait. Aloo tikki was crispy and the chole topping was restaurant-quality.',
      createdAt: '2025-02-14T15:45:00Z',
    },
    {
      id: 'seed-4',
      customerName: 'Pooja Batra',
      rating: 5,
      text: 'Took some colleagues here and they were blown away. Papdi chaat is the best in Old Delhi — the chutneys are made fresh every morning.',
      createdAt: '2024-11-30T14:00:00Z',
    },
  ],
  'spice-route-kitchen': [
    {
      id: 'seed-1',
      customerName: 'Arjun Bose',
      rating: 5,
      text: 'Finally a cloud kitchen that does Thai food properly! The Green Curry had real galangal and lemongrass — not just curry powder. Pad Thai was also spot on.',
      createdAt: '2025-03-25T13:00:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Meera Pillai',
      rating: 4,
      text: 'Dim sum was fresh and the skins were thin but held together well. Pho broth was clear and flavourful. Delivery was fast too.',
      createdAt: '2025-02-28T19:30:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Karan Sethi',
      rating: 4,
      text: 'Good quality Asian food delivered to Noida is rare. These guys do it well. Portions could be slightly larger for the price but flavours are authentic.',
      createdAt: '2025-01-15T20:00:00Z',
    },
  ],
  'biryani-bros': [
    {
      id: 'seed-1',
      customerName: 'Farhan Qureshi',
      rating: 5,
      text: 'This is the ONLY place in Noida that does dum biryani the right way. The rice grains are separate, the meat falls off the bone, and the saffron aroma is real. Perfection.',
      createdAt: '2025-04-05T12:30:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Sunita Reddy',
      rating: 5,
      text: 'Ordered the chicken biryani for a family gathering of 10 and everyone was raving about it. The mirchi ka salan was the surprise star — absolutely brilliant.',
      createdAt: '2025-03-22T13:45:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Rahul Jain',
      rating: 5,
      text: 'I have eaten biryani across Hyderabad, Lucknow, and Kolkata. Biryani Bros comes very close to the best I have had. The dum sealing is done properly here.',
      createdAt: '2025-02-10T18:00:00Z',
    },
    {
      id: 'seed-4',
      customerName: 'Aisha Khan',
      rating: 4,
      text: 'Exceptional biryani but the Double Ka Meetha was a bit too sweet for my taste. Everything else was flawless. Will keep ordering the mutton dum.',
      createdAt: '2025-01-20T14:30:00Z',
    },
  ],
  'moms-recipe-box': [
    {
      id: 'seed-1',
      customerName: 'Gaurav Tiwari',
      rating: 5,
      text: 'The weekly tiffin has completely changed my work-from-home life. Fresh, wholesome, and always varied. Sunita ji is an absolute gem — feels like maa ka khana.',
      createdAt: '2025-04-08T09:00:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Ritu Aggarwal',
      rating: 5,
      text: 'Rajma Chawal on a Tuesday, Kadhi Pakora on Thursday — the rotation is thoughtful. Everything comes hot and the packaging does not leak. Highly recommended.',
      createdAt: '2025-03-15T13:00:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Manoj Sharma',
      rating: 4,
      text: 'Great home-cooked taste and very consistent quality. Occasionally wish there were non-veg options but for a home tiffin service this is excellent value.',
      createdAt: '2025-02-01T12:30:00Z',
    },
  ],
  'royal-caterers': [
    {
      id: 'seed-1',
      customerName: 'Vandana Gupta',
      rating: 5,
      text: 'Royal Caterers handled my daughter\'s wedding reception for 300 guests. The live chaat counter was a massive hit and the buffet spread was outstanding. Zero complaints.',
      createdAt: '2025-03-20T11:00:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Dinesh Sharma',
      rating: 4,
      text: 'Used them for a corporate dinner of 80 guests. Biryani was excellent and the welcome drinks station was well-managed. Would have liked one more dessert option.',
      createdAt: '2025-02-18T20:00:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Sunita Verma',
      rating: 5,
      text: 'Professional team, punctual setup, and the food quality stayed consistent till the last guest was served. That\'s what sets Royal Caterers apart.',
      createdAt: '2024-12-15T18:30:00Z',
    },
  ],
  'street-bites-gzb': [
    {
      id: 'seed-1',
      customerName: 'Ajay Yadav',
      rating: 4,
      text: 'Best pani puri in Raj Nagar — the jaljeera water has that old-school sourness. Chole bhature is filling and the bhature puff up perfectly.',
      createdAt: '2025-03-30T17:30:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Preeti Soni',
      rating: 5,
      text: 'My go-to evening snack spot. The dahi bhalla melts in your mouth. Loved the portion size and the pricing — very fair for the quality you get.',
      createdAt: '2025-02-25T16:00:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Mohit Kumar',
      rating: 4,
      text: 'Solid street food classics executed consistently. The bhel puri is not soggy — they make it fresh to order which is exactly how it should be done.',
      createdAt: '2025-01-12T18:00:00Z',
    },
  ],
  'cloud9-kitchen': [
    {
      id: 'seed-1',
      customerName: 'Ritika Arora',
      rating: 5,
      text: 'Ordered the paneer tikka roll and loaded burger on the same day — both arrived hot, packaging was great, and delivery took under 30 min. Impressed!',
      createdAt: '2025-04-02T21:00:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Saurabh Mishra',
      rating: 4,
      text: 'The Hakka noodles are better than most Chinese restaurants nearby. Chocolate lava cake was gooey and warm — a great end to the meal.',
      createdAt: '2025-03-08T20:30:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Trisha Bajaj',
      rating: 5,
      text: 'Love that this kitchen covers so many cuisines without compromising on quality. The pizza crust is thin and crispy, not the usual doughy disaster.',
      createdAt: '2025-01-28T19:45:00Z',
    },
  ],
  'the-dabba-co': [
    {
      id: 'seed-1',
      customerName: 'Nisha Kapoor',
      rating: 5,
      text: 'The monthly tiffin plan is the best investment I have made since moving to Gurgaon. Every dabba is nutritionally balanced and tastes genuinely homemade. A lifesaver!',
      createdAt: '2025-04-10T12:00:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Rajesh Menon',
      rating: 5,
      text: 'Protein Power Bowl has become my go-to lunch. Freshly grilled chicken, good quinoa ratio, proper seasoning. Never thought healthy could taste this good.',
      createdAt: '2025-03-20T13:00:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Ankita Singh',
      rating: 4,
      text: 'Consistent, clean, and well-portioned. Dal tadka is simple but perfect — tastes exactly like home. The eco packaging is a nice touch too.',
      createdAt: '2025-02-12T12:30:00Z',
    },
  ],
  'gurgaon-grills': [
    {
      id: 'seed-1',
      customerName: 'Dev Choudhary',
      rating: 5,
      text: 'Mixed Grill Platter is an absolute beast — seekh kebabs were juicy with the right smokiness, chicken tikka was perfectly marinated. Came for a birthday and everyone loved it.',
      createdAt: '2025-04-06T20:00:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Simran Kaur',
      rating: 5,
      text: 'The tandoori chicken here is the best I have had in the NCR outside of Chandni Chowk. Charred on the outside, impossibly juicy inside. The masala chai at the end was a lovely touch.',
      createdAt: '2025-03-14T21:00:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Vikas Arora',
      rating: 4,
      text: 'Brilliant quality of grills. Boti kebab was tender and the marinade was deep. The open kitchen is a great concept — you can watch your food being made.',
      createdAt: '2025-02-08T20:15:00Z',
    },
    {
      id: 'seed-4',
      customerName: 'Lata Krishnaswamy',
      rating: 5,
      text: 'As a vegetarian I was sceptical but the corn on the cob and the veg options were handled with the same care. Will definitely return.',
      createdAt: '2025-01-25T19:30:00Z',
    },
  ],
  'festive-feasts': [
    {
      id: 'seed-1',
      customerName: 'Shweta Agarwal',
      rating: 5,
      text: 'Our Diwali office party was a smashing success thanks to Festive Feasts. The Diwali Special Box was beautifully presented and the mithai hamper went down brilliantly.',
      createdAt: '2025-03-28T11:00:00Z',
    },
    {
      id: 'seed-2',
      customerName: 'Kunal Mehrotra',
      rating: 5,
      text: 'Corporate lunch for 50 people done flawlessly. The thali was generously portioned, served on time, and the feedback from the team was overwhelmingly positive.',
      createdAt: '2025-02-22T14:00:00Z',
    },
    {
      id: 'seed-3',
      customerName: 'Pallavi Joshi',
      rating: 4,
      text: 'Great food and professional service. The live chaat counter was the highlight of our team event. Wished the dessert variety was a bit wider but overall excellent.',
      createdAt: '2024-12-30T16:00:00Z',
    },
  ],
}

export function getSeedReviews(slug: string): Review[] {
  return SEED_REVIEWS[slug] ?? []
}
