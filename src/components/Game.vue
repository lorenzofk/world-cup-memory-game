<template>
  <div class="game">
    
    <div v-if="loading" class="centered">
      <img src="/assets/loader.gif">
    </div>
    
    <div v-else class="container">
      <h3> {{ currentStage.name }} </h3>
      <MatchesList />
      <hr>
      <button @click="advanceStage" class="btn btn-sm btn-primary"> Next Stage </button>
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
      'currentStage',
      'canAdvanceStage'
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
    advanceStage() {
      
      // If all matches are been selected
      // the player can advance to next stage

      if (! this.canAdvanceStage) {
        alert('You should selected at least one winner for each match.');
        return false;
      }

      this.changeStage();

    },
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
