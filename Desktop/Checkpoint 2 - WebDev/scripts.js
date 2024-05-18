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
    setTimeout(() => {
        do {
            continuar = prompt("Deseja realizar outro cálculo? (S/N)").toLowerCase();
            if (continuar !== "s" && continuar !== "n") {
                alert("Resposta inválida. Digite 'S' ou 'N'.");
            }
        } while (continuar !== "s" && continuar !== "n");
        if (continuar === "n") {
            window.location.href = "https://www.youtube.com/watch?v=8G0_Gywm5kc";
        }
    }, 300);
}



//ex2


function IR(a) {
    if (a < 2800){
        return 0;
    }
    else if (a < 5000){
        return  a*15/100;
    }
    else
    {
        return a*27/100;
    }
}

function FGTS(a){
    return a*8/100;
}

function INSS(a){
    return a*20/100;
}

function calculaSB(){
    const bruto = parseFloat(document.getElementById('sb').value);   
    let sl = bruto - (IR(bruto) + FGTS(bruto)+ INSS(bruto));
    document.getElementById('resSB').innerHTML = `Salário líquido = ${sl}`;

    setTimeout(() => {
        do {
            continuar = prompt("Deseja realizar outro cálculo? (S/N)").toLowerCase();
            if (continuar !== "s" && continuar !== "n") {
                alert("Resposta inválida. Digite 'S' ou 'N'.");
            }
        } while (continuar !== "s" && continuar !== "n");
        if (continuar === "n") {
            window.location.href = "https://www.youtube.com/watch?v=s_eHTKuCkpc";
        }
    }, 300);
}

//Ex3

function votacao(){
    let votos1 = 0;
    let votos2 = 0;
    let votos3 = 0;
    let votos4 = 0;
    let votos5 = 0;
    let nulos = 0;
    while (true){;
        let candidatos = 'Digite sua opção para prefeito\n 1 - João Melão \n 2 - Juninho Manella \n 3 - Batman \n 4 - João Gordo \n 5 - Lineuzinho\n 0 PARA ENCERRAR!';
        let voto = window.prompt(`${candidatos}`)
        switch(voto){
            case '1':
                window.alert('Voto Confirmado');
                votos1++;
                break;
            case '2':
                window.alert('Voto Confirmado');
                votos2++
                break;
            case '3':
                window.alert('Voto Confirmado');
                votos3++
                break;
            case '4':
                window.alert('Voto Confirmado');
                votos4++
                break;
            case '5':
                window.alert('Voto Confirmado');
                votos5++;
                break;
            case '0':
                window.alert(`VOTAÇÃO ENCERRADA!\n João Melão = ${votos1} votos.\n Juninho Manella = ${votos2} votos. \n Batman = ${votos3} votos. \n João Gordo = ${votos4} votos. \n Lineuzinho = ${votos5} votos. \n Nulos = ${nulos} votos.`);
                return false;
                break;
            default:
                window.alert('Voto Nulo');
                nulos++;
        }
    }
}



