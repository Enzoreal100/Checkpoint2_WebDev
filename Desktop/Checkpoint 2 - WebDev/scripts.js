//Ex1
let operacao = '';

function selecionaOperacao(op) {
    operacao = op;
}

function calcula() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtrai':
            resultado = n1 - n2;
            break;
        case 'multiplica':
            resultado = n1 * n2;
            break;
        case 'divid':
            if (n2 != 0) {
                resultado = n1 / n2;
            } else {
                resultado = 'Erro: Divisão por zero não é permitida';
            }
            break;
        default:
            resultado = 'Operação não selecionada';
    }

    document.getElementById('resCalculadora').innerHTML = `O resultado é: ${resultado}`;
}
// setTimeout(() => {
//     do {
//         continuar = prompt("Deseja realizar outro cálculo? (Sim/Não)").toLowerCase();
//         if (continuar !== "sim" && continuar !== "não") {
//             alert("Resposta inválida. Digite 'Sim' ou 'Não'.");
//         }
//     } while (continuar !== "sim" && continuar !== "não");
//     if (continuar === "não") {
//         window.location.href = "https://google.com/";
//     }
// }, 300);

//ex2


function IR(a) {
    if (a < 2800){
        let aliquota = 0;
        return a;
    }
    else if (a < 5000){
        let aliquota = 15;
        return parseFloat(a*15/100);
    }
    else
    {
        let aliquota = 27;
        return parseFloat(a*27/100);
    }
}

function FGTS(a){
    return parseFloat(a*8/100);
}

function INSS(a){
    return parseFloat(a*20/100);
}

function calculaSB(){
    while (continua == 's'){
        const bruto = window.prompt('Digite o valor de seu salário bruto').value;
        resSB = document.getElementById('resSB');
        resSB.innerHTML = `Salário líquido = ${bruto - (IR(bruto) + FGTS(bruto) + INSS(bruto))}`
        setTimeout(300);
        continua = window.prompt('Gostaria de fazer outra operação?');
    }
}



