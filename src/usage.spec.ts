import { expect } from 'chai';
import { usage } from './usage';

describe('usage', () => {
  it('retrieves a formatted memory profile.', () => {
    const u = usage();

    Object.keys(u).forEach((k) => expect(k).to.be.a('string'));
    Object.values(u).forEach((v) => expect(v).to.be.a('number'));

    expect(Object.keys(u)).to.include.members([
      'Array buffers / MB',
      'External / MB',
      'Heap total / MB',
      'Heap used / MB',
      'Rss / MB',
    ]);
  });
});
