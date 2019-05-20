import MatchesRepository from "./matchesRepository";

// Here we can append all available repositories
const repositories = {
  matches: MatchesRepository,
}

// The name of the repository is used
// as index to find him 
export const RepositoryFactory = {
  get: name => repositories[name]
}