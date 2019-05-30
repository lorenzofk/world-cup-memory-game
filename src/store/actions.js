import { RepositoryFactory } from "@/repositories/RepositoryFactory";

const MatchesRepository = RepositoryFactory.get('matches');

export default {
  async fetchMatches({ commit }) {
      const { data } = await MatchesRepository.get();
      commit("setMatches", data);
      commit("changeLoadingState");
  },
  changeStage({ commit }) {
    commit("changeStage");
  },
}