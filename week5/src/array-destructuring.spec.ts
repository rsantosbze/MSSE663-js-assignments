import { expect } from 'chai';
import 'mocha';
import * as f from './array-destructuring';

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(f.fruits[0]).to.eql(f.b);
    expect(f.fruits[1]).to.eql(f.a);
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(f.c).to.eql(f.food[0]);
    expect(f.d).to.eql(f.food[1]);
    expect(f.others).to.eql(f.food.slice(2));

  });

  it('#3 should construct a statement from the given objarrayect', () => {
    expect(`'${f.fir}, ${f.sec}!'`).to.eql(`'${f.s[0]}, ${f.s[1]}!'`);

  });
});
