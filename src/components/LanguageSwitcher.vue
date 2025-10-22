<template>
  <VBtn
    :variant="variant"
    :color="color"
    :size="size"
    :class="buttonClass"
    @click="toggleLanguage"
    :title="isVietnamese ? 'Switch to English' : 'Chuyển sang Tiếng Việt'"
  >
    {{ isVietnamese ? 'VI' : 'EN' }}
  </VBtn>
</template>

<script>
import { useLocaleStore } from '@/stores/locale'

export default {
  name: 'LanguageSwitcher',
  props: {
    variant: {
      type: String,
      default: 'outlined',
    },
    color: {
      type: String,
      default: 'orange',
    },
    size: {
      type: String,
      default: 'default',
    },
    buttonClass: {
      type: String,
      default: 'language-switcher',
    },
  },
  setup() {
    const localeStore = useLocaleStore()

    return {
      localeStore,
    }
  },
  computed: {
    isVietnamese() {
      return this.localeStore.isVietnamese
    },
  },
  methods: {
    toggleLanguage() {
      this.localeStore.toggleLocale()
    },
  },
}
</script>

<style scoped>
.language-switcher {
  transition: all 0.3s ease;
  font-weight: 600;
  max-width: 40px !important;
  height: 40px !important;
  color: white !important;
  background-color: rgba(124, 58, 237, 0.2) !important;
  border: 1px solid rgba(var(--v-theme-surface), 0.15) !important;
}

.language-switcher:hover {
  transform: scale(1.05);
}
</style>
