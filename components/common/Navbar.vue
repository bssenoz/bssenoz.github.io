<script setup lang="ts">
const { locale, locales, t: $t } = useI18n()

const mobileMenuOpen = ref(false)

const navigation = computed(() => [
  { name: $t('nav.about'), href: 'about' },
  { name: $t('nav.skills'), href: 'skills' },
  { name: $t('nav.projects'), href: 'projects' },
  { name: $t('nav.experience'), href: 'experience' },
  { name: $t('nav.contact'), href: 'contact' },
])

const scrollToSection = (sectionId: string) => {
  if (sectionId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  
  const element = document.getElementById(sectionId)
  if (element) {
    const navbar = document.querySelector('nav')
    let navbarHeight = 64 
    
    if (navbar) {
      navbarHeight = navbar.offsetHeight
    }
    
    let extraOffset = 0
    if (mobileMenuOpen.value && window.innerWidth < 768) {
      extraOffset = 200
    }
    
    const elementPosition = element.offsetTop - navbarHeight - extraOffset
    
    window.scrollTo({ 
      top: Math.max(0, elementPosition), 
      behavior: 'smooth'
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleMobileNavClick = (sectionId: string) => {
  mobileMenuOpen.value = false
  scrollToSection(sectionId)
}

const toggleLanguage = () => {
  const currentLocale = locale.value
  const newLocale = currentLocale === 'tr' ? 'en' : 'tr'
  locale.value = newLocale
}
</script> 

<template>
  <nav class="bg-white/80 dark:bg-dark-800/80 backdrop-blur-md border-b border-dark-200 dark:border-dark-700 sticky top-0 z-50">
    <div class="max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtImg src="/favicon-96x96.png" alt="Buse Şenöz" class="w-12 h-12 sm:w-16 sm:h-16 cursor-pointer"  @click="scrollToTop"/>
        </div>
        
        <div class="hidden md:flex items-center space-x-4">
          <div class="flex items-baseline space-x-4">
            <button 
              v-for="item in navigation" 
              :key="item.name"
              @click="scrollToSection(item.href)"
              class="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {{ item.name }}
            </button>
          </div>
          
          <!-- Language Switcher -->
          <div class="ml-4">
            <button
              @click="toggleLanguage"
              class="flex items-center space-x-1 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-dark-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-600"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
              <span>{{ $t(`language.${locale}`) }}</span>
            </button>
          </div>
        </div>

        <div class="md:hidden flex items-center space-x-2">
          <!-- Language Switcher for Mobile -->
          <button
            @click="toggleLanguage"
            class="flex items-center space-x-1 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 p-2 rounded-md transition-colors border border-dark-200 dark:border-dark-700"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
            </svg>
            <span class="text-xs">{{ $t(`language.${locale}`) }}</span>
          </button>
          
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 p-2"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-dark-800 border-t border-dark-200 dark:border-dark-700">
        <button 
          v-for="item in navigation" 
          :key="item.name"
          @click="handleMobileNavClick(item.href)"
          class="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </nav>
</template>