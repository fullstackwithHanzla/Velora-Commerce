export const newProductsData = [
  // 1. Apple Watch Ultra 2
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
    launchDate: 1695254400000, // September 22, 2023
    initialStock: 180,
    unitsSold: 124,
    description: "The rugged Apple Watch Ultra is built for extreme adventures...",
    // ... rest of the object unchanged (specifications, rating, reviews, etc.)
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
    launchDate: 1685577600000, // ~June 1, 2023 (plausible generic model)
    initialStock: 65,
    unitsSold: 42,
    description: "Compact foldable electric treadmill...",
    // ... rest unchanged
  },
  // 3. iPad mini (A17 Pro, 2024 actually, but listed as 2025 in your data)
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
    inStock: false,
    colors: ["Sky Blue", "Space Gray"],
    selectedColor: "Sky Blue",
    launchDate: 1729641600000, // October 23, 2024
    initialStock: 120,
    unitsSold: 120,
    description: "Ultra-portable iPad mini...",
    // ... rest unchanged
  },
  // 4. Havit HV-G69 Gamepad
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
    launchDate: 1667260800000, // ~November 1, 2022 (plausible budget accessory)
    initialStock: 450,
    unitsSold: 312,
    description: "Affordable wired USB gamepad...",
    // ... rest unchanged
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
    inStock: false,
    colors: ["Black with Green Accents", "Black Frameless"],
    selectedColor: "Black with Green Accents",
    launchDate: 1704067200000, // ~January 1, 2024 (plausible local model)
    initialStock: 80,
    unitsSold: 80,
    description: "Frameless 43-inch Full HD Android Smart TV...",
    // ... rest unchanged
  },
  // 6. MacBook Air M1
  {
    id: 1006,
    slug: "macbook-air-m1-8-256",
    title: "Apple MacBook Air (M1, 2020) 8GB/256GB",
    category: "Laptop & PC",
    thumbnail: "/src/assets/Products/macbook-air-m1-space-gray.webp",
    images: ["/src/assets/Products/macbook-air-m1-space-gray.webp"],
    price: 699,
    originalPrice: 999,
    salesPercentage: 30,
    promoCode: "M1CLASSIC",
    inStock: true,
    colors: ["Space Gray"],
    selectedColor: "Space Gray",
    launchDate: 1605571200000, // November 17, 2020
    initialStock: 95,
    unitsSold: 78,
    description: "Iconic fanless MacBook Air...",
    // ... rest unchanged
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
    launchDate: 1731024000000, // November 8, 2024
    initialStock: 55,
    unitsSold: 31,
    description: "All-in-one 24-inch iMac...",
    // ... rest unchanged
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
    launchDate: 1726790400000, // September 20, 2024
    initialStock: 140,
    unitsSold: 89,
    description: "Pro-level iPhone...",
    // ... rest unchanged
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
    launchDate: 1685577600000, // ~June 1, 2023 (plausible generic)
    initialStock: 320,
    unitsSold: 198,
    description: "Compact rechargeable portable blender...",
    // ... rest unchanged
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
    launchDate: 1741824000000, // March 12, 2025
    initialStock: 110,
    unitsSold: 67,
    description: "Latest ultra-thin MacBook Air...",
    // ... rest unchanged
  }
];