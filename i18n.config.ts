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
            role: 'Frontend Developer',
            skills: ['Vue.js', 'Nuxt.js', 'React', 'TypeScript'],
            passion: 'Modern Web Apps',
            ready: '🚀 Ready to code!'
          }
        },
        
        // About Section
        about: {
          title: 'Hakkımda',
          subtitle: 'Kariyer yolculuğum ve kişisel gelişimim hakkında daha fazla bilgi.',
          description1: 'Merhaba! Ben Buse Şenöz, Sakarya Üniversitesi Bilgisayar Mühendisliği mezunu bir frontend geliştiriciyim. JavaScript ve frameworklerinde uzmanlaşmış durumdayım, kullanıcı deneyimini ön planda tutan uygulamalar geliştiriyorum.',
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
            biletAndMore: {
              title: 'Frontend Geliştirici',
              company: 'Bilet&More',
              duration: 'Temmuz 2024 - Devam',
              description: 'Turizm odaklı projelerde Vue.js, Nuxt.js, TypeScript, Tailwind, Vuetify ve Pinia kullanarak kullanıcı arayüzlerinin geliştirilmesine katkı sağlıyorum.'
            },
            baykar: {
              title: 'Stajyer - Akıllı Web Sistemler',
              company: 'Baykar Teknoloji',
              duration: 'Şubat 2024 - Mayıs 2024',
              description: 'Akıllı Web Sistemler ekibinde uzun dönem staj yaptım. Bu süreçte React, Next.js, TypeScript, Tailwind ve Three.js ile modern arayüzler geliştirerek aktif projelere destek verdim.'
            },
            birProjeDaha: {
              title: 'Freelance Frontend Geliştirici',
              company: 'BirProjeDaha',
              duration: 'Haziran 2022 - Şubat 2024',
              description: 'Turizm sektöründe yazılım çözümleri geliştiren bir ekiple freelance olarak çalıştım. Vue.js, Nuxt.js, TypeScript, Vuetify, Bulma, Pinia ve Vuex gibi teknolojilerle projelerde aktif rol aldım.'
            },
            sausem: {
              title: 'Kısmi Zamanlı Frontend Geliştirici',
              company: 'SAÜSEM - Sakarya Üniversitesi',
              duration: 'Kasım 2022 - Şubat 2023',
              description: 'Kurum içi etkileşimi artırmayı amaçlayan bir platformun arayüzünü Vue.js ile geliştirdim. Proje, çalışanlar arası yardımlaşmayı kolaylaştırmayı hedefliyordu.'
            },
            bgoTeam: {
              title: 'Gönüllü Frontend Geliştirici',
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
            role: 'Frontend Developer',
            skills: ['Vue.js', 'Nuxt.js', 'React', 'TypeScript'],
            passion: 'Modern Web Apps',
            ready: '🚀 Ready to code!'
          }
        },
        
        // About Section
        about: {
          title: 'About Me',
          subtitle: 'More information about my career journey and personal development.',
          description1: 'Hello! I\'m Buse Şenöz, a frontend developer who graduated from Sakarya University Computer Engineering. I specialize in JavaScript and frameworks, developing applications that prioritize user experience.',
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
            biletAndMore: {
              title: 'Frontend Developer',
              company: 'Bilet&More',
              duration: 'July 2024 - Present',
              description: 'I contribute to the development of user interfaces using Vue.js, Nuxt.js, TypeScript, Tailwind, Vuetify, and Pinia in tourism-focused projects.'
            },
            baykar: {
              title: 'Intern - Smart Web Systems',
              company: 'Baykar Technology',
              duration: 'February 2024 - May 2024',
              description: 'I completed a long-term internship in the Smart Web Systems team. During this process, I developed modern interfaces using React, Next.js, TypeScript, Tailwind, and Three.js, providing support to active projects.'
            },
            birProjeDaha: {
              title: 'Freelance Frontend Developer',
              company: 'BirProjeDaha',
              duration: 'June 2022 - February 2024',
              description: 'I worked as a freelancer with a team developing software solutions in the tourism sector. I took an active role in projects with technologies such as Vue.js, Nuxt.js, TypeScript, Vuetify, Bulma, Pinia, and Vuex.'
            },
            sausem: {
              title: 'Part-time Frontend Developer',
              company: 'SAUSEM - Sakarya University',
              duration: 'November 2022 - February 2023',
              description: 'I developed the interface of a platform aimed at increasing internal interaction using Vue.js. The project aimed to facilitate collaboration among employees.'
            },
            bgoTeam: {
              title: 'Volunteer Frontend Developer',
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