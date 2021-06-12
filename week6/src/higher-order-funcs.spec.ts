import { expect } from 'chai';
import 'mocha';
import * as f from './higher-order-funcs';

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
    let results = f.hoist(f.things);
    expect(results).to.deep.equal([{ id: 1, name: 'thing' }, { id: 2, name: 'thing' }]);
  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {
    expect(f.filterByKey(2)(f.result)).to.have.length(1);
  });
});
