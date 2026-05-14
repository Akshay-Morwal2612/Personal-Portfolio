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