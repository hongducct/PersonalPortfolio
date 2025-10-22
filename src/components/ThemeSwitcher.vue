<template>
  <VBtn
    :icon="icon"
    :variant="variant"
    :color="color"
    :size="size"
    :class="buttonClass"
    @click="toggleTheme"
    :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <VIcon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</VIcon>
  </VBtn>
</template>

<script>
import { useThemeStore } from '@/stores/theme'

export default {
  name: 'ThemeSwitcher',
  props: {
    icon: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String,
      default: 'text',
    },
    color: {
      type: String,
      default: 'gray-400',
    },
    size: {
      type: String,
      default: 'default',
    },
    buttonClass: {
      type: String,
      default: 'theme-switcher',
    },
  },
  setup() {
    const themeStore = useThemeStore()

    return {
      themeStore,
    }
  },
  computed: {
    isDark() {
      return this.themeStore.isDarkMode
    },
  },
  methods: {
    toggleTheme() {
      this.themeStore.toggleTheme()
    },
  },
}
</script>

<style scoped>
.theme-switcher {
  /* transition: all 0.3s ease; */
  border: 1px solid rgba(var(--v-theme-surface), 0.15) !important;
}

.theme-switcher:hover {
  color: white !important;
  background-color: rgba(124, 58, 237, 0.2) !important;
}
</style>
