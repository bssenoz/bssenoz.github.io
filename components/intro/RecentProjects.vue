<script setup lang="ts">
import { ref, computed } from 'vue'

const { t: $t } = useI18n()

type Category = 'all' | 'personal' | 'professional'
type ProjectType = 'webSite' | 'mobileApp'

interface Project {
  id: number
  titleKey: string
  descriptionKey: string
  icon: string
  category: Exclude<Category, 'all'>
  type: ProjectType
  technologies: string[]
  link: string
  award?: string
}

const selectedCategory = ref<Category>('all')

const categories: Category[] = ['all', 'personal', 'professional']

const projects: Project[] = [
  {
    id: 1,
    titleKey: 'artiBirDestek',
    descriptionKey: 'artiBirDestek',
    icon: '🏥',
    category: 'personal',
    technologies: ['Nuxt.js', 'TypeScript', 'Vuetify'],
    link: 'https://artirilmisdestek.sakarya.edu.tr/',
    type: 'webSite'
  },
  {
    id: 10,
    titleKey: 'cryptoExchange',
    descriptionKey: 'cryptoExchange',
    icon: '📱',
    category: 'personal',
    technologies: ['React Native', 'JavaScript'],
    link: 'https://github.com/bssenoz/crypto-exchange-app',
    type: 'mobileApp'
  },
  {
    id: 2,
    titleKey: 'acapulco',
    descriptionKey: 'acapulco',
    icon: '🏖️',
    category: 'professional',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind', 'GSAP'],
    link: 'https://www.acapulco.com.tr/',
    type: 'webSite'
  },
  {
    id: 12,
    titleKey: 'marcoPolo',
    descriptionKey: 'marcoPolo',
    icon: '🏊‍♂️',
    category: 'professional',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind'],
    link: 'https://www.marcopolo.com.tr/',
    type: 'webSite'
  },
  {
    id: 11,
    titleKey: 'gulsanHolding',
    descriptionKey: 'gulsanHolding',
    icon: '🏢',
    category: 'professional',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind', 'GSAP'],
    link: 'https://www.gulsanholding.com.tr/',
    type: 'webSite'
  },
  {
    id: 4,
    titleKey: 'travelPlan',
    descriptionKey: 'travelPlan',
    icon: '🗺️',
    category: 'professional',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind'],
    link: 'https://www.travelplan.com.tr/',
    type: 'webSite'
  },
  {
    id: 3,
    titleKey: 'maxserDMC',
    descriptionKey: 'maxserDMC',
    icon: '✈️',
    category: 'professional',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind'],
    link: 'https://www.maxserdmc.com/',
    type: 'webSite'
  },
  {
    id: 5,
    titleKey: 'antalyaAquarium',
    descriptionKey: 'antalyaAquarium',
    icon: '🐠',
    category: 'professional',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind'],
    link: 'https://antalyaaquarium.bletandmore.com/',
    type: 'webSite'
  },
  {
    id: 6,
    titleKey: 'baykarYuksekIrtifa',
    descriptionKey: 'baykarYuksekIrtifa',
    icon: '🚁',
    category: 'professional',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://kariyer.baykartech.com/tr/yuksek-irtifa/',
    type: 'webSite'
  },
  {
    id: 7,
    titleKey: 'cosmosTheatre',
    descriptionKey: 'cosmosTheatre',
    icon: '🎭',
    category: 'professional',
    technologies: ['Nuxt.js', 'JavaScript', 'Bulma'],
    link: 'https://cosmostheatre.com',
    award: 'goldenSpiderAward',
    type: 'webSite'
  },
  {
    id: 8,
    titleKey: 'nirvanaHotels',
    descriptionKey: 'nirvanaHotels',
    icon: '🌅',
    category: 'professional',
    technologies: ['Nuxt.js', 'JavaScript', 'Bootstrap'],
    link: 'https://www.nirvanahotels.com.tr',
    type: 'webSite'
  },
  {
    id: 9,
    titleKey: 'crystalHotels',
    descriptionKey: 'crystalHotels',
    icon: '💎',
    category: 'professional',
    technologies: ['Nuxt.js', 'JavaScript', 'Bootstrap'],
    link: 'https://crystalhotels.com.tr/',
    type: 'webSite'
  }
]

const filteredProjects = computed((): Project[] => {
  if (selectedCategory.value === 'all') {
    return projects
  }
  return projects.filter((project: Project) => project.category === selectedCategory.value)
})
</script>

<template>
  <section id="projects" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-4">
          {{ $t('projects.title') }}
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          {{ $t('projects.subtitle') }}
        </p>
      </div>
      
      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border',
            selectedCategory === category 
              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-primary-600 dark:border-primary-400 shadow-sm' 
              : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-400 border-gray-200 dark:border-dark-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-600'
          ]"
        >
          {{ $t(`projects.${category}`) }}
        </button>
      </div>
      
      <!-- Proje grid'i -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in filteredProjects" :key="project.id" class="group">
          <div class="bg-white dark:bg-dark-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700 overflow-hidden">
            <!-- İkon ve başlık alanı -->
            <div class="p-6 border-b border-gray-100 dark:border-dark-700">
              <div class="flex items-center justify-between mb-4">
                <div class="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {{ project.icon }}
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium">
                    {{ $t(`projects.${project.category}`) }}
                  </span>
                  <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium">
                    {{ $t(`projects.${project.type}`) }}
                  </span>
                </div>
              </div>
              
              <h3 class="text-lg font-semibold text-dark-900 dark:text-dark-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ $t(`projects.data.${project.titleKey}.title`) }}
              </h3>
              
              <p class="text-sm text-dark-600 dark:text-dark-400 line-clamp-2 leading-relaxed">
                {{ $t(`projects.data.${project.descriptionKey}.description`) }}
              </p>
            </div>
            
            <!-- Teknoloji etiketleri -->
            <div class="px-6 py-4">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech" 
                      class="px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-200 text-xs rounded-md font-medium">
                  {{ tech }}
                </span>
              </div>
              
              <!-- Butonlar ve ödül -->
              <div class="flex items-center justify-between">
                <a 
                  :href="project.link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  {{ $t('projects.viewProjectButton') }}
                  <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div v-if="project.award" class="text-yellow-500 text-xs font-medium flex items-center">
                  <span class="mr-1">🏆</span>
                  {{ $t(`projects.${project.award}`) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 