let wrds = document.querySelectorAll(".wrd");
wrds.forEach((wrd) => {
  let letters = wrd.textContent.split("");
  wrd.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    wrd.append(span);
  });
});

let currentwrdIndex = 0;
let maxwrdIndex = wrds.length - 1;
wrds[currentwrdIndex].style.opacity = "1";

let changeText = () => {
  let currentwrd = wrds[currentwrdIndex];
  let nextwrd =
    currentwrdIndex === maxwrdIndex ? wrds[0] : wrds[currentwrdIndex + 1];

  Array.from(currentwrd.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextwrd.style.opacity = "1";
  Array.from(nextwrd.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentwrdIndex = currentwrdIndex === maxwrdIndex ? 0 : currentwrdIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// circle skill ////////////////////////////////////////////////////

const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

const header = document.querySelectorAll("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// contact sections interfaces
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.querySelector(".contact-form");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY + window.innerHeight;
    var contactOffset = contactForm.offsetTop;

    if (scrollPosition > contactOffset) {
      contactForm.classList.add("show");
    }
  });
});
