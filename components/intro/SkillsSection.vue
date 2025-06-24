<script setup lang="ts">
const { t: $t } = useI18n()

const skills = [
  { 
    name: 'Vue.js', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg'
  },
  { 
    name: 'Nuxt.js', 
    icon: 'https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Static/nuxtjs-icon.svg'
  },
  { 
    name: 'React', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
  },
  { 
    name: 'Next.js', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg'
  },
  { 
    name: 'TypeScript', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
  },
  { 
    name: 'JavaScript', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
  },
  { 
    name: 'React Native', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },
  {
  name: 'Node.js',
  icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
  },

]
</script> 

<template>
  <section id="skills" class="py-20 bg-white dark:bg-dark-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-4">
          {{ $t('skills.title') }}
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          {{ $t('skills.subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(skill, index) in skills" :key="skill.name" class="text-center group">
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="flex justify-center mb-4">
              <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 class="font-semibold text-dark-900 dark:text-dark-100 mb-2">{{ skill.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>