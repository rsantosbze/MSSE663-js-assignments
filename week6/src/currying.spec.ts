import { expect } from 'chai';
import 'mocha';
import * as f from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(f.curryMe('Hello', 'User', 'Welcomed!')).equals(
      f.curriedMe('Hello')('User')('Welcomed!')
    );
  });

  it('#2 should output the same result as the original function', () => {
    expect(f.doMath(3)(2)(3)).equals(f.result(3)(2)(3));
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    const result = f.blackBeltOnly(f.ninjasOne)(f.ninjasTwo);
    expect(result).to.be.an('array').that.is.not.empty;
    result.forEach((p) => expect(p.belt === 'black').to.be.true);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    const result = f.addStatus(f.ninjasOne)(f.statusTypes);
    expect(result).to.be.an('array').that.is.not.empty;
    result.forEach((x) => expect(x).to.have.property('status'));
  });
});
