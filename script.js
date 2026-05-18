document.addEventListener("DOMContentLoaded", () => {

  const skillSection = document.querySelector(".skills");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animateBars();
        animated = true;
        observer.unobserve(skillSection);
      }
    });
  }, { threshold: 0.4 });

  observer.observe(skillSection);

  function animateBars() {
    const rows = document.querySelectorAll(".skill-row");

    rows.forEach(row => {
      const bar = row.querySelector(".progress-bar");
      const text = row.querySelector(".percent-text");
      const value = bar.getAttribute("data-value");

      let progress = 0;

      const interval = setInterval(() => {
        if (progress >= value) {
          clearInterval(interval);
        } else {
          progress++;
          bar.style.width = progress + "%";
          text.textContent = progress + "%";
        }
      }, 15);
    });
  }

  // MENU
  const toggle = document.querySelector(".menu-toggle");
  const header = document.querySelector("header");

  if (toggle) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("active");
    });
  }

});


const textArray = [
  "Student Developer",
  "Web Developer",
  "Frontend Enthusiast",
  "Problem Solver"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  currentText = textArray[index];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentText.substring(0, charIndex);

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1500;
    isDeleting = true;
  }
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % textArray.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("header").classList.remove("active");
  });
});



const flowers = [
  "</>",
  "{}",
  "01",
  "JS",
  "PY",
  "C",
  "&&",
  "===",
  "++",
  "λ",
  "#",
  "0",
  "1",
  "<HTML>",
  "{CSS}",
  "=>",
  "[]",
  "()",
  "///"
];

function createFlower() {

  const flower = document.createElement("div");

  flower.classList.add("flower");

  flower.innerHTML =
    flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left =
    Math.random() * window.innerWidth + "px";

  flower.style.animationDuration =
    4 + Math.random() * 8 + "s";

  flower.style.fontSize =
    14 + Math.random() * 22 + "px";

  flower.style.opacity =
    0.3 + Math.random() * 0.7;

  // flower.style.filter =
  //   `blur(${Math.random() * 1}px)`;

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 12000);
}

setInterval(createFlower, 120);
