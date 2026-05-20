const background = document.querySelector(".background");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 200;
    const y = (window.innerHeight / 2 - e.clientY) / 200;

    background.style.transform = `translate(${x}px, ${y}px)`;

});
