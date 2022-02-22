const backgroundImages = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
];
const randomBGIndex = Math.floor(Math.random() * backgroundImages.length);
const randomBG = backgroundImages[randomBGIndex];
const bgImage = document.querySelector("#background-image");
const bgPath = `imgs/${randomBG}`;
// 내가 찾은 방법. 속성에 접근하여 경로를 설정해준다.
// 나중에 css를 추가해야하기 때문에 이 프로젝트에선 이것을 이용함
bgImage.setAttribute("src", bgPath);

// // nomad방법
// const bg = document.createElement("img");
// bg.src = bgPath;
// document.body.appendChild(bg);