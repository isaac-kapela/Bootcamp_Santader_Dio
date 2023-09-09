function calculadora() {
    const operacao = Number(prompt(
        'Escolha uma operação:\n 1-Soma (+)\n 2-Subtração (-)\n 3-Mutiplicação (*)\n 4- Divisão real (/)\n 5-Divisão Inteira (%)\n 6- Pontenciação (**)'
    ));
}

let n1 = Number(prompt('Insira o primeiro valor: '));
let n2 = Number(prompt('Insira o primeiro valor: '));
let resultado;


if (!n1 || !n2) {
    alert('Erro...Parametros Invalidos!')
    calculadora();
}
else {
    if (!operacao || operacao >= 7) {
        alert('Erro...Operação invalida!');
        calculadora();
    }

    else {
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }

        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }

        function mutiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }

        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }

        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            novaOperacao();
        }

        function pontenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª é igual  a ${resultado}`)
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operacão?\n 1- Sim\n 2 -Não')

            if (opcao == 1) {
                calculadora();
            }
            else if (opcao == 2) {
                alert('Ate mais!')
            }
            else {
                alert('Digite uma opçaõ valida!')
                novaOperacao();
            }
        }

    }
    // if(operacao == 1){
    //      soma();
    //  } else if(operacao == 2){
    //      subtracao();
    //  }
    // else if( operacao == 3) {
    //     mutiplicacao();
    //   }

    //  else if(operacao == 4) {
    //     divisaoReal();
    //   }

    // else if(operacao == 5) {
    //     divisaoInteira();
    // }

    // else if (operacao == 6) {
    //     pontenciacao();
    // } 

    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            mutiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            pontenciacao();
            break;
    }
}

