const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 요소를 생성함.
const bgImage = document.createElement("img");

// src를 지정함
bgImage.src = `img/${chosenImage}`;
bgImage.className = "bgImage";

// 생성된 데이터를  body에 추가
document.body.appendChild(bgImage);
// prepend를 사용할 수도 있음. 이 경우 body맨 앞에 추가됨
