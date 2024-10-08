// Función para animar el contenido con GSAP
export default function animateContent() {
    // capturo el h1 y lo separo por cada letra.
    const title = document.querySelector('.title');
    const letters = title.textContent.split("");


    //capturo el h2
    const subtitle = document.querySelector('.subtitle');
    const subletters = subtitle.textContent.split("");

    // logro que cada letra este separada dentro de un span, para lograr una animacion individual de ambos heading.
    title.innerHTML = letters.map(letter => `<span>${letter}</span>`).join("");
    subtitle.innerHTML = subletters.map(subletter => `<span>${subletter}</span>`).join("");

    // Genero las letras una por una
    gsap.fromTo('.title span',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 5 }
    );

    // Animo nave, genero efecto de despegue...
    gsap.to('.image', {
        opacity: 1,
        duration: 2,
        delay: letters.length * 0.1 + 0.5,  // Me aseguro que, la animacion de la nave, comience despues de casi completar la animacion de cada letra.
        y: '-150%',  // muevo en relacion al eje vertical
        x: '-150%', // muevo en relacion al eje horizontal
        scale: 1.5  // Modifico tamaño de la imagen, genera sensacion de cercania.
    });

    //Inverto la animation del H2
    gsap.fromTo('.subtitle span',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: { each: 0.1, from: "end" }, duration: 5 }
    );
}