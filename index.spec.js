const { expect } = require('chai');
const set = require('./index');

describe('set tests', () => {
  const s1 = set();
  const s2 = set();

  describe('.add(element)', () =>
    it('should add elements to the set', () => {
      s1.add(1);
      s1.add(2);
      s1.add(3);
      s1.add(4);

      s2.add(3);
      s2.add(4);
      s2.add(5);
      s2.add(6);
    }));

  describe('.isEmpty()', () =>
    it('should not be empty after adding elements', () =>
      expect(s1.isEmpty()).to.be.equal(false)));

  describe('.contains(element)', () =>
    it('should contain the added elements', () => {
      expect(s1.contains(1)).to.be.equal(true);
      expect(s1.contains(2)).to.be.equal(true);
      expect(s1.contains(3)).to.be.equal(true);
      expect(s1.contains(4)).to.be.equal(true);
    }));

  describe('.size()', () =>
    it('should get the size of the set', () => {
      expect(s1.size()).to.be.equal(4);
    }));

  describe('.remove(element)', () =>
    it('should remove an element from the set', () => {
      s1.remove(1);
      expect(s1.size()).to.be.equal(3);
      expect(s1.contains(1)).to.be.equal(false);
    }));

  describe('.union(s)', () =>
    it('should join the set with another set', () => {
      const s = s1.union(s2);
      expect(s.size()).to.be.equal(5);
      expect(s.contains(2)).to.be.equal(true);
      expect(s.contains(3)).to.be.equal(true);
      expect(s.contains(4)).to.be.equal(true);
      expect(s.contains(5)).to.be.equal(true);
      expect(s.contains(6)).to.be.equal(true);
    }));

  describe('.intersect(s)', () =>
    it('should intersect the set with another set', () => {
      const s = s1.intersect(s2);
      expect(s.size()).to.be.equal(2);
      expect(s.contains(3)).to.be.equal(true);
      expect(s.contains(4)).to.be.equal(true);
    }));

  describe('.diff(s)', () =>
    it('should differentiate the set from another set', () => {
      const d1 = s1.diff(s2);
      const d2 = s2.diff(s1);
      expect(d1.size()).to.be.equal(1);
      expect(d1.contains(2)).to.be.equal(true);
      expect(d2.size()).to.be.equal(2);
      expect(d2.contains(5)).to.be.equal(true);
      expect(d2.contains(6)).to.be.equal(true);
    }));

  describe('.isSubsetOf(s)', () =>
    it('should check if a set is a subset of another set', () => {
      s1.remove(2);
      expect(s1.isSubsetOf(s2)).to.be.equal(true);
      expect(s2.isSubsetOf(s1)).to.be.equal(false);
    }));

  describe('.isSupersetOf(s)', () =>
    it('should check if a set is a super set of another set', () => {
      expect(s1.isSupersetOf(s2)).to.be.equal(false);
      expect(s2.isSupersetOf(s1)).to.be.equal(true);
    }));

  describe('.toArray()', () =>
    it('should convert the set to an array', () => {
      expect(s2.toArray()).to.deep.equal([3, 4, 5, 6]);
    }));

  describe('.clear()', () =>
    it('should clear the set', () => {
      s2.clear();
      expect(s2.size()).to.equal(0);
      expect(s2.isEmpty()).to.equal(true);
    }));
});
