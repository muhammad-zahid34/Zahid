const typing = document.getElementById("typing");
const words = ["Web Developer", "Designer", "Programmer", "Creative Learner"];
let wordIndex = 0, charIndex = 0, deleting = false;

function typeEffect(){
  const word = words[wordIndex];
  typing.textContent = deleting ? word.slice(0, --charIndex) : word.slice(0, ++charIndex);
  let speed = deleting ? 55 : 90;
  if(!deleting && charIndex === word.length){ speed = 1200; deleting = true; }
  else if(deleting && charIndex === 0){ deleting = false; wordIndex = (wordIndex + 1) % words.length; speed = 350; }
  setTimeout(typeEffect, speed);
}
typeEffect();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if(scrollY >= section.offsetTop - 180) current = section.id;
  });
  links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + current));
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.getElementById("year").textContent = new Date().getFullYear();
