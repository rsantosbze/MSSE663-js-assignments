// #1 Convert this javascript function to a curried function
export function curryMe(
  string1: string,
  string2: string,
  string3: string
): string {
  return string1 + ' ' + string2 + ' ' + string3;
}
// console.log(curryMe('one', 'two', 'three'));

export const curriedMe =
  (string1: string) => (string2: string) => (string3: string) =>
    string1 + ' ' + string2 + ' ' + string3;

// console.log(curriedMe('one') ('two') ('three'));

// #2 Hoist and convert nested functions to curried functions
export function doMath(a: number) {
  return function add(b: number) {
    return function subtract(c: number) {
      return a + b - c;
    };
  };
}

// console.log(doMath(3)(2)(3));



const callback = (a: number) => (b: number) => (c: number) => a + b - c;

export const result = callback;

// console.log(result(3)(2)(3));

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export let ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' },
];

export let ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' },
];

const callBackArray = (array: { name: string; belt: string }[]) => array.filter((x) => x.belt === 'black');

const callBackJoinArrays = (array1: { name: string; belt: string }[], array2: { name: string; belt: string }[]) => [...array1, ...array2];

const callBackInputs = (array1: { name: string; belt: string }[]) => (array2: { name: string; belt: string }[]) => callBackArray(callBackJoinArrays(array1, array2));

export const blackBeltOnly = callBackInputs;

   

// console.log(blackBeltOnly(ninjasOne)(ninjasTwo));

// /**
//  * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
//  * The status should be the value of whatever key in the status object matches the ninja's belt.
//  *
//  * @example { name: 'Colt', belt: 'green', status: 'warrior' }
//  */

interface ITypes {
  white: string;
  green: string;
  black: string;
}


export const statusTypes: ITypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei',
};

const gamerStatusTypes: ITypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

const callbackBelt = ( x: { name: string; belt: string }, type: ITypes) => ({
  ...x,
  status: type[x.belt],
});

export const addStatus = (array: { name: string; belt: string }[]) => (type: ITypes) =>
  array.map(x => callbackBelt(x, type) );

// console.log(addStatus(ninjasTwo)(gamerStatusTypes));
// // source code here
