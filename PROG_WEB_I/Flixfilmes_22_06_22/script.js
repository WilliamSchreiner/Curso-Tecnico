
const filmes = [];

function salvarFilme(event){
event.preventDefault();
console.log("salvado");

let titulo = document.querySelector("#titulo").value;
let link = document.querySelector("#link").value;
    
let filme= {
    titulo: titulo,
    link: link };

    filmes.push(filme)
    console.log(filmes)
    exibirFilmes();
}

function exibirFilmes(){
    let template = '';
    for (let i = 0; i < filmes.length; i++) {
        template = template + '<div class="container-item">';
        template = template + `<p class="p-item">${filmes[i].titulo}</p>`;
        template = template + `<img class= "img-item" src="${filmes[i].link}" ></img>`;
        template = template + '</div>';
    }

    
document.querySelector('#listadeFilmes').innerHTML = template;
}