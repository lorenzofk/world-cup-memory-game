import mutations from '@/store/mutations';
import getters from '@/store/getters';
import actions from '@/store/actions';

export default function createConfig () {
  
  const state = {
    isLoading: true,
    game: {
      stages: [
        {
          name: 'Round of 16',
          numberOfMatches: 8,
          selectedMatches: [],
        },
        {
          name: 'Quarter-finals',
          numberOfMatches: 4,
          selectedMatches: [],
        },
        {
          name: 'Semi-finals',
          numberOfMatches: 2,
          selectedMatches: [],
        },
        {
          name: 'Final',
          numberOfMatches: 1,
          selectedMatches: [],
        }
      ],
      matches: [],
      currentMatches: [],
      hits: 0,
      misses: 0,
      currentStageIndex: 0,
    }
  };

  return {
    state,
    actions,
    mutations,
    getters
  }
}