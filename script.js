const background = document.querySelector(".background");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 200;
    const y = (window.innerHeight / 2 - e.clientY) / 200;

    background.style.transform = `translate(${x}px, ${y}px)`;

});

    const inputSenha = document.querySelector(".inputSenha");
    const senha = document.querySelector(".senha");

    senha.addEventListener("click", (e) => {
        if (inputSenha.type === "password") {
            inputSenha.type = "text"
            senha.classList.replace("fa-eye", "fa-eye-slash")
        }   else { 
                inputSenha.type = "password"
                senha.classList.replace("fa-eye-slash", "fa-eye")
        }
    });



