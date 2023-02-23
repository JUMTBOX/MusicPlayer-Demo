//패널 돌리기
const frame = document.querySelector("section");
const articleArr = frame.querySelectorAll("article");
const length = articleArr.length;
const deg = 360 / length;

// console.log(articleArr);
const names = [
  "cardio",
  "groove",
  "happy",
  "light",
  "lily",
  "limes",
  "pop",
  "swing",
];

for (let i = 0; i < length; i += 1) {
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  //사진부분 일괄 적용
  const pic = articleArr[i].querySelector(".pic");
  pic.style.backgroundImage = `url("/music/music/img/${names[i]}.jpg")`;

  //음악 제목 일괄 적용
  const title1 = articleArr[i].querySelector(".text>h2");
  title1.innerHTML = `${names[i]}`;

  //음악 태그 & 파일 일괄 적용
  const audio = document.createElement("audio");
  audio.setAttribute("src", `/music/music/${names[i]}.mp3`);
  audio.setAttribute("loop", "loop");
  articleArr[i].append(audio);
}

//prev,next 버튼 액션 처리
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");

let num = 0; // 회전 각도 기억용
let active = 0; //활성화 패널 순서 기억용
btnPrev.addEventListener("click", () => {
  frame.style.transform = `rotate(${deg * ++num}deg)`;

  //패널 활성화 처리

  active === 0 ? (active = length - 1) : active--;

  for (let el of articleArr) {
    el.classList.remove("on");
  }

  articleArr[active].classList.add("on");
});

btnNext.addEventListener("click", () => {
  frame.style.transform = `rotate(${deg * --num}deg)`;

  active === length - 1 ? (active = 0) : active++;

  for (let el of articleArr) {
    el.classList.remove("on");
  }

  articleArr[active].classList.add("on");
});

//CD모양 사진 회전

for (let el of articleArr) {
  const play = el.querySelector(".play");
  const pause = el.querySelector(".pause");
  const reload = el.querySelector(".reload");

  play.addEventListener("click", function (e) {
    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").play();
  });
  pause.addEventListener("click", function (e) {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector("audio").pause();
  });
  reload.addEventListener("click", (e) => {
    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").load();
    el.querySelector("audio").play();
  });
}
