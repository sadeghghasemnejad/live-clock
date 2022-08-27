const hourHand = document.querySelector(".hand__hour");
const minutesHand = document.querySelector(".hand__minutes");
const secondHand = document.querySelector(".hand__second");
const time = new Date();
const nowHour = time.getHours();
const nowMinutes = time.getMinutes();
const nowSecond = time.getSeconds();
let second = nowSecond * 6;
let minutes = nowMinutes * 6;
let hour = nowHour * 30 + (nowMinutes * 60 + second) / 120;
console.log(nowHour);
const reset = () => {
  secondHand.style.transform = `translate(-50%, -87%) rotate(${second}deg)`;
  minutesHand.style.transform = `translate(-50%, -88%) rotate(${minutes}deg)`;
  hourHand.style.transform = `translate(-50%, -85%) rotate(${hour}deg)`;
};
reset();
setInterval(() => {
  second += 6;
  if (second >= 360) {
    second = 0;
    minutes += 6;
  }
  secondHand.style.transform = `translate(-50%, -87%) rotate(${second}deg)`;
  minutesHand.style.transform = `translate(-50%, -88%) rotate(${minutes}deg)`;
}, 1000);

setInterval(() => {
  hour += 1;
  if (hour >= 360) {
    hour = 0;
  }
  hourHand.style.transform = `translate(-50%, -85%) rotate(${hour}deg)`;
}, 120000);
