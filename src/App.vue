<template>
  <v-app>
    <!-- Header with Theme and Language Switchers -->
    <v-app-bar
      :elevation="0"
      :color="isDark ? 'surface' : 'background'"
      class="header-bar"
      height="56"
      :class="{ 'dark-header': isDark }"
    >
      <v-container class="d-flex align-center justify-space-between pa-4">
        <div class="d-flex align-center">
          <v-avatar size="32" class="purple-gradient mr-3">
            <span class="text-white text-caption font-weight-bold">{{
              personalData.basicInfo.initials
            }}</span>
          </v-avatar>
          <h4 class="text-subtitle-1 font-weight-bold mb-0">
            {{ personalData.basicInfo.name }}
          </h4>
        </div>

        <div class="d-flex align-center gap-2">
          <!-- Language Switcher -->
          <LanguageSwitcher :size="'small'" :color="isDark ? 'white' : 'gray-600'" />

          <!-- Theme Switcher -->
          <ThemeSwitcher :size="'small'" :color="isDark ? 'white' : 'gray-600'" />
        </div>
      </v-container>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </v-main>
  </v-app>
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

/* Custom styles to match the original design */
.purple-gradient {
  background: linear-gradient(135deg, #1e1b4b 0%, #7c3aed 50%, #1e1b4b 100%);
}

.purple-text {
  color: #7c3aed;
}

.purple-bg {
  background-color: #7c3aed;
}

.purple-bg-light {
  background-color: rgba(124, 58, 237, 0.1);
}

.purple-border {
  border-color: rgba(124, 58, 237, 0.3);
}

.slate-bg {
  background-color: #f8fafc;
}

.slate-dark {
  background-color: #0f172a;
}

.text-gray-600 {
  color: #64748b;
}

.text-gray-300 {
  color: #cbd5e1;
}

.text-gray-400 {
  color: #94a3b8;
}

.text-gray-700 {
  color: #374151;
}

.text-gray-900 {
  color: #111827;
}

.bounce-animation {
  animation: bounce 1s infinite;
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
</style>
