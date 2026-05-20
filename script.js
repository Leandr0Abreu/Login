const background = document.querySelector(".background");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 200;
    const y = (window.innerHeight / 2 - e.clientY) / 200;

    background.style.transform = `translate(${x}px, ${y}px)`;

});

const container = document.querySelector(".container");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 25;

    const y = (window.innerHeight / 2 - e.clientY) / 25;

    container.style.transform =
        `rotateY(${-x}deg) rotateX(${y}deg)`;

});
