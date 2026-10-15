const form = document.getElementById("formCadastro");
const modal = document.getElementById("fotoModal");

const tituloInput = document.getElementById("TituloLivro");
const autorInput = document.getElementById("NomeAutor");
const anoInput = document.getElementById("AnoPublicacao");

const tituloModal = document.getElementById("TituloModal");
const autorModal = document.getElementById("AutorModal");
const anoModal = document.getElementById("AnoModal");

function abrirModal() {
    if (!form.reportValidity()) {
        return;
    }

    const titulo = tituloInput.value.trim();
    const autor = autorInput.value.trim();
    const ano = Number(anoInput.value);

    tituloModal.textContent = titulo;
    autorModal.textContent = `Autor: ${autor}`;
    anoModal.textContent = `Ano de publicação: ${ano}`;

    modal.showModal();
}

function fecharModal() {
    modal.close();
}