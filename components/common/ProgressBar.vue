<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref<boolean>(false)
const progress = ref<number>(0)
const circumference: number = 2 * Math.PI * 20 

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  const handleScroll = (): void => {
    const scrollTop: number = window.scrollY
    const docHeight: number = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent: number = (scrollTop / docHeight) * 100
    
    showButton.value = window.scrollY > 300
    progress.value = Math.min(scrollPercent, 100)
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll() 

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script> 

<template>
  <div 
    v-show="showButton"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 w-12 h-12 cursor-pointer z-50 flex items-center justify-center transition-all duration-300 hover:scale-110"
  >
    <!-- Circular Progress Bar -->
    <svg class="w-12 h-12 absolute inset-0" viewBox="0 0 48 48">
      <!-- Background circle -->
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="#e5e7eb"
        stroke-width="3"
        fill="none"
      />
      <!-- Progress circle -->
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="url(#gradient)"
        stroke-width="3"
        fill="none"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference - (progress / 100) * circumference"
        transform="rotate(-90 24 24)"
      />
      <!-- Gradient definition -->
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#3b82f6" />
          <stop offset="50%" style="stop-color:#8b5cf6" />
          <stop offset="100%" style="stop-color:#ec4899" />
        </linearGradient>
      </defs>
    </svg>
    
    <!-- Button content -->
    <div class="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
      <svg 
        class="w-4 h-4 text-gray-700" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </div>
  </div>
</template>