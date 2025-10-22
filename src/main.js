import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { mdiFlag, mdiFlagVariant, mdiWeatherSunny, mdiWeatherNight, mdiTranslate } from '@mdi/js'
import './styles/global.scss'
import i18n from './i18n'
import { useThemeStore } from './stores/theme'
import { useLocaleStore } from './stores/locale'

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      flag: mdiFlag,
      flagVariant: mdiFlagVariant,
      weatherSunny: mdiWeatherSunny,
      weatherNight: mdiWeatherNight,
      translate: mdiTranslate,
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#7c3aed',
          secondary: '#64748b',
          accent: '#c084fc',
          error: '#ef4444',
          info: '#3b82f6',
          success: '#22c55e',
          warning: '#f59e0b',
          background: '#ffffff',
          surface: '#f8fafc',
          'on-background': '#111827',
          'on-surface': '#374151',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#a78bfa',
          secondary: '#94a3b8',
          accent: '#c084fc',
          error: '#f87171',
          info: '#60a5fa',
          success: '#4ade80',
          warning: '#fbbf24',
          background: '#0f172a',
          surface: '#1e293b',
          'on-background': '#f1f5f9',
          'on-surface': '#cbd5e1',
        },
      },
    },
  },
})

const app = createApp(App)

// Use Pinia
app.use(pinia)

// Initialize stores
const themeStore = useThemeStore()
const localeStore = useLocaleStore()

// Initialize theme and locale
themeStore.initTheme()
localeStore.initLocale()

// Sync Vuetify theme with store (similar to pod.fe approach)
const syncVuetifyTheme = () => {
  const vuetify = app.config.globalProperties.$vuetify
  
  // Watch theme changes and update Vuetify immediately
  watch(() => themeStore.theme, (newTheme) => {
    if (vuetify) {
      vuetify.theme.global.name.value = newTheme
    }
  }, { immediate: true })
}

app.use(router)
app.use(vuetify)
app.use(i18n)

// Initialize theme sync after Vuetify is ready
syncVuetifyTheme()

app.mount('#app')
