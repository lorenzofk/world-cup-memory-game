import createConfig from '@/store';
import { RepositoryFactory } from "@/repositories/RepositoryFactory";

const MatchesRepository = RepositoryFactory.get('matches');

export default {
  async fetchMatches({ commit }) {
    const { data } = await MatchesRepository.get();
    commit("setMatches", data);
    commit("changeLoadingState");
    commit("changeCurrentMatches");
  },
  changeStage({ commit }) {
    commit("changeStage");
    commit("changeLoadingState");
    commit("changeCurrentMatches");
    commit("changeLoadingState");
  },
  incrementHits({ commit }) {
    commit("incrementHits");
  },
  incrementMisses({ commit }) {
    commit("incrementMisses");
  },
  newAttempt({ commit }, payload) {
    commit("newAttempt", payload);
  },
  async restartGame({ commit }) {
    // Reset the state
    commit("resetState", createConfig().state);
    
    // Fetch the data again
    const { data } = await MatchesRepository.get();
    commit("setMatches", data);
    commit("changeLoadingState");
    commit("changeCurrentMatches");
  },
}