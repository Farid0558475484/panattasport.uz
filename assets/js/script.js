const person = new Object({
  name: "Farid",
  age: 25,
  greet: function () {
    console.log("Hi, I am " + this.name);
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello");
};

Object.prototype.Salam = function () {
  console.log("Salam");
};

const lena = Object.create(person);

lena.name = "Elena";

const qwerty = "asdfgh";
 