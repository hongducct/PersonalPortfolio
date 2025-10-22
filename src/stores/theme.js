import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Create reactive theme state
const theme = ref('light')
const isDark = computed(() => theme.value === 'dark')

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: theme,
    isDark: isDark,
  }),

  getters: {
    currentTheme: (state) => state.theme,
    isDarkMode: (state) => state.isDark,
  },

  actions: {
    toggleTheme() {
      this.theme = this.isDark ? 'light' : 'dark'
      this.applyTheme()
      this.saveTheme()
    },

    setTheme(newTheme) {
      this.theme = newTheme
      this.applyTheme()
      this.saveTheme()
    },

    applyTheme() {
      const html = document.documentElement
      
      // Force disable all transitions immediately
      html.style.setProperty('--v-transition-duration', '0s', 'important')
      html.style.setProperty('--v-transition-timing-function', 'ease', 'important')
      
      // Add theme-changing class to disable transitions
      html.classList.add('theme-changing')
      
      // Force style override for all elements
      const style = document.createElement('style')
      style.id = 'theme-override'
      style.textContent = `
        * {
          transition: none !important;
          animation: none !important;
        }
        .v-card-title,
        .v-card-title *,
        .project-title,
        .project-title * {
          transition: none !important;
          animation: none !important;
        }
      `
      
      // Remove existing override
      const existingStyle = document.getElementById('theme-override')
      if (existingStyle) {
        existingStyle.remove()
      }
      
      // Add new override
      document.head.appendChild(style)
      
      // Immediate theme application
      if (this.isDark) {
        html.classList.add('dark')
        html.setAttribute('data-theme', 'dark')
        html.setAttribute('data-v-theme', 'dark')
      } else {
        html.classList.remove('dark')
        html.setAttribute('data-theme', 'light')
        html.setAttribute('data-v-theme', 'light')
      }
      
      // Remove theme-changing class and override after theme is applied
      requestAnimationFrame(() => {
        html.classList.remove('theme-changing')
        html.style.removeProperty('--v-transition-duration')
        html.style.removeProperty('--v-transition-timing-function')
        
        // Remove override
        setTimeout(() => {
          const styleElement = document.getElementById('theme-override')
          if (styleElement) {
            styleElement.remove()
          }
        }, 100)
      })
    },

    saveTheme() {
      localStorage.setItem('theme', this.theme)
    },

    loadTheme() {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        this.setTheme(savedTheme)
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        this.setTheme(prefersDark ? 'dark' : 'light')
      }
    },

    initTheme() {
      this.loadTheme()
      this.applyTheme()
    },
  },
})
