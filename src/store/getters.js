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
  },
  hits: (store) => {
    return store.game.hits;
  },
  misses: (store) => {
    return store.game.misses;
  },
  isFinalMatch: (store) => {
    let stages = store.game.stages;
    return stages[store.game.currentStageIndex].numberOfMatches === 1;
  },
  canAdvanceStage: (store) => {
    let stages = store.game.stages;
    let currentStageTotalOfMatches = stages[store.game.currentStageIndex].numberOfMatches;
    let currentSelectedMatches = stages[store.game.currentStageIndex].selectedMatches.length;

    return currentStageTotalOfMatches === currentSelectedMatches;
  }
}