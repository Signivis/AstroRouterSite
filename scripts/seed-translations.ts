import { neon } from "@neondatabase/serverless";

const DATABASE_URL = process.env.POSTGRES_URL!;
const sql = neon(DATABASE_URL);

async function seedUITranslations() {
  const translations: Record<string, Record<string, string>> = {
    es: {
      "hero.title": "Encuentra Tu Router WiFi Perfecto",
      "hero.description": "Compara los 10 mejores routers WiFi del mercado. Desde sistemas mesh WiFi 7 ultrarrápidos hasta opciones WiFi 6 económicas, encuentra el router que se adapte a tus necesidades.",
      "hero.cta": "Ver Routers",
      "stats.top_routers": "Mejores Routers",
      "stats.major_brands": "Grandes Marcas",
      "stats.latest_standard": "Último Estándar",
      "stats.avg_rating": "Valoración Media",
      "collection.title": "Nuestra Colección de Routers",
      "collection.description": "Routers seleccionados, probados y evaluados por expertos en redes",
      "empty.title": "No se encontraron routers",
      "empty.description": "Ejecuta npm run db:seed para llenar la base de datos.",
      "card.view_details": "Ver Detalles",
      "nav.home": "Inicio",
      "detail.back": "Volver a Todos los Routers",
      "detail.specs": "Especificaciones Técnicas",
      "detail.features": "Características Principales",
      "detail.wifi_standard": "Estándar WiFi",
      "detail.max_speed": "Velocidad Máxima",
      "detail.frequency_bands": "Bandas de Frecuencia",
      "detail.ports": "Puertos",
      "detail.rating": "Valoración",
      "detail.in_stock": "En Stock",
      "footer.rights": "Todos los derechos reservados.",
      "lang.name": "Español",
    },
    fr: {
      "hero.title": "Trouvez Votre Routeur WiFi Idéal",
      "hero.description": "Comparez les 10 meilleurs routeurs WiFi du marché. Des systèmes mesh WiFi 7 ultra-rapides aux options WiFi 6 abordables, trouvez le routeur qui correspond à vos besoins.",
      "hero.cta": "Parcourir les Routeurs",
      "stats.top_routers": "Meilleurs Routeurs",
      "stats.major_brands": "Grandes Marques",
      "stats.latest_standard": "Dernier Standard",
      "stats.avg_rating": "Note Moyenne",
      "collection.title": "Notre Collection de Routeurs",
      "collection.description": "Routeurs sélectionnés, testés et évalués par des experts en réseaux",
      "empty.title": "Aucun routeur trouvé",
      "empty.description": "Exécutez npm run db:seed pour remplir la base de données.",
      "card.view_details": "Voir les Détails",
      "nav.home": "Accueil",
      "detail.back": "Retour à Tous les Routeurs",
      "detail.specs": "Spécifications Techniques",
      "detail.features": "Caractéristiques Principales",
      "detail.wifi_standard": "Standard WiFi",
      "detail.max_speed": "Vitesse Maximale",
      "detail.frequency_bands": "Bandes de Fréquence",
      "detail.ports": "Ports",
      "detail.rating": "Note",
      "detail.in_stock": "En Stock",
      "footer.rights": "Tous droits réservés.",
      "lang.name": "Français",
    },
    de: {
      "hero.title": "Finden Sie Ihren Perfekten WLAN-Router",
      "hero.description": "Vergleichen Sie die 10 besten WLAN-Router auf dem Markt. Von blitzschnellen WiFi 7 Mesh-Systemen bis hin zu preiswerten WiFi 6 Optionen — finden Sie den Router, der zu Ihren Anforderungen passt.",
      "hero.cta": "Router Durchsuchen",
      "stats.top_routers": "Top-Router",
      "stats.major_brands": "Große Marken",
      "stats.latest_standard": "Neuester Standard",
      "stats.avg_rating": "Durchschn. Bewertung",
      "collection.title": "Unsere Router-Kollektion",
      "collection.description": "Handverlesene Router, getestet und bewertet von Netzwerk-Experten",
      "empty.title": "Keine Router gefunden",
      "empty.description": "Führen Sie npm run db:seed aus, um die Datenbank zu füllen.",
      "card.view_details": "Details Anzeigen",
      "nav.home": "Startseite",
      "detail.back": "Zurück zu Allen Routern",
      "detail.specs": "Technische Spezifikationen",
      "detail.features": "Hauptmerkmale",
      "detail.wifi_standard": "WLAN-Standard",
      "detail.max_speed": "Maximale Geschwindigkeit",
      "detail.frequency_bands": "Frequenzbänder",
      "detail.ports": "Anschlüsse",
      "detail.rating": "Bewertung",
      "detail.in_stock": "Auf Lager",
      "footer.rights": "Alle Rechte vorbehalten.",
      "lang.name": "Deutsch",
    },
  };

  for (const [locale, strings] of Object.entries(translations)) {
    for (const [key, value] of Object.entries(strings)) {
      await sql`
        INSERT INTO ui_translations (locale, key, value)
        VALUES (${locale}, ${key}, ${value})
        ON CONFLICT (locale, key) DO UPDATE SET value = EXCLUDED.value
      `;
    }
  }
  console.log("UI translations seeded.");
}

