export function geradorDeTagsDeIdentificacao(nome) {
  return nome.trim().toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  
  let retorno = false;

  if (idade >= 1) {
    if (porte === 'M' || porte === 'G') {
      retorno = true;
    }
  }
  return retorno;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  
  let atividade = '';

  switch (porte) {
    case 'pequeno':
      atividade = 'brincar dentro de casa'
      break
    case 'médio':
      atividade = 'caminhada no quarteirão'
      break 
    case 'grande':
      atividade = 'correr no parque'
      break 
    default:
      atividade = 'porte inválido'
  }

  return atividade;
}

export async function buscarDadoAsync() {
  return 'Pipoca';
}