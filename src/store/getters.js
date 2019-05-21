export default {
  currentStage: (store) => {
    let stages = store.game.stages;
    return stages[store.game.currentStageIndex].name;
  },
  matches: (store) => {
    return store.game.matches;
  },
  loading: (store) => {
    return store.isLoading;
  }
}