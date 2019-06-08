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
        },
        {
          name: 'Quarter-finals',
          numberOfMatches: 4,
        },
        {
          name: 'Semi-finals',
          numberOfMatches: 2,
        },
        {
          name: 'Final',
          numberOfMatches: 1,
        }
      ],
      currentStageIndex: 0,
      matches: [],
      currentMatches: [],
    }
  };

  return {
    state,
    actions,
    mutations,
    getters
  }
}