//api-응용 프로그램 프로그래밍 인터페이스
//응용 프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든
//인터페이스를 뜻한다. 주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공한다.
//프로그램과 프로그램 사이를 연결하는 다리,대화를 할 수 있는 다리

async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();

// let response = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
//   console.log(res)
// );
//api성공 객체를 반환하기 때문에 response 객체를 호출한다.
//예를 들어 편지를 확인해야되는데 봉투를 호출한 것
