export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'tr',
    messages: {
      tr: {
        // Navigation
        nav: {
          about: 'Hakkımda',
          skills: 'Beceriler',
          projects: 'Projeler',
          experience: 'Deneyim',
          contact: 'İletişim'
        },
        
        // Hero Section
        hero: {
          greeting: 'Merhaba, Ben',
          name: 'Buse Şenöz',
          title: 'Bilgisayar Mühendisi olarak modern web uygulamaları geliştiriyorum. Vue.js, Nuxt.js, React ve TypeScript teknolojilerinde uzmanım.',
          viewProjects: 'Projelerimi Gör',
          contactMe: 'İletişime Geç',
          codeExample: {
            name: 'Buse Şenöz',
            role: 'Software Developer',
            skills: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Node.js'],
            passion: 'Modern Web Apps',
            ready: '🚀 Ready to code!'
          }
        },
        
        // About Section
        about: {
          title: 'Hakkımda',
          subtitle: 'Kariyer yolculuğum ve kişisel gelişimim hakkında daha fazla bilgi.',
          description1: 'Merhaba! Ben Buse Şenöz, Sakarya Üniversitesi Bilgisayar Mühendisliği mezunu bir yazılım geliştiricisiyim. Ağırlıklı olarak frontend tarafında deneyim kazandım ancak full stack geliştirme alanında kendimi geliştirmeye odaklanıyorum. JavaScript ve popüler frameworkler üzerinde aktif olarak çalışıyor, kullanıcı deneyimini ve sürdürülebilir yazılım mimarisini ön planda tutuyorum.',
          description2: 'Kurumsal ve freelance projelerde çalışarak farklı sektörlerde deneyim kazandım. Teknoloji dünyasındaki değişimleri yakından takip ediyor, sürekli öğrenmeye ve gelişmeye odaklanıyorum. Takım çalışmasına değer veriyor ve projelerde aktif rol almayı seviyorum.',
          education: 'Eğitim',
          university: 'Sakarya Üniversitesi',
          computerEngineering: 'Bilgisayar Mühendisliği',
          highSchool: 'Aldemir Atilla Konuk Anadolu Lisesi',
          highSchoolDiploma: 'Lise Diploması',
          gpa: 'GPA: 3.09',
          score: '93.28'
        },
        
        // Skills Section
        skills: {
          title: 'Beceriler',
          subtitle: 'Geliştirme süreçlerinde kullandığım teknolojiler ve araçlar.',
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Araçlar',
          databases: 'Veritabanları',
          other: 'Diğer'
        },
        
        // Projects Section
        projects: {
          title: 'Son Projeler',
          subtitle: 'Geliştirdiğim bazı projeler ve çalışmalarım.',
          viewProject: 'Projeyi Gör',
          viewCode: 'Kodu Gör',
          all: 'Tümü',
          personal: 'Kişisel',
          professional: 'Profesyonel',
          viewProjectButton: 'Projeyi İncele',
          webSite: 'Web Sitesi',
          mobileApp: 'Mobil Uygulama',
          goldenSpiderAward: 'Altın Örümcek Web Ödülü',
          data: {
            artiBirDestek: {
              title: 'Artı Bir Destek',
              description: 'TÜBİTAK 3005 projesi kapsamında fetüste anomali riski olan gebeler için hazırlanan destek platformu.'
            },
            cryptoExchange: {
              title: 'Crypto Exchange App',
              description: 'Gerçek zamanlı takip sunan kripto alım-satım uygulaması.'
            },
            acapulco: {
              title: 'Acapulco Otel Sitesi',
              description: 'Etkileşimli animasyonlar ve modern UI ile zenginleştirilmiş bir otel tanıtım sitesi.'
            },
            marcoPolo: {
              title: 'Marco Polo',
              description: 'Responsive ve performans odaklı tanıtım sitesi.'
            },
            gulsanHolding: {
              title: 'Gülsan Holding',
              description: 'Çok sektörlü faaliyetleri dijitalde yansıtan güçlü, kurumsal web sitesi.'
            },
            travelPlan: {
              title: 'TravelPlan',
              description: 'Etkinlik ve tur planlama hizmetlerine özel tanıtım sitesi.'
            },
            maxserDMC: {
              title: 'MaxserDMC',
              description: 'Destinasyon ve etkinlik yönetimi firması için web arayüzü.'
            },
            antalyaAquarium: {
              title: 'Antalya Aquarium Bilet Satış Sistemi',
              description: 'Online biletleme ve mobil uyumlu arayüzle ziyaretçilere hızlı erişim sağlayan satış platformu.'
            },
            baykarYuksekIrtifa: {
              title: 'Baykar Yüksek İrtifa',
              description: 'Baykar Teknoloji Yüksek İrtifa Programı kapsamı için hazırlanmış web sitesi.'
            },
            cosmosTheatre: {
              title: 'Cosmos Theatre',
              description: 'Etkinlik ve tiyatro gösterimleri için geliştirilen modern web platformu.'
            },
            nirvanaHotels: {
              title: 'Nirvana Hotels',
              description: 'Otel zincirine özel, çok dilli ve performans odaklı tanıtım sitesi.'
            },
            crystalHotels: {
              title: 'Crystal Hotels',
              description: 'Kapsamlı içerik yapısına sahip, otel grubu için hazırlanmış web arayüzü.'
            },
            imwf: {
              title: 'IMWF',
              description: 'MICE ve düğün turizmi profesyonellerini bir araya getiren etkinlik platformu.'
            }
          }
        },
        
        // Experience Section
        experience: {
          title: 'Deneyim',
          subtitle: 'Kariyer yolculuğum ve çalışma deneyimlerim.',
          present: 'Günümüz',
          months: 'ay',
          years: 'yıl',
          data: {
            coolDigital: {
              title: 'Software Developer',
              company: 'Cool Digital Solutions',
              duration: 'Kasım 2025 - Şubat 2026',
              description: 'Entrapeer adlı yapay zeka destekli inovasyon araştırma platformunda, Vue.js ile Figma tasarımlarını responsive arayüzlere dönüştürerek, API entegrasyonları ve yeniden kullanılabilir bileşenlerle ölçeklenebilir bir frontend mimarisi geliştirdim.'
            },
            biletAndMore: {
              title: 'Software Developer',
              company: 'Bilet&More',
              duration: 'Temmuz 2024 - Kasım 2025',
              description: 'Turizm sektöründe B2B ve B2C projelerde Vue.js, Nuxt.js, TypeScript, Tailwind, Vuetify ve Pinia kullanarak arayüzler geliştirdim ve CMS tabanlı projelere katkı sağladım.'
            },
            baykar: {
              title: 'Stajyer - Web Yazılım Teknolojileri',
              company: 'Baykar Teknoloji',
              duration: 'Şubat 2024 - Mayıs 2024',
              description: 'Web Yazılım Teknolojileri ekibinde uzun dönem staj yaptım. Bu süreçte React, Next.js, Node.js, TypeScript, Tailwind ve Three.js ile modern arayüzler geliştirerek aktif projelere destek verdim.'
            },
            birProjeDaha: {
              title: 'Freelance Software Developer',
              company: 'BirProjeDaha',
              duration: 'Haziran 2022 - Şubat 2024',
              description: 'Turizm sektöründe yazılım çözümleri geliştiren bir ekiple freelance olarak çalıştım. Vue.js, Nuxt.js, TypeScript, Vuetify, Bulma, Pinia ve Vuex gibi teknolojilerle projelerde aktif rol aldım.'
            },
            sausem: {
              title: 'Kısmi Zamanlı Software Developer',
              company: 'SAÜSEM - Sakarya Üniversitesi',
              duration: 'Kasım 2022 - Şubat 2023',
              description: 'Kurum içi etkileşimi artırmayı amaçlayan bir platformun arayüzünü Vue.js ile geliştirdim. Proje, çalışanlar arası yardımlaşmayı kolaylaştırmayı hedefliyordu.'
            },
            bgoTeam: {
              title: 'Gönüllü Software Developer',
              company: 'BGO Team',
              duration: 'Temmuz 2022 - Kasım 2022',
              description: 'BGO Team ile gönüllü olarak çalışarak freepsiko-front projesinde React, JavaScript ve CSS teknolojileri kullanarak frontend geliştirme çalışmalarına katkı sağladım.'
            }
          }
        },
        
        // Contact Section
        contact: {
          title: 'İletişim',
          subtitle: 'Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.',
          email: 'E-posta',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          sendMessage: 'Mesaj Gönder',
          name: 'Ad',
          emailPlaceholder: 'E-posta adresiniz',
          message: 'Mesaj',
          messagePlaceholder: 'Mesajınızı yazın...',
          send: 'Gönder'
        },
        
        // Language Switcher
        language: {
          tr: 'Türkçe',
          en: 'English'
        }
      },
      
      en: {
        // Navigation
        nav: {
          about: 'About',
          skills: 'Skills',
          projects: 'Projects',
          experience: 'Experience',
          contact: 'Contact'
        },
        
        // Hero Section
        hero: {
          greeting: 'Hello, I\'m',
          name: 'Buse Şenöz',
          title: 'I develop modern web applications as a Computer Engineer. I specialize in Vue.js, Nuxt.js, React, and TypeScript technologies.',
          viewProjects: 'View Projects',
          contactMe: 'Contact Me',
          codeExample: {
            name: 'Buse Şenöz',
            role: 'Software Developer',
            skills: ['Vue.js', 'Nuxt.js', 'React', 'TypeScript'],
            passion: 'Modern Web Apps',
            ready: '🚀 Ready to code!'
          }
        },
        
        // About Section
        about: {
          title: 'About Me',
          subtitle: 'More information about my career journey and personal development.',
          description1: 'Hello! I’m Buse Şenöz, a software developer graduated from Sakarya University with a degree in Computer Engineering. I have primarily gained experience in frontend development, but I am focused on expanding my skills in full stack development. I work actively with JavaScript and popular frameworks, prioritizing user experience and sustainable software architecture.',
          description2: 'I gained experience in different sectors by working on corporate and freelance projects. I closely follow the changes in the technology world and focus on continuous learning and development. I value teamwork and enjoy taking an active role in projects.',
          education: 'Education',
          university: 'Sakarya University',
          computerEngineering: 'Computer Engineering',
          highSchool: 'Aldemir Atilla Konuk Anatolian High School',
          highSchoolDiploma: 'High School Diploma',
          gpa: 'GPA: 3.09',
          score: '93.28'
        },
        
        // Skills Section
        skills: {
          title: 'Skills',
          subtitle: 'Technologies and tools I use in development processes.',
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Tools',
          databases: 'Databases',
          other: 'Other'
        },
        
        // Projects Section
        projects: {
          title: 'Recent Projects',
          subtitle: 'Some projects I developed and my work.',
          viewProject: 'View Project',
          viewCode: 'View Code',
          all: 'All',
          personal: 'Personal',
          professional: 'Professional',
          viewProjectButton: 'View Project',
          webSite: 'Web Site',
          mobileApp: 'Mobile App',
          goldenSpiderAward: 'Golden Spider Web Award',
          data: {
            artiBirDestek: {
              title: 'Artı Bir Destek',
              description: 'Support platform prepared for pregnant women with fetal anomaly risk within the scope of TÜBİTAK 3005 project.'
            },
            cryptoExchange: {
              title: 'Crypto Exchange App',
              description: 'Cryptocurrency trading application offering real-time tracking.'
            },
            acapulco: {
              title: 'Acapulco Hotel Website',
              description: 'A hotel promotional website enriched with interactive animations and modern UI.'
            },
            marcoPolo: {
              title: 'Marco Polo',
              description: 'Responsive and performance-focused promotional website.'
            },
            gulsanHolding: {
              title: 'Gülsan Holding',
              description: 'Strong corporate website reflecting multi-sector activities digitally.'
            },
            travelPlan: {
              title: 'TravelPlan',
              description: 'Promotional website specialized in event and tour planning services.'
            },
            maxserDMC: {
              title: 'MaxserDMC',
              description: 'Web interface for destination and event management company.'
            },
            antalyaAquarium: {
              title: 'Antalya Aquarium Ticket Sales System',
              description: 'Sales platform providing fast access to visitors with online ticketing and mobile-compatible interface.'
            },
            baykarYuksekIrtifa: {
              title: 'Baykar High Altitude',
              description: 'Website prepared for Baykar Technology High Altitude Program.'
            },
            cosmosTheatre: {
              title: 'Cosmos Theatre',
              description: 'Modern web platform developed for events and theater performances.'
            },
            nirvanaHotels: {
              title: 'Nirvana Hotels',
              description: 'Multi-language and performance-focused promotional website for hotel chain.'
            },
            crystalHotels: {
              title: 'Crystal Hotels',
              description: 'Web interface prepared for hotel group with comprehensive content structure.'
            },
            imwf: {
              title: 'IMWF - International MICE & Wedding Forum',
              description: 'Event platform bringing together international MICE and wedding tourism professionals.'
            }
          }
        },
        
        // Experience Section
        experience: {
          title: 'Experience',
          subtitle: 'My career journey and work experiences.',
          present: 'Present',
          months: 'months',
          years: 'years',
          data: {
            coolDigital: {
              title: 'Software Developer',
              company: 'Cool Digital Solutions',
              duration: 'November 2025 - February 2026',
              description: 'At Entrapeer, an AI-powered innovation research platform, I built responsive Vue.js interfaces from Figma and implemented API integrations and reusable components to support a scalable, high-performance frontend.'
            },
            biletAndMore: {
              title: 'Software Developer',
              company: 'Bilet&More',
              duration: 'July 2024 - November 2025',
              description: 'I developed front-end interfaces for B2B and B2C tourism projects using Vue.js, Nuxt.js, TypeScript, Tailwind, Vuetify, and Pinia, and contributed to CMS-based projects.'
            },
            baykar: {
              title: 'Intern - Web Software Technologies',
              company: 'Baykar Technology',
              duration: 'February 2024 - May 2024',
              description: 'I completed a long-term internship in the Web Software Technologies team. During this process, I developed modern interfaces using React, Next.js, Node.js, TypeScript, Tailwind, and Three.js, providing support to active projects.'
            },
            birProjeDaha: {
              title: 'Freelance Software Developer',
              company: 'BirProjeDaha',
              duration: 'June 2022 - February 2024',
              description: 'I worked as a freelancer with a team developing software solutions in the tourism sector. I took an active role in projects with technologies such as Vue.js, Nuxt.js, TypeScript, Vuetify, Bulma, Pinia, and Vuex.'
            },
            sausem: {
              title: 'Part-time Software Developer',
              company: 'SAUSEM - Sakarya University',
              duration: 'November 2022 - February 2023',
              description: 'I developed the interface of a platform aimed at increasing internal interaction using Vue.js. The project aimed to facilitate collaboration among employees.'
            },
            bgoTeam: {
              title: 'Volunteer Software Developer',
              company: 'BGO Team',
              duration: 'July 2022 - November 2022',
              description: 'I worked voluntarily with BGO Team, contributing to frontend development work in the freepsiko-front project using React, JavaScript, and CSS technologies.'
            }
          }
        },
        
        // Contact Section
        contact: {
          title: 'Contact',
          subtitle: 'You can use the channels below to get in touch with me.',
          email: 'Email',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          sendMessage: 'Send Message',
          name: 'Name',
          emailPlaceholder: 'Your email address',
          message: 'Message',
          messagePlaceholder: 'Write your message...',
          send: 'Send'
        },
        
        // Language Switcher
        language: {
          tr: 'Türkçe',
          en: 'English'
        }
      }
    }
  })) 
