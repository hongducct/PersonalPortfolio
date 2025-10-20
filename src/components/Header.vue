<template>
  <VAppBar app color="primary" dark>
    <VContainer>
      <VRow align="center" no-gutters>
        <VCol cols="auto">
          <VBtn text @click="goHome">My Portfolio</VBtn>
        </VCol>
        <VSpacer />
        <VCol cols="auto" class="d-flex align-center">
          <VBtn icon @click="toggleTheme" :title="$t('toggle_theme')">
            <VIcon>{{ themeIcon }}</VIcon>
          </VBtn>
          <VSelect
            :items="simpleLangs"
            v-model="localeValue"
            dense
            hide-details
            outlined
            item-title="title"
            item-value="value"
            style="max-width: 140px"
            prepend-inner-icon="translate"
          />
        </VCol>
      </VRow>
    </VContainer>
  </VAppBar>
</template>

<script>
import { useRouter } from 'vue-router'
import { appState } from '@/main.js'
import { computed } from 'vue'

export default {
  setup() {
    const router = useRouter()
    const localeValue = computed({
      get: () => appState.locale,
      set: (v) => {
        appState.locale = v
        if (
          router.app &&
          router.app.config &&
          router.app.config.globalProperties &&
          router.app.config.globalProperties.$i18n
        ) {
          router.app.config.globalProperties.$i18n.global.locale.value = v
        }
      },
    })
    const toggleTheme = () => {
      appState.theme = appState.theme === 'light' ? 'dark' : 'light'
      // switch Vuetify theme (if available)
      if (
        router.app &&
        router.app.config &&
        router.app.config.globalProperties &&
        router.app.config.globalProperties.$vuetify
      ) {
        try {
          router.app.config.globalProperties.$vuetify.theme.global.name.value = appState.theme
        } catch (e) {}
      }
    }
    const themeIcon = computed(() => (appState.theme === 'light' ? 'weatherSunny' : 'weatherNight'))
    const simpleLangs = [
      { title: 'English', value: 'en' },
      { title: 'Tiếng Việt', value: 'vi' },
    ]
    const goHome = () => router.push('/')
    return { goHome, toggleTheme, themeIcon, simpleLangs, localeValue }
  },
}
</script>
