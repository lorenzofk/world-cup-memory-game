<template>
  <div class="game">
    
    <div v-if="loading" class="centered">
      <img src="/assets/loader.gif">
    </div>
    
    <div v-else class="container">

      <div class="gameStatus">
        <span style="float:left"> {{ currentStage.name }} </span>
        <span style="float:right"> Hits: {{ hits }} | Misses: {{ misses }} </span>
        <div style="clear: both;"></div>
      </div>
      
      <!-- Matches Component -->
      <MatchesList />
      
      <hr>

      <!-- Shows the button to advance stage or restart the game -->
      <div v-if="canAdvanceStage" class="row">
        <div class="button col-sm-12">
          <button v-if="isFinalMatch" @click="restart" class="btn btn-sm btn-danger"> Restart Game </button>
          <button v-else @click="advanceStage" class="btn btn-sm btn-primary"> Next Stage </button>
        </div>
      </div>

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
      'canAdvanceStage',
      'isFinalMatch',
      'hits',
      'misses'
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
      'changeStage',
      'restartGame'
    ]),
    restart() {
      alert('Thank you! :) Your score: ' + this.hits + ' hits and ' + this.misses + ' misses.');
      this.restartGame();
    },
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

.container {
  background-color: #0080000d;
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
  margin-right: auto;
  margin-left: auto;
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: -webkit-translate(-50%, -50%);
  transform: -moz-translate(-50%, -50%);
  transform: -ms-translate(-50%, -50%);
}

.gameStatus {
  margin: 0px;
  padding: 15px;
  color: #fff;
  background-color: #34495e;
  font-size: 1.4em;
  font-weight: bold;
}

.button {
  padding-bottom: 10px;
}

</style>
