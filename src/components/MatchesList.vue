<template>
  <div class="matches-list">
    <div v-for="(match, index) in currentMatches" :key="index">
        <hr>
        <div class="row">
          <div class="col-sm-5">
            <a @click="selectResult(match, match.home_team.code)" >
              <strong> {{ match.home_team.country }} </strong>
            </a>
          </div>
          <div class="col-sm-2"> 
            <strong> X </strong>
          </div>
          <div class="col-sm-5"> 
            <a @click="selectResult(match, match.away_team.code)"> 
              <strong> {{ match.away_team.country }} </strong>
            </a>
          </div>
        </div>
    </div>

  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: "MatchesList",
  props: {},
  computed: {
    ...mapGetters(['matches', 'currentStage', 'currentMatches']),
  },
  methods: {
    ...mapActions([
      'fetchMatches',
      'changeStage',
      'incrementHits',
      'incrementMisses',
      'newAttempt'
    ]),
    selectResult(match, choice) {

      // If the current match has not been clicked
      // increases the attempts and verify if the answer 
      // is correct
      if (! this.verifyIfMatchHasBeenSelected(match)) {
        
        // Increase attempts
        this.newAttempt(match);

        if (this.verifyResult(match.winner_code, choice)) {
            this.incrementHits();
        } else {
            this.incrementMisses();
        }

      }
    },
    verifyResult(matchWinnerCode, choice) {
      return matchWinnerCode === choice;
    },
    verifyIfMatchHasBeenSelected(match) {
      return this.currentStage.selectedMatches.includes(match);
    },
  },
}

</script>
