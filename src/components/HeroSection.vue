<template>
  <v-container fluid class="hero-section pa-0">
    <v-row no-gutters class="fill-height">
      <v-col cols="12">
        <div class="hero-content">
          <div class="hero-badge mb-4">
            <v-chip
              color="purple"
              variant="outlined"
              class="purple-border purple-text"
              size="large"
            >
              {{ $t('hero.greeting') }}
            </v-chip>
          </div>

          <h1 class="hero-title text-white mb-4">{{ personalData.basicInfo.name }}</h1>

          <p class="hero-subtitle purple-text mb-6">{{ $t('hero.title') }}</p>

          <p class="hero-description text-gray-300 mb-8">
            {{ $t('hero.description') }}
          </p>

          <div class="hero-buttons mb-8">
            <v-btn color="purple" size="large" class="mr-4" @click="scrollToSection('projects')">
              {{ $t('hero.viewProjects') }}
            </v-btn>
            <v-btn
              variant="outlined"
              color="purple"
              size="large"
              class="purple-border text-white"
              @click="scrollToSection('contact')"
            >
              {{ $t('hero.contact') }}
            </v-btn>
          </div>

          <div class="hero-social">
            <v-btn
              v-for="social in personalData.socialLinks"
              :key="social.name"
              icon
              variant="text"
              :color="social.color"
              class="mr-2"
              :href="social.url"
              target="_blank"
              :title="social.name"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </div>

        <v-btn
          icon
          color="purple-300"
          class="scroll-down bounce-animation"
          @click="scrollToSection('about')"
        >
          <v-icon size="32">mdi-chevron-down</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { personalData } from '@/config/personalData'

export default {
  name: 'HeroSection',
  data() {
    return {
      personalData,
    }
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #7c3aed 50%, #0f172a 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwOTQxMTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 1;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
}

.hero-subtitle {
  font-size: clamp(1.125rem, 3vw, 1.75rem);
  font-weight: 600;
  color: #c084fc;
  margin-bottom: 1.5rem;
  letter-spacing: 0.025em;
}

.hero-description {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #cbd5e1;
  font-weight: 400;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.hero-buttons .v-btn {
  padding: 12px 32px !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  border-radius: 50px !important;
  text-transform: none !important;
  letter-spacing: 0.025em !important;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.hero-buttons .v-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4) !important;
}

.hero-social {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 2rem;
}

.hero-social .v-btn {
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.hero-social .v-btn:hover {
  background: rgba(124, 58, 237, 0.3) !important;
  border: 1px solid rgba(124, 58, 237, 0.5) !important;
  transform: translateY(-2px) scale(1.05) !important;
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3) !important;
}

.scroll-down {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.scroll-down:hover {
  color: white !important;
  background: rgba(124, 58, 237, 0.3) !important;
  border: 1px solid rgba(124, 58, 237, 0.5) !important;
  transform: translateX(-50%) translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3) !important;
}

.purple-text {
  color: #c084fc;
}

.text-gray-300 {
  color: #cbd5e1;
}

.purple-border {
  border-color: rgba(196, 132, 252, 0.3) !important;
}

.text-white {
  color: white !important;
}
</style>
