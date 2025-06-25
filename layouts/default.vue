<script setup lang="ts">
import Navbar from '~/components/common/Navbar.vue'
import Footer from '~/components/common/Footer.vue'

const { locale } = useI18n()

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Buse Şenöz",
  "jobTitle": "Frontend Developer & Computer Engineer",
  "description": "Frontend Developer specializing in JavaScript, Vue.js, Nuxt.js, React, and TypeScript. Computer Engineer with experience in modern web technologies.",
  "url": "https://bssenoz.github.io/",
  "image": "https://bssenoz.github.io/meta-logo.png",
  "sameAs": [
    "https://github.com/bssenoz",
    "https://linkedin.com/in/buse-senoz"
  ],
  "knowsAbout": [
    "Vue.js",
    "Nuxt.js", 
    "React",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Frontend Development"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Sakarya Üniversitesi",
    "description": "Computer Engineering"
  },
  "worksFor": {
    "@type": "Organization", 
    "name": "Bilet&More",
    "jobTitle": "Frontend Developer"
  }
}

useHead({
  htmlAttrs: {
    lang: locale.value
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-50 to-dark-100 dark:from-dark-900 dark:to-dark-800">
    <Navbar />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
}
</style> 