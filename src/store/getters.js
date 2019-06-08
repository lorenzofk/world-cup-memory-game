export default {
  currentStage: (store) => {
    let stages = store.game.stages;
    return stages[store.game.currentStageIndex];
  },
  matches: (store) => {
    return store.game.matches;
  },
  currentMatches: (store) => {
    return store.game.currentMatches;
  },
  loading: (store) => {
    return store.isLoading;
  }
}