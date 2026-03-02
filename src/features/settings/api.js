// productsData.js (now using .webp)
export const newProductsData = [
  // 1. Apple Watch Ultra
  {
    id: 1001,
    slug: "apple-watch-ultra-orange-trail",
    title: "Apple Watch Ultra 2 (49mm Titanium)",
    category: "Watches",
    thumbnail: "/src/assets/Products/apple-watch-ultra-orange-trail.webp",
    images: [
      "/src/assets/Products/apple-watch-ultra-orange-trail.webp",
      "/src/assets/Products/apple-watch-ultra-olive-green.webp"
    ],
    price: 799,
    originalPrice: 899,
    salesPercentage: 11,
    promoCode: "ULTRAADVENTURE",
    inStock: true,
    colors: ["Orange Trail Loop", "Olive Green Trail Loop"],
    selectedColor: "Orange Trail Loop",
    // description, specifications, rating, reviews... remain the same
  },

  // 2. Everfit Treadmill
  {
    id: 1002,
    slug: "everfit-home-treadmill-adjustable",
    title: "Everfit Home Gym Electric Treadmill (Adjustable Incline)",
    category: "Sports and Health",
    thumbnail: "/src/assets/Products/everfit-treadmill-white-black.webp",
    images: [
      "/src/assets/Products/everfit-treadmill-white-black.webp",
      "/src/assets/Products/everfit-treadmill-black-frame.webp"
    ],
    price: 349,
    originalPrice: 449,
    salesPercentage: 22,
    promoCode: "FITATHOME10",
    inStock: true,
    colors: ["White Frame with Black Accents", "Black Frame"],
    selectedColor: "White Frame with Black Accents",
    // rest unchanged
  },

  // 3. iPad mini
  {
    id: 1003,
    slug: "ipad-mini-7-sky-blue",
    title: "Apple iPad mini (A17 Pro, 2025)",
    category: "Mobile and Tablets",
    thumbnail: "/src/assets/Products/ipad-mini-sky-blue.webp",
    images: [
      "/src/assets/Products/ipad-mini-sky-blue.webp",
      "/src/assets/Products/ipad-mini-space-gray.webp"
    ],
    price: 499,
    originalPrice: 549,
    salesPercentage: 9,
    promoCode: "MINIPOWER",
    inStock: true,
    colors: ["Sky Blue", "Space Gray"],
    selectedColor: "Sky Blue",
    // rest unchanged
  },

  // 4. Havit Gamepad
  {
    id: 1004,
    slug: "havit-hv-g69-gamepad",
    title: "Havit HV-G69 USB Vibration Gamepad",
    category: "Game and Videos and Televisions",
    thumbnail: "/src/assets/Products/havit-gamepad-gray.webp",
    images: [
      "/src/assets/Products/havit-gamepad-gray.webp",
      "/src/assets/Products/havit-gamepad-black.webp"
    ],
    price: 19,
    originalPrice: 25,
    salesPercentage: 24,
    promoCode: "GAMEON",
    inStock: true,
    colors: ["Gray", "Black"],
    selectedColor: "Gray",
    // rest unchanged
  },

  // 5. Rangs 43 Inch TV
  {
    id: 1005,
    slug: "rangs-43-inch-android-tv",
    title: "Rangs 43 Inch Frameless FHD Android TV",
    category: "Game and Videos and Televisions",
    thumbnail: "/src/assets/Products/rangs-tv-black-green-accents.webp",
    images: [
      "/src/assets/Products/rangs-tv-black-green-accents.webp",
      "/src/assets/Products/rangs-tv-black-frameless.webp"
    ],
    price: 289,
    originalPrice: 419,
    salesPercentage: 31,
    promoCode: "RANGSTV",
    inStock: true,
    colors: ["Black with Green Accents", "Black Frameless"],
    selectedColor: "Black with Green Accents",
    // rest unchanged
  },

  // 6. MacBook Air M1
  {
    id: 1006,
    slug: "macbook-air-m1-8-256",
    title: "Apple MacBook Air (M1, 2020) 8GB/256GB",
    category: "Laptop & PC",
    thumbnail: "/src/assets/Products/macbook-air-m1-space-gray.webp",
    images: [
      "/src/assets/Products/macbook-air-m1-space-gray.webp"
    ],
    price: 699,
    originalPrice: 999,
    salesPercentage: 30,
    promoCode: "M1CLASSIC",
    inStock: true,
    colors: ["Space Gray"],
    selectedColor: "Space Gray",
    // rest unchanged
  },

  // 7. iMac 24-inch M4
  {
    id: 1007,
    slug: "imac-24-m4-2025",
    title: "Apple iMac 24-inch (M4, 2025)",
    category: "Laptop & PC",
    thumbnail: "/src/assets/Products/imac-24-m4-silver.webp",
    images: [
      "/src/assets/Products/imac-24-m4-silver.webp",
      "/src/assets/Products/imac-24-m4-gray-stand.webp"
    ],
    price: 1299,
    originalPrice: 1499,
    salesPercentage: 13,
    promoCode: "IMACDESK",
    inStock: true,
    colors: ["Silver", "Gray Stand Variant"],
    selectedColor: "Silver",
    // rest unchanged
  },

  // 8. iPhone 16 Pro
  {
    id: 1008,
    slug: "iphone-16-pro-128",
    title: "Apple iPhone 16 Pro (128GB)",
    category: "Mobile and Tablets",
    thumbnail: "/src/assets/Products/iphone-16-pro-titanium-gray.webp",
    images: [
      "/src/assets/Products/iphone-16-pro-titanium-gray.webp",
      "/src/assets/Products/iphone-16-pro-pink.webp"
    ],
    price: 999,
    originalPrice: 1099,
    salesPercentage: 9,
    promoCode: "IPHONE16PRO",
    inStock: true,
    colors: ["Titanium Gray (#808080)", "Pink"],
    selectedColor: "Titanium Gray",
    // rest unchanged
  },

  // 9. Portable Blender/Grinder
  {
    id: 1009,
    slug: "portable-electric-blender-grinder",
    title: "Portable Electric Blender & Grinder",
    category: "Home Appliances",
    thumbnail: "/src/assets/Products/portable-blender-white.webp",
    images: [
      "/src/assets/Products/portable-blender-white.webp",
      "/src/assets/Products/portable-blender-black.webp"
    ],
    price: 39,
    originalPrice: 59,
    salesPercentage: 34,
    promoCode: "BLENDONGO",
    inStock: true,
    colors: ["White", "Black"],
    selectedColor: "White",
    // rest unchanged
  },

  // 10. MacBook Air M4
  {
    id: 1010,
    slug: "macbook-air-m4-16-256",
    title: "Apple MacBook Air 13-inch (M4, 2025) 16GB/256GB",
    category: "Laptop & PC",
    thumbnail: "/src/assets/Products/macbook-air-m4-midnight-gray.webp",
    images: [
      "/src/assets/Products/macbook-air-m4-midnight-gray.webp",
      "/src/assets/Products/macbook-air-m4-space-gray-alt.webp"
    ],
    price: 1099,
    originalPrice: 1299,
    salesPercentage: 15,
    promoCode: "M4AIRDEAL",
    inStock: true,
    colors: ["Midnight Gray", "Space Gray Variant"],
    selectedColor: "Midnight Gray",
    // rest unchanged
  }
];