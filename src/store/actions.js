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
  newAttempt({ commit }, match) {
    commit("newAttempt", match);
  },
}