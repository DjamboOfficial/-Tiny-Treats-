const mongoose = require("mongoose");
const Product = require("../models/Product.model");

require("../db");

const seedDatabase = async () => {
  try {
    await Product.deleteMany();
    const insertedProducts = await Product.insertMany(products);
    console.log("Now we have a catalogue! Hadi!");
  } catch (error) {
    console.error("Error in seeding the database: ", error);
  } finally {
    mongoose.connection.close();
  }
};

mongoose.connect("mongodb://127.0.0.1:27017/tiny-treats", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  {
    /* 1 to 10!  */
    name: "Cosmic Wonder Constellation Projector",
    catalogueId: 1,
    category: ["Electronics", "Gadgets"],
    price: [12.99],
    rating: {
      value: 5,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Like"],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1701968107/tiny-treats-products/LEDConstellationsProjector_h9t57b.png",
    description:
      "Transform a child's bedroom into a cosmic wonderland with our handheld Constellation Projector. Priced at €12.99, it brings captivating celestial magic to bedtime.",
  },
  {
    name: "Tranquil Workspace Zen Garden",
    catalogueId: 2,
    category: ["Home & Living", "Decor"],
    price: [9.99],
    rating: {
      value: 4.0,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.2, 4.0],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702545803/DesktopZenGarden_xqumz1.png",
    description:
      "Elevate your workspace with our desktop Zen garden. Priced at €9.99, this miniature oasis fosters mindfulness, creating a peaceful escape within arm's reach.",
  },
  {
    name: "Bamboo Harmony Wireless Speaker",
    category: ["Electronics", "Audio"],
    catalogueId: 3,
    price: [14.99],
    rating: {
      value: 4.8,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.5, 4.8, 5.0],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1701968108/tiny-treats-products/BambooSpeaker_voou1r.png",
    description:
      "Elevate your audio experience with our micro-sized Bamboo Wireless Speaker. Priced at €14.99, its compact design belies its powerful sound, making it a stylish auditory companion for any space.",
  },
  {
    name: "Sentimental Journey Locket",
    catalogueId: 4,
    category: ["Fashion", "Jewelry"],
    price: [11.99],
    rating: {
      value: 3.2,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Add to Wishlist"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1701968109/tiny-treats-products/TeenyTinyLocket_yab5ca.png",
    description:
      "Cherish memories with our Teeny Tiny Personalized Locket. Priced at €11.99, its dainty elegance and customizable touch make it a perfect heartfelt gift, encapsulating precious moments.",
  },
  {
    name: "Artistic Expression Watercolor Kit",
    catalogueId: 5,
    category: ["Arts & Crafts", "Gifts"],
    price: [8.99],
    rating: {
      value: 4.5,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.2, 4.5, 4.8],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1701968109/tiny-treats-products/WatercolorKit_kejksq.png",
    description:
      "Unleash creativity with our Micro-sized Watercolor Painting Kit, priced at €8.99. Its compact design holds a world of color, perfect for on-the-go artistic expression and a delightful gift for aspiring artists.",
  },
  {
    name: "Serenity Aromatherapy Diffuser",
    catalogueId: 6,
    category: ["Home & Living", "Wellness"],
    price: [11.99],
    rating: {
      value: 3.6,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1701968107/tiny-treats-products/EssentialOilDispenser_nikkql.png",
    description:
      "Elevate your space with our Petite Aromatherapy Essential Oil Diffuser, priced at €11.99. Its compact design delivers relaxation in every drop, making it an ideal gift for moments of self-care.",
  },
  {
    name: "Retro Vibes Polaroid Camera",
    catalogueId: 7,
    category: ["Electronics", "Photography"],
    price: [14.99],
    rating: {
      value: 4.2,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.5, 4.7, 4.9],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1701968109/tiny-treats-products/SnapCamera_vlc6ql.png",
    description:
      "Relive memories with our Miniature Retro Polaroid-style Camera, priced at €14.99. Its compact design combines nostalgia and functionality, making it a perfect gift for photography enthusiasts.",
  },
  {
    name: "Blossom Promise Seed Paper Set",
    catalogueId: 8,
    category: ["Gifts", "Eco-Friendly"],
    price: [4.99],
    rating: {
      value: 4.9,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1701968107/tiny-treats-products/SeedPaper_mwvnna.png",
    description:
      "Cultivate joy with our Tiny Plantable Seed Paper Set, priced at €4.99. Each sheet holds the promise of blossoms, making it an eco-friendly and affordable gift for nature lovers.",
  },
  {
    name: "Memorable Mini Book Keychain",
    catalogueId: 9,
    category: ["Fashion", "Accessories"],
    price: [9.99],
    rating: {
      value: 3.0,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Add to Wishlist"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1701968107/tiny-treats-products/BookKeychain_lwgpzm.png",
    description:
      "Carry memories close with our Personalized Mini Book Keychain, priced at €9.99. Its miniature pages hold personalized stories, making it a meaningful and portable keepsake.",
  },
  {
    name: "Woodland Wireless Earbud Case",
    catalogueId: 10,
    category: ["Electronics", "Accessories"],
    price: [7.99],
    rating: {
      value: 4.2,
      timeStamp: Date.now(),
    },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1701968110/tiny-treats-products/WirelessEarbudCase_txwiaf.png",
    description:
      "Keep your earbuds stylishly secure with our Petite Wireless Earbud Case, priced at €7.99. Its compact design, resembling a finely carved piece of wood, adds flair to functionality, making it a trendy accessory for music lovers.",
  },
  {
    name: "Enchanting Miniature Crystal Ball",
    catalogueId: 11,
    category: ["Decor", "Mystical"],
    price: [12.99],
    rating: { value: 4.1, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.2, 4.5, 4.8],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026547/tiny-treats-products/EnchantingMiniatureCrystalBall_vu9w67.png",
    description:
      "Transform your space with our Enchanting Miniature Crystal Ball, priced at €12.99. Its mystical charm radiates soft, colorful lights, adding a magical touch to any setting. Elevate your decor with this captivating ornament.",
  },
  {
    name: "Eternal Rose Bloom",
    catalogueId: 12,
    category: ["Gifts", "Romantic"],
    price: [14.99],
    rating: { value: 2.2, timeStamp: Date.now() },
    interactions: ["View", "Add to Wishlist"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026548/tiny-treats-products/RoseUnderGlass_bt49of.png",
    description:
      "Cherish memories with our Teeny Tiny Personalized Locket. Priced at €11.99, its dainty elegance and customizable touch make it a perfect heartfelt gift, encapsulating precious moments.",
  },
  {
    name: "Charming Tea Infuser Duo",
    catalogueId: 13,
    category: ["Kitchen", "Accessories"],
    price: [9.99],
    rating: { value: 5.0, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.2, 4.0],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026548/tiny-treats-products/TeaInfusers_h8f8gn.png",
    description:
      "Elevate your audio experience with our micro-sized Bamboo Wireless Speaker. Priced at €14.99, its compact design belies its powerful sound, making it a stylish auditory companion for any space.",
  },
  {
    name: "Galactic Desk Organizer Set",
    catalogueId: 14,
    category: ["Office", "Organization"],
    price: [11.99],
    rating: { value: 3.3, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026547/tiny-treats-products/GalacticdeskOrganizer_w0qbhm.png",
    description:
      "Soothing Mini Water Fountain. Priced at €13.99, this compact fountain creates a tranquil atmosphere. Enjoy the gentle sound of flowing water, bringing serenity to your home or office.",
  },
  {
    name: "Whimsical Cat-shaped USB Hub",
    catalogueId: 15,
    category: ["Electronics", "Accessories"],
    price: [7.99],
    rating: { value: 5, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026547/tiny-treats-products/CatUsb_tnxdam.png",
    description:
      "Keep your earbuds stylishly secure with our Petite Wireless Earbud Case, priced at €7.99. Its compact design, resembling a finely carved piece of wood, adds flair to functionality, making it a trendy accessory for music lovers.",
  },
  {
    name: "Soothing Mini Water Fountain",
    catalogueId: 16,

    category: ["Home & Living", "Wellness"],
    price: [13.99],
    rating: { value: 4.3, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026547/tiny-treats-products/MiniFountain_szdwwz.webp",
    description:
      "Elevate your space with our Petite Aromatherapy Essential Oil Diffuser, priced at €11.99. Its compact design delivers relaxation in every drop, making it an ideal gift for moments of self-care.",
  },
  {
    name: "Adventurous Mini World Globe",
    catalogueId: 17,
    category: ["Home & Living", "Decor"],
    price: [10.99],
    rating: { value: 3.2, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026547/tiny-treats-products/MiniGlobe_udgs2i.png",
    description:
      "Artistic Expression Watercolor Kit. Priced at €8.99, this compact design holds a world of color, perfect for on-the-go artistic expression and a delightful gift for aspiring artists.",
  },
  {
    name: "Delicate Sakura Blossom Necklace",
    catalogueId: 18,
    category: ["Fashion", "Jewelry"],
    price: [14.99],
    rating: { value: 4.8, timeStamp: Date.now() },
    interactions: ["View", "Add to Wishlist"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026548/tiny-treats-products/SakuraNecklace_zxsvy4.png",
    description:
      "Charming Tea Infuser Duo. Priced at €9.99, this set features two whimsical animal-shaped tea infusers. Make tea time delightful with these charming companions, adding a touch of playfulness to your favorite brews.",
  },
  {
    name: "Pocket-sized Bluetooth Tracker",
    catalogueId: 19,
    category: ["Electronics", "Gadgets"],
    price: [6.99],
    rating: { value: 4.1, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [4.0, 4.2, 4.5],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026547/tiny-treats-products/Bluetooth_Tracker_blhpwm.webp",
    description:
      "Relive memories with our Miniature Retro Polaroid-style Camera, priced at €14.99. Its compact design combines nostalgia and functionality, making it a perfect gift for photography enthusiasts.",
  },
  {
    name: "Quirky Desk Plant Buddy",
    catalogueId: 20,
    category: ["Home & Living", "Decor"],
    price: [8.99],
    rating: { value: 5, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702026548/tiny-treats-products/TinyTerrarium_meumjj.png",
    description:
      "Tiny Terrarium Ecosystem. Priced at €12.99, this miniature terrarium creates a self-sustaining ecosystem. Bring nature indoors with this captivating and low-maintenance piece, perfect for any plant lover.",
  },
  {
    name: "Doorbell For Pets",
    catalogueId: 21,
    category: ["Home & Living", "Decor"],
    price: [7.99],
    rating: { value: 2.0, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702313441/DoorbellForPets_uuu3xv.png",
    description:
      "Step into the future of pet ownership with our Doorbell for Pets, priced at €9.99. This hyperrealistic image captures the convenience in a real home setting, illustrating the practicality for pet owners. Enhance communication with your furry friends in a way that seamlessly fits into your daily life.",
  },
  {
    name: "Coffee Warming Gloves",
    catalogueId: 22,
    category: ["Home & Living", "Decor"],
    price: [6.99],
    rating: { value: 3.0, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702313441/CoffeeWarmingGloves_fkzns5.png",
    description:
      "Savor every sip with our Coffee Mug Warming Gloves, priced at €19.99. This hyperrealistic image showcases the gloves in action, bringing warmth and convenience to coffee enthusiasts. Elevate your coffee experience and keep your favorite brew comfortably warm, sip after delightful sip.",
  },
  {
    name: "Lunar Rock Potato Peeler",
    catalogueId: 23,
    category: ["Home & Living", "Decor"],
    price: [8.99],
    rating: { value: 4.7, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702313442/LunarRockPotatoPeeler_cu5jnb.png",
    description:
      "Revolutionize your kitchen with the Lunar Rock Potato Peeler, priced at €12.99. This hyperrealistic image highlights the peeler in action, capturing its unique and thematic design. A must-have for kitchen enthusiasts who appreciate style and functionality in every culinary task",
  },
  {
    name: "Remote-Controlled Lawn Mower Shoes",
    catalogueId: 24,
    category: ["Home & Living", "Decor"],
    price: [8.99],
    rating: { value: 4.0, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702313442/LawnMower_Shoes_apicvo.png",
    description:
      "Transform lawn maintenance with our Remote-Controlled Lawn Mower Shoes, priced at €14.99. This hyperrealistic image places the innovative shoes in a real outdoor setting, emphasizing their practical and entertaining features. Revolutionize your approach to lawn care with this futuristic and fun solution.",
  },
  {
    name: "Solar-Powered Smartphone Charger",
    catalogueId: 26,
    category: ["Home & Living", "Decor"],
    price: [8.99],
    rating: { value: 4.0, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702313442/SolarCharger_frcnrk.png",
    description:
      "Power up sustainably with our Solar-Powered Smartphone Charger, priced at €14.99. This hyperrealistic image captures the sleek charger in action, highlighting its eco-friendly and practical features. Ideal for tech-savvy customers seeking a stylish and planet-friendly solution to keep their devices charged.",
  },
  {
    name: "Anti-Gravity Pen",
    catalogueId: 27,
    category: ["Home & Living", "Decor"],
    price: [8.99],
    rating: { value: 4.0, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702313441/Anti-Gravity_Pen_kvfx5e.png",
    description:
      "Elevate your writing experience with the Anti-Gravity Pen, priced at €9.99. This hyperrealistic image showcases the pen effortlessly floating above paper, emphasizing its whimsical and playful features. A must-have for writing enthusiasts who appreciate a touch of magic in every stroke.",
  },
  {
    name: "Portable Bubble Wrap Keychain",
    catalogueId: 28,
    category: ["Home & Living", "Decor"],
    price: [8.99],
    rating: { value: 4.0, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702313441/BubbleWrapKeyChain_xcf7b1.png",
    description:
      "Unwind anytime, anywhere with our Portable Bubble Wrap Keychain, priced at €6.99. This hyperrealistic image showcases the keychain offering instant stress relief on the go. Compact and fun, it's the perfect companion for those seeking spontaneous moments of relaxation.",
  },
  {
    name: "Flying Umbrella",
    catalogueId: 29,
    category: ["Home & Living", "Decor"],
    price: [8.99],
    rating: { value: 4.0, timeStamp: Date.now() },
    interactions: ["View", "Add to Cart"],
    averageRating: [3.8, 4.0, 4.2],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702313442/FlyingUmbrella_n89r9l.png",
    description:
      "Unleash innovation on rainy days with our Flying Umbrella – a hands-free protector captured in hyperrealistic detail. Elevate your eCommerce presentation with this practical and stylish design, ensuring your customers soar above the ordinary even in stormy weather.",
  },
  {
    name: "Festive Glow LED String Lights",
    category: ["Decor", "Christmas"],
    price: 29.99,
    rating: { value: 4.7, timeStamp: Date.now() },
    interactions: 120,
    averageRating: 4.5,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400362/djambo1990_51954_an_enchanting_scene_showcasing_our_Festive_Glo_fe9dbe09-4ecf-4355-89a9-72c46cc550cb_zgtday.png",
    description:
      "Illuminate your holiday with Festive Glow LED String Lights. Add a warm and enchanting ambiance to your Christmas celebrations.",
    keywords: ["decor", "Christmas", "lights"],
    promotionGroup: ["Holiday Sparkle"],
  },
  {
    name: "Snowflake Elegance Table Runner",
    category: ["Home & Living", "Decor", "Christmas"],
    price: 19.99,
    rating: { value: 4.5, timeStamp: Date.now() },
    interactions: 80,
    averageRating: 4.3,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400362/SnowflakeEleganceTableRunner_n1uypv.png",
    description:
      "Dress up your table with the Snowflake Elegance Table Runner. A festive touch for your Christmas dinners and gatherings.",
    keywords: ["home & living", "decor", "Christmas"],
    promotionGroup: ["Holiday Dining"],
  },
  {
    name: "Santa's Workshop DIY Craft Kit",
    category: ["Arts & Crafts", "Christmas"],
    price: 24.99,
    rating: { value: 4.2, timeStamp: Date.now() },
    interactions: 60,
    averageRating: 4.0,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400360/SantaWorkshopDIYCraftKit_bulfob.png",
    description:
      "Unleash your creativity with Santa's Workshop DIY Craft Kit. Create festive ornaments and decorations for a jolly Christmas.",
    keywords: ["arts & crafts", "Christmas", "DIY"],
    promotionGroup: ["Crafty Holidays"],
  },
  {
    name: "Merry & Bright Throw Blanket",
    category: ["Home & Living", "Decor", "Christmas"],
    price: 34.99,
    rating: { value: 4.6, timeStamp: Date.now() },
    interactions: 100,
    averageRating: 4.4,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400360/Merry_BrightThrowBlanket_qfjxwk.png",
    description:
      "Snuggle up with the Merry & Bright Throw Blanket. Cozy and festive, it adds warmth and cheer to your Christmas movie nights.",
    keywords: ["home & living", "decor", "Christmas"],
    promotionGroup: ["Cozy Holidays"],
  },
  {
    name: "Santa's Scented Candle Collection",
    category: ["Decor", "Wellness", "Christmas"],
    price: 39.99,
    rating: { value: 4.8, timeStamp: Date.now() },
    interactions: 130,
    averageRating: 4.6,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400362/SantaScented_CandleCollection_mjr2ed.png",
    description:
      "Fill your home with the scents of the season with Santa's Scented Candle Collection. A delightful addition to your Christmas decor.",
    keywords: ["decor", "wellness", "Christmas"],
    promotionGroup: ["Festive Fragrances"],
  },
  {
    name: "Gingerbread Wonderland Cookie Cutters",
    category: ["Kitchen", "Arts & Crafts", "Christmas"],
    price: 14.99,
    rating: { value: 4.4, timeStamp: Date.now() },
    interactions: 90,
    averageRating: 4.2,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400360/GingerbreadWonderlandCookieCutters_cknifi.png",
    description:
      "Bake delightful treats with Gingerbread Wonderland Cookie Cutters. Create festive cookies that bring joy to your Christmas celebrations.",
    keywords: ["kitchen", "arts & crafts", "Christmas"],
    promotionGroup: ["Baking Magic"],
  },
  {
    name: "Holiday Harmony Music Carillon",
    category: ["Wellness", "Christmas"],
    price: 9.99,
    rating: { value: 4.3, timeStamp: Date.now() },
    interactions: 70,
    averageRating: 4.1,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400360/HolidayHarmonyMusicCarillon_cx6gpx.png",
    description:
      "Set the mood with Holiday Harmony Music Playlist. A curated collection of festive tunes to enhance your Christmas spirit.",
    keywords: ["wellness", "Christmas", "music"],
    promotionGroup: ["Musical Holidays"],
  },
  {
    name: "Frosty's Mug Set",
    category: ["Kitchen", "Home & Living", "Christmas"],
    price: 19.99,
    rating: { value: 4.0, timeStamp: Date.now() },
    interactions: 50,
    averageRating: 3.8,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400360/FrostyMugSet_dtwhrc.png",
    description:
      "Sip in style with Frosty's Mug Set. Enjoy your favorite holiday beverages in these festive and charming mugs.",
    keywords: ["kitchen", "home & living", "Christmas"],
    promotionGroup: ["Merry Mornings"],
  },
  {
    name: "North Pole Adventure Puzzle",
    category: ["Toys & Games", "Christmas"],
    price: 29.99,
    rating: { value: 4.7, timeStamp: Date.now() },
    interactions: 120,
    averageRating: 4.5,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400360/NorthPoleAdventurePuzzle_bvg8cn.png",
    description:
      "Embark on a North Pole Adventure with this festive puzzle. Perfect for family gatherings during the holiday season.",
    keywords: ["toys & games", "Christmas", "puzzle"],
    promotionGroup: ["Family Fun"],
  },
  {
    name: "Winter Wonderland Bedding Set",
    category: ["Home & Living", "Christmas"],
    price: 69.99,
    rating: { value: 4.5, timeStamp: Date.now() },
    interactions: 110,
    averageRating: 4.3,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702400362/WinterWonderlandBeddingSet_uv4ohz.png",
    description:
      "Transform your bedroom into a Winter Wonderland with this festive bedding set. Experience the magic of Christmas every night.",
    keywords: ["home & living", "Christmas", "bedding"],
    promotionGroup: ["Festive Slumber"],
  },
  {
    name: "Joyful Jingle Bell Garland",
    category: ["Decor", "Christmas"],
    price: 14.99,
    rating: { value: 4.2, timeStamp: Date.now() },
    interactions: 60,
    averageRating: 4.0,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702479684/JoyfulJingleBellGarland_it91em.png",
    description:
      "Deck the halls with the Joyful Jingle Bell Garland. A festive addition to your Christmas decor that spreads holiday cheer.",
    keywords: ["decor", "Christmas", "garland"],
    promotionGroup: ["Jolly Decorations"],
  },
  {
    name: "Peppermint Bliss Bath Bombs",
    category: ["Wellness", "Christmas"],
    price: 19.99,
    rating: { value: 4.6, timeStamp: Date.now() },
    interactions: 100,
    averageRating: 4.4,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702479684/PeppermintBlissBathBombs_vpdiiy.png",
    description:
      "Indulge in Peppermint Bliss Bath Bombs for a relaxing holiday soak. Pamper yourself with the scents of the season.",
    keywords: ["wellness", "Christmas", "bath bombs"],
    promotionGroup: ["Holiday Pampering"],
  },
  {
    name: "Quantum Harmony Speaker",
    category: ["Electronics"],
    price: 99.99,
    rating: { value: 4.5, timeStamp: Date.now() },
    interactions: 120,
    averageRating: 4.3,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416872/QuantumHarmonySpeaker_ipa03x.png",
    description:
      "Experience audio bliss with our Quantum Harmony Speaker. Its sleek design combines technology and elegance for an immersive sound experience.",
    keywords: ["audio", "technology", "elegance"],
    promotionGroup: ["Holiday Special"],
  },
  {
    name: "Holographic Chess Set",
    category: ["Gadgets", "Decor"],
    price: 79.99,
    rating: { value: 4.5, timeStamp: Date.now() },
    interactions: 120,
    averageRating: 4.3,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416869/HolographicChessSet_nhdcsa.png",
    description:
      "Immerse yourself in the future of chess with our Holographic Chess Set. Experience the blend of technology and strategy as holographic pieces come to life on the board, creating a captivating and futuristic gaming experience.",
    keywords: ["chess", "toys & games", "decor", "holographic"],
    promotionGroup: ["Gaming Innovation"],
  },
  {
    name: "Lunar Luminescence Night Light",
    category: ["Decor"],
    price: 29.99,
    rating: { value: 4.8, timeStamp: Date.now() },
    interactions: 150,
    averageRating: 4.6,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416868/LunarLuminescenceNightLight_xmtgtl.png",
    description:
      "Illuminate your nights with the Lunar Luminescence Night Light. A celestial-inspired lamp that casts a soothing glow, adding a touch of magic to any room.",
    keywords: ["decor", "lighting", "celestial"],
    promotionGroup: ["Nighttime Enchantment"],
  },
  {
    name: "ZenBreeze Meditation Cushion",
    category: ["Wellness"],
    price: 39.99,
    rating: { value: 4.4, timeStamp: Date.now() },
    interactions: 100,
    averageRating: 4.2,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416878/ZenBreezeCushion_myniyq.png",
    description:
      "Find tranquility with the ZenBreeze Meditation Cushion. Crafted for comfort and support, it enhances your meditation practice with style and ease.",
    keywords: ["meditation", "wellness", "comfort"],
    promotionGroup: ["Mindful Living"],
  },
  {
    name: "Whimsical Wonderland Wall Decals",
    category: ["Decor"],
    price: 19.99,
    rating: { value: 4.0, timeStamp: Date.now() },
    interactions: 60,
    averageRating: 3.8,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416885/WhimsicalWonderland_lwabro.png",
    description:
      "Transform your walls into a Whimsical Wonderland with our enchanting wall decals. Add a touch of fantasy and color to your living space effortlessly.",
    keywords: ["decor", "wall art", "whimsy"],
    promotionGroup: ["Imagination Station"],
  },
  {
    name: "Celestial Elegance Handcrafted Vase",
    category: ["Decor"],
    price: 49.99,
    rating: { value: 4.6, timeStamp: Date.now() },
    interactions: 110,
    averageRating: 4.4,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416864/CelestialHandcraftedVase_oj51ti.png",
    description:
      "Elevate your home decor with the Celestial Elegance Handcrafted Vase. A stunning piece that merges artistry and functionality, perfect for showcasing blooms.",
    keywords: ["decor", "vase", "celestial"],
    promotionGroup: ["Artisan Elegance"],
  },
  {
    name: "EcoChic Bamboo Fiber Lunch Box",
    category: ["Eco-Friendly", "Kitchen"],
    price: 24.99,
    rating: { value: 4.2, timeStamp: Date.now() },
    interactions: 90,
    averageRating: 4.0,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416872/EcoChicBamboo_pcgkqo.png",
    description:
      "Embrace sustainability with our EcoChic Bamboo Fiber Lunch Box. Stylish, durable, and eco-friendly – the perfect companion for your on-the-go lifestyle.",
    keywords: ["eco-friendly", "kitchen", "lunch"],
    promotionGroup: ["Green Living"],
  },
  {
    name: "Timeless Essence Leather Journal",
    category: ["Arts & Crafts"],
    price: 29.99,
    rating: { value: 4.7, timeStamp: Date.now() },
    interactions: 130,
    averageRating: 4.5,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416878/TimlessEssenceJournal_t1nwal.png",
    description:
      "Capture your thoughts in the Timeless Essence Leather Journal. With its exquisite leather cover, it's a perfect blend of sophistication and creativity.",
    keywords: ["journal", "arts & crafts", "leather"],
    promotionGroup: ["Creative Chronicles"],
  },
  {
    name: "Starry Night Sky Constellation Necklace",
    category: ["Jewelry"],
    price: 59.99,
    rating: { value: 4.9, timeStamp: Date.now() },
    interactions: 180,
    averageRating: 4.8,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416876/StarryNightSkyNecklace_wfahlz.png",
    description:
      "Adorn yourself with the Starry Night Sky Constellation Necklace. A piece that reflects the beauty of the cosmos, adding a celestial touch to your style.",
    keywords: ["jewelry", "constellation", "celestial"],
    promotionGroup: ["Celestial Elegance"],
  },
  {
    name: "Whispering Breeze Wind Chimes",
    category: ["Decor"],
    price: 34.99,
    rating: { value: 4.3, timeStamp: Date.now() },
    interactions: 95,
    averageRating: 4.1,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416877/WhisperingWindChimes_v9smyw.png",
    description:
      "Let the soothing sounds of our Whispering Breeze Wind Chimes transport you to a realm of calm and relaxation. Perfect for your outdoor sanctuary.",
    keywords: ["decor", "wind chimes", "relaxation"],
    promotionGroup: ["Outdoor Serenity"],
  },
  {
    name: "temporary tattoo machine",
    category: ["Arts & Crafts", "Fashion"],
    price: [49.99],
    rating: {
      value: 4.5,
      timeStamp: 1679827345,
    },
    interactions: ["Viewed", "Added to Cart"],
    averageRating: [4.2, 4.5, 4.7],
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702464210/TemporaryTattooMakingMachine_oslgen.png",
    description:
      "Create personalized temporary tattoos with our innovative machine. Easy to use and perfect for events, parties, or personal expression.",
    keywords: ["temporary tattoo", "body art", "personalized", "innovative"],
    promotionGroup: ["Summer Sale", "Body Art Essentials"],
  },
  {
    name: "WiFi-Connected Plant Pot",
    category: ["Decor", "Home & Living"],
    price: 54.99,
    rating: { value: 4.6, timeStamp: Date.now() },
    interactions: 90,
    averageRating: 4.4,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416880/WifiConnectedPot_a6kfs6.png",
    description:
      "Experience the future of plant care with our WiFi-Connected Plant Pot. Priced at $54.99, it allows remote adjustments of conditions, perfect for plant lovers seeking smart and convenient solutions.",
    keywords: ["decor", "home & living", "smart technology", "plant care"],
    promotionGroup: ["Smart Living"],
  },
  {
    name: "Mystic Moon Velvet Throw Pillow",
    category: ["Decor"],
    price: 29.99,
    rating: { value: 4.2, timeStamp: Date.now() },
    interactions: 80,
    averageRating: 4.0,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416875/MysticMoonVelvetThrowPillow_rla5zd.png",
    description: " and ",
    keywords: ["decor", "pillow", "moon"],
    promotionGroup: ["Lunar Luxe"],
  },
  {
    name: "Galactic Fusion Teapot Set",
    category: ["Kitchen"],
    price: 69.99,
    rating: { value: 4.4, timeStamp: Date.now() },
    interactions: 130,
    averageRating: 4.2,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416870/GalcticFusionTeaPot_svlesx.png",
    description:
      "Experience the art of tea with our Galactic Fusion Teapot Set. Combining elegance and functionality, it's a must-have for tea enthusiasts.",
    keywords: ["kitchen", "tea", "elegance"],
    promotionGroup: ["Tea Connoisseur"],
  },
  {
    name: "EcoChic Bamboo Sunglasses",
    category: ["Fashion", "Eco-Friendly"],
    price: 44.99,
    rating: { value: 4.1, timeStamp: Date.now() },
    interactions: 70,
    averageRating: 3.9,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416866/ecoChicBambooSunglasses_qkxxkv.png",
    description:
      "Protect your eyes in style with our EcoChic Bamboo Sunglasses. Sustainable and chic, they're a fashion statement with a green heart.",
    keywords: ["fashion", "eco-friendly", "sunglasses"],
    promotionGroup: ["Sustainable Style"],
  },
  {
    name: "Orion's Belt Leather Watch",
    category: ["Fashion"],
    price: 79.99,
    rating: { value: 4.6, timeStamp: Date.now() },
    interactions: 120,
    averageRating: 4.5,
    imageUrl:
      "https://res.cloudinary.com/dgwvbd9ki/image/upload/v1702416873/OrionWatch_orsvrq.png",
    description:
      "Adorn your wrist with the Orion's Belt Leather Watch. A timeless piece inspired by the cosmos, it blends sophistication with celestial charm.",
    keywords: ["fashion", "watch", "celestial"],
    promotionGroup: ["Timeless Elegance"],
  },
];

seedDatabase();

module.exports = products;
