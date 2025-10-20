import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'

// Get saved locale from localStorage or default to 'vi'
const savedLocale = localStorage.getItem('locale') || 'vi'

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'vi',
  messages: {
    en,
    vi,
  },
  legacy: false, // Use Composition API
  globalInjection: true, // Enable global $t
})

// Listen for locale changes from store
window.addEventListener('locale-changed', (event) => {
  i18n.global.locale.value = event.detail.locale
})

export default i18n
