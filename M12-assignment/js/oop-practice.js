// STEP 1
// Constructor syntax declaration

class Cat {
  constructor(name) {
    this.name = name;
  }
}

// Anonymous syntax declaration

const Dog = class {
  constructor(name) {
    this.name = name;
  }
};

// STEP 2

// Create a new instance of the Cat class

const cat = new Cat("Luna");

// Create a new instance of the Dog class

const dog = new Dog("Tobbie");

console.log(cat);
console.log(dog);

// STEP 3
// Create a new class using constructor syntax called Animal

class Animal {
  constructor() {
    console.log("The Animal has been created");
  }
}

const animal1 = new Animal();

// STEP 4
// Create a new class using constructor syntax called Animal and accepts an argument
class Animal2 {
  constructor(message) {
    console.log(message);
  }
}

const animal2 = new Animal2("The Animal has been created");

// STEP 5
// Create a new class using constructor syntax called Animal,
// and define five properties within your class including properties type

class Animal3 {
  constructor(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
  }
}

const animal3 = new Animal3(
  "Dog",
  "Golden Retriever",
  "Golden",
  "24 inches",
  "36 inches"
);

// STEP 6
// Use a for-in loop to loop through and display all of the properties in the Animal class.
for (const property in animal3) {
  console.log(property);
}

// STEP 7
// Create a public method called speak.
// Within the speak method you will use a conditional to check the type of Animal being created.
class Animal4 {
  constructor(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
  }

  speak() {
    if (this.type === "Dog") {
      return `The ${this.color} dog is barking!`;
    } else if (this.type === "Cat") {
      return `The ${this.color} cat is meowing!`;
    } else {
      return "The animal makes a sound.";
    }
  }
}

const animal4 = new Animal4(
  "Cat",
  "Siamese",
  "Brown",
  "18 inches",
  "24 inches"
);
console.log(animal4.speak());

// STEP 8
// convert all of your properties to private properties. Then, create a
// private method called checkType(). In this method you will check to see what the type is.

class Animal5 {
  #type;
  #breed;
  #color;
  #height;
  #length;

  constructor(type, breed, color, height, length) {
    this.#type = type;
    this.#breed = breed;
    this.#color = color;
    this.#height = height;
    this.#length = length;
  }

  #checkType() {
    return this.#type === "Dog" ? "dog" : "cat";
  }

  speak() {
    return `The ${this.#checkType()} has made a noise!`;
  }
}
const animal5 = new Animal5(
  "Dog",
  "Labrador",
  "Black",
  "28 inches",
  "38 inches"
);
console.log(animal5.speak());

// STEP 9

String.prototype.findWords = function (word) {
  let count = 0;
  const words = this.split("");
  for (const w of words) {
    if (w.toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  alert(`The word "${word}" appears ${count} times in the paragraph.`);
};

const paragraph =
  "This is a paragraph with some words. The word 'the' appears frequently.";
paragraph.findWords("the");
