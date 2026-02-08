const magnetic = document.getElementById("magnetic-name");

magnetic.addEventListener("mousemove", function (e) {
  const rect = magnetic.getBoundingClientRect();

  const x = e.clientX - (rect.left + rect.width / 2);
  const y = e.clientY - (rect.top + rect.height / 2);

  magnetic.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});

magnetic.addEventListener("mouseleave", function () {
  magnetic.style.transition = "transform 0.4s ease";
  magnetic.style.transform = "translate(0, 0)";
});

// CONTACT FORM SUBMIT
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page refresh

  const modal = new bootstrap.Modal(document.getElementById('successModal'));
  modal.show();

  form.reset(); // clear form after submit
});

const text = "I'm a Full Stack Java Developer.";
const typingElement = document.querySelector(".typing-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

typingElement.textContent = "";
typeEffect();
