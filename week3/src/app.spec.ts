import { SportsCar } from './app';
import { expect } from 'chai';
import 'mocha';


describe('Testing of the App Component', () => {
    const Ferrari = new SportsCar('Fast Car',2, 'Red', 'Ferrari', ['Bosch', 'Siemens'])
    it('Check for Car Type', () => {
        expect(Ferrari.getType()).to.be.equal('Fast Car');
    });
    it('Check for Red Color Car', () => {
        expect(Ferrari.isCarRed()).to.be.true;
    });
    it('Check for Value in Array', () => {
        expect(Ferrari.getPartsSuppliers()).to.include('Bosch');
    });


});