const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// interval
/*
interval: 매 순간마다 일어나는 것
  - 일정 시간마다 함수를 실행하게 만들 수 있음
  - setInterval(funciton, interval_time<ms>)
*/

// timeout
/*
timeout: 일정 시간 후 함수를 딱 한번만 호출
  - JS에서는 함수를 실행하면 기본적으로 즉시 실행이 됨
  - setInterval과 유사하지만 이 경우는 한번만 실행하고 끝
*/
// setTimeout(getClock, 1000);

// Date object
/*
날짜, 시간 등의 데이터를 다룰 수 있음
  - getDate() 날짜만 받기
  - getDay() 요일 받기(일요일 = 0부터 시작)
  - getHours(), getMinutes() 등등 다양한 형태로 시간데이터 출력 가능
*/

// 항상 초 단위 시간이 두자리로 유지되게 수정하기
/*
string이 항상 최소한 2개의 문자를 갖게 만들어야 함.
  - padStart()를 사용해 해결
  - '1'.padStart(<목표 길이>, <추가하는 문자열>)
  
  - 반대로 뒤에 붙이려면 padEnd()를 사용하면 됨.
*/
