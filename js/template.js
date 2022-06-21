// atualiza os dados do carrinho de compras
atualizarCarrinho = () => {
  var containerAtualizarCarrinho = document.getElementsByTagName('a')
  estoqueProdutos.map((val) => {
    containerAtualizarCarrinho.innerHTML += `

    `
  })
}

//recebe os dados que vão ser passados para o carrinho de compra
var links = document.getElementsByTagName('a').value

// 
for (var i=0; i<links.length; i++){
  links[i].addEventListener("click", function(){
    let key = this.getAttribute('key')
    estoqueProdutos[key].quantidade++
    atualizarCarrinho();
    return false;
  })
}