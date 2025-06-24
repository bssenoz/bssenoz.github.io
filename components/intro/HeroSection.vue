<script setup lang="ts">
const { t: $t } = useI18n()

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script> 

<template>
  <section class="relative py-20 lg:py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="animate-slide-up">
          <h1 class="text-3xl lg:text-6xl font-bold text-dark-900 dark:text-dark-100 mb-6 leading-tight">
            {{ $t('hero.greeting') }}<br>
            <span class="text-primary-600 dark:text-primary-400">{{ $t('hero.name') }}</span>
          </h1>
          <p class="text-xl text-dark-600 dark:text-dark-400 mb-8 leading-relaxed">
            {{ $t('hero.title') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              @click="scrollToSection('projects')"
              class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              {{ $t('hero.viewProjects') }}
            </button>
            <a 
              href="mailto:bsenoz@hotmail.com"
              class="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-lg text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              {{ $t('hero.contactMe') }}
            </a>
          </div>
        </div>
        
        <div class="relative">
          <div class="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <div class="bg-white dark:bg-dark-800 rounded-xl p-3 sm:p-4 lg:p-6">
              <div class="flex items-center space-x-2 mb-3 sm:mb-4">
                <div class="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div class="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <pre class="text-xs sm:text-sm font-mono text-dark-800 dark:text-dark-200 overflow-x-auto"><code>const developer = {
  name: '{{ $t('hero.codeExample.name') }}',
  role: '{{ $t('hero.codeExample.role') }}',
  skills: ['Vue.js', 'Nuxt.js', 'React', 'TypeScript'],
  passion: '{{ $t('hero.codeExample.passion') }}'
};

console.log('{{ $t('hero.codeExample.ready') }}');</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>