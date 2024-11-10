function mostrarDocumento() {
    const imgMain = document.getElementById("img-main");

    imgMain.src = "AIA.png";
    imgMain.classList.remove("pasta-img");
    imgMain.classList.add("anomalia-img")
}

function procurarID() {
    const idInserido = document.getElementById("input-id");
    const botao = document.getElementById("button-id");
    const imgJoao = document.getElementById("img-joao");
    const imgManuh = document.getElementById("img-manuh");
    const imgRyan = document.getElementById("img-ryan");
    const imgSamuel = document.getElementById("img-samuel");
    const imgMichael = document.getElementById("img-michael");

    switch(idInserido.value) {
        case "895434":
            imgRyan.classList.remove("fechado")
            imgRyan.classList.add("anomalia-img")
            idInserido.classList.add("fechado")
            botao.classList.add("fechado")
            break;
        case "543678":
            imgManuh.classList.remove("fechado")
            imgManuh.classList.add("anomalia-img")
            idInserido.classList.add("fechado")
            botao.classList.add("fechado")
            break;
        case "172546":
            imgJoao.classList.remove("fechado")
            imgJoao.classList.add("anomalia-img")
            idInserido.classList.add("fechado")
            botao.classList.add("fechado")
            break;
        case "636129":
            imgSamuel.classList.remove("fechado")
            imgSamuel.classList.add("anomalia-img")
            idInserido.classList.add("fechado")
            botao.classList.add("fechado")
            break;
        case "579072":
            imgMichael.classList.remove("fechado")
            imgMichael.classList.add("anomalia-img")
            idInserido.classList.add("fechado")
            botao.classList.add("fechado")
            break;
        default:
            alert("esse ID não esta no sistema");
    }

}
