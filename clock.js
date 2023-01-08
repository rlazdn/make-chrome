const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); //현재 시각 저장
  const hours = date.getHours().toString().padStart(2, "0");
  const miniutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  // String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${miniutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //매 초마다

/* new Date 는 현재 시각을 가져온다. 
과제보니 오늘 시각이랑 12.25 시각을 비교? 뺴기?해야하는 듯.

.toString() 
date.getSeconds()에서 date는 string이 아니라 number. 
padStart()는 string의 시작에 다른 string을 채우는 것!
Or String()으로 감싸면 된다.

getHours()를 계속 getHours로 써서 native code라고 뜬다.
Date라는 obeject의 함수!!임.

*/
