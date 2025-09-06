<script setup lang="ts">
const { t: $t } = useI18n()

interface Experience {
  id: number
  titleKey: string
  companyKey: string
  durationKey: string
  descriptionKey: string
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    titleKey: 'biletAndMore',
    companyKey: 'biletAndMore',
    durationKey: 'biletAndMore',
    descriptionKey: 'biletAndMore',
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind', 'Vuetify', 'Pinia', 'PWA']
  },
  {
    id: 2,
    titleKey: 'baykar',
    companyKey: 'baykar',
    durationKey: 'baykar',
    descriptionKey: 'baykar',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Three.js', 'Node.js']
  },
  {
    id: 3,
    titleKey: 'birProjeDaha',
    companyKey: 'birProjeDaha',
    durationKey: 'birProjeDaha',
    descriptionKey: 'birProjeDaha',
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuetify', 'Bulma', 'Pinia', 'Vuex']
  },
  {
    id: 4,
    titleKey: 'sausem',
    companyKey: 'sausem',
    durationKey: 'sausem',
    descriptionKey: 'sausem',
    technologies: ['Vue.js', 'JavaScript', 'MySQL']
  },
  {
    id: 5,
    titleKey: 'bgoTeam',
    companyKey: 'bgoTeam',
    durationKey: 'bgoTeam',
    descriptionKey: 'bgoTeam',
    technologies: ['React', 'JavaScript', 'Redux']
  }
]
</script>
<template>
  <section id="experience" class="py-12 sm:py-16 lg:py-20 bg-white dark:bg-dark-800">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-3 sm:mb-4">
          {{ $t('experience.title') }}
        </h2>
        <p class="text-base sm:text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto px-4">
          {{ $t('experience.subtitle') }}
        </p>
      </div>
      
      <!-- Experience List -->
      <div class="space-y-8 sm:space-y-12">
        <div v-for="experience in experiences" :key="experience.id" 
             class="group relative">
          
          <!-- Main Container -->
          <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
            
            <!-- Date Section -->
            <div class="lg:w-56 flex-shrink-0">
              <div class="lg:sticky lg:top-8">
                <div class="text-center lg:text-left">
                  <p class="text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">
                    {{ $t(`experience.data.${experience.durationKey}.duration`) }}
                  </p>
                  <div class="w-12 h-px bg-primary-300 dark:bg-primary-600 mx-auto lg:mx-0 mt-2 group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            </div>
            
            <!-- Content Section -->
            <div class="flex-1">
              <div class="relative">
                <!-- Vertical Line - Hidden on mobile, visible on desktop -->
                <div class="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-transparent dark:from-primary-700 dark:via-primary-500"></div>
                
                <!-- Content Card -->
                <div class="lg:ml-6 lg:pl-8 pb-6 sm:pb-8">
                  <div class="relative">
                    <!-- Dot - Hidden on mobile, visible on desktop -->
                    <div class="hidden lg:block absolute -left-10 top-2 w-3 h-3 bg-primary-500 rounded-full border-2 border-white dark:border-dark-800 shadow-sm group-hover:scale-150 transition-transform duration-300"></div>
                    
                    <!-- Card -->
                    <div class="bg-white dark:bg-dark-700 rounded-lg p-4 sm:p-6 border border-gray-100 dark:border-dark-600 hover:border-primary-200 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-sm">
                      
                      <!-- Header -->
                      <div class="mb-3 sm:mb-4">
                        <h3 class="text-base sm:text-lg font-semibold text-dark-900 dark:text-dark-100 mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {{ $t(`experience.data.${experience.titleKey}.title`) }}
                        </h3>
                        <p class="text-base sm:text-lg text-primary-600 dark:text-primary-400 font-semibold">
                          {{ $t(`experience.data.${experience.companyKey}.company`) }}
                        </p>
                      </div>
                      
                      <!-- Description -->
                      <p class="text-sm text-dark-600 dark:text-dark-400 leading-relaxed mb-4 sm:mb-6">
                        {{ $t(`experience.data.${experience.descriptionKey}.description`) }}
                      </p>
                      
                      <!-- Technologies -->
                      <div class="flex flex-wrap gap-1.5 sm:gap-2">
                        <span v-for="tech in experience.technologies" :key="tech" 
                              class="px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-200 text-xs rounded-md font-medium">
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
