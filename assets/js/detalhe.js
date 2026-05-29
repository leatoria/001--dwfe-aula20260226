import { dados_das_noticias } from "./bd.js";

const container = document.getElementById("container_detanhe");

const params = new URLSearchParams(window.location.search);
const  id = parseInt(params.get("id"));

const noticia = dados_das_noticias.find(noticia => noticia.id === id);

if (noticia) {

    container.innerHTML = `
    <h1 class="titulo-detalhe">${noticia.titulo}</h1>
    <p><strong>${noticia.categoria}</strong> - ${noticia.data} - por ${noticia.autor}</p>
    <img src="${noticia.imagem}" alt="${noticia.titulo}" class="painel-img">
    <p>${noticia.data}</p>
    <p class="descrição-da-noticia">${noticia.descricao}</p>
    <p >${noticia.conteudo}</p>
    <p><a href="./home.html">Voltar para Home</a></p>
}


    else {

container.innerHTML = "<p>Notícia não encontrada.</p>";

}