import { comprehension, sentenceCase } from './utils';

import { expect } from 'chai';

describe('comprehension', () => {
  it('maps an objects keys and values.', () => {
    expect(
      comprehension({ a: 1, b: 2 }, ([k, v]: [string, number]) => [k, v + 1])
    ).to.eql({ a: 2, b: 3 });
  });
});

describe('sentenceCase', () => {
  it('converts a camel case string to sentence case.', () => {
    expect(sentenceCase('helloWorld')).to.equal('Hello world');
  });

  it('converts a pascal case string to sentence case.', () => {
    expect(sentenceCase('HelloWorld')).to.equal('Hello world');
  });

  it('converts a snake case string to sentence case.', () => {
    expect(sentenceCase('hello_world')).to.equal('Hello world');
  });

  it('converts a kebab case string to sentence case.', () => {
    expect(sentenceCase('hello-world')).to.equal('Hello world');
  });
});
