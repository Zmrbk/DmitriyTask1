const executeMethod = require('./index');

const arr = [0, 5, 2, 3];
const obj1 = { a: 1.795 }
const obj2 = { a: { b: [...arr] } };
const obj3 = { a: { b: [...arr] } };
const obj4 = { a: { b: { d: ['e', 'r', 'r', 'o', 'r'] } } };
const obj5 = { z: 'Access denied' };

describe('executeMethod function', () => {
  it('return 1.79;', () => {
    expect(executeMethod(obj1, 'a', 'toFixed', [2])).toEqual(obj1.a.toFixed(2));
  });

  it('return [5, 2];', () => {
    expect(executeMethod(obj2, 'a.b', 'splice', [1, 2])).toEqual([...arr].splice(1, 2));
  });

  it(`return 6; 
      arr = [0, 5, 2, 3, 0, 2];`, () => {
    expect(executeMethod(obj3, 'a.b', 'push', [0, 2])).toEqual([...arr].push(0, 2));
  });

  it('return null;', () => {
    expect(executeMethod(obj4, 'a.b.c', 'includes', ['r'])).toEqual(null);
  });
  
  it('return "Acces granted";', () => {
    expect(executeMethod(obj5, 'z', 'replace', ['denied', 'granted'])).toEqual(obj5.z.replace('denied', 'granted'));
  });
});