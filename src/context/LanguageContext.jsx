import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  FR: {
    nav: {
      home: "Accueil",
      skills: "Compétences",
      portfolio: "Portfolio",
      testimonials: "Témoignages",
      contact: "Contact",
      cta: "Me contacter"
    },
    hero: {
      badge: "Développeur Landing Page Specialist",
      titlePrefix: "Expert",
      words: ["Landing Page", "Conversion", "UX", "Performance"],
      description1: "Tu es sur le point de découvrir pourquoi mes clients m'appellent Ghost 👻",
      description2: "Je crée des Landing Pages qui convertissent.",
      description3: "Invisibles sur le web, indestructibles sur les résultats.",
      ctaPrimary: "Me contacter",
      ctaSecondary: "Voir mes projets"
    },
    about: {
      title: "Ghost DEV",
      subtitle: "Développement web premium avec une approche invisible mais indestructible"
    },
    calculator: {
      title: "Optimiseur CRO Interactif",
      subtitle: "Simule ton gain de chiffre d'affaires potentiel avec nos Landing Pages haute conversion",
      trafficLabel: "Trafic Mensuel (visiteurs)",
      convLabel: "Taux de Conversion Actuel",
      aovLabel: "Panier Moyen / AOV (€)",
      ghostConvLabel: "Taux de Conversion Projeté (Ghost DEV)",
      resultsTitle: "Projection de Revenus",
      revenueCurrent: "Revenu Mensuel Actuel",
      revenueGhost: "Revenu Mensuel Projeté",
      revenueGain: "Revenu Mensuel Supplémentaire",
      conversionRateBoost: "Augmentation de la Conversion",
      roiText: "Retour sur investissement estimé à 10x minimum",
      actionCta: "Réclamer ce gain maintenant"
    },
    terminal: {
      title: "Ghost DEV Console v2.0",
      welcome: [
        "========================================",
        " GHOST DEV SECURE TERMINAL v2.0         ",
        "========================================",
        "Status: EN LIGNE | Crypté AES-256",
        "Tapez 'help' pour voir les commandes.",
        "----------------------------------------"
      ],
      prompt: "visitor@ghostdev:~$",
      commands: {
        help: "Affiche toutes les commandes disponibles.",
        about: "Présente la philosophie et la mission de Ghost DEV.",
        skills: "Affiche la stack technologique avancée de Kelvyn.",
        projects: "Affiche les derniers projets CRO et Landing Pages.",
        clear: "Vide l'écran du terminal."
      },
      responses: {
        about: [
          "PHILOSOPHIE GHOST DEV:",
          "Développeur invisible, résultats indestructibles. Je ne crée pas de simples sites web.",
          "Je conçois des machines de guerre orientées CRO (Conversion Rate Optimization).",
          "Chaque ligne de code est pensée pour la vitesse, la psychologie utilisateur et l'impact business."
        ],
        skills: [
          "STACK DE PERFORMANCE GHOST DEV:",
          "[React / Next.js / Vite]   ████████████████████ 100% (Performance native)",
          "[Vanilla CSS / Framer]    ██████████████████░░ 90% (Animations fluides 60fps)",
          "[CRO & A/B Testing]      ████████████████████ 100% (Itérations basées data)",
          "[Performance & Lighthouse]████████████████████ 100% (Score 95+ Core Web Vitals)",
          "[SEO & Analytics]         ████████████████░░░░ 80% (Tracking avancé & SEO)"
        ],
        projects: [
          "RÉALISATIONS CRO RÉCENTES:",
          "- [E-Commerce Premium]    : Refonte complète, Checkout optimisé   ->  +127% de Conversion",
          "- [SaaS Dashboard]       : Visualisation data en temps réel      ->  Expérience Premium",
          "- [Landing Page Crypto]   : Page Web3 interactive, WebGL 3D       ->  Objectifs de leads pulvérisés",
          "- [Portfolio Créatif]    : Galerie ultra-rapide & fluide         ->  100% Core Web Vitals"
        ]
      }
    },
    skillsSection: {
      title: "Compétences Techniques",
      subtitle: "Stack moderne pour des résultats mesurables",
      items: [
        {
          title: "Landing Page Design",
          description: "Des pages qui captent l'attention et guident vers l'action. Chaque pixel compte pour maximiser l'impact visuel et la conversion.",
          stat: "127+ projets livrés"
        },
        {
          title: "React / Next.js / Vite",
          description: "Des applications rapides et modernes. Performance native, expérience premium.",
          stat: "Performance native"
        },
        {
          title: "Tailwind / Framer",
          description: "Animations fluides et design system cohérent. Du mouvement qui a du sens.",
          stat: "Animations 60fps"
        },
        {
          title: "CRO",
          description: "Analyse comportementale et optimisation. Transformer les visiteurs en clients.",
          stat: "+45% conversion moy."
        },
        {
          title: "A/B Testing",
          description: "Décisions basées sur la data. Optimisation continue des performances.",
          stat: "Itérations continues"
        },
        {
          title: "Performance Web",
          description: "Optimisation vitesse, Core Web Vitals, architecture technique allégée.",
          stat: "Scores Lighthouse 95+"
        },
        {
          title: "Design System",
          description: "Composants réutilisables, cohérence visuelle, documentation technique complète.",
          stat: "50+ composants documentés"
        },
        {
          title: "SEO & Analytics",
          description: "Optimisation moteurs, tracking avancé, data-driven decisions.",
          stat: "Stratégies data-driven"
        }
      ]
    },
    portfolio: {
      title: "Projets Récents",
      subtitle: "Des réalisations qui parlent d'elles-mêmes",
      filterAll: "Tous",
      filterEcommerce: "E-Commerce",
      filterSaas: "SaaS",
      filterCreative: "Créatif",
      items: [
        {
          id: "ecommerce",
          category: "ecommerce",
          title: "E-commerce Premium",
          description: "Refonte complète d'une boutique en ligne avec +127% de conversion. Interface fluide, checkout optimisé.",
          challenge: "Le client perdait 70% de ses visiteurs au moment de l'étape finale du paiement à cause d'un tunnel de vente trop lent et confus.",
          solution: "Développement d'un checkout ultra-rapide sur une seule page en React, avec validation de formulaire instantanée et design ultra épuré.",
          metric: "+127% de conversion au checkout"
        },
        {
          id: "saas",
          category: "saas",
          title: "SaaS Dashboard",
          description: "Tableau de bord analytique pour startup tech. Visualisation de données en temps réel.",
          challenge: "Le produit souffrait d'un taux de désabonnement élevé en raison d'une interface de visualisation complexe et difficile à appréhender pour l'utilisateur moyen.",
          solution: "Création d'un tableau de bord ultra-ergonomique avec graphiques interactifs fluides et filtres en verre interactifs.",
          metric: "-35% de désabonnement client"
        },
        {
          id: "crypto",
          category: "saas",
          title: "Landing Page Crypto",
          description: "Page de lancement pour projet blockchain. Design futuriste, animations 3D.",
          challenge: "Nécessité de capter l'intérêt pour une prévente de jetons Web3 dans un marché extrêmement compétitif.",
          solution: "Réalisation d'une landing page ultra-stylisée avec des animations de micro-interactions en verre et intégration de portefeuille Web3 simplifiée.",
          metric: "4M$ levés en prévente"
        },
        {
          id: "portfolio",
          category: "creative",
          title: "Portfolio Créatif",
          description: "Site vitrine pour photographe professionnel. Galerie immersive, transitions élégantes.",
          challenge: "Afficher des images de très haute résolution sans impacter le temps de chargement, ce qui détruisait le SEO sur Google.",
          solution: "Optimisation avancée des images (WebP dynamique), lazy-loading intelligent et mise en cache performante.",
          metric: "Score Lighthouse 100/100"
        },
        {
          id: "delivery",
          category: "ecommerce",
          title: "App Mobile First",
          description: "Application web progressive pour service de livraison. UX optimisée mobile.",
          challenge: "Les utilisateurs mobiles se plaignaient d'une interface lente et de pannes lors des commandes sur le réseau 4G instable.",
          solution: "Refonte PWA complète fonctionnant hors ligne avec synchronisation automatique en arrière-plan.",
          metric: "+68% d'engagement mobile"
        },
        {
          id: "edu",
          category: "creative",
          title: "Plateforme Éducative",
          description: "Interface d'apprentissage en ligne. Gamification et suivi de progression.",
          challenge: "Faible taux de complétion des cours en ligne dû au manque d'interactivité et de suivi visuel.",
          solution: "Gamification du parcours utilisateur avec barres de progression interactives en verre, célébrations en néon et statistiques personnalisées.",
          metric: "+45% de taux de complétion"
        }
      ]
    },
    testimonials: {
      title: "Ce qu'ils disent",
      subtitle: "Résultats mesurables, clients satisfaits",
      items: [
        {
          quote: "Kelvyn a transformé notre taux de conversion de 2.3% à 8.7% en trois semaines. Son approche data-driven fait toute la différence.",
          author: "Amara Diallo",
          role: "CEO",
          company: "TechFlow"
        },
        {
          quote: "Un vrai Ghost. Il comprend les enjeux business avant même de toucher au code. Résultats mesurables, délais respectés.",
          author: "Lucas Bergström",
          role: "Product Manager",
          company: "Nexus Digital"
        },
        {
          quote: "La landing page qu'il a créée génère 47% de leads qualifiés en plus. Design premium, performance native.",
          author: "Sofia Martinez",
          role: "Marketing Director",
          company: "Coastal Ventures"
        },
        {
          quote: "Collaboration fluide, communication claire. Il anticipe les problèmes et propose des solutions avant qu'on les demande.",
          author: "Raj Patel",
          role: "CTO",
          company: "Meridian Labs"
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce qu'il faut savoir pour démarrer notre collaboration",
      items: [
        {
          q: "Pourquoi m'appelle-t-on 'Ghost DEV' ?",
          a: "J'interviens dans l'ombre comme un fantôme de haut niveau. Je comprends les enjeux d'affaires avant d'écrire une ligne de code, j'optimise de fond en comble votre entonnoir de conversion, et je vous laisse briller avec des statistiques explosives de vente sans interférer dans votre gestion quotidienne."
        },
        {
          q: "Comment fonctionne le calculateur CRO ?",
          a: "Il simule l'augmentation potentielle de revenus en boostant votre taux de conversion. En moyenne, une landing page optimisée multiplie par 2 ou 3 vos ventes pour le même volume de trafic publicitaire."
        },
        {
          q: "Quels sont les délais de livraison pour une landing page ?",
          a: "En moyenne entre 7 et 14 jours, selon la complexité et les intégrations requises. Chaque projet fait l'objet d'un suivi millimétré."
        },
        {
          q: "Développez-vous avec WordPress ou Webflow ?",
          a: "Non. Je développe en code pur (React / Next.js / Vite) avec du CSS premium. Cela garantit une vitesse de chargement instantanée et des scores de performance optimaux (Core Web Vitals), ce que les outils d'édition visuels ne peuvent pas égaler."
        }
      ]
    },
    contact: {
      title: "Prêt à booster vos conversions ?",
      subtitle: "Discutons de votre projet. Première consultation gratuite.",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "votre@email.com",
      msgPlaceholder: "Parlez-moi de votre projet (trafic, objectifs, etc.)...",
      submitButton: "Démarrer un projet",
      directChat: "Discuter en direct sur WhatsApp",
      successMsg: "Message envoyé avec succès ! Le Ghost se met en route. 👻"
    },
    meta: {
      title: "Kelvyn Ghost DEV - Landing Pages qui convertissent",
      description: "Développeur spécialisé en landing pages haute conversion. React, Next.js, Tailwind CSS. Design premium, performance native."
    }
  },
  EN: {
    nav: {
      home: "Home",
      skills: "Skills",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      contact: "Contact",
      cta: "Contact me"
    },
    hero: {
      badge: "Landing Page Specialist Developer",
      titlePrefix: "Expert",
      words: ["Landing Page", "Conversion", "UX", "Performance"],
      description1: "You're about to discover why my clients call me Ghost 👻",
      description2: "I build Landing Pages that convert.",
      description3: "Invisible on the web, indestructible in results.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View my projects"
    },
    about: {
      title: "Ghost DEV",
      subtitle: "Premium web development with an invisible yet indestructible approach"
    },
    calculator: {
      title: "Interactive CRO Optimizer",
      subtitle: "Simulate your potential revenue increase with our high-converting Landing Pages",
      trafficLabel: "Monthly Traffic (visitors)",
      convLabel: "Current Conversion Rate",
      aovLabel: "Average Order Value / AOV (€)",
      ghostConvLabel: "Projected Conversion Rate (Ghost DEV)",
      resultsTitle: "Revenue Projection",
      revenueCurrent: "Current Monthly Revenue",
      revenueGhost: "Projected Monthly Revenue",
      revenueGain: "Additional Monthly Revenue",
      conversionRateBoost: "Conversion Rate Increase",
      roiText: "Estimated return on investment of 10x minimum",
      actionCta: "Claim this boost now"
    },
    terminal: {
      title: "Ghost DEV Console v2.0",
      welcome: [
        "========================================",
        " GHOST DEV SECURE TERMINAL v2.0         ",
        "========================================",
        "Status: ONLINE | AES-256 Encrypted",
        "Type 'help' to see available commands.",
        "----------------------------------------"
      ],
      prompt: "visitor@ghostdev:~$",
      commands: {
        help: "Display all available terminal commands.",
        about: "Introduce the philosophy and mission of Ghost DEV.",
        skills: "Display Kelvyn's advanced tech stack visual bars.",
        projects: "Display latest CRO projects and landing pages.",
        clear: "Clear the terminal screen output."
      },
      responses: {
        about: [
          "GHOST DEV PHILOSOPHY:",
          "Invisible developer, indestructible results. I do not build standard websites.",
          "I engineer high-converting sales machines focused on CRO (Conversion Rate Optimization).",
          "Every single line of code is optimized for raw speed, user psychology, and business results."
        ],
        skills: [
          "GHOST DEV PERFORMANCE STACK:",
          "[React / Next.js / Vite]   ████████████████████ 100% (Native performance)",
          "[Vanilla CSS / Framer]    ██████████████████░░ 90% (Fluid 60fps animations)",
          "[CRO & A/B Testing]      ████████████████████ 100% (Data-driven iterations)",
          "[Performance & Lighthouse]████████████████████ 100% (Score 95+ Core Web Vitals)",
          "[SEO & Analytics]         ████████████████░░░░ 80% (Advanced tracking & SEO)"
        ],
        projects: [
          "RECENT CRO REALIZATIONS:",
          "- [Premium E-Commerce]    : Store overhaul, Optimized checkout   ->  +127% Conversion boost",
          "- [SaaS Dashboard]       : Real-time visual data metrics        ->  Premium Experience",
          "- [Crypto Landing Page]   : Interactive Web3 WebGL 3D launch     ->  Pre-sale leads crushed",
          "- [Creative Portfolio]    : Lightning fast immersive gallery     ->  100% Lighthouse Score"
        ]
      }
    },
    skillsSection: {
      title: "Technical Skills",
      subtitle: "Modern stack for measurable results",
      items: [
        {
          title: "Landing Page Design",
          description: "Pages that capture attention and guide towards action. Every pixel counts to maximize visual impact and conversion.",
          stat: "127+ projects delivered"
        },
        {
          title: "React / Next.js / Vite",
          description: "Fast and modern applications. Native performance, premium experience.",
          stat: "Native performance"
        },
        {
          title: "Tailwind / Framer",
          description: "Smooth animations and consistent design system. Meaningful motion.",
          stat: "60fps animations"
        },
        {
          title: "CRO",
          description: "Behavioral analysis and optimization. Turning visitors into customers.",
          stat: "+45% avg. conversion"
        },
        {
          title: "A/B Testing",
          description: "Data-driven decisions. Continuous performance optimization.",
          stat: "Continuous iterations"
        },
        {
          title: "Web Performance",
          description: "Speed optimization, Core Web Vitals, lightweight technical architecture.",
          stat: "Lighthouse Scores 95+"
        },
        {
          title: "Design System",
          description: "Reusable components, visual consistency, comprehensive technical documentation.",
          stat: "50+ components documented"
        },
        {
          title: "SEO & Analytics",
          description: "Search engine optimization, advanced tracking, data-driven decisions.",
          stat: "Data-driven strategies"
        }
      ]
    },
    portfolio: {
      title: "Recent Projects",
      subtitle: "Work that speaks for itself",
      filterAll: "All",
      filterEcommerce: "E-Commerce",
      filterSaas: "SaaS",
      filterCreative: "Creative",
      items: [
        {
          id: "ecommerce",
          category: "ecommerce",
          title: "Premium E-commerce",
          description: "Complete redesign of an online store with +127% conversion. Smooth interface, optimized checkout.",
          challenge: "The client was losing 70% of their visitors at the final payment checkout step due to a slow, confusing checkout tunnel.",
          solution: "Developed a lightning-fast single-page checkout in React, featuring real-time form validation and ultra-clean styling.",
          metric: "+127% checkout conversion boost"
        },
        {
          id: "saas",
          category: "saas",
          title: "SaaS Dashboard",
          description: "Analytics dashboard for a tech startup. Real-time data visualization.",
          challenge: "The SaaS suffered from a high churn rate because the dashboard was cluttered and hard to navigate for average users.",
          solution: "Created a minimalist, highly ergonomic glassmorphic analytics panel with smooth chart transitions.",
          metric: "-35% client churn reduction"
        },
        {
          id: "crypto",
          category: "saas",
          title: "Crypto Landing Page",
          description: "Launch page for a blockchain project. Futuristic design, 3D animations.",
          challenge: "Required an explosive conversion rate for a Web3 token presale within a highly competitive launch timeline.",
          solution: "Designed a premium page with dark neon lighting, active glass cards, and standard Web3 wallet integrations.",
          metric: "$4M raised during presale"
        },
        {
          id: "portfolio",
          category: "creative",
          title: "Creative Portfolio",
          description: "Showcase site for a professional photographer. Immersive gallery, elegant transitions.",
          challenge: "Needed to showcase ultra-high resolution images without increasing load times which was harming Google SEO scores.",
          solution: "Implemented WebP image optimization, smart lazy-loading structures, and static assets caching layouts.",
          metric: "100/100 Lighthouse Performance"
        },
        {
          id: "delivery",
          category: "ecommerce",
          title: "Mobile First App",
          description: "Progressive web application for a delivery service. Mobile-optimized UX.",
          challenge: "Mobile users reported buggy and sluggish delivery order procedures on unstable network environments.",
          solution: "Rebuild a progressive web app running fully offline with background databases auto-synchronization.",
          metric: "+68% mobile client engagement"
        },
        {
          id: "edu",
          category: "creative",
          title: "Educational Platform",
          description: "Online learning interface. Gamification and progress tracking.",
          challenge: "High drop-off rates on online classes because of lack of visual feedback and course completion incentives.",
          solution: "Gamified user progression using glassmorphic meters, neon level accomplishments, and customized stats dashboard.",
          metric: "+45% course completion boost"
        }
      ]
    },
    testimonials: {
      title: "What They Say",
      subtitle: "Measurable results, satisfied clients",
      items: [
        {
          quote: "Kelvyn transformed our conversion rate from 2.3% to 8.7% in three weeks. His data-driven approach makes all the difference.",
          author: "Amara Diallo",
          role: "CEO",
          company: "TechFlow"
        },
        {
          quote: "A true Ghost. He understands business challenges before even touching the code. Measurable results, deadlines met.",
          author: "Lucas Bergström",
          role: "Product Manager",
          company: "Nexus Digital"
        },
        {
          quote: "The landing page he created generates 47% more qualified leads. Premium design, native performance.",
          author: "Sofia Martinez",
          role: "Marketing Director",
          company: "Coastal Ventures"
        },
        {
          quote: "Smooth collaboration, clear communication. He anticipates problems and proposes solutions before we even ask.",
          author: "Raj Patel",
          role: "CTO",
          company: "Meridian Labs"
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about starting our partnership",
      items: [
        {
          q: "Why do they call you 'Ghost DEV'?",
          a: "I work effectively in the shadows like a premium specter. I prioritize understanding business conversion triggers before writing code, optimize your funnel completely, and leave you with explosive sales numbers without getting in the way of your day-to-day operations."
        },
        {
          q: "How does the CRO calculator work?",
          a: "It simulates your potential monthly sales boost by increasing your conversion rate. An optimized landing page typically doubles or triples active sales from your existing ad traffic."
        },
        {
          q: "What is the average turnaround time for a landing page?",
          a: "Usually between 7 and 14 days, depending on project scope and dynamic tools integrations. I provide systematic visual updates."
        },
        {
          q: "Do you develop using WordPress or Webflow?",
          a: "No. I code purely from scratch using React, Next.js, and CSS. This guarantees ultra-instant loads and maximum SEO Lighthouse performance, which generic visual drag-and-drop page builders can never reach."
        }
      ]
    },
    contact: {
      title: "Ready to boost your conversions?",
      subtitle: "Let's discuss your project. First consultation is free.",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      namePlaceholder: "Your Name",
      emailPlaceholder: "your@email.com",
      msgPlaceholder: "Tell me about your project (traffic, goals, etc.)...",
      submitButton: "Start a project",
      directChat: "Chat directly on WhatsApp",
      successMsg: "Message sent successfully! The Ghost is on the move. 👻"
    },
    meta: {
      title: "Kelvyn Ghost DEV - Landing Pages that convert",
      description: "Developer specialized in high-conversion landing pages. React, Next.js, Tailwind CSS. Premium design, native performance."
    }
  },
  ES: {
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      portfolio: "Portafolio",
      testimonials: "Testimonios",
      contact: "Contacto",
      cta: "Contáctame"
    },
    hero: {
      badge: "Desarrollador Especialista en Landing Pages",
      titlePrefix: "Experto",
      words: ["Landing Page", "Conversión", "UX", "Rendimiento"],
      description1: "Estás a punto de descubrir por qué mis clientes me llaman Ghost 👻",
      description2: "Creo Landing Pages que convierten.",
      description3: "Invisibles en la web, indestructibles en los resultados.",
      ctaPrimary: "Ponte en contacto",
      ctaSecondary: "Ver mis proyectos"
    },
    about: {
      title: "Ghost DEV",
      subtitle: "Desarrollo web premium con un enfoque invisible pero indestructible"
    },
    calculator: {
      title: "Optimizador CRO Interactivo",
      subtitle: "Simule su aumento potencial de ingresos con nuestras Landing Pages de alta conversión",
      trafficLabel: "Tráfico Mensual (visitantes)",
      convLabel: "Tasa de Conversión Actual",
      aovLabel: "Valor Promedio del Pedido / AOV (€)",
      ghostConvLabel: "Tasa de Conversión Proyectada (Ghost DEV)",
      resultsTitle: "Proyección de Ingresos",
      revenueCurrent: "Ingreso Mensual Actual",
      revenueGhost: "Ingreso Mensual Proyectado",
      revenueGain: "Ingreso Mensual Adicional",
      conversionRateBoost: "Aumento de la Conversión",
      roiText: "Retorno de inversión estimado en 10x mínimo",
      actionCta: "Reclamar este beneficio ahora"
    },
    terminal: {
      title: "Consola Ghost DEV v2.0",
      welcome: [
        "========================================",
        " CONSOLA SEGURA GHOST DEV v2.0          ",
        "========================================",
        "Estado: EN LÍNEA | Encriptado AES-256",
        "Escriba 'help' para ver los comandos.",
        "----------------------------------------"
      ],
      prompt: "visitante@ghostdev:~$",
      commands: {
        help: "Muestra todos los comandos de la consola.",
        about: "Presenta la filosofía y la misión de Ghost DEV.",
        skills: "Muestra las barras técnicas visuales de Kelvyn.",
        projects: "Muestra proyectos CRO recientes y landing pages.",
        clear: "Limpia la pantalla de la consola."
      },
      responses: {
        about: [
          "FILOSOFÍA GHOST DEV:",
          "Desarrollador invisible, resultados indestructibles. No construyo webs comunes.",
          "Diseño verdaderas máquinas de ventas enfocadas en CRO (Optimización de Tasa de Conversión).",
          "Cada línea de código está optimizada para la velocidad, la psicología y los resultados comerciales."
        ],
        skills: [
          "STACK TÉCNICO DE ALTO RENDIMIENTO GHOST DEV:",
          "[React / Next.js / Vite]   ████████████████████ 100% (Rendimiento nativo)",
          "[Vanilla CSS / Framer]    ██████████████████░░ 90% (Animaciones fluidas a 60fps)",
          "[CRO y A/B Testing]      ████████████████████ 100% (Iteraciones basadas en datos)",
          "[Rendimiento y Lighthouse]████████████████████ 100% (Puntuación 95+ Core Web Vitals)",
          "[SEO y Analítica]         ████████████████░░░░ 80% (Seguimiento avanzado y SEO)"
        ],
        projects: [
          "PROYECTOS CRO RECIENTES:",
          "- [E-Commerce Premium]    : Rediseño completo, Pago optimizado     -> +127% de Conversión",
          "- [Dashboard SaaS]       : Métricas y datos visuales en tiempo real -> Experiencia Premium",
          "- [Crypto Landing Page]   : Lanzamiento Web3 interactivo en 3D      -> leads de preventa arrasados",
          "- [Portafolio Creativo]    : Galería inmersiva súper rápida          -> 100% Lighthouse"
        ]
      }
    },
    skillsSection: {
      title: "Habilidades Técnicas",
      subtitle: "Stack moderno para resultados medibles",
      items: [
        {
          title: "Diseño de Landing Pages",
          description: "Páginas que captan la atención y guían hacia la acción. Cada píxel cuenta para maximizar el impacto visual y la conversión.",
          stat: "127+ proyectos entregados"
        },
        {
          title: "React / Next.js / Vite",
          description: "Aplicaciones rápidas y modernas. Rendimiento nativo, experiencia premium.",
          stat: "Rendimiento nativo"
        },
        {
          title: "Tailwind / Framer",
          description: "Animaciones fluidas y sistema de diseño coherente. Movimiento con sentido.",
          stat: "Animaciones a 60fps"
        },
        {
          title: "CRO",
          description: "Análisis de comportamiento y optimización. Convirtiendo visitantes en clientes.",
          stat: "+45% conversión prom."
        },
        {
          title: "A/B Testing",
          description: "Decisiones basadas en datos. Optimización continua del rendimiento.",
          stat: "Iteraciones continuas"
        },
        {
          title: "Rendimiento Web",
          description: "Optimización de velocidad, Core Web Vitals, arquitectura técnica ligera.",
          stat: "Puntuaciones Lighthouse 95+"
        },
        {
          title: "Sistema de Diseño",
          description: "Componentes reutilizables, coherencia visual, documentación técnica completa.",
          stat: "50+ componentes documentados"
        },
        {
          title: "SEO y Analítica",
          description: "Optimización para motores de búsqueda, seguimiento avanzado, decisiones basadas en datos.",
          stat: "Estrategias basadas en datos"
        }
      ]
    },
    portfolio: {
      title: "Proyectos Recientes",
      subtitle: "Trabajos que hablan por sí mismos",
      filterAll: "Todos",
      filterEcommerce: "E-Commerce",
      filterSaas: "SaaS",
      filterCreative: "Creativo",
      items: [
        {
          id: "ecommerce",
          category: "ecommerce",
          title: "E-commerce Premium",
          description: "Rediseño completo de una tienda en línea con +127% de conversión. Interfaz fluida, proceso de pago optimizado.",
          challenge: "El cliente estaba perdiendo el 70% de sus compradores en el checkout de pago final debido a un túnel de compras confuso y lento.",
          solution: "Desarrollé un checkout React rápido en una sola página con validación instantánea de campos y estilo minimalista.",
          metric: "+127% de conversión en checkout"
        },
        {
          id: "saas",
          category: "saas",
          title: "Dashboard SaaS",
          description: "Panel analítico para una startup tecnológica. Visualización de datos en tiempo real.",
          challenge: "El producto SaaS tenía una alta tasa de bajas debido a que el panel era abrumador y difícil de interpretar para usuarios comunes.",
          solution: "Creé un panel analítico minimalista con diseño de vidrio y animaciones suaves para los gráficos.",
          metric: "-35% de abandono de usuarios"
        },
        {
          id: "crypto",
          category: "saas",
          title: "Landing Page Crypto",
          description: "Página de lanzamiento para un proyecto blockchain. Diseño futurista, animaciones 3D.",
          challenge: "Necesidad de lograr conversiones explosivas para una preventa de tokens Web3 en un plazo de lanzamiento muy ajustado.",
          solution: "Diseñé una landing page oscura de estética cyber con tarjetas activas de vidrio e integraciones limpias de carteras criptográficas.",
          metric: "$4M recaudados en preventa"
        },
        {
          id: "portfolio",
          category: "creative",
          title: "Portafolio Creativo",
          description: "Sitio web para un fotógrafo profesional. Galería inmersiva, transiciones elegantes.",
          challenge: "Presentar imágenes de muy alta resolución sin ralentizar el tiempo de carga, lo que perjudicaba el SEO en Google.",
          solution: "Implementación de optimizaciones en formato WebP, carga diferida inteligente y cacheo estático de recursos.",
          metric: "100/100 Puntuación Lighthouse"
        },
        {
          id: "delivery",
          category: "ecommerce",
          title: "App Mobile First",
          description: "Aplicación web progresiva para un servicio de entrega. UX optimizada para móviles.",
          challenge: "Usuarios móviles experimentaban compras lentas y fallos constantes debido a conexiones inestables a redes móviles.",
          solution: "Diseño PWA de vanguardia con capacidad 100% offline y sincronización inteligente en segundo plano.",
          metric: "+68% engagement móvil"
        },
        {
          id: "edu",
          category: "creative",
          title: "Plataforma Educativa",
          description: "Interfaz de aprendizaje en línea. Gamificación y seguimiento del progreso.",
          challenge: "Baja tasa de finalización de cursos online por falta de incentivos visuales claros e interactivos.",
          solution: "Ludificación del recorrido de usuario con medidores dinámicos de progreso de vidrio y premios en luces de neón.",
          metric: "+45% finalización de cursos"
        }
      ]
    },
    testimonials: {
      title: "Lo Que Dicen",
      subtitle: "Resultados medibles, clientes satisfechos",
      items: [
        {
          quote: "Kelvyn transformó nuestra tasa de conversión del 2.3% al 8.7% en tres semanas. Su enfoque basado en datos marca la diferencia.",
          author: "Amara Diallo",
          role: "CEO",
          company: "TechFlow"
        },
        {
          quote: "Un verdadero Ghost. Entiende los desafíos comerciales antes de tocar el código. Resultados medibles, plazos cumplidos.",
          author: "Lucas Bergström",
          role: "Product Manager",
          company: "Nexus Digital"
        },
        {
          quote: "La landing page que creó genera un 47% más de leads calificados. Diseño premium, rendimiento nativo.",
          author: "Sofia Martinez",
          role: "Directora de Marketing",
          company: "Coastal Ventures"
        },
        {
          quote: "Colaboración fluida, comunicación clara. Anticipa problemas y propone soluciones antes de que las pidamos.",
          author: "Raj Patel",
          role: "CTO",
          company: "Meridian Labs"
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber antes de iniciar nuestra colaboración",
      items: [
        {
          q: "¿Por qué me llaman 'Ghost DEV'?",
          a: "Trabajo eficazmente en las sombras como un fantasma de alto nivel. Priorizo comprender los factores comerciales de conversión antes de escribir código, optimizo su embudo por completo y le entrego resultados de ventas explosivos sin interferir en su gestión diaria."
        },
        {
          q: "¿Cómo funciona la calculadora CRO?",
          a: "Simula el aumento mensual en su facturación al optimizar la tasa de conversión. Una landing page optimizada en promedio duplica o triplica las ventas para el mismo tráfico de publicidad."
        },
        {
          q: "¿Cuáles son los plazos de entrega de una landing page?",
          a: "Normalmente entre 7 y 14 días laborables, dependiendo del alcance y de los servicios dinámicos que se integren. Ofrezco actualizaciones periódicas."
        },
        {
          q: "¿Desarrollas usando WordPress o Webflow?",
          a: "No. Yo programo puramente en código (React / Next.js / Vite) con CSS premium. Esto garantiza velocidades de carga inmediatas y métricas óptimas de rendimiento SEO (Core Web Vitals), lo que herramientas de edición visual básica nunca podrán igualar."
        }
      ]
    },
    contact: {
      title: "¿Listo para impulsar tus conversiones?",
      subtitle: "Hablemos de tu proyecto. La primera consulta es gratuita.",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      namePlaceholder: "Su Nombre",
      emailPlaceholder: "su@email.com",
      msgPlaceholder: "Cuénteme de su proyecto (tráfico, objetivos, etc.)...",
      submitButton: "Iniciar un proyecto",
      directChat: "Chatear directo en WhatsApp",
      successMsg: "¡Mensaje enviado con éxito! El Ghost ya se está moviendo. 👻"
    },
    meta: {
      title: "Kelvyn Ghost DEV - Landing Pages que convierten",
      description: "Desarrollador especializado en landing pages de alta conversión. React, Next.js, Tailwind CSS. Diseño premium, rendimiento nativo."
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('kelvyn-language');
    return saved && ['FR', 'EN', 'ES'].includes(saved) ? saved : 'FR';
  });
  
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeLanguage = (lang) => {
    if (lang === language || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage(lang);
      localStorage.setItem('kelvyn-language', lang);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const t = (key) => {
    const keys = key.split('.');
    let val = translations[language];
    
    for (const k of keys) {
      if (val[k] === undefined) {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
      val = val[k];
    }
    
    return val;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isTransitioning, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
