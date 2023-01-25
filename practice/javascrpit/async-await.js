//async

function hello() {
  return "hello";
}

//async를 함수에 붙여주면 함수는 자동적으로 프로미스를 리턴하는 비동기처리 함수가 된다.
async function helloAsync() {
  return "hello Async";
}

console.log(hello());
//promise를 반환한다 = then을 쓸 수가 있다
// console.log(helloAsync());\
helloAsync().then((res) => {
  console.log(res);
});
//async를 붙여준 함수의 리턴값은 비동기작업 객체의 프로미스의 resolve값이 된다.

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function helloAsync1() {
//   return delay(3000).then(() => {
//     return "hello Async";
//   });
// }

//await
//await 키워드가 붙은 함수의 호출은 뒤에 있는 함수가 끝나기 전까지 아래있는  코드를 수행하지 않는다.
//await 줄은 동기적으로 수행
//await 키워드는 async가 붙은 함수내에서만 사용 가능
async function helloAsync1() {
  await delay(3000);
  return "hello async";
}

// helloAsync1().then((res) => {
//   console.log(res);
// });

async function main() {
  const res = await helloAsync1();
  console.log(res);
}

main();
