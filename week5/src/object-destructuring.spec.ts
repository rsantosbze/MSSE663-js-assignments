import { expect } from 'chai';
import 'mocha';
import *  as f from './object-destructuring';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    expect(f.person).to.eql(f.object.name);
    expect(f.job).to.eql(f.object.title);
  });

  it('#2 should have a variable for every property in the given nested object', () => {
    expect(f.nestedObject.user).to.eql(f.user);
    expect(f.nestedObject.address).to.eql(f.address);
    expect(f.nestedObject.id).to.eql(f.id);
  });

  it('#3 should create a new object given the destructed variables from the nested object', () => {
    expect(f.newObject).to.have.property('user');
    expect(f.newObject).to.have.property('address');
    expect(f.newObject).to.have.property('id');
    expect(f.newObject).to.eql(f.nestedObject);
  });

  it('#4 should construct a statement from the given object', () => {
     expect(`'${f.greeting}, ${f.name}!'`).to.eql(`'${f.obj.greeting}, ${f.obj.name}!'`);
  });
});
