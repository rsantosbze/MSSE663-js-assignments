// #1 Take an array of numbers and make them strings
function stringItUp(arr) {
  return arr.map((element) => {
    return element.toString()
  });

}

console.log(stringItUp([2, 5, 100]));
// output: ["2", "5", "100"]

// #2 Make an array of strings of the names
function namesOnly(arr) {
  return arr.map((value) => {
    return value.name;
  });
  
}

console.log(
  namesOnly([
    {
      name: 'Angelina Jolie',
      age: 80,
    },
    {
      name: 'Eric Jones',
      age: 2,
    },
    {
      name: 'Paris Hilton',
      age: 5,
    },
    {
      name: 'Kayne West',
      age: 16,
    },
    {
      name: 'Bob Ziroll',
      age: 100,
    },
  ])
);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// #3 Filter the output array from #2.
function oldOnesOnly(arr) {

  return arr
    .filter((value) => {
      return value.age >= 80;
    })
    .map((el) => {
      return el.age;
    });

}
console.log(
  oldOnesOnly([
    {
      name: 'Angelina Jolie',
      age: 80,
    },
    {
      name: 'Eric Jones',
      age: 2,
    },
    {
      name: 'Paris Hilton',
      age: 5,
    },
    {
      name: 'Kayne West',
      age: 16,
    },
    {
      name: 'Bob Ziroll',
      age: 100,
    },
  ])
);
// output: [80, 100]
