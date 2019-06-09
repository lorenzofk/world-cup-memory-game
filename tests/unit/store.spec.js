import Vuex from 'vuex'
import createConfig from '@/store';
import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';

const Constants = require('./constants');

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Store/Game Logic', () => {

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
    expect(store.getters.matches).to.have.lengthOf(Constants.TOTAL_OF_MATCHES);

  });

  it('should load all matches and specify the currentMatches according to the current stage', async () => {

    await store.dispatch('fetchMatches');

    expect(store.getters.currentMatches).to.be.a('array');
    expect(store.getters.currentMatches).to.have.lengthOf(store.getters.currentStage.numberOfMatches);

    await store.dispatch('changeStage');
    expect(store.getters.currentMatches).to.be.a('array');
    expect(store.getters.currentMatches).to.have.lengthOf(store.getters.currentStage.numberOfMatches);

  });

  it('should increments hits/misses', async () => {

    let currentHits = store.getters.hits;
    let currentMisses = store.getters.misses;
    
    await store.dispatch('incrementHits');
    expect(store.getters.hits).to.equal(currentHits + 1);

    await store.dispatch('incrementMisses');
    expect(store.getters.misses).to.equal(currentMisses + 1);

  });


  it('should allows the user to advance for next stage if all matches are been selected', async () => {

    let currentMatches = store.getters.currentMatches;
    
    expect(store.getters.canAdvanceStage).to.equal(false);

    for (let index in currentMatches) {
      await store.dispatch('newAttempt', {
        correctAnswer: true,
        match: currentMatches[index]
      });
    }

    expect(store.getters.canAdvanceStage).to.equal(true);
    
  });

  it('should allows the user to restart the game', async () => {

    // Initialize the game
    await store.dispatch('restartGame');
    expect(store.getters.currentStage.numberOfMatches).to.equal(8);

    // Advance to next stage
    await store.dispatch('changeStage');
    expect(store.getters.currentStage.numberOfMatches).to.equal(4);

    // Advance to next stage
    await store.dispatch('changeStage');
    expect(store.getters.currentStage.numberOfMatches).to.equal(2);
    
    // Advance to next stage
    await store.dispatch('changeStage');
    expect(store.getters.currentStage.numberOfMatches).to.equal(1);
    
    // Restart the game
    await store.dispatch('restartGame');
    expect(store.getters.currentStage.numberOfMatches).to.equal(8);

    // The scores should be zero
    expect(store.getters.hits).to.equal(0);
    expect(store.getters.misses).to.equal(0);    
  });

});
