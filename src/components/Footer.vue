<template>
  <VFooter class="slate-dark footer-responsive">
    <VContainer class="footer-container">
      <VRow>
        <VCol cols="12" sm="6" md="4" lg>
          <h3 class="footer-title mb-4">{{ personalData.basicInfo.name }}</h3>
          <p class="text-gray-400 footer-description">
            {{ $t('footer.description') }}
          </p>
        </VCol>

        <VCol cols="12" sm="6" md="4" lg>
          <h3 class="footer-title mb-4">{{ $t('footer.links') }}</h3>
          <ul class="footer-links">
            <li v-for="link in personalData.navLinks" :key="link.name">
              <a :href="link.href" class="footer-link">{{
                $t(`nav.${link.name.toLowerCase()}`)
              }}</a>
            </li>
          </ul>
        </VCol>

        <VCol cols="12" sm="12" md="4" lg="auto" class="text-sm-center text-md-left">
          <h3 class="footer-title mb-4">{{ $t('footer.social') }}</h3>
          <div class="d-flex justify-center justify-md-start">
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

      <VDivider class="footer-divider border-gray-800"></VDivider>

      <div class="text-center text-gray-400">
        <p class="d-flex align-center justify-center mb-0 footer-copyright flex-wrap">
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

/* Footer responsive padding */
.footer-responsive {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Container responsive padding */
.footer-container {
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Footer title responsive */
.footer-title {
  font-size: 1.125rem;
  font-weight: 600;
}

/* Footer description responsive */
.footer-description {
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Footer links */
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
  font-size: 0.875rem;
  display: inline-block;
}

.footer-link:hover {
  color: #c084fc;
}

/* Social buttons */
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

/* Footer divider responsive */
.footer-divider {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/* Copyright text responsive */
.footer-copyright {
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Tablet và màn hình nhỏ (≥600px) */
@media (min-width: 600px) {
  .footer-responsive {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .footer-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .footer-title {
    font-size: 1.25rem;
  }

  .footer-description {
    font-size: 0.9375rem;
  }

  .footer-divider {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
}

/* Tablet lớn (≥960px) */
@media (min-width: 960px) {
  .footer-responsive {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .footer-container {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .footer-title {
    font-size: 1.375rem;
  }

  .footer-description {
    font-size: 1rem;
  }

  .footer-link {
    font-size: 0.9375rem;
  }

  .footer-divider {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .footer-copyright {
    font-size: 0.9375rem;
  }
}

/* Desktop (≥1280px) */
@media (min-width: 1280px) {
  .footer-container {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}

/* Desktop lớn (≥1920px) */
@media (min-width: 1920px) {
  .footer-container {
    padding-left: 20rem;
    padding-right: 20rem;
  }
}

/* Mobile - điều chỉnh text-center cho các phần tử */
@media (max-width: 599px) {
  .footer-title {
    text-align: center;
  }

  .footer-description {
    text-align: center;
  }

  .footer-links {
    text-align: center;
  }

  .footer-link {
    text-align: center;
  }
}
</style>
