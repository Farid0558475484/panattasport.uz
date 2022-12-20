// const person = new Object({
//   name: "Farid",
//   age: 25,
//   greet: function () {
//     console.log("Hi, I am " + this.name);
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log("Hello");
// };

// Object.prototype.Salam = function () {
//   console.log("Salam");
// };

// const lena = Object.create(person);

// lena.name = "Elena";

// const qwerty = "asdfgh";

// sort array

// const sortArray =()=>{
//   let issorted = false;
//   newAz.addEventListener("click", () => {
//     if (!issorted) {
//       issorted = true;
//       az();
//     } else {
//       issorted = false;
//       za();
//     }
//   }
//   );

// }

// const az = () => {
//   const sorted = [...products].sort((a, b) => {
//     return a.price - b.price;
//   });
//   renderProducts(sorted);
// }

// const za = () => {
//   const sorted = [...products].sort((a, b) => {
//     return b.price - a.price;
//   });
//   renderProducts(sorted);
// }

// console.log("salam");
//  setTimeout(() => {console.log("sagol");},100);

//  console.log("salam111");

// header sticky on scroll 100px

// window.onscroll = function () {
//   myFunction();
// };

// var header = document.getElementsByClassName("header");
// var sticky = header.offsetTop;

// function myFunction() {
//     console.log(window.pageYOffset);
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('header').addClass("sticky");
    } else {
      $('header').removeClass("sticky");
    }
  });
  

//   preloader jquery timer

