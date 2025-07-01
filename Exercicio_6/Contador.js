const contador = {
  valor: 0,

  incrementar() {
    this.valor += 1;
    this.atualizarTela();
  },

  decrementar() {
    this.valor -= 1;
    this.atualizarTela();
  },

  mostrarValor() {
    alert(`O valor atual é ${this.valor}`);
  },

  atualizarTela() {
    document.getElementById('valor').textContent = `O valor atual é ${this.valor}`;
  }
};
