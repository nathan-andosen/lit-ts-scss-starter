
import { expect } from 'chai';
import { utilsSrv } from './utils.service';


describe('UtilsService', () => {
  it('should add numbers', () => {
    expect(utilsSrv.add(1,2)).to.equal(3);
    expect(1).to.equal(1);
  });
});
