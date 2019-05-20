import mutations from '@/store/mutations';
import getters from '@/store/getters';
import actions from '@/store/actions';

export default function createConfig () {
  
  const state = {
    isLoading: true,
    game: {
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