export default {
  changeLoadingState: (state) => {
    state.isLoading = ! state.isLoading;
  },
  changeStage: (state) => {
    let currentIndex = state.game.currentStageIndex;
    let maxIndex = state.game.stages.length - 1;
    
    if (currentIndex < maxIndex) {
      state.game.currentStageIndex++;
    }

  },
  setMatches: (state, matches) => {
    state.game.matches = matches;
  }
}