import animateContent from './animations.js'

const downloadingContent = () => {
    const spinner = document.getElementById('loading');
    const content = document.getElementById('content');

    spinner.style.display = 'none';

    content.classList.remove('hidden');

    animateContent();
}

const timeToShow = 1500;
setTimeout(downloadingContent, timeToShow);


// Informacion sobre mi y la prueba
const aboutMe = document.getElementById('info');
let details = document.getElementById('infoDetails');

aboutMe.addEventListener("click", () => {
    details.classList.toggle('active');
});
