<script setup lang="ts">
const { t: $t } = useI18n()
</script>

<template>
  <section id="about" class="py-20 bg-white dark:bg-dark-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-4">
          {{ $t('about.title') }}
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          {{ $t('about.subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- About Content -->
        <div class="space-y-6 lg:col-span-7">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-lg text-dark-600 dark:text-dark-400 leading-relaxed mb-6">
              {{ $t('about.description1') }}
            </p>
            
            <p class="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
              {{ $t('about.description2') }}
            </p>
          </div>
        </div>
        
        <!-- Education & Quick Info -->
        <div class="space-y-8 lg:col-span-5">
          <!-- Education Card -->
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-dark-900 dark:text-dark-100 mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              </svg>
              {{ $t('about.education') }}
            </h3>
            
            <div class="space-y-4">
              <div class="border-l-4 border-primary-500 pl-4">
                <h4 class="font-semibold text-dark-900 dark:text-dark-100">{{ $t('about.university') }}</h4>
                <p class="text-primary-600 dark:text-primary-400">{{ $t('about.computerEngineering') }}</p>
                <p class="text-sm text-dark-600 dark:text-dark-400">2020 - 2024 • {{ $t('about.gpa') }}</p>
              </div>
              
              <div class="border-l-4 border-primary-500 pl-4">
                <h4 class="font-semibold text-dark-900 dark:text-dark-100">{{ $t('about.highSchool') }}</h4>
                <p class="text-primary-600 dark:text-primary-400">{{ $t('about.highSchoolDiploma') }}</p>
                <p class="text-sm text-dark-600 dark:text-dark-400">2015 - 2019 • {{ $t('about.score') }}</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>