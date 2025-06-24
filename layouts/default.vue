<script setup lang="ts">
import Navbar from '~/components/common/Navbar.vue'
import Footer from '~/components/common/Footer.vue'
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