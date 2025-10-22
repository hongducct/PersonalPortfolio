<template>
  <v-container id="skills" class="py-20">
    <v-row>
      <v-col cols="12">
        <div class="text-center mb-12">
          <h2 class="purple-text mb-2">{{ $t('skills.title') }}</h2>
          <p class="text-gray-600">{{ $t('skills.subtitle') }}</p>
        </div>

        <v-row>
          <v-col v-for="category in skillCategories" :key="category.title" cols="12" sm="6" md="3">
            <v-card class="skill-card pa-6 hover-shadow transition-shadow" elevation="2">
              <div :class="[category.bgColor, category.color, 'skill-icon mb-4']">
                <v-icon size="24">{{ category.icon }}</v-icon>
              </div>

              <h3 class="text-gray-900 mb-4">{{ category.title }}</h3>

              <div class="skill-list">
                <div v-for="skill in category.skills" :key="skill" class="skill-item">
                  {{ skill }}
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { personalData } from '@/config/personalData'

export default {
  name: 'SkillsSection',
  data() {
    return {
      skillCategories: personalData.skills,
    }
  },
}
</script>

<style scoped>
.skill-card {
  height: 100%;
  transition: box-shadow 0.3s ease;
  /* background color màu xanh pastel */
  background-color: #f6fbff;
}

.skill-card:hover {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-blue-50 {
  background-color: #eff6ff;
}

.bg-green-50 {
  background-color: #f0fdf4;
}

.bg-pink-50 {
  background-color: #fdf2f8;
}

.bg-orange-50 {
  background-color: #fff7ed;
}

.text-blue-500 {
  color: #3b82f6;
}

.text-green-500 {
  color: #22c55e;
}

.text-pink-500 {
  color: #ec4899;
}

.text-orange-500 {
  color: #f97316;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skill-item {
  color: rgba(var(--v-theme-on-background));
  font-size: 0.875rem;
  padding: 4px 12px;
  background-color: rgba(var(--v-theme-background), 0.5);
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.skill-item:hover {
  background-color: #e2e8f0;
}

.hover-shadow:hover {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.transition-shadow {
  transition: box-shadow 0.3s ease;
}
</style>
