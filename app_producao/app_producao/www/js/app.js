function incluirUmaLinha(){
 let produto = document.getElementById("produto").value 
 let produzido = document.getElementById("produzido").value 
 let meta = document.getElementById("meta").value 
 let deficit = meta - produzido

let linhaNova = `<td>${produto}</td>`
    linhaNova += `<td>${produzido}</td>`
    linhaNova += `<td>${meta}</td>`
    linhaNova += `<td>${deficit}</td>`
    linhaNova += `<td><button class="excluirLinha">Excluir</button>`
    document.getElementById("controle-producao").innerHTML = linhaNova


}

let btSalvar = document.getElementById("salvar")
btSalvar.addEventListener("click", function(){
    incluirUmaLinha()
})

function salvar(){

}

function excluirTudo(){


}

function excluirUmaLinha(){

}

function carregar(){

}