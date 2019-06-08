import { expect } from 'chai';
import { RepositoryFactory } from "@/repositories/RepositoryFactory";

const Constants = require('./constants');

describe('Service API', () => {
  
  const MatchesRepository = RepositoryFactory.get('matches');

  it('should return all "matches" from third API', async () => {
    
    let response = await MatchesRepository.get();

    expect(response.status).to.equal(200);
    expect(response.data).to.be.a('array');
    expect(response.data).to.have.lengthOf(Constants.TOTAL_OF_MATCHES);

  });

})
