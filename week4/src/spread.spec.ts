import * as f from './spread';
import { expect } from 'chai';
import 'mocha';

describe('Testing of the Spread Operations', () => {
  describe('Check Spread function refactoring', () => {
    it('Check array copy against other copy function results', () => {
      expect(f.copiedArray).to.eql(f.originalNumbers);
    });
    it('Check for combined array to include winners', () => {
      expect(f.combinedArrays).to.include.members(f.winners);
    });
    it('Check for combined array to include runnersUp', () => {
      expect(f.combinedArrays).to.include.members(f.runnerUps);
    });
    it('Check for combined objects array to include bob', () => {
      expect(f.combinedObjects).to.include(f.bob);
    });
    it('Check for combined objects to include kyle', () => {
      expect(f.combinedObjects).to.include(f.kyle);
    });
    it('Check combined objects array against other combine objects method', () => {
      expect(f.combinedObjects).to.eql(f.originalPersons);
    });
    it('Check modified values in array of objects against other modified method', () => {
      expect(f.originalUpdates2).to.eql(f.originalUpdates);
    });
    it('Check modified object array contains update object', () => {
      expect(f.originalUpdates2).to.deep.include(f.update);
    });
  });
});
