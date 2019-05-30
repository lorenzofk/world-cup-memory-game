import Vuex from 'vuex'
import createConfig from '@/store';
import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Store', () => {
  
  const TOTAL_OF_MATCHES = 64;
  const storeConfig = createConfig();
  const store = new Vuex.Store(storeConfig);

  it('should change the "loading" value when a request is send', async () => {
    
    expect(store.getters.loading).to.be.true;
    await store.dispatch('fetchMatches');
    expect(store.getters.loading).to.be.false;

  });

  it('should dispatch "fetchMatches" and fill the "matches" list', async () => {
    
    await store.dispatch('fetchMatches');

    expect(store.getters.matches).to.be.a('array');
    expect(store.getters.matches).to.have.lengthOf(TOTAL_OF_MATCHES);

  });

})
