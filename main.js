const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const navlist = document.querySelector(".navlist");
const navitems = document.querySelector(".navitems");

let lis = document.getElementById("navList").getElementsByTagName("li");

hamburger.addEventListener("click", () => {
  navlist.classList.add("active");
});

// for (let i = 0; i < lis.length; i++) {
//   lis[i].addEventListener("click", () => {
//     console.log(lis[i]);
//   });
// }


cross.addEventListener("click", () => {
  navlist.classList.remove("active");
});

navitems.addEventListener("click", () => {
  navlist.classList.remove("active");
});
