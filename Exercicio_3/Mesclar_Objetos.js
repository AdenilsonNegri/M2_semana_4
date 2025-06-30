function mesclarObjetos() {
  const dadosPessoais = { nome: "Lucas", idade: 30 };
  const endereco = { cidade: "São Paulo", estado: "SP" };

  const dadosCompletos = { ...dadosPessoais, ...endereco };

  console.log(dadosCompletos);
  document.getElementById('resultado').textContent = JSON.stringify(dadosCompletos, null, 2);
}
