<template>
  <div class="game">
    <h1> World Cup Game </h1>
  </div>
</template>

<script>

import { RepositoryFactory } from "./../repositories/RepositoryFactory";

const MatchesRepository = RepositoryFactory.get('matches');

export default {
  name: "Game",
  props: {},
  data () {
    return {
      isLoading: false,
      matches: [],
    }
  },
  created() {
    this.fetchMatches();
  },
  methods: {
    async fetchMatches() {
      this.isLoading = true;
      const { data } = await MatchesRepository.get();
      this.isLoading = false;
      this.matches = data;
    }
  }
}


</script>

<style scoped>

</style>
