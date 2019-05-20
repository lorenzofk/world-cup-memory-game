<template>
  <div class="game">
    <h1> VueJS + Vuex </h1>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Game",
  props: {},
  computed: {
    ...mapGetters(['loading']),
  },
  created() {
    this.fetchMatches();
  },
  methods: {
    ...mapActions(['fetchMatches']),
  },
}

</script>

<style scoped>

</style>
