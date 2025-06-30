function filtrarProdutos() {
    const produtos = [
        { nome: "Notebook", estoque: 4 },
        { nome: "Monitor", estoque: 0 },
        { nome: "Teclado", estoque: 2 },
        { nome: "Mouse", estoque: 0 }
        ];

    const emEstoque = produtos.filter(produto => produto.estoque > 0);

    console.log(emEstoque);
     document.getElementById('resultado').textContent = JSON.stringify(emEstoque, null, 2);
}