/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 */

// ------- Option 1
let monkey = {
  type: 'spider',
  color: 'dark brown',
  weight: 20,
  jumps: function () {
    console.log(`The ${this.color} ${this.type} monkey has jumped!`);
  },
  ate: function (foodweight) {
    return console.log (`The monkey's wieght is now ${
      this.weight + foodweight
    } lbs after eating ${foodweight} lbs.`);
  },
};
monkey.jumps();
monkey.ate(5);

// ------- Option 2
function Monkey(type, color, weight){
    this.type = type;
    this.color = color;
    this.weight = weight;
}

Monkey.prototype.jumps = function(){
    console.log(`The ${this.color} ${this.type} monkey has jumped!`);
}

Monkey.prototype.ate = function (foodweight) {
    return console.log (`The monkey's weight is now ${
      this.weight + foodweight
    } lbs after eating ${foodweight} lbs.`);
  };

let myMonkey = new Monkey('howler', 'brown', 20);

myMonkey.jumps();
myMonkey.ate(10);

// #5 Convert the object literal to an Class
// #6 Then call its method and output to the console.

class MonkeyClass {
  constructor(type, color, weight) {
    this.type = type;
    this.color = color;
    this.weight = weight;
  }
  howls() {
    console.log(`The ${this.color} ${this.type} monkey is howling!`);
  }
  ate(foodweight) {
    return console.log(`The monkey's weight is now ${this.weight + foodweight} lbs after eating ${foodweight} lbs.`);
  }
}
let spiderMonkey = new MonkeyClass('spider', 'black', 20);
spiderMonkey.howls();
spiderMonkey.ate(5);

