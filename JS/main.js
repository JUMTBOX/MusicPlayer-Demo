//패널 돌리기
const frame = document.querySelector("section");
const articleArr = frame.querySelectorAll("article");
// const btnPrev;
// const btnNext;

const length = articleArr.length;
const deg = 360 / length;

console.log(articleArr);

for (let i = 0; i < length; i += 1) {
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
}
