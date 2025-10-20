import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false,
    theme: 'light',
  }),

  getters: {
    currentTheme: (state) => state.theme,
    isDarkMode: (state) => state.isDark,
  },

  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
      this.theme = this.isDark ? 'dark' : 'light'
      this.applyTheme()
      this.saveTheme()
    },

    setTheme(theme) {
      this.theme = theme
      this.isDark = theme === 'dark'
      this.applyTheme()
      this.saveTheme()
    },

    applyTheme() {
      const html = document.documentElement
      if (this.isDark) {
        html.classList.add('dark')
        html.setAttribute('data-theme', 'dark')
      } else {
        html.classList.remove('dark')
        html.setAttribute('data-theme', 'light')
      }
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
