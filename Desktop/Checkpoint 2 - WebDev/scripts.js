//Ex1
let calculo = 0;
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
resCalculadora = document.getElementById("resCalculadora");

function soma(a, b) {
    calculo = 1;
    return parseFloat(a.value) + parseFloat(b.value);
}

function subtrai(a, b) {
    calculo = 2;
    return parseFloat(a.value) - parseFloat(b.value);
}

function multiplica(a, b) {
    calculo = 3;
    return parseFloat(a.value) * parseFloat(b.value);
}

function divid(a, b) {
    if (b === 0) {
        calculo = 4;
        return "Erro: Divisão por zero!";
    }
    calculo = 4;
    return parseFloat(a.value) / parseFloat(b.value);
}

function calcula() {
    let continuar = true;

    while (continuar){
        let n1 = document.getElementById("n1");
        let n2 = document.getElementById("n2");

        switch (calculo) {
            case 1:
                resCalculadora.innerHTML = `Resultado =  ${soma(n1, n2)}`;
                break;
    
            case 2:
                resCalculadora.innerHTML = `Resultado = ${subtrai(n1, n2)}`;
                break;
    
            case 3:
                resCalculadora.innerHTML = `Resultado = ${multiplica(n1, n2)}`;
                break;
    
            case 4:
                resCalculadora.innerHTML = `Resultado = ${divid(n1, n2)}`;
                break;
    
            default:
                resCalculadora.innerHTML = "Operação Inválida";
        }
        continuar = confirm("Deseja realizar outro cálculo?");
    }
    
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



