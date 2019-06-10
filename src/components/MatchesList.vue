<template>
  <div class="matches-list">

    <div v-for="(match, index) in currentMatches" :key="index">
        <hr v-show="index > 0">
        <div class="row">
          <div class="col-sm-5">
            <a @click="selectResult(match, match.home_team.code)" >
              <strong> {{ match.home_team.country }} </strong>
            </a>
          </div>
          <div class="col-sm-1"> 
            <strong> <font-awesome-icon icon="times" size="lg" /> </strong>
          </div>
          <div class="col-sm-5"> 
            <a @click="selectResult(match, match.away_team.code)"> 
              <strong> {{ match.away_team.country }} </strong>
            </a>
          </div>
          <div v-if="verifyIfMatchHasBeenSelected(match)" class="col-sm-1"> 
              <span v-if="verifyLastMovement(match)" class="hit"> <font-awesome-icon icon="check" size="lg" style="color: green"/> </span>
              <span v-else class="miss"> <font-awesome-icon icon="times" size="lg" style="color: red"/> </span>
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
        
        // Gets the result
        let correctAnswer = this.verifyResult(match.winner_code, choice);
        
        let payload = {
          match: match,
          correctAnswer: correctAnswer
        };

        // Increase attempts
        this.newAttempt(payload);

        if (correctAnswer) {
            this.incrementHits();
        } else {
            this.incrementMisses();
        }

      }
    },
    verifyResult(matchWinnerCode, choice) {
      return matchWinnerCode === choice;
    },
    verifyLastMovement(match) {
      let lastMatch = this.currentStage.selectedMatches.filter(object => {
        return object.attendance === match.attendance
      });

      return lastMatch[0].correctAnswer;
    },
    verifyIfMatchHasBeenSelected(match) {
      return this.currentStage.selectedMatches.includes(match);
    },
  },
}

</script>

<style scoped>
  
  .matches-list {
    padding-top: 15px;
    padding-bottom: 5px;
  }

  a strong {
    color: #007bff;
    cursor: pointer;
  }

</style>
