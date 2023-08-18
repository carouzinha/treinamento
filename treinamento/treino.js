const nome = "Caroline";

function getEventoAleatorio(){
    const teste = parseInt( Math.random()*3);

    let treinamento = '' 

    if (teste === 0){
        treinamento ='Maratona'
    }
    else if (teste === 1){
        treinamento = 'Triathlon'
    }
    else if (teste === 2){
        treinamento = 'Pentathlon'
    }

    return treinamento
}

let resultadoEvento = getEventoAleatorio();

function getDiasTreino(resultadoEvento){

    let dias = '' 

    if (resultadoEvento === 'Maratona'){
        dias ='50 dias'
    }
    else if (resultadoEvento === 'Triathlon'){
        dias = '100 dias'
    }
    else if (resultadoEvento === 'Pentathlon'){
        dias = '200 dias'
    }
    return dias
}

let resultadoDias = getDiasTreino(resultadoEvento);

const logEventoTempo = (n,t,d) => {
    console.log(`${n} você foi selecionado para a ${t} e será daqui ${d}.`)
}

logEventoTempo(nome, resultadoEvento, resultadoDias)
