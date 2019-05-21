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
          name: 'Quarter-Finals',
          numberOfMatches: 4,
        },
        {
          name: 'Semi-Finals',
          numberOfMatches: 2,
        },
        {
          name: 'Final',
          numberOfMatches: 1,
        }
      ],
      currentStageIndex: 0,
      matches: [],
    }
  };

  return {
    state,
    actions,
    mutations,
    getters
  }
}