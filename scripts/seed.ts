import { neon } from "@neondatabase/serverless";

async function seed() {
  const databaseUrl = process.env.POSTGRES_URL;
  if (!databaseUrl) {
    throw new Error("POSTGRES_URL environment variable is not set. Run: vercel env pull .env");
  }
  const sql = neon(databaseUrl);

  // Create the routers table
  await sql`
    CREATE TABLE IF NOT EXISTS routers (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      brand VARCHAR(100) NOT NULL,
      image_url TEXT NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      wifi_standard VARCHAR(50) NOT NULL,
      speed VARCHAR(100) NOT NULL,
      frequency_bands VARCHAR(100) NOT NULL,
      ports TEXT NOT NULL,
      description TEXT NOT NULL,
      features TEXT[] NOT NULL,
      rating DECIMAL(2, 1) NOT NULL
    )
  `;

  // Seed data for 10 popular WiFi routers
  const routers = [
    {
      slug: "asus-rt-ax86u-pro",
      name: "ASUS RT-AX86U Pro",
      brand: "ASUS",
      image_url:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=400&fit=crop",
      price: 249.99,
      wifi_standard: "WiFi 6 (802.11ax)",
      speed: "5700 Mbps",
      frequency_bands: "Dual-band (2.4 GHz + 5 GHz)",
      ports: "1x 2.5G WAN, 4x Gigabit LAN, 1x USB 3.2, 1x USB 2.0",
      description:
        "The ASUS RT-AX86U Pro is a high-performance dual-band WiFi 6 router designed for gaming and heavy streaming. It features AiMesh support for whole-home coverage, AiProtection Pro powered by Trend Micro for network security, and adaptive QoS for optimized traffic management. With its powerful 2.0 GHz quad-core processor, it handles multiple connected devices effortlessly.",
      features: [
        "AiMesh compatible for mesh networking",
        "AiProtection Pro lifetime security",
        "Adaptive QoS traffic management",
        "Gaming port with priority",
        "OFDMA and MU-MIMO technology",
        "WPA3 security support",
        "VPN Fusion support",
        "Parental controls",
      ],
      rating: 4.7,
    },
    {
      slug: "tp-link-archer-ax73",
      name: "TP-Link Archer AX73",
      brand: "TP-Link",
      image_url:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop",
      price: 149.99,
      wifi_standard: "WiFi 6 (802.11ax)",
      speed: "5400 Mbps",
      frequency_bands: "Dual-band (2.4 GHz + 5 GHz)",
      ports: "1x Gigabit WAN, 4x Gigabit LAN, 1x USB 3.0",
      description:
        "The TP-Link Archer AX73 delivers blazing-fast WiFi 6 speeds at an incredible value. Equipped with a 1.5 GHz tri-core processor, it powers through demanding tasks while maintaining stability across all connected devices. HomeShield provides comprehensive network security and robust parental controls to keep your family safe online.",
      features: [
        "OneMesh compatible for seamless roaming",
        "HomeShield security suite",
        "OFDMA for efficient multi-device communication",
        "Beamforming for targeted coverage",
        "Smart Connect band steering",
        "Amazon Alexa compatible",
        "Easy setup via Tether app",
        "IPv6 support",
      ],
      rating: 4.5,
    },
    {
      slug: "netgear-nighthawk-raxe500",
      name: "Netgear Nighthawk RAXE500",
      brand: "Netgear",
      image_url:
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
      price: 399.99,
      wifi_standard: "WiFi 6E (802.11ax)",
      speed: "10800 Mbps",
      frequency_bands: "Tri-band (2.4 GHz + 5 GHz + 6 GHz)",
      ports: "1x 2.5G WAN, 4x Gigabit LAN, 1x USB 3.0",
      description:
        "The Netgear Nighthawk RAXE500 is a premium tri-band WiFi 6E router that unlocks the new 6 GHz band for ultra-fast, interference-free connectivity. With combined speeds up to 10.8 Gbps, it delivers exceptional performance for 4K/8K streaming, VR gaming, and large file transfers. Its 1.8 GHz quad-core processor ensures smooth operation even under heavy load.",
      features: [
        "6 GHz band for congestion-free streaming",
        "12-stream WiFi for maximum throughput",
        "NETGEAR Armor cybersecurity",
        "WPA3 enterprise-grade encryption",
        "Smart parental controls",
        "Dynamic QoS bandwidth allocation",
        "ReadyCloud USB access",
        "Works with Amazon Alexa and Google Assistant",
      ],
      rating: 4.3,
    },
    {
      slug: "linksys-hydra-pro-6e",
      name: "Linksys Hydra Pro 6E",
      brand: "Linksys",
      image_url:
        "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=400&fit=crop",
      price: 299.99,
      wifi_standard: "WiFi 6E (802.11ax)",
      speed: "6600 Mbps",
      frequency_bands: "Tri-band (2.4 GHz + 5 GHz + 6 GHz)",
      ports: "1x Gigabit WAN, 4x Gigabit LAN, 1x USB 3.0",
      description:
        "The Linksys Hydra Pro 6E brings next-generation WiFi 6E performance to your home with access to the ultra-clean 6 GHz frequency band. Its sleek design houses powerful hardware that covers up to 2,700 square feet while supporting 55+ devices simultaneously. The Linksys app makes setup and management a breeze.",
      features: [
        "EasyMesh compatible",
        "Intelligent Mesh technology",
        "55+ simultaneous device support",
        "2,700 sq ft coverage",
        "Linksys app for easy management",
        "WPA3 personal security",
        "Automatic firmware updates",
        "Guest network access",
      ],
      rating: 4.2,
    },
    {
      slug: "tp-link-deco-xe75",
      name: "TP-Link Deco XE75",
      brand: "TP-Link",
      image_url:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      price: 329.99,
      wifi_standard: "WiFi 6E (802.11ax)",
      speed: "5400 Mbps",
      frequency_bands: "Tri-band (2.4 GHz + 5 GHz + 6 GHz)",
      ports: "3x Gigabit per unit",
      description:
        "The TP-Link Deco XE75 is a WiFi 6E mesh system that blankets your entire home in fast, reliable coverage. The tri-band system uses the 6 GHz band as a dedicated backhaul channel, ensuring maximum speeds reach every corner. Each unit covers up to 2,500 sq ft, and you can add more units to expand coverage seamlessly.",
      features: [
        "Whole-home mesh coverage up to 5,500 sq ft (2-pack)",
        "6 GHz dedicated backhaul",
        "AI-driven mesh for optimal routing",
        "HomeShield security built-in",
        "Supports 200+ connected devices",
        "Seamless roaming throughout the home",
        "Easy setup via Deco app",
        "Backward compatible with all WiFi devices",
      ],
      rating: 4.6,
    },
    {
      slug: "asus-rog-rapture-gt-ax11000",
      name: "ASUS ROG Rapture GT-AX11000",
      brand: "ASUS",
      image_url:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=400&fit=crop",
      price: 449.99,
      wifi_standard: "WiFi 6 (802.11ax)",
      speed: "11000 Mbps",
      frequency_bands: "Tri-band (2.4 GHz + 5 GHz + 5 GHz)",
      ports:
        "1x 2.5G WAN, 4x Gigabit LAN, 1x Gigabit gaming port, 2x USB 3.0",
      description:
        "The ASUS ROG Rapture GT-AX11000 is the ultimate gaming router built for competitive gamers who demand the lowest latency and highest speeds. Its tri-band design dedicates an entire 5 GHz band to gaming traffic while the other bands handle everything else. The aggressive design with RGB lighting fits right into any gaming setup.",
      features: [
        "Triple-level game acceleration",
        "2.5G gaming port for wired gaming",
        "AiMesh support for mesh expansion",
        "Game Radar for ping monitoring",
        "DFS channels for interference reduction",
        "VPN Fusion for simultaneous VPN connections",
        "RGB Aura lighting",
        "AiProtection Pro security",
      ],
      rating: 4.4,
    },
    {
      slug: "netgear-orbi-rbke963",
      name: "Netgear Orbi RBKE963",
      brand: "Netgear",
      image_url:
        "https://images.unsplash.com/photo-1610552050890-244d8ff5b5ff?w=600&h=400&fit=crop",
      price: 1499.99,
      wifi_standard: "WiFi 6E (802.11ax)",
      speed: "10800 Mbps",
      frequency_bands: "Quad-band (2.4 GHz + 5 GHz + 5 GHz + 6 GHz)",
      ports: "1x 10G WAN, 4x Gigabit LAN per unit, 1x USB 3.0",
      description:
        "The Netgear Orbi RBKE963 is the flagship mesh WiFi system that delivers unparalleled performance across your entire home. Its quad-band design includes a dedicated 6 GHz backhaul for blazing-fast node-to-node communication. The 3-pack covers up to 9,000 square feet, making it ideal for large homes and estates.",
      features: [
        "9,000 sq ft coverage (3-pack)",
        "Quad-band with dedicated 6 GHz backhaul",
        "10 Gigabit WAN port",
        "NETGEAR Armor security included",
        "Supports 200+ connected devices",
        "Implicit and explicit beamforming",
        "Smart parental controls",
        "Voice control with Alexa and Google",
      ],
      rating: 4.5,
    },
    {
      slug: "google-nest-wifi-pro",
      name: "Google Nest WiFi Pro",
      brand: "Google",
      image_url:
        "https://images.unsplash.com/photo-1558089687-f282d8132652?w=600&h=400&fit=crop",
      price: 399.99,
      wifi_standard: "WiFi 6E (802.11ax)",
      speed: "5400 Mbps",
      frequency_bands: "Tri-band (2.4 GHz + 5 GHz + 6 GHz)",
      ports: "2x Gigabit Ethernet per unit",
      description:
        "Google Nest WiFi Pro is a sleek, minimalist mesh WiFi 6E system designed for the modern smart home. Each compact unit blends seamlessly into your home decor while delivering tri-band coverage. With deep Google Home integration, you can manage your network, prioritize devices, and run speed tests all through the Google Home app.",
      features: [
        "Compact and stylish design",
        "Deep Google Home integration",
        "Automatic software updates",
        "Matter smart home support",
        "Built-in Thread border router",
        "Priority device bandwidth allocation",
        "Family WiFi management",
        "Automatic network optimization",
      ],
      rating: 4.3,
    },
    {
      slug: "ubiquiti-unifi-dream-router",
      name: "Ubiquiti UniFi Dream Router",
      brand: "Ubiquiti",
      image_url:
        "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?w=600&h=400&fit=crop",
      price: 199.99,
      wifi_standard: "WiFi 6 (802.11ax)",
      speed: "4800 Mbps",
      frequency_bands: "Dual-band (2.4 GHz + 5 GHz)",
      ports: "1x GbE WAN, 4x GbE LAN, 1x PoE output",
      description:
        "The Ubiquiti UniFi Dream Router is a compact all-in-one networking appliance that combines a WiFi 6 router, UniFi OS console, and network security gateway. Popular with prosumers and small businesses, it offers enterprise-grade network management through the powerful UniFi dashboard while remaining accessible to home users.",
      features: [
        "Built-in UniFi OS console",
        "Enterprise-grade traffic management",
        "Threat detection and IDS/IPS",
        "VLAN support for network segmentation",
        "PoE output for access points",
        "UniFi Network app management",
        "Automatic failover support",
        "Deep packet inspection",
      ],
      rating: 4.6,
    },
    {
      slug: "eero-pro-6e",
      name: "Eero Pro 6E",
      brand: "Eero",
      image_url:
        "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=600&h=400&fit=crop",
      price: 549.99,
      wifi_standard: "WiFi 6E (802.11ax)",
      speed: "4200 Mbps",
      frequency_bands: "Tri-band (2.4 GHz + 5 GHz + 6 GHz)",
      ports: "2x Gigabit Ethernet per unit, 1x USB-C",
      description:
        "The Eero Pro 6E is Amazon's premium tri-band mesh WiFi system that brings WiFi 6E speeds to every room in your home. Its elegant, compact design hides powerful hardware that covers up to 6,000 square feet with the 3-pack. Deep Alexa integration and the intuitive Eero app make network management effortless.",
      features: [
        "6,000 sq ft coverage (3-pack)",
        "TrueMesh routing technology",
        "Eero Secure security suite",
        "Deep Amazon Alexa integration",
        "Automatic updates and threat detection",
        "Cross-compatible with all Eero devices",
        "Content filtering and ad blocking",
        "Activity insights and usage reports",
      ],
      rating: 4.5,
    },
  ];

  for (const router of routers) {
    await sql`
      INSERT INTO routers (slug, name, brand, image_url, price, wifi_standard, speed, frequency_bands, ports, description, features, rating)
      VALUES (
        ${router.slug},
        ${router.name},
        ${router.brand},
        ${router.image_url},
        ${router.price},
        ${router.wifi_standard},
        ${router.speed},
        ${router.frequency_bands},
        ${router.ports},
        ${router.description},
        ${router.features},
        ${router.rating}
      )
      ON CONFLICT (slug) DO UPDATE SET
        name = EXCLUDED.name,
        brand = EXCLUDED.brand,
        image_url = EXCLUDED.image_url,
        price = EXCLUDED.price,
        wifi_standard = EXCLUDED.wifi_standard,
        speed = EXCLUDED.speed,
        frequency_bands = EXCLUDED.frequency_bands,
        ports = EXCLUDED.ports,
        description = EXCLUDED.description,
        features = EXCLUDED.features,
        rating = EXCLUDED.rating
    `;
  }

  console.log("Seeded 10 routers successfully!");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
  });
