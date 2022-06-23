var total = 0 // retorna o total dos produtos que estao na localstorage
var i = 0 // variavel que ira percorrer as posições
var total = 0 // variavel que irá receber o preço dos produtos convertido em float

for (i=0; i<=99; i++) {
  var prod = localStorage.getItem('produto' + i + '')

  if(prod != null){
    //exibe os dados da lista dentro do tbody com id tabela
    document.getElementById('corpo-tabela').innerHTML += 
    `
    <tr>
      <th scope="row">${localStorage.getItem('qtd' + i)} </th>
      <td>${localStorage.getItem('produto' + i)}</td>
      <td>${localStorage.getItem('valor' + i)}</td>
    </tr>
    `

    //calculo do total
    valor = parseFloat(localStorage.getItem('valor' + i))
    total = (total + valor)
  }
}

document.getElementById('total').innerHTML = `<p><strong>TOTAL: ${total.toFixed(2)}</strong></p>`
