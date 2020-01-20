
import sinon from 'sinon'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import googleApiClient from '../../src/client/google-api-client';
import getData from '../../src/services/locations'

chai.use(chaiAsPromised);

const { expect } = chai;

describe('Location-service', () => {
  describe('when getData is called', () => {
    describe('and customer name is unknown', () => {
      it('throws an error', (done) => {
        const getDataPromise = getData({ customerName: 'Unknown customer', latitude: '37.423021', longitude: '-122.083739' })
        expect(getDataPromise).to.eventually.be.rejectedWith('Customer not found').and.notify(done)
      })
    })
    describe('and customer is known', () => {
      const sandbox = sinon.createSandbox();
      sandbox.stub(googleApiClient, 'getLocations').resolves(42)
      it('returns 42', async () => {
        const actual = await getData({ customerName: 'Sunrise Bank', latitude: '37.423021', longitude: '-122.083739' })
        expect(actual).to.equal(42)
      })
    })
  });
});
