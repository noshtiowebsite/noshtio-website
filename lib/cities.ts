export interface CityContent {
  displayName: string;
  slug: string;
  mapLat: number;
  mapLng: number;
  foodScene: string;
  famousDishes: string[];
  popularAreas: string[];
}

export const cities: Record<string, CityContent> = {
  delhi: {
    displayName: "Delhi",
    slug: "delhi",
    mapLat: 28.7041,
    mapLng: 77.1025,
    foodScene: "Delhi's food scene is a living museum of Indian culinary traditions. From the bustling lanes of Old Delhi with their famous street food to the upscale restaurants of Connaught Place, the capital offers an incredible diversity of flavors. The city is home to iconic dishes like Chole Bhature, Nihari, and Butter Chicken, each with its own history and devoted followers. Whether you're exploring the morning parathas of Paranthe Wali Gali or the late-night kebabs of Karim's, Delhi's food culture is a reflection of its cosmopolitan character. With noshtio, you can now discover these authentic flavors directly from local vendors, home chefs, and established restaurants without hefty platform commissions.",
    famousDishes: ["Chole Bhature", "Nihari", "Butter Chicken", "Aloo Paratha", "Biryani"],
    popularAreas: ["Old Delhi", "Connaught Place", "Defence Colony", "Karol Bagh", "Kalkaji"]
  },
  mumbai: {
    displayName: "Mumbai",
    slug: "mumbai",
    mapLat: 19.0760,
    mapLng: 72.8777,
    foodScene: "Mumbai, the financial capital, has a food culture as dynamic as its people. This cosmopolitan city seamlessly blends Maharashtrian, Gujarati, and international cuisines. From the famous Vada Pav stands that fuel the city's workforce to the elaborate home-cooked meals of the Iyer and Tamboli communities, Mumbai's food is incredibly diverse. Coastal location means fresh seafood is abundant, particularly in areas like Mahim and Worli. The city is known for its street food culture—chaat, pani puri, and bhel puri are everywhere. noshtio brings this vibrant food ecosystem to your doorstep with zero commissions, allowing local vendors to thrive and offer authentic Mumbai flavors.",
    famousDishes: ["Vada Pav", "Pav Bhaji", "Chaat", "Bombay Duck Fry", "Misal Pav"],
    popularAreas: ["Bandra", "Worli", "Mahim", "Colaba", "Dadar"]
  },
  lucknow: {
    displayName: "Lucknow",
    slug: "lucknow",
    mapLat: 26.8467,
    mapLng: 80.9462,
    foodScene: "Lucknow is the birthplace of Awadhi cuisine, one of India's most refined and beloved food traditions. The city's 18th-century royal heritage is deeply reflected in its culinary practices—dishes like Gosht Biryani, Galauti Kebab, and Kakori Kebab represent centuries of culinary evolution. The preparation methods here are distinct, often taking hours of slow cooking to perfect flavors. Home kitchens in Lucknow are treasure troves of authentic recipes passed down through generations. With noshtio, you can support these traditional cooks and home entrepreneurs who maintain these culinary traditions while earning fair compensation for their craft.",
    famousDishes: ["Galauti Kebab", "Lucknow Biryani", "Kakori Kebab", "Tundey Ke Nanhey Kebab", "Sheermal"],
    popularAreas: ["Hazratganj", "Charbagh", "Aminabad", "Aliganj", "Gomtinagar"]
  },
  jaipur: {
    displayName: "Jaipur",
    slug: "jaipur",
    mapLat: 26.9124,
    mapLng: 75.7873,
    foodScene: "Jaipur's food is a celebration of Rajasthan's desert heritage combined with royal influences. The city is famous for its vegetarian cuisine, though non-vegetarian preparations are equally stunning. Dishes like Laal Maans, Dal Baati Churma, and Gatte Ki Sabzi showcase the region's unique flavors developed over centuries. The sweets of Jaipur—Ghirare, Fafda Jalebi—are legendary across India. Street food culture here has a distinct character, with vendors offering specialized items at specific locations. noshtio enables Jaipur's food entrepreneurs and home chefs to reach customers directly without losing significant margins to platform commissions.",
    famousDishes: ["Laal Maans", "Dal Baati Churma", "Gatte Ki Sabzi", "Fafda Jalebi", "Kesar Khichdi"],
    popularAreas: ["Jaipur City", "C-Scheme", "Bahchpan", "Malviya Nagar", "Vaishali Nagar"]
  },
  kanpur: {
    displayName: "Kanpur",
    slug: "kanpur",
    mapLat: 26.4499,
    mapLng: 80.3319,
    foodScene: "Kanpur, a historic industrial city on the Ganges, has a distinctive food culture that blends North Indian traditions with local specialties. The city is particularly known for its non-vegetarian cuisine, with mutton and chicken preparations that have developed unique local characteristics. Street food here includes regional variations of common Indian fare, with vendors having perfected recipes over decades. Home-cooked meals remain central to Kanpur's food identity, with families maintaining traditional cooking methods. noshtio connects Kanpur's food vendors and home chefs with customers who appreciate authentic, locally-prepared meals.",
    famousDishes: ["Kanpur Kebab", "Biryani", "Korma", "Nihari", "Haleem"],
    popularAreas: ["Navrangpura", "Civil Lines", "Kidwai Nagar", "Singhal Estate", "Swaroop Nagar"]
  },
  agra: {
    displayName: "Agra",
    slug: "agra",
    mapLat: 27.1767,
    mapLng: 78.0081,
    foodScene: "Agra, home to the Taj Mahal, has a food culture shaped by its Mughal heritage and position on the Yamuna. The city is known for its Petha (a pumpkin-based sweet) and refined Mughlai cuisine. Local vendors have perfected traditional recipes for biryani, kebabs, and curries that reflect generations of culinary knowledge. The food here carries stories of the Mughal court while maintaining local accessibility. With a significant tourism presence, Agra's food scene serves both locals and visitors seeking authentic experiences. noshtio empowers local vendors to serve both audiences without compromising on quality or fair earnings.",
    famousDishes: ["Agra Petha", "Mughlai Biryani", "Kebabs", "Dum Pukht Preparation", "Sheermal"],
    popularAreas: ["Taj East Gate", "Kinari Bazaar", "Sadar Bazaar", "Kamla Nagar", "Sanjay Place"]
  },
  varanasi: {
    displayName: "Varanasi",
    slug: "varanasi",
    mapLat: 25.3176,
    mapLng: 82.9739,
    foodScene: "Varanasi's food culture is deeply spiritual and traditional, with vegetarian cuisine taking precedence in this sacred city. The ghats offer iconic street food experiences, particularly the Banarasi puri and chaat preparations that have remained unchanged for centuries. Local sweets like Banarasi peda and various milk-based desserts are specialties. Home kitchens preserve age-old recipes, often enhanced with local spices and techniques. The city's food is intrinsically linked to its rituals and traditions. nosztio brings Varanasi's authentic culinary heritage to residents and pilgrims, supporting traditional food producers directly.",
    famousDishes: ["Banarasi Puri", "Chaat", "Dahi Bhalle", "Peda", "Malaiyo"],
    popularAreas: ["Assi Ghat", "Godowlia", "Chowkaghat", "Thatheri Bazaar", "Maidagin"]
  },
  noida: {
    displayName: "Noida",
    slug: "noida",
    mapLat: 28.5921,
    mapLng: 77.3736,
    foodScene: "Noida, a planned city adjacent to Delhi, has emerged as a modern food destination with diverse culinary influences. Being relatively younger, its food culture is entrepreneurial and experimental, attracting both traditional home chefs and innovative cooks. North Indian classics remain dominant, but the city has become a hub for diverse cuisines. Many entrepreneurs and home kitchen operators have set up here, serving both residential areas and commercial centers. nosztio provides these food entrepreneurs with a platform to reach customers directly, maintaining the profitability that suburban locations demand.",
    famousDishes: ["North Indian Curries", "Momos", "Continental Fusion", "Street Food Varieties", "Home-Style Meals"],
    popularAreas: ["Sector 18", "Sector 12", "Alpha One", "City Center", "Noida City"]
  },
  gurgaon: {
    displayName: "Gurgaon",
    slug: "gurgaon",
    mapLat: 28.4595,
    mapLng: 77.0266,
    foodScene: "Gurgaon, a corporate hub, has developed a diverse and cosmopolitan food scene serving its young, mobile population. While traditional North Indian cuisine remains popular, the city is known for its adoption of international cuisines and fusion food experiments. Home-based food entrepreneurs have thrived here, serving working professionals seeking healthy, home-cooked meals. Delivery has become integral to Gurgaon's food culture due to long commutes and busy schedules. nosztio serves Gurgaon's food ecosystem by enabling vendors and home chefs to operate with better margins and direct customer relationships.",
    famousDishes: ["Continental", "Italian", "Asian Fusion", "Healthy Bowls", "Traditional North Indian"],
    popularAreas: ["Cybercity", "MG Road", "Golf Course Road", "DLF Cyber Hub", "Udyog Vihar"]
  },
  pune: {
    displayName: "Pune",
    slug: "pune",
    mapLat: 18.5204,
    mapLng: 73.8567,
    foodScene: "Pune, the cultural capital of Maharashtra, boasts a food scene that beautifully blends Maharashtrian traditions with cosmopolitan influences. The city is famous for its breakfast culture—upma, poha, and jalebi are morning staples. Misal pav holds a special place in Pune's food identity, with each area having its specialty vendors. The city's large student and IT population has created demand for affordable, quality food. Home-cooked meals and traditional recipes remain central despite modernization. nosztio connects Pune's talented food vendors and home chefs with customers, helping them scale sustainably.",
    famousDishes: ["Misal Pav", "Poha", "Upma", "Surali Chakli", "Jaggery Sweets"],
    popularAreas: ["Camp", "Shivajinagar", "Koregaon Park", "Kondhwa", "Hadapsar"]
  },
  hyderabad: {
    displayName: "Hyderabad",
    slug: "hyderabad",
    mapLat: 17.3850,
    mapLng: 78.4867,
    foodScene: "Hyderabad's food culture is legendary in India, centered around its iconic Biryani that has become a symbol of the city. The Nizami influence on the cuisine runs deep, with a tradition of slow-cooked, flavorful preparations. Haleem, Nihari, and various kebabs reflect this Mughal heritage. Street food culture here is as celebrated as fine dining, with items like Pani Puri and Mirchi Ka Salan having devoted followers. The city's Hindu-Muslim culinary synthesis creates unique flavor combinations. nosztio celebrates Hyderabad's incredible food heritage, enabling traditional cooks and home entrepreneurs to serve their community.",
    famousDishes: ["Hyderabadi Biryani", "Haleem", "Mirchi Ka Salan", "Nihari", "Kebabs"],
    popularAreas: ["Old City", "Charminar", "Secunderabad", "Banjara Hills", "Jubilee Hills"]
  },
  bengaluru: {
    displayName: "Bengaluru",
    slug: "bengaluru",
    mapLat: 12.9716,
    mapLng: 77.5946,
    foodScene: "Bengaluru's food scene reflects its status as India's IT capital with a diverse, internationally-influenced population. However, South Indian cuisine remains the foundation—dosa, idli, and sambhar are everyday fixtures. The city has become a hub for food entrepreneurs experimenting with fusion and innovative cuisines. Home-based food businesses have proliferated, serving the city's health-conscious population. The food culture here is progressive, welcoming both traditional and experimental preparations. nosztio empowers Bengaluru's food entrepreneurs and traditional cooks to reach their audience without excessive platform taxes.",
    famousDishes: ["Dosa", "Idli", "Uttapam", "South Indian Curries", "Ragi Items"],
    popularAreas: ["Indiranagar", "Koramangala", "Whitefield", "Marathahalli", "Jayanagar"]
  },
  ahmedabad: {
    displayName: "Ahmedabad",
    slug: "ahmedabad",
    mapLat: 23.0225,
    mapLng: 72.5714,
    foodScene: "Ahmedabad's food culture is deeply Gujarati, with vegetarian cuisine representing the regional traditions and values. The city is famous for its street food—dhokla, khandvi, and fafda-jalebi are morning staples. Snack culture here is highly developed, with vendors having perfected recipes for items like chikhalwali and sev tameta. Sweets hold a special place in Ahmedabad's food identity, with traditional makers maintaining centuries-old techniques. Home kitchens here are custodians of Gujarati culinary traditions. nosztio provides these food entrepreneurs and home chefs with direct market access.",
    famousDishes: ["Dhokla", "Khandvi", "Fafda Jalebi", "Undhiyu", "Jaggery Sweets"],
    popularAreas: ["Vadaj", "Maninagar", "Thaltej", "Satellite", "Iscon"]
  },
  indore: {
    displayName: "Indore",
    slug: "indore",
    mapLat: 22.7196,
    mapLng: 75.8577,
    foodScene: "Indore is India's street food capital, renowned for its incredible variety and quality of street food. Poha, jalebi, and samosas here have achieved almost cult status among food lovers. The city's food vendors are highly skilled, with recipes perfected over generations and reputations built on consistency. Beyond street food, Indore's home cooking maintains Central Indian traditions with unique spice combinations. The city's food culture is deeply democratic—the same vendors serve all social classes. nosztio amplifies Indore's street food ecosystem, enabling vendors to reach more customers while retaining higher margins.",
    famousDishes: ["Poha Jalebi", "Samosa", "Chikhalwali", "Indian Bread", "Sweets"],
    popularAreas: ["Rajwada", "Sarafa Bazaar", "Palhar", "CBD", "Ratlam Road"]
  },
  bhopal: {
    displayName: "Bhopal",
    slug: "bhopal",
    mapLat: 23.1815,
    mapLng: 77.4104,
    foodScene: "Bhopal's food culture reflects Central India's culinary traditions with influences from its diverse population. The city is particularly known for jalebi and other sweets prepared using traditional methods. Cuisines here blend Mughlai, Marathi, and Malwa regional influences. Home kitchens maintain recipes that have been passed down through generations, often featuring unique preparations of dal, vegetables, and breads. Bhopal's food vendors have maintained high standards despite economic pressures. nosztio provides Bhopal's talented food entrepreneurs with a platform to thrive, supporting both traditional cooks and innovative food businesses.",
    famousDishes: ["Jalebi", "Poha", "Dal Bafla", "Chakli", "Regional Sweets"],
    popularAreas: ["Arera Hills", "Idgah Hills", "Habibganj", "New Market", "Chowk"]
  }
};

export const cityList = Object.values(cities);
export const citySlugs = Object.keys(cities);