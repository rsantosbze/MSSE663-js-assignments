import { names } from './observable';
import { expect } from 'chai';
import 'mocha';

describe('Testing of the Observable Component', () => {
    names.subscribe((a) => {
        describe('Using one subscribe call:', () => {
            it('Check for value "James" in first array location', () => {
                expect(a[0]).to.be.equal('James');
            });
            it('Check for value "Susan" in the array', () => {
                expect(a).to.include('Susan');
            });
   
            it('Check for value to be an array and not empty', () => {
                expect(a).to.be.an('array').that.is.not.empty;
            });
        });
    });
});

