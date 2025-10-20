<template>
  <v-card class="pa-6">
    <h2>{{ $t('contact.title') }}</h2>
    <v-form ref="form">
      <v-text-field v-model="name" :label="$t('contact.name')" required></v-text-field>
      <v-text-field v-model="email" :label="$t('contact.email')" required></v-text-field>
      <v-textarea v-model="message" :label="$t('contact.message')" rows="4"></v-textarea>
      <v-btn color="primary" @click="submit">{{ $t('contact.send') }}</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return { name:'', email:'', message:'' }
  },
  methods: {
    submit() {
      alert(this.$t('contact.thanks'))
      this.name = this.email = this.message = ''
    }
  }
}
</script>
