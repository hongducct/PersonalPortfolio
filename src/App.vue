<template>
  <VApp>
    <!-- Fixed Theme and Language Switchers -->
    <div class="fixed-switchers">
      <div class="switcher-container">
        <!-- Language Switcher -->
        <LanguageSwitcher :size="'small'" :color="isDark ? 'white' : 'text-gray-300'" />

        <!-- Theme Switcher -->
        <ThemeSwitcher :size="'small'" :color="isDark ? 'white' : 'text-gray-300'" />
      </div>
    </div>

    <!-- Main Content -->
    <HeroSection />
    <VMain class="main-content">
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </VMain>
    <Footer />
  </VApp>
</template>

<script>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { personalData } from '@/config/personalData'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  components: {
    HeroSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
    Footer,
    ThemeSwitcher,
    LanguageSwitcher,
  },
  setup() {
    const themeStore = useThemeStore()

    return {
      personalData,
      isDark: computed(() => themeStore.isDarkMode),
    }
  },
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

@keyframes bounce {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    transform: translateY(-25%);
  }

  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: none;
  }
}

.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.hover-shadow:hover {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

/* Fixed Switchers Styles */
.fixed-switchers {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.switcher-container {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(var(--v-theme-surface), 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--v-theme-surface), 0.2) !important;
  border-radius: 50px;
  padding: 8px 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-theme--light .switcher-container {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.15) !important;
}

.switcher-container:hover {
  background: rgba(124, 58, 237, 0.2);
  border: 1px solid rgba(124, 58, 237, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.2);
}

/* Dark mode styles for switchers */
.v-application.dark .switcher-container {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.v-application.dark .switcher-container:hover {
  background: rgba(124, 58, 237, 0.3);
  border: 1px solid rgba(124, 58, 237, 0.4);
}

/* Main content spacing */
.main-content {
  padding-left: 20rem !important;
  padding-right: 20rem !important;
}

/* Responsive design */
@media (max-width: 1500px) {
  .main-content {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
}

@media (max-width: 768px) {
  .fixed-switchers {
    top: 15px;
    right: 15px;
  }

  .switcher-container {
    padding: 6px 10px;
    gap: 6px;
  }

  .main-content {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
</style>
