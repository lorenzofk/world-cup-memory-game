import { expect } from 'chai';
import { RepositoryFactory } from "@/repositories/RepositoryFactory";

describe('Service API', () => {
  
  const MatchesRepository = RepositoryFactory.get('matches');
  const TOTAL_OF_MATCHES = 64;

  it('should return all "matches" from third API', async () => {
    
    let response = await MatchesRepository.get();

    expect(response.status).to.equal(200);
    expect(response.data).to.be.a('array');
    expect(response.data).to.have.lengthOf(TOTAL_OF_MATCHES);

  });

})