<template>
  <v-container id="projects" class="py-20">
    <v-row>
      <v-col cols="12">
        <div class="text-center mb-12">
          <h2 class="purple-text mb-2">{{ $t('projects.title') }}</h2>
          <p class="text-gray-600">{{ $t('projects.subtitle') }}</p>
        </div>

        <v-row>
          <v-col v-for="project in projects" :key="project.id" cols="12" md="6" lg="4">
            <v-card class="project-card hover-shadow transition-all duration-300" elevation="2">
              <div class="project-image-container">
                <v-img
                  :src="project.image"
                  :alt="project.title"
                  height="200"
                  cover
                  class="project-image hover-scale"
                >
                  <div class="image-overlay"></div>
                </v-img>
              </div>

              <v-card-title class="project-title">
                {{ project.title }}
              </v-card-title>

              <v-card-subtitle class="project-description">
                {{ project.description }}
              </v-card-subtitle>

              <v-card-text>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <v-chip
                    v-for="tag in project.tags"
                    :key="tag"
                    color="purple"
                    variant="outlined"
                    size="small"
                    class="purple-chip"
                  >
                    {{ tag }}
                  </v-chip>
                </div>

                <div class="d-flex gap-2">
                  <v-btn
                    color="purple"
                    size="small"
                    class="flex-grow-1"
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-icon start>mdi-open-in-new</v-icon>
                    {{ $t('projects.demo') }}
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    color="purple"
                    size="small"
                    class="flex-grow-1"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-icon start>mdi-github</v-icon>
                    {{ $t('projects.code') }}
                  </v-btn>
                </div>
              </v-card-text>
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
  name: 'ProjectsSection',
  data() {
    return {
      projects: personalData.projects,
    }
  },
}
</script>

<style scoped>
.purple-text {
  color: #7c3aed;
}

.text-gray-600 {
  color: #64748b;
}

.project-card {
  height: 100%;
  transition: all 0.3s ease;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-image {
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: #7c3aed;
}

.project-description {
  color: #64748b;
  line-height: 1.5;
}

.purple-chip {
  background-color: rgba(124, 58, 237, 0.1) !important;
  color: #7c3aed !important;
  border-color: rgba(124, 58, 237, 0.3) !important;
}

.purple-chip:hover {
  background-color: rgba(124, 58, 237, 0.2) !important;
}

.hover-shadow:hover {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.hover-scale:hover {
  transform: scale(1.05);
}

.transition-all {
  transition: all 0.3s ease;
}

.duration-300 {
  transition-duration: 0.3s;
}
</style>
