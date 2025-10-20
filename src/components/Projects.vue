<template>
  <div id="projects">
    <h2>{{ $t('projects.title') }}</h2>
    <v-row>
      <v-col v-for="p in projectList" :key="p.id" cols="12" md="4">
        <v-card>
          <v-img :src="p.image" height="180" />
          <v-card-title>{{ p.title }}</v-card-title>
          <v-card-text>{{ p.desc }}</v-card-text>
          <v-card-actions>
            <v-btn text :href="p.link" target="_blank">{{ $t('projects.view') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectList: [
        { id:1, title: 'Project One', desc: 'Description for project one', image: '/src/assets/original/project1.jpg', link: '#' },
        { id:2, title: 'Project Two', desc: 'Description for project two', image: '/src/assets/original/project2.jpg', link: '#' },
        { id:3, title: 'Project Three', desc: 'Description for project three', image: '/src/assets/original/project3.jpg', link: '#' }
      ]
    }
  }
}
</script>
