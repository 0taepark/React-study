function taskA() {
  console.log("A 작업 끝");
}

taskA();
console.log("코드 끝");

//비동기적 방식
function taskB() {
  setTimeout(() => {
    console.log("B TASK END");
  }, 2000);
}

taskB();
console.log("코드 끝");

function taskC(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskD(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskE(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskC(3, 4, (res) => {
  console.log("C TASK RESULT : ", res);
});

taskD(7, (res) => {
  console.log("D TASK RESULT : ", res);
});

taskE(14, (res) => {
  console.log("E TASK RESULT : ", res);
});

console.log("코드 끝");

function taskF(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskG(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskH(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskF(4, 5, (f_res) => {
  console.log("F RESULT : ", f_res);
  taskG(f_res, (g_res) => {
    console.log("G RESULT : ", g_res);
    taskH(g_res, (h_res) => {
      console.log("H RESULT : ", h_res);
    });
  });
});

console.log("코드 끝");
