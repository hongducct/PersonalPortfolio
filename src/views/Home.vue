<template>
  <v-container class="mt-10">
    <Hero />
    <v-divider class="my-8" />
    <About />
    <v-divider class="my-8" />
    <Projects />
    <v-divider class="my-8" />
    <Contact />
  </v-container>
</template>

<script>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
export default { components: { Hero, About, Projects, Contact } }
</script>
