<template>
  <VBtn
    :variant="variant"
    :color="color"
    :size="size"
    :class="buttonClass"
    @click="toggleLanguage"
    :title="isVietnamese ? 'Switch to English' : 'Chuyển sang Tiếng Việt'"
    icon
  >
    <VIcon>{{ isVietnamese ? 'mdi-flag' : 'mdi-flag-variant' }}</VIcon>
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
  min-width: 48px;
}

.language-switcher:hover {
  transform: scale(1.05);
}
</style>
