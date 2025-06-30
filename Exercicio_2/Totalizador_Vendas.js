function mostrarVendas() {
    const vendas = [
      { produto: "Notebook", valor: 2500 },
      { produto: "Monitor", valor: 1200 },
      { produto: "Teclado", valor: 250 }
    ];

    let total = 0;
    let relatorio = "";

    vendas.forEach(venda => {
      relatorio += `Produto: ${venda.produto} — Valor: R$ ${venda.valor.toFixed(2)}\n`;
      total += venda.valor;
    });

    relatorio += `\n💰 Total de Vendas: R$ ${total.toFixed(2)}`;

    console.log(relatorio);
    document.getElementById('resultado').textContent = relatorio;
}
