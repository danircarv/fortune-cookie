const arr = ["1", "2", "3", "4", "5"];
const randomIndex = Math.floor(Math.random() * arr.length);
const randomElement = arr[randomIndex];
const imgShow = `phrase${randomElement}`;

function handleClick(event) {
  event.preventDefault();

  document.querySelector(".screen1").classList.toggle("hide");
  document.querySelector(".screen2").classList.toggle("hide");
  document.querySelector(`.phrase${randomElement}`).toggle("hide");
}
