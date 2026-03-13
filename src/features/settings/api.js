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
    launchDate: 1695254400000, // September 22, 2023
    initialStock: 180,
    unitsSold: 124,
    description: "The rugged Apple Watch Ultra is built for extreme adventures with a 49mm aerospace-grade titanium case, the brightest Apple Watch display ever (up to 3000 nits), up to 36 hours battery life (60 in low-power mode), dual-frequency GPS for precision tracking, depth gauge for diving up to 40m, siren for emergencies, and advanced health features like ECG, blood oxygen, temperature sensing, and sleep apnea notifications. Perfect for athletes, explorers, and endurance users.",
    specifications: {
      case: "49mm aerospace-grade titanium",
      display: "Always-On Retina LTPO OLED, up to 3000 nits brightness",
      chip: "S9 SiP with 64-bit dual-core processor",
      battery: "Up to 36 hours normal use, 60 hours low-power mode",
      waterResistance: "100m swimproof, EN13319 dive certified",
      features: "Action button (customizable), Double tap gesture, Precision finding, Satellite connectivity, Crash detection, Fall detection",
      sensors: "Blood oxygen, ECG, Temperature, High/low heart rate, Compass, Altimeter, Depth gauge",
      connectivity: "GPS + Cellular, Wi-Fi, Bluetooth 5.3, Ultra Wideband"
    },
    rating: 4.9,
    reviewCount: 2456,
    reviews: [
      { user: "Alex T.", comment: "Incredible for hiking and diving – battery lasts forever!", rating: 5 }
    ]
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
    launchDate: 1685577600000, // ~June 2023
    initialStock: 65,
    unitsSold: 42,
    description: "Compact foldable electric treadmill for home use with silent motor, adjustable incline levels, LED display for speed/time/distance/calories, and safety features like emergency stop clip. Ideal for walking, jogging, and light running in small spaces – supports up to 120kg user weight with cushioned deck for joint protection.",
    specifications: {
      motorPower: "2.0-3.0 HP peak",
      speedRange: "1-12 km/h",
      incline: "3-5 manual/auto levels",
      runningSurface: "40-45 cm x 110-125 cm belt",
      display: "LED showing speed, time, distance, calories, pulse",
      features: "Foldable design, transport wheels, safety key, pulse sensors on handles",
      maxUserWeight: "120kg",
      programs: "12 preset workouts"
    },
    rating: 4.5,
    reviewCount: 812,
    reviews: [
      { user: "Sara M.", comment: "Quiet and easy to store – great for apartment workouts!", rating: 4 }
    ]
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
    inStock: false,
    colors: ["Sky Blue", "Space Gray"],
    selectedColor: "Sky Blue",
    launchDate: 1729641600000, // October 23, 2024
    initialStock: 120,
    unitsSold: 120,
    description: "Ultra-portable iPad mini with powerful A17 Pro chip for Apple Intelligence, 8.3-inch Liquid Retina display, all-day battery, support for Apple Pencil Pro, and pro features like USB-C. Perfect for reading, note-taking, sketching, and on-the-go productivity.",
    specifications: {
      display: "8.3-inch Liquid Retina (2266x1488), P3 wide color, True Tone",
      chip: "A17 Pro with 6-core CPU, 5-core GPU, 16-core Neural Engine",
      memoryStorage: "128GB-512GB options",
      camera: "12MP rear (4K video), 12MP front Ultra Wide with Center Stage",
      battery: "Up to 10 hours web/video",
      connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB-C",
      features: "Apple Pencil Pro support, Touch ID in power button"
    },
    rating: 4.8,
    reviewCount: 1345,
    reviews: [
      { user: "Jamie L.", comment: "Super fast and portable – Apple Intelligence features are game-changing!", rating: 5 }
    ]
  },
  // ... (continuing with full descriptions for the remaining products)

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
    launchDate: 1667260800000, // ~Nov 2022
    initialStock: 450,
    unitsSold: 312,
    description: "Affordable wired USB gamepad with dual vibration motors, ergonomic design, 12 action buttons, analog sticks, and plug-and-play compatibility for PC gaming. Great for retro emulators, racing, fighting, and casual games.",
    specifications: {
      connectivity: "USB 2.0 wired (1.5m cable)",
      buttons: "12 fire/action buttons + D-pad + Start/Select",
      features: "Dual vibration feedback, analog/digital mode switch",
      compatibility: "Windows PC, supports XInput/DirectInput",
      design: "Ergonomic grips for comfort during long sessions"
    },
    rating: 4.4,
    reviewCount: 567,
    reviews: [
      { user: "Gamer X", comment: "Solid build for the price – vibrations feel great in racing games.", rating: 4 }
    ]
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
    launchDate: 1704067200000, // ~Jan 2024
    initialStock: 80,
    unitsSold: 80,
    description: "Frameless 43-inch Full HD Android Smart TV with Google certification, built-in apps, voice control, double glass panel for slim design, and vibrant LED display. Enjoy streaming, gaming, and 4K upscaling on a budget-friendly big screen.",
    specifications: {
      screenSize: "43 inch frameless",
      resolution: "Full HD (1920x1080)",
      displayType: "Direct LED, 16:9 aspect",
      smartOS: "Android TV with Google Play Store",
      audio: "10W x 2 speakers",
      connectivity: "HDMI, USB, Wi-Fi, Bluetooth",
      features: "Voice remote, Chromecast built-in, app store access"
    },
    rating: 4.6,
    reviewCount: 890,
    reviews: [
      { user: "TV Fan", comment: "Great picture for the price – Android apps load fast.", rating: 5 }
    ]
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
    launchDate: 1605571200000, // November 17, 2020
    initialStock: 95,
    unitsSold: 78,
    description: "Iconic fanless MacBook Air with revolutionary M1 chip for blazing performance, up to 18 hours battery life, stunning 13.3-inch Retina display, and silent operation. Still a powerhouse for everyday tasks, creative work, and light editing in 2026.",
    specifications: {
      chip: "Apple M1 with 8-core CPU, 7-core GPU",
      memory: "8GB unified",
      storage: "256GB SSD",
      display: "13.3-inch Retina (2560x1600), P3 wide color",
      battery: "Up to 18 hours wireless web/video",
      ports: "Two Thunderbolt/USB 4, headphone jack",
      features: "Touch ID, Magic Keyboard, 720p FaceTime HD camera"
    },
    rating: 4.8,
    reviewCount: 3200,
    reviews: [
      { user: "Dev R.", comment: "Still flies through coding and browsing – best value used Mac.", rating: 5 }
    ]
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
    description: "All-in-one 24-inch iMac with vibrant 4.5K Retina display, powerful M4 chip for Apple Intelligence, slim design, and built-in accessories. Ideal for home office, creative pros, and family use with excellent color accuracy and performance.",
    specifications: {
      display: "24-inch 4.5K Retina (4480x2520), P3 wide color",
      chip: "M4 with 8-10 core CPU/GPU options",
      memory: "16GB+ unified",
      storage: "256GB+ SSD",
      camera: "12MP Center Stage",
      audio: "Six-speaker system with Spatial Audio",
      ports: "Thunderbolt/USB 4, headphone jack"
    },
    rating: 4.9,
    reviewCount: 1789,
    reviews: [
      { user: "Creative P.", comment: "Colors pop on the 4.5K screen – perfect for photo/video editing.", rating: 5 }
    ]
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
    description: "Pro-level iPhone with A18 Pro chip, advanced camera system (48MP main + ultra-wide/telephoto), titanium frame, Action button, and Apple Intelligence features. Stunning display and all-day battery for photography, gaming, and productivity.",
    specifications: {
      display: "6.3-inch Super Retina XDR OLED, 120Hz ProMotion",
      chip: "A18 Pro",
      camera: "48MP Fusion main, 48MP ultra-wide, 12MP 5x telephoto",
      battery: "Up to 27 hours video playback",
      build: "Grade 5 titanium frame",
      features: "Apple Intelligence, Camera Control button, USB-C"
    },
    rating: 4.8,
    reviewCount: 4567,
    reviews: [
      { user: "Photo Pro", comment: "Camera system is unreal – 48MP shots look incredible.", rating: 5 }
    ]
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
    launchDate: 1685577600000, // ~June 2023
    initialStock: 320,
    unitsSold: 198,
    description: "Compact rechargeable portable blender/grinder for smoothies, shakes, spices, and baby food on the go. USB charging, multiple blades for blending/ grinding, and leak-proof design – perfect for travel, gym, or office.",
    specifications: {
      capacity: "400-600ml jar",
      power: "Rechargeable battery, USB-C",
      blades: "Stainless steel 6-blade for ice crushing & grinding",
      features: "One-touch operation, safety lock, BPA-free materials",
      modes: "Blend/grind/pulse"
    },
    rating: 4.6,
    reviewCount: 678,
    reviews: [
      { user: "Fitness G.", comment: "Makes perfect protein shakes on the go – easy to clean too.", rating: 5 }
    ]
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
    description: "Latest ultra-thin MacBook Air with M4 chip for exceptional speed and efficiency, Liquid Retina display, up to 18 hours battery, and built for Apple Intelligence. Ideal for students, creators, and professionals needing portable power.",
    specifications: {
      chip: "Apple M4 with 10-core CPU, 8-10 core GPU",
      memory: "16GB unified",
      storage: "256GB SSD",
      display: "13.6-inch Liquid Retina (2560x1664), P3 wide color",
      battery: "Up to 18 hours",
      ports: "Two Thunderbolt/USB 4, MagSafe charging",
      features: "12MP Center Stage camera, Touch ID, Spatial Audio"
    },
    rating: 4.9,
    reviewCount: 2100,
    reviews: [
      { user: "Student Dev", comment: "Super light, long battery, and handles multitasking effortlessly.", rating: 5 }
    ]
  }
];