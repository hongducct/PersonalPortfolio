<template>
  <VFooter class="slate-dark py-12">
    <VContainer>
      <VRow>
        <VCol cols="12" md>
          <h3 class="mb-4">{{ personalData.basicInfo.name }}</h3>
          <p class="text-gray-400">
            {{ $t('footer.description') }}
          </p>
        </VCol>

        <VCol cols="12" md>
          <h3 class="mb-4">{{ $t('footer.links') }}</h3>
          <ul class="footer-links">
            <li v-for="link in personalData.navLinks" :key="link.name">
              <a :href="link.href" class="footer-link">{{
                $t(`nav.${link.name.toLowerCase()}`)
              }}</a>
            </li>
          </ul>
        </VCol>

        <VCol cols="12" md="auto">
          <h3 class="mb-4">{{ $t('footer.social') }}</h3>
          <div class="d-flex">
            <VBtn
              v-for="social in personalData.socialLinks"
              :key="social.name"
              icon
              variant="text"
              :color="social.color"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn mr-1"
              :title="social.name"
            >
              <VIcon>{{ social.icon }}</VIcon>
            </VBtn>
          </div>
        </VCol>
      </VRow>

      <VDivider class="my-8 border-gray-800"></VDivider>

      <div class="text-center text-gray-400">
        <p class="d-flex align-center justify-center mb-0">
          {{ `© ${new Date().getFullYear()} Nguyễn Hồng Đức - ` }}
          <VIcon color="red" size="16" class="mx-1">mdi-heart</VIcon>
          {{ $t('footer.madeWith') }}
        </p>
      </div>
    </VContainer>
  </VFooter>
</template>

<script>
import { personalData } from '@/config/personalData'

export default {
  name: 'Footer',
  data() {
    return {
      personalData,
    }
  },
}
</script>

<style scoped>
.slate-dark {
  background-color: #0f172a;
}

.text-gray-400 {
  color: #94a3b8;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-link {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #c084fc;
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  color: white !important;
  background-color: rgba(124, 58, 237, 0.2) !important;
}

.border-gray-800 {
  border-color: #1f2937 !important;
}
.v-container {
  padding-left: 20rem;
  padding-right: 20rem;
}
</style>