async function seedRouterTranslations() {
  // Router translations: [router_id, locale, description, features[]]
  const translations: Array<[number, string, string, string[]]> = [
    // === Router 1: ASUS ROG Rapture GT-BE98 Pro ===
    [1, "es", "El ASUS ROG Rapture GT-BE98 Pro es un router gaming WiFi 7 de gama alta diseñado para un rendimiento de nivel competitivo, con tecnología RangeBoost Plus y operación multi-enlace (MLO). Ofrece aceleración de juegos dedicada, QoS avanzado y VPN gaming integrada para jugar en línea sin latencia.", [
      "WiFi 7 con Operación Multi-Enlace (MLO)", "Soporte de ancho de banda de canal de 320 MHz", "Conexión inalámbrica simultánea de cuatro bandas", "Puertos 10G WAN + 10G LAN", "Soporte de malla ASUS AiMesh para todo el hogar", "VPN gaming integrada con servidores en más de 50 países", "Analizador de tráfico avanzado y QoS", "Pantalla OLED de estado del sistema"
    ]],
    [1, "fr", "Le ASUS ROG Rapture GT-BE98 Pro est un routeur gaming WiFi 7 haut de gamme conçu pour des performances de niveau compétitif, avec la technologie RangeBoost Plus et le fonctionnement multi-lien (MLO). Il offre une accélération de jeu dédiée, un QoS avancé et un VPN gaming intégré pour jouer en ligne sans latence.", [
      "WiFi 7 avec Opération Multi-Lien (MLO)", "Prise en charge de la bande passante de canal de 320 MHz", "Sans fil simultané quatre bandes", "Ports 10G WAN + 10G LAN", "Support maillé ASUS AiMesh pour toute la maison", "VPN gaming intégré avec serveurs dans plus de 50 pays", "Analyseur de trafic avancé et QoS", "Écran OLED d'état du système"
    ]],
    [1, "de", "Der ASUS ROG Rapture GT-BE98 Pro ist ein High-End WiFi 7 Gaming-Router für wettbewerbsfähige Leistung mit RangeBoost Plus Technologie und Multi-Link-Betrieb (MLO). Er bietet dedizierte Gaming-Beschleunigung, erweitertes QoS und ein integriertes Gaming-VPN für latenzfreies Online-Spielen.", [
      "WiFi 7 mit Multi-Link-Betrieb (MLO)", "320 MHz Kanalbandbreite Unterstützung", "Gleichzeitiger Vierbandempfang", "10G WAN + 10G LAN Anschlüsse", "ASUS AiMesh Whole-Home Mesh-Unterstützung", "Integriertes Gaming-VPN mit Servern in über 50 Ländern", "Erweiterter Traffic-Analysator und QoS", "OLED-Systemstatusanzeige"
    ]],

    // === Router 2: TP-Link Archer BE800 ===
    [2, "es", "El TP-Link Archer BE800 es uno de los routers WiFi 7 tri-banda más capaces en su rango de precio, con hasta 19 Gbps de rendimiento agregado con clasificación BE19000. Soporta la modulación 4K-QAM más reciente y Operación Multi-Enlace para una latencia drásticamente reducida.", [
      "WiFi 7 BE19000 tri-banda", "4K-QAM para un 20% más de rendimiento", "Operación Multi-Enlace (MLO)", "Puerto WAN de fibra 10G SFP+", "Suite de seguridad HomeCare Pro", "Compatible con TP-Link OneMesh", "Controles parentales avanzados", "4T4R simultáneo en todas las bandas"
    ]],
    [2, "fr", "Le TP-Link Archer BE800 est l'un des routeurs WiFi 7 tri-bande les plus performants de sa gamme de prix, offrant jusqu'à 19 Gbps de débit agrégé avec la classification BE19000. Il supporte la dernière modulation 4K-QAM et l'Opération Multi-Lien pour une latence considérablement réduite.", [
      "WiFi 7 BE19000 tri-bande", "4K-QAM pour 20% de débit en plus", "Opération Multi-Lien (MLO)", "Port WAN fibre 10G SFP+", "Suite de sécurité HomeCare Pro", "Compatible TP-Link OneMesh", "Contrôles parentaux avancés", "4T4R simultané sur toutes les bandes"
    ]],
    [2, "de", "Der TP-Link Archer BE800 ist einer der leistungsfähigsten WiFi 7 Tri-Band-Router in seiner Preisklasse und liefert bis zu 19 Gbps aggregierten Durchsatz mit BE19000-Klassifizierung. Er unterstützt die neueste 4K-QAM-Modulation und Multi-Link-Betrieb für drastisch reduzierte Latenz.", [
      "WiFi 7 BE19000 Tri-Band", "4K-QAM für 20% höheren Durchsatz", "Multi-Link-Betrieb (MLO)", "10G SFP+ Glasfaser-WAN-Anschluss", "HomeCare Pro Sicherheitssuite", "TP-Link OneMesh kompatibel", "Erweiterte Kindersicherung", "Gleichzeitig 4T4R auf allen Bändern"
    ]],

    // === Router 3: Netgear Nighthawk RS700S ===
    [3, "es", "El Netgear Nighthawk RS700S es el router WiFi 7 premium de Netgear, que ofrece una plataforma limpia y potente para redes domésticas exigentes. Cuenta con el chipset Qualcomm Networking Pro 820 para un rendimiento multi-gig consistente en las tres bandas.", [
      "WiFi 7 BE19000 tri-banda", "Chipset Qualcomm Networking Pro 820", "Ciberseguridad Netgear Armor (Bitdefender)", "Puertos 10G WAN + 10G LAN", "Calidad de Servicio automática (QoS)", "Dirección inteligente de bandas Smart Connect", "OFDMA y MU-MIMO", "Control parental inteligente Circle"
    ]],
    [3, "fr", "Le Netgear Nighthawk RS700S est le routeur WiFi 7 premium de Netgear, offrant une plateforme propre et puissante pour les réseaux domestiques exigeants. Il embarque le chipset Qualcomm Networking Pro 820 pour des performances multi-gig constantes sur les trois bandes.", [
      "WiFi 7 BE19000 tri-bande", "Chipset Qualcomm Networking Pro 820", "Cybersécurité Netgear Armor (Bitdefender)", "Ports 10G WAN + 10G LAN", "Qualité de Service automatique (QoS)", "Orientation intelligente des bandes Smart Connect", "OFDMA et MU-MIMO", "Contrôle parental intelligent Circle"
    ]],
    [3, "de", "Der Netgear Nighthawk RS700S ist Netgears erstklassiger WiFi 7 Router und bietet eine saubere und leistungsstarke Plattform für anspruchsvolle Heimnetzwerke. Er verfügt über den Qualcomm Networking Pro 820 Chipsatz für konsistente Multi-Gig-Leistung über alle drei Bänder.", [
      "WiFi 7 BE19000 Tri-Band", "Qualcomm Networking Pro 820 Chipsatz", "Netgear Armor Cybersicherheit (Bitdefender)", "10G WAN + 10G LAN Anschlüsse", "Automatische Quality of Service (QoS)", "Intelligente Bandsteuerung Smart Connect", "OFDMA und MU-MIMO", "Circle intelligente Kindersicherung"
    ]],

    // === Router 4: ASUS ZenWiFi Pro ET12 ===
    [4, "es", "El ASUS ZenWiFi Pro ET12 es un sistema mesh WiFi 6E tri-banda diseñado para hogares grandes, vendido en paquete de 2 unidades con cobertura de hasta 500 m². Su backhaul dedicado de 6 GHz garantiza que las velocidades más rápidas lleguen a cada nodo sin congestionar las bandas de clientes.", [
      "Sistema mesh WiFi 6E tri-banda (paquete de 2)", "Backhaul inalámbrico dedicado de 6 GHz", "Cobertura de hasta 500 m²", "Seguridad ASUS AiProtection Pro", "VPN Instant Guard", "Soporte OFDMA + MU-MIMO", "Compatible con AiMesh para expansión", "Controles parentales avanzados con filtrado de contenido"
    ]],
    [4, "fr", "Le ASUS ZenWiFi Pro ET12 est un système mesh WiFi 6E tri-bande conçu pour les grandes maisons, vendu en pack de 2 unités couvrant jusqu'à 500 m². Son backhaul dédié à 6 GHz garantit que les vitesses les plus rapides atteignent chaque nœud sans encombrer les bandes clients.", [
      "Système mesh WiFi 6E tri-bande (pack de 2)", "Backhaul sans fil dédié 6 GHz", "Couverture jusqu'à 500 m²", "Sécurité ASUS AiProtection Pro", "VPN Instant Guard", "Support OFDMA + MU-MIMO", "Compatible AiMesh pour extension", "Contrôles parentaux avancés avec filtrage de contenu"
    ]],
    [4, "de", "Das ASUS ZenWiFi Pro ET12 ist ein Tri-Band WiFi 6E Mesh-System für große Häuser, erhältlich als 2er-Pack mit einer Abdeckung von bis zu 500 m². Der dedizierte 6 GHz Backhaul stellt sicher, dass die schnellsten Geschwindigkeiten jeden Knoten erreichen, ohne die Client-Bänder zu belasten.", [
      "WiFi 6E Tri-Band Mesh-System (2er-Pack)", "Dedizierter 6 GHz Wireless-Backhaul", "Abdeckung bis zu 500 m²", "ASUS AiProtection Pro Sicherheit", "Instant Guard VPN", "OFDMA + MU-MIMO Unterstützung", "AiMesh-kompatibel für Erweiterung", "Erweiterte Kindersicherung mit Inhaltsfilterung"
    ]],

    // === Router 5: Amazon eero Pro 7 ===
    [5, "es", "El eero Pro 7 es el router mesh WiFi 7 insignia de Amazon, que combina una configuración increíblemente simple con un potente rendimiento tri-banda. Se integra perfectamente con el ecosistema de Amazon, incluyendo controles por voz con Alexa y dispositivos de seguridad Ring.", [
      "Nodo mesh WiFi 7 tri-banda", "Tecnología TrueMesh para red auto-reparable", "Puertos WAN y LAN de 2.5G", "Alexa integrada para gestión de red por voz", "Suscripción eero Plus para seguridad avanzada", "Router Thread border para dispositivos del hogar inteligente", "Actualizaciones de firmware automáticas", "Compatible con sistemas mesh eero existentes"
    ]],
    [5, "fr", "L'eero Pro 7 est le routeur mesh WiFi 7 phare d'Amazon, combinant une configuration incroyablement simple avec de puissantes performances tri-bande. Il s'intègre parfaitement à l'écosystème Amazon, y compris le contrôle vocal Alexa et les appareils de sécurité Ring.", [
      "Nœud mesh WiFi 7 tri-bande", "Technologie TrueMesh pour réseau auto-réparant", "Ports WAN et LAN 2.5G", "Alexa intégrée pour gestion réseau vocale", "Abonnement eero Plus pour sécurité avancée", "Routeur frontière Thread pour appareils domotiques", "Mises à jour firmware automatiques", "Compatible avec les systèmes mesh eero existants"
    ]],
    [5, "de", "Der eero Pro 7 ist Amazons Flaggschiff WiFi 7 Mesh-Router und kombiniert eine unglaublich einfache Einrichtung mit leistungsstarker Tri-Band-Performance. Er integriert sich nahtlos in das Amazon-Ökosystem, einschließlich Alexa-Sprachsteuerung und Ring-Sicherheitsgeräte.", [
      "WiFi 7 Tri-Band Mesh-Knoten", "TrueMesh-Technologie für selbstheilendes Netzwerk", "2.5G WAN- und LAN-Anschlüsse", "Integrierte Alexa für Sprach-Netzwerkverwaltung", "eero Plus Abo für erweiterte Sicherheit", "Thread Border Router für Smart-Home-Geräte", "Automatische Firmware-Updates", "Kompatibel mit bestehenden eero Mesh-Systemen"
    ]],

    // === Router 6: TP-Link Deco BE65 ===
    [6, "es", "El TP-Link Deco BE65 ofrece rendimiento mesh WiFi 7 a un precio medio, haciendo accesible la próxima generación de WiFi para la mayoría de hogares. Soporta MLO (Operación Multi-Enlace) para unir múltiples bandas con menor latencia y mayor fiabilidad.", [
      "Mesh WiFi 7 BE6500 tri-banda", "Operación Multi-Enlace (MLO)", "Puertos WAN 2.5G + LAN 2.5G", "Seguridad TP-Link HomeCare", "Gestión fácil con app Deco", "Funciona como router o punto de acceso", "OFDMA para entornos con muchos dispositivos", "Cobertura de hasta 210 m² por unidad"
    ]],
    [6, "fr", "Le TP-Link Deco BE65 offre des performances mesh WiFi 7 à un prix moyen, rendant le WiFi de nouvelle génération accessible à la plupart des foyers. Il supporte le MLO (Opération Multi-Lien) pour combiner plusieurs bandes avec une latence réduite et une fiabilité accrue.", [
      "Mesh WiFi 7 BE6500 tri-bande", "Opération Multi-Lien (MLO)", "Ports WAN 2.5G + LAN 2.5G", "Sécurité TP-Link HomeCare", "Gestion facile via l'app Deco", "Fonctionne comme routeur ou point d'accès", "OFDMA pour environnements denses", "Couverture jusqu'à 210 m² par unité"
    ]],
    [6, "de", "Der TP-Link Deco BE65 bietet WiFi 7 Mesh-Leistung zu einem mittleren Preis und macht die nächste WLAN-Generation für die meisten Haushalte zugänglich. Er unterstützt MLO (Multi-Link-Betrieb) zur Bündelung mehrerer Bänder für geringere Latenz und höhere Zuverlässigkeit.", [
      "WiFi 7 BE6500 Tri-Band Mesh", "Multi-Link-Betrieb (MLO)", "2.5G WAN + 2.5G LAN Anschlüsse", "TP-Link HomeCare Sicherheit", "Einfache Verwaltung über Deco App", "Funktioniert als Router oder Access Point", "OFDMA für dichte Geräteumgebungen", "Abdeckung bis zu 210 m² pro Einheit"
    ]],

    // === Router 7: Netgear Orbi 970 ===
    [7, "es", "El Netgear Orbi 970 es un sistema mesh WiFi 7 de cuatro bandas ultra-premium para hogares grandes, con una sola unidad cubriendo hasta 550 m². Utiliza radios duales de 6 GHz — una para backhaul y otra para clientes — garantizando el máximo rendimiento en cada nodo.", [
      "WiFi 7 cuatro bandas BE27000", "Radios duales de 6 GHz para backhaul dedicado", "Puerto WAN de 10G", "Cobertura de hasta 550 m² por unidad", "Suite de seguridad Netgear Armor incluida", "Dirección y optimización automática de bandas", "Control parental inteligente Circle", "Soporte para más de 200 dispositivos conectados"
    ]],
    [7, "fr", "Le Netgear Orbi 970 est un système mesh WiFi 7 quatre bandes ultra-premium pour les grandes maisons, avec une seule unité couvrant jusqu'à 550 m². Il utilise des radios doubles 6 GHz — une pour le backhaul et une pour les clients — garantissant un débit maximal à chaque nœud.", [
      "WiFi 7 quatre bandes BE27000", "Double radio 6 GHz pour backhaul dédié", "Port WAN 10G", "Couverture jusqu'à 550 m² par unité", "Suite de sécurité Netgear Armor incluse", "Orientation et optimisation automatique des bandes", "Contrôle parental intelligent Circle", "Support de plus de 200 appareils connectés"
    ]],
    [7, "de", "Der Netgear Orbi 970 ist ein ultra-premium Vierbandiges WiFi 7 Mesh-System für große Häuser, wobei eine einzelne Einheit bis zu 550 m² abdeckt. Er verwendet duale 6 GHz Funkmodule — eines für Backhaul und eines für Clients — und gewährleistet maximalen Durchsatz an jedem Knoten.", [
      "WiFi 7 Vierband BE27000", "Duale 6 GHz Funkmodule für dedizierten Backhaul", "10G WAN-Anschluss", "Abdeckung bis zu 550 m² pro Einheit", "Netgear Armor Sicherheitssuite inklusive", "Automatische Bandsteuerung und Optimierung", "Circle intelligente Kindersicherung", "Unterstützung für über 200 verbundene Geräte"
    ]],

    // === Router 8: Ubiquiti UniFi Dream Router ===
    [8, "es", "El Ubiquiti UniFi Dream Router es un dispositivo de red todo-en-uno que combina una consola UniFi OS, router y punto de acceso WiFi 6 a un precio accesible. Ejecuta la aplicación UniFi Network localmente, ofreciendo visibilidad y control de nivel empresarial sin cuota de suscripción.", [
      "Aplicación UniFi Network integrada", "Soporta UniFi Protect, Access y Talk", "Alojamiento local — sin suscripción en la nube", "Reglas avanzadas de VLAN y firewall", "Detección de intrusiones IDS/IPS", "Puede gestionar APs y switches UniFi adicionales", "Pantalla LCD a color de 1.3 pulgadas para estado del sistema", "Salida PoE en puerto LAN 1 (802.3af)"
    ]],
    [8, "fr", "Le Ubiquiti UniFi Dream Router est un appareil réseau tout-en-un qui combine une console UniFi OS, un routeur et un point d'accès WiFi 6 à un prix accessible. Il exécute l'application UniFi Network localement, offrant une visibilité et un contrôle de niveau entreprise sans frais d'abonnement.", [
      "Application UniFi Network intégrée", "Supporte UniFi Protect, Access et Talk", "Hébergement local — pas d'abonnement cloud requis", "Règles VLAN et pare-feu avancées", "Détection d'intrusion IDS/IPS", "Peut gérer des APs et switches UniFi supplémentaires", "Écran LCD couleur 1.3 pouces pour l'état du système", "Sortie PoE sur le port LAN 1 (802.3af)"
    ]],
    [8, "de", "Der Ubiquiti UniFi Dream Router ist ein All-in-One-Netzwerkgerät, das UniFi OS-Konsole, Router und WiFi 6 Access Point zu einem erschwinglichen Preis vereint. Er führt die UniFi Network Anwendung lokal aus und bietet Transparenz und Kontrolle auf Unternehmensebene ohne Abonnementgebühren.", [
      "Integrierte UniFi Network Anwendung", "Unterstützt UniFi Protect, Access und Talk", "Lokales Hosting — kein Cloud-Abo erforderlich", "Erweiterte VLAN- und Firewall-Regeln", "IDS/IPS Einbruchserkennung", "Kann zusätzliche UniFi APs und Switches verwalten", "1,3 Zoll Farb-LCD für Systemstatus", "PoE-Ausgang an LAN-Port 1 (802.3af)"
    ]],

    // === Router 9: Linksys Velop Pro 7 ===
    [9, "es", "El Linksys Velop Pro 7 lleva el rendimiento mesh WiFi 7 a la reconocida plataforma Velop de Linksys, ofreciendo cobertura rápida para todo el hogar con un diseño de torre elegante. Soporta las últimas innovaciones MLO y 4K-QAM para velocidades y fiabilidad mejoradas.", [
      "Nodo mesh WiFi 7 tri-banda", "Operación Multi-Enlace para latencia reducida", "Puertos WAN 2.5G + LAN 2.5G", "Enrutamiento adaptativo Velop Intelligence", "Auto-optimización inteligente de malla", "Compatible con app Linksys y panel web", "Soporte fácil de backhaul cableado en cadena", "Cobertura de hasta 280 m² por nodo"
    ]],
    [9, "fr", "Le Linksys Velop Pro 7 apporte les performances mesh WiFi 7 à la plateforme Velop réputée de Linksys, offrant une couverture rapide pour toute la maison avec un design tour élégant. Il supporte les dernières innovations MLO et 4K-QAM pour des vitesses et une fiabilité améliorées.", [
      "Nœud mesh WiFi 7 tri-bande", "Opération Multi-Lien pour latence réduite", "Ports WAN 2.5G + LAN 2.5G", "Routage adaptatif Velop Intelligence", "Auto-optimisation intelligente du maillage", "Compatible app Linksys et tableau de bord web", "Support facile de backhaul filaire en chaîne", "Couverture jusqu'à 280 m² par nœud"
    ]],
    [9, "de", "Der Linksys Velop Pro 7 bringt WiFi 7 Mesh-Leistung auf Linksys' bewährte Velop-Plattform und bietet schnelle Whole-Home-Abdeckung mit einem eleganten Tower-Design. Er unterstützt die neuesten MLO- und 4K-QAM-Innovationen für verbesserte Geschwindigkeiten und Zuverlässigkeit.", [
      "WiFi 7 Tri-Band Mesh-Knoten", "Multi-Link-Betrieb für reduzierte Latenz", "2.5G WAN + 2.5G LAN Anschlüsse", "Velop Intelligence adaptives Routing", "Intelligente Mesh-Selbstoptimierung", "Kompatibel mit Linksys App und Web-Dashboard", "Einfache Daisy-Chain verkabelte Backhaul-Unterstützung", "Abdeckung bis zu 280 m² pro Knoten"
    ]],

    // === Router 10: TP-Link Archer AX55 ===
    [10, "es", "El TP-Link Archer AX55 es un router WiFi 6 de doble banda superventas que ofrece un rendimiento AX3000 fiable para hogares cotidianos a un precio muy asequible. Soporta OFDMA, MU-MIMO y 1024-QAM para un manejo eficiente de decenas de dispositivos conectados simultáneamente.", [
      "WiFi 6 AX3000 doble banda", "OFDMA y MU-MIMO para eficiencia multi-dispositivo", "1024-QAM para un 25% más de velocidad vs WiFi 5", "USB 3.0 para compartir NAS o impresora", "Suite de seguridad TP-Link HomeCare", "Soporte de cifrado WPA3", "App Tether para gestión móvil fácil", "Beamforming para señal dirigida"
    ]],
    [10, "fr", "Le TP-Link Archer AX55 est un routeur WiFi 6 double bande best-seller qui offre des performances AX3000 fiables pour les foyers au quotidien à un prix très abordable. Il supporte OFDMA, MU-MIMO et 1024-QAM pour une gestion efficace de dizaines d'appareils connectés simultanément.", [
      "WiFi 6 AX3000 double bande", "OFDMA et MU-MIMO pour efficacité multi-appareils", "1024-QAM pour 25% de vitesse en plus vs WiFi 5", "USB 3.0 pour partage NAS ou imprimante", "Suite de sécurité TP-Link HomeCare", "Support du chiffrement WPA3", "App Tether pour gestion mobile facile", "Beamforming pour signal ciblé"
    ]],
    [10, "de", "Der TP-Link Archer AX55 ist ein meistverkaufter Dualband WiFi 6 Router, der zuverlässige AX3000-Leistung für den täglichen Haushalt zu einem sehr erschwinglichen Preis bietet. Er unterstützt OFDMA, MU-MIMO und 1024-QAM für die effiziente Handhabung von Dutzenden gleichzeitig verbundener Geräte.", [
      "WiFi 6 AX3000 Dualband", "OFDMA und MU-MIMO für Multi-Geräte-Effizienz", "1024-QAM für 25% höhere Geschwindigkeit vs WiFi 5", "USB 3.0 für NAS- oder Druckerfreigabe", "TP-Link HomeCare Sicherheitssuite", "WPA3-Verschlüsselungsunterstützung", "Tether App für einfache mobile Verwaltung", "Beamforming für gezielte Signalstärke"
    ]],
  ];

  for (const [routerId, locale, description, features] of translations) {
    await sql`
      INSERT INTO router_translations (router_id, locale, description, features)
      VALUES (${routerId}, ${locale}, ${description}, ${features})
      ON CONFLICT (router_id, locale) DO UPDATE SET
        description = EXCLUDED.description,
        features = EXCLUDED.features
    `;
  }
  console.log("Router translations seeded.");
}

async function main() {
  await seedUITranslations();
  await seedRouterTranslations();
  console.log("All translations seeded successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
  });
