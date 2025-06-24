<script setup lang="ts">
const { t: $t } = useI18n()
</script>

<template>
  <section id="contact" class="py-20 bg-white dark:bg-dark-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-4">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          {{ $t('contact.subtitle') }}
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <!-- İletişim Bilgileri - Üst Kısım -->
        <div class="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 mb-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <!-- Email -->
            <div class="text-center group">
              <div class="w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-medium text-dark-900 dark:text-dark-100 mb-1 text-sm">{{ $t('contact.email') }}</h3>
              <a href="mailto:bsenoz@hotmail.com" class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-xs">
                bsenoz@hotmail.com
              </a>
            </div>

            <!-- GitHub -->
            <div class="text-center group">
              <a href="https://github.com/bssenoz" target="_blank" rel="noopener noreferrer" class="block">
                <div class="w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-dark-900 dark:text-dark-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 class="font-medium text-dark-900 dark:text-dark-100 mb-1 text-sm">{{ $t('contact.github') }}</h3>
                <p class="text-dark-600 dark:text-dark-400 text-xs">@bssenoz</p>
              </a>
            </div>

            <!-- LinkedIn -->
            <div class="text-center group">
              <a href="https://linkedin.com/in/buse-senoz" target="_blank" rel="noopener noreferrer" class="block">
                <div class="w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 class="font-medium text-dark-900 dark:text-dark-100 mb-1 text-sm">{{ $t('contact.linkedin') }}</h3>
                <p class="text-dark-600 dark:text-dark-400 text-xs">@buse-senoz</p>
              </a>
            </div>

            <!-- GitLab -->
            <div class="text-center group">
              <a href="https://gitlab.com/bssenoz" target="_blank" rel="noopener noreferrer" class="block">
                <div class="w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
                  </svg>
                </div>
                <h3 class="font-medium text-dark-900 dark:text-dark-100 mb-1 text-sm">GitLab</h3>
                <p class="text-dark-600 dark:text-dark-400 text-xs">@bssenoz</p>
              </a>
            </div>
          </div>
        </div>

        <!-- Konum - Alt Kısım -->
        <div class="text-center">
          <div class="inline-flex flex-col items-center space-y-2">
            <div class="w-8 h-8 flex items-center justify-center">
              <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C7.58 0 4 3.58 4 8c0 6.5 8 16 8 16s8-9.5 8-16c0-4.42-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
            <span class="text-sm font-medium text-dark-900 dark:text-dark-100">Antalya</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>