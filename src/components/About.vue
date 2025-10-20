<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-text class="d-flex justify-center">
          <v-avatar size="120">
            <v-img src="/src/assets/original/avatar.jpg" />
          </v-avatar>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <h2>{{ $t('about.title') }}</h2>
      <p>{{ $t('about.description') }}</p>
      <v-chip-group>
        <v-chip v-for="skill in skills" :key="skill">{{ skill }}</v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        'Vue.js',
        'Vuetify',
        'Laravel',
        'PostgreSQL',
        'MySQL',
        'Docker',
        'Tailwind CSS',
        'Bootstrap',
        'Material UI',
        'React',
        'Node.js',
        'MongoDB',
        'Redis',
        'PHP',
        'NestJs',
        'Figma',
      ],
    }
  },
}
</script>
