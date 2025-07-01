const produtos = [
  { nome: "Notebook", categoria: "Eletrônico", preco: 3000 },
  { nome: "Celular", categoria: "Eletrônico", preco: 2000 },
  { nome: "Bicicleta", categoria: "Esporte", preco: 800 },
  { nome: "Tênis", categoria: "Vestuário", preco: 300 }
];

function filtrarLista(lista, propriedades, valores) {
  return lista.filter(objeto =>
    propriedades.every((prop, i) => objeto[prop] === valores[i])
  );
}

function executarFiltro() {
  const categoria = document.getElementById("categoria").value;
  const preco = parseFloat(document.getElementById("preco").value);

  const resultado = filtrarLista(produtos, ["categoria", "preco"], [categoria, preco]);
  console.log("🔍 Resultado do filtro:", resultado);
}