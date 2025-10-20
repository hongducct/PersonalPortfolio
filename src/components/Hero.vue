<template>
  <v-sheet elevation="1" class="pa-8" rounded>
    <v-row>
      <v-col cols="12" md="6">
        <h1>{{ $t('hero.title') }}</h1>
        <p>{{ $t('hero.subtitle') }}</p>
        <v-btn color="primary" class="ma-2" @click="scrollTo('#projects')">{{ $t('hero.cta') }}</v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-img :src="heroImage" alt="hero" contain height="240"></v-img>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return { heroImage: '/src/assets/original/hero.jpg' }
  },
  methods: {
    scrollTo(sel) {
      const el = document.querySelector(sel)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
