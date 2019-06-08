<template>
  <div class="game">
    
    <div v-if="loading" class="centered">
      <img src="/assets/loader.gif">
    </div>
    
    <div v-else class="container">
      <h3> {{ currentStage.name }} </h3>
      <MatchesList />
      <hr>
      <button @click="changeStage" class="btn btn-sm btn-primary"> Next Stage </button>
    </div>
    
  </div>
</template>

<script>

import MatchesList from "@/components/MatchesList";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Game",
  components: { MatchesList },
  computed: {
    ...mapGetters([
      'loading', 
      'matches', 
      'currentStage'
    ]),
  },
  created() {
    if (! this.matches.length) {
      this.fetchMatches();
    }
  },
  methods: {
    ...mapActions([
      'fetchMatches', 
      'changeStage'
    ]),
  },
}

</script>

<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: -webkit-translate(-50%, -50%);
  transform: -moz-translate(-50%, -50%);
  transform: -ms-translate(-50%, -50%);
}
</style>
