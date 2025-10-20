import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: 'vi',
    availableLocales: ['vi', 'en'],
  }),

  getters: {
    currentLocale: (state) => state.locale,
    isVietnamese: (state) => state.locale === 'vi',
    isEnglish: (state) => state.locale === 'en',
  },

  actions: {
    setLocale(locale) {
      if (this.availableLocales.includes(locale)) {
        this.locale = locale
        this.saveLocale()
        // Emit event for i18n to update
        window.dispatchEvent(new CustomEvent('locale-changed', { detail: { locale } }))
      }
    },

    toggleLocale() {
      const newLocale = this.locale === 'vi' ? 'en' : 'vi'
      this.setLocale(newLocale)
    },

    saveLocale() {
      localStorage.setItem('locale', this.locale)
    },

    loadLocale() {
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && this.availableLocales.includes(savedLocale)) {
        this.locale = savedLocale
      } else {
        // Default to Vietnamese
        this.locale = 'vi'
      }
    },

    initLocale() {
      this.loadLocale()
    },
  },
})
