<template>
  <v-container id="about" class="py-20 slate-bg">
    <v-row>
      <v-col cols="12">
        <div class="text-center mb-12">
          <h2 class="purple-text mb-2">{{ $t('about.title') }}</h2>
          <p class="text-gray-600">{{ $t('about.subtitle') }}</p>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-8 shadow-lg mb-6">
              <div class="d-flex align-center mb-6">
                <v-avatar size="80" class="purple-gradient mr-4">
                  <span class="text-white text-h5 font-weight-bold">{{
                    personalData.basicInfo.initials
                  }}</span>
                </v-avatar>
                <div>
                  <h3 class="text-gray-900 mb-1">{{ personalData.basicInfo.name }}</h3>
                  <p class="purple-text mb-0">{{ personalData.basicInfo.profession }}</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="d-flex align-center text-gray-700">
                  <v-icon color="purple" class="mr-3">mdi-calendar</v-icon>
                  <div>
                    <span>{{ $t('about.birthday') }}: </span>
                    <span>{{ personalData.basicInfo.birthday }}</span>
                  </div>
                </div>

                <div class="d-flex align-center text-gray-700">
                  <v-icon color="purple" class="mr-3">mdi-star</v-icon>
                  <div>
                    <span>{{ $t('about.zodiac') }}: </span>
                    <span>{{ personalData.basicInfo.zodiac }}</span>
                  </div>
                </div>

                <div class="d-flex align-center text-gray-700">
                  <v-icon color="purple" class="mr-3">mdi-code-tags</v-icon>
                  <div>
                    <span>{{ $t('about.profession') }}: </span>
                    <span>{{ personalData.basicInfo.profession }}</span>
                  </div>
                </div>

                <div class="d-flex align-center text-gray-700">
                  <v-icon color="purple" class="mr-3">mdi-coffee</v-icon>
                  <div>
                    <span>{{ $t('about.hobbies') }}: </span>
                    <span>{{ personalData.basicInfo.hobbies }}</span>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="pa-6 shadow-lg mb-6">
              <h3 class="text-gray-900 mb-4">{{ $t('about.introduction') }}</h3>
              <p class="text-gray-600 mb-4" style="line-height: 1.6">
                {{ $t('about.introductionText') }}
              </p>
              <p class="text-gray-600" style="line-height: 1.6">
                {{ $t('about.introductionText2') }}
              </p>
            </v-card>

            <v-card class="pa-6 purple-gradient text-white shadow-lg">
              <h3 class="mb-4">{{ $t('about.philosophy') }}</h3>
              <p class="mb-0" style="line-height: 1.6; opacity: 0.9">
                {{ $t('about.philosophyText') }}
              </p>
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
  name: 'AboutSection',
  data() {
    return {
      personalData,
    }
  },
}
</script>

<style scoped>
.slate-bg {
  background-color: #f8fafc;
}

.purple-text {
  color: #7c3aed;
}

.text-gray-600 {
  color: #64748b;
}

.text-gray-700 {
  color: #374151;
}

.text-gray-900 {
  color: #111827;
}

.purple-gradient {
  background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
}

.space-y-4 > * + * {
  margin-top: 16px;
}

.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
}
</style>
