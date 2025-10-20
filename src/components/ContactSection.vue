<template>
  <v-container id="contact" class="py-20">
    <v-row>
      <v-col cols="12">
        <div class="text-center mb-12">
          <h2 class="purple-text mb-2">{{ $t('contact.title') }}</h2>
          <p class="text-gray-600">{{ $t('contact.subtitle') }}</p>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <div class="mb-6">
              <h3 class="text-gray-900 mb-4">{{ $t('contact.info') }}</h3>
              <p class="text-gray-600 mb-6" style="line-height: 1.6">
                {{ $t('contact.infoText') }}
              </p>
            </div>

            <div class="contact-info">
              <v-card
                v-for="contact in contactInfo"
                :key="contact.type"
                class="mb-4 hover-shadow transition-shadow"
                elevation="2"
              >
                <v-card-text class="pa-4">
                  <div class="d-flex align-center">
                    <div class="contact-icon mr-4">
                      <v-icon color="purple" size="20">{{ contact.icon }}</v-icon>
                    </div>
                    <div>
                      <p class="text-gray-900 mb-1">{{ contact.label }}</p>
                      <a
                        v-if="contact.href"
                        :href="contact.href"
                        class="purple-text text-decoration-none"
                        :class="{ 'hover-underline': contact.href }"
                      >
                        {{ contact.value }}
                      </a>
                      <span v-else class="purple-text">{{ contact.value }}</span>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="pa-6" elevation="2">
              <h3 class="text-gray-900 mb-6">{{ $t('contact.sendMessage') }}</h3>

              <v-form @submit.prevent="handleSubmit">
                <v-text-field
                  v-model="formData.name"
                  :label="$t('contact.name')"
                  :placeholder="$t('contact.namePlaceholder')"
                  variant="outlined"
                  class="mb-4"
                  :rules="[(v) => !!v || $t('contact.nameRequired')]"
                  required
                />

                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  :placeholder="$t('contact.emailPlaceholder')"
                  type="email"
                  variant="outlined"
                  class="mb-4"
                  :rules="emailRules"
                  required
                />

                <v-textarea
                  v-model="formData.message"
                  :label="$t('contact.message')"
                  :placeholder="$t('contact.messagePlaceholder')"
                  variant="outlined"
                  rows="5"
                  class="mb-4"
                  :rules="[(v) => !!v || $t('contact.messageRequired')]"
                  required
                />

                <v-btn type="submit" color="purple" size="large" block class="purple-bg">
                  <v-icon start>mdi-send</v-icon>
                  {{ $t('contact.send') }}
                </v-btn>
              </v-form>
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
  name: 'ContactSection',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      contactInfo: [
        {
          type: 'email',
          icon: 'mdi-email',
          label: this.$t('contact.email'),
          value: personalData.basicInfo.email,
          href: `mailto:${personalData.basicInfo.email}`,
        },
        {
          type: 'phone',
          icon: 'mdi-phone',
          label: this.$t('contact.phone'),
          value: personalData.basicInfo.phone,
          href: `tel:${personalData.basicInfo.phone}`,
        },
        {
          type: 'location',
          icon: 'mdi-map-marker',
          label: this.$t('contact.address'),
          value: personalData.basicInfo.location,
          href: null,
        },
      ],
      emailRules: [
        (v) => !!v || this.$t('contact.emailRequired'),
        (v) => /.+@.+\..+/.test(v) || this.$t('contact.emailInvalid'),
      ],
    }
  },
  methods: {
    handleSubmit() {
      // Mock form submission
      alert(this.$t('contact.successMessage'))
      this.formData = { name: '', email: '', message: '' }
    },
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

.text-gray-900 {
  color: #111827;
}

.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(124, 58, 237, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hover-shadow:hover {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.transition-shadow {
  transition: box-shadow 0.3s ease;
}

.hover-underline:hover {
  text-decoration: underline;
}

.purple-bg {
  background-color: #7c3aed !important;
}

.text-decoration-none {
  text-decoration: none;
}
</style>
