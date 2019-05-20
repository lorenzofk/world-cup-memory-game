export default {
  incrementMatches: (state) => {
    state.game.numberOfMatches++;
  },
  changeLoadingState: (state) => {
    state.isLoading = ! state.isLoading;
  },
  setMatches: (state, matches) => {
    state.game.matches = matches;
  }
}