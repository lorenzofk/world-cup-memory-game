export default {
  changeLoadingState: (state) => {
    state.isLoading = ! state.isLoading;
  },
  changeStage: (state) => {
    let currentIndex = state.game.currentStageIndex;
    let maxIndex = state.game.stages.length - 1;

    if (currentIndex >= maxIndex) {
        return false;
    }

    state.game.currentStageIndex++;

  },
  changeCurrentMatches(state) {
    let currentStage = state.game.stages[state.game.currentStageIndex];

    let compare = stageName => (element) => {
        return element.stage_name.indexOf(stageName) > -1;
    };

    state.game.currentMatches = state.game.matches.filter(compare(currentStage.name));
  },
  newAttempt(state, payload) {
    payload.match.correctAnswer = payload.correctAnswer;

    state.game.stages[state.game.currentStageIndex].selectedMatches.push(payload.match);
  },
  setMatches: (state, matches) => {
    state.game.matches = matches;
  },
  incrementHits: (state) => {
    state.game.hits++;
  },
  incrementMisses: (state) => {
    state.game.misses++;
  },
  resetState (state, newState) {
    Object.assign(state, newState);
  }
}