//비동기 작업이 가질 수 있는 3가지 상태
//Pending(대기상태) -> Fulfilled(성공) = resolve(해결)
//Pending(대기상태) -> Rejected(실패) = reject(거부)

function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      //성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      //실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

// isPositive(
//   10,
//   (res) => {
//     console.log("성공적으로 수행됨 : ", res);
//   },
//   (err) => {
//     console.log("실패 하였음 : ", err);
//   }
// );

//promise를 활용하여 비동기처리
function isPositiveP(number) {
  const executor = (resolve, reject) => {
    //실행자
    setTimeout(() => {
      if (typeof number === "number") {
        //성공 -> resolve
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        //실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  };

  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(101);
res
  .then((res) => {
    console.log("작업 성공 :", res);
  })
  .catch((err) => {
    console.log("작업 실패 :", err);
  });
