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
 

// sort array

const sortArray =()=>{
  let issorted = false;
  newAz.addEventListener("click", () => {
    if (!issorted) {
      issorted = true;
      az();
    } else {
      issorted = false;
      za();
    }
  }
  );

}

const az = () => {  
  const sorted = [...products].sort((a, b) => {
    return a.price - b.price;
  });
  renderProducts(sorted);
}

const za = () => {
  const sorted = [...products].sort((a, b) => {
    return b.price - a.price;
  });
  renderProducts(sorted);
}