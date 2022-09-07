var readline = require('readline-sync');

function receberNumero() {
    console.log('bem vindo! \n');

    do {
        var numero = Number(readline.question('entre com um numero e descubra seus divisores: '));

        if (isNaN(numero)) {
            console.log('o valor informado não é válido! tente novamente \n');
        }

    } while (isNaN(numero));
    return numero;
}

function descobrirDivisores(valor) { 
    let count = 0;

    for(let i = 1; i <= valor; i++){
        if(valor % i == 0) {
        count++;
        console.log('os divisores de ', valor, 'são: ' ,i);
        }
    }
    if (count == 2) {
        console.log('este numero é primo, ele so pode ser dividido por 1 e por ele mesmo')
    }
}

function descobrirDivisores2(valor) {
    let divisores = [];

    for (let i = 1; i <= valor; i++){
        if (valor % i == 0) {
            divisores.push(i);
        }
    }
    console.log(`os divisores ${valor} sao: ${divisores}`);

    if (divisores.length == 2) {
        console.log('este numero é primo, ele so pode ser dividido por 1 e por ele mesmo')
    }
}

function rodarAplicativo() {
    do {
        let valor = receberNumero();
        descobrirDivisores2(valor);

        var continuar = String(readline.question('\n voce deseja verificar outros numero? responda S para sim e N para nao: '))
    
    } while (continuar == 'S');
    console.log('\n obrigada! até logo');
}

rodarAplicativo();

//var valor = receberNumero();
// descobrirDivisores(valor);