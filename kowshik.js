const animatedText = document.querySelector('.animated-text span');
const words = ["Web Developer", "UI/UX Designer", "Coder", "Tech Enthusiast"];
let wordIndex = 0;
let letterIndex = 0;

function typeEffect() {
    if (letterIndex < words[wordIndex].length) {
        animatedText.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(eraseEffect, 2000); 
    }
}

function eraseEffect() {
    if (letterIndex > 0) {
        animatedText.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseEffect, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length; 
        setTimeout(typeEffect, 500);
    }
}

typeEffect(); 
const menuIcon = document.getElementById('menu');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show'); 
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});
