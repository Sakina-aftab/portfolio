// 🌿 Smooth Scrolling for Navbar Links 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ☕ Fade-in effect when sections appear
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ✨ Typing Effect
const typingElement = document.getElementById("typing");
const text = "Hello, I’m Sakina"; 
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // typing speed
  }
}

// Make sure the element starts empty
typingElement.textContent = "";
typeWriter();
