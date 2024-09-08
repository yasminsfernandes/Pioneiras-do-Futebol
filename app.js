function pesquisar() {

    
let section = document.getElementById("resultados-pesquisa");
let campoPesquisa = document.getElementById("campo-pesquisa").value

console.log(campoPesquisa);

if (!campoPesquisa) {
    section.innerHTML = "<p style='color: white; background-color: #333; padding: 10px;'><strong>Vish! Nada foi encontado. Você precisa digitar algo válido.</strong></p>";
    return;
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.titulo.toLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

        resultados += `
        <div class="item-resultados">
            <h2>
                <a href=${dado.instagram} target="_blank"> ${dado.titulo}</a>
            </h2>
            <p class="descricao-meta"> ${dado.descricao}</p> 
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>`;
    }

    if (!resultados) {
        resultados = "<p style='color: white; background-color: #333; padding: 10px;'><strong>Nada foi encontrado </p>";
    }
}

section.innerHTML = resultados;
}
