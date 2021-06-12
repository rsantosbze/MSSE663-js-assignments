/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
export const things = ['thing1', 'thing2'];

// create callback here

const callback = (v:string) => {
    let part1 = v.substring(0, v.indexOf('g') + 1);
    let part2 = v.substring(v.indexOf('g') + 1);
    return { id: +part2, name: part1 };
  };

// create map here

export const hoist = (array: string[]) => array.map(callback);
export const result = hoist(things);
// console.log(result);

/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

const filter = (key: number, array: { id: number; name: string }[]) =>
  array.filter((x) => x.id === key);

export const filterByKey = (key: number) => (array: { id: number, name: string }[]) => filter(key, array);

console.log(filterByKey(1)(result));


