export const gerarNumero = () => {
  return Math.floor(Math.random() * (10 - 1) + 1)
}

export const validarResposta = ( numero1, numero2, respostaUsuario ) => {
  const respostaCerta = numero1 * numero2;

    if ( respostaUsuario == respostaCerta) {
      return true;
    } else {
      return false;
    }
}