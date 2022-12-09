// function greet() {
//   console.log("hi")
// };

// function diss() {
//   console.log('you are the worst')
// }

// let funcs = [greet, diss]

// const myFunc = function add(x, y) {
//   return x + y;
// }

// function makeMultiplyFunc(num) {
//   return function mult(x) {
//     return num * x;
//   }
// }


// setTimeout(diss, 3000);


// // function repeatThreeTimes(func) {
// //   func();
// //   func();
// //   func();
// // }

// // function repeat(num, func) {
// //   for (let i = 0; i < num; i++) {
// //     func();
// //   }
// // }

function countDown(time) {
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  }, 1000)
}

function randomGame() {
  let num;
  let times = 0;
  let timer = setInterval(function () {
    num = Math.random();
    times++
    if (num > .75) {
      clearInterval(timer);
      console.log("It took " + times + " try/tries.");
    }
  }, 1000)
}
