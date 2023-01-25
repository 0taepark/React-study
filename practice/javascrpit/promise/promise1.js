function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// taskA(3, 4, (a_res) => {
//   console.log("task A : ", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("task B : ", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("task C : ", c_res);
//     });
//   });
// });

//콜백 지옥 탈출
// taskA(5, 1).then((a_res) => {
//     console.log("A RESULT : ", a_res);
//     taskB(a_res).then((b_res) => {
//       console.log("B RESULT : ", b_res);
//       taskC(b_res).then((c_res) => {
//         console.log("C RESULT : ", c_res);
//       });
//     });
//   });

//then-chaining
//프로미스 객체를 이용하면 비동기처리를 호출하는 코드와 결과를 처리하는 코드를 분리 할 수 있다.
const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("A RESULT : ", a_res);
  return taskB(a_res);
});

console.log("blacksjdlfldssdflksdjflkj");
console.log("blacksjdlfldssdflksdjflkj");
console.log("blacksjdlfldssdflksdjflkj");
console.log("blacksjdlfldssdflksdjflkj");

bPromiseResult
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });
