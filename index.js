// const numeroDigitado = prompt('Digite um número');

// if (numeroDigitado > 0){
//     document.write('O ' + numeroDigitado + ' é positivo');
// }
// else if (numeroDigitado < 0){
//     document.write('O ' + numeroDigitado + ' é negativo');
// } 
// else{
//     document.write('O ' + numeroDigitado + ' é zero');
// }


// const ladoA = prompt('Digite o primeito lado');
// const ladoB = prompt('Digite o segundo lado');
// const ladoC = prompt('Digite o terceiro lado');

// if (ladoA == ladoB && ladoA == ladoC){
//     document.write('O triangulo é equilatero');
// }
// else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
//     document.write('Otriangulo é isoceles');
// }
// else{
//     document.write('O triangulo é escaleno');
// }

// const ano = prompt('informe o ano');

// if (ano % 4 == 0 ){
//     document.write(' O ano é bissexto');
// }
// else{
//     document.write(' O ano não é bissexto');
// }

// const numero1 = prompt('Digite o primeiro número');
// const numero2 = prompt('Digite o segundo número');
// const numero3 = prompt('Digite o terceiro número');

// if (numero1 > numero2 && numero1 > numero3){
//  document.write ('O primeiro número é maior');
// }
// else if (numero2 > numero1 && numero2 > numero3){
//  document.write (' O segundo número é maior');
// }
// else{
// document.write ('O terceiro número é maior');
// }  

// const dia = prompt('Digite o dia da semana');

// if (dia == "1"){
// document.write ('Segunda')
// }
// else if (dia == "2"){
//     document.write ('Terça-feira');
// }
// else if (dia == "3"){
//     document.write ('Quarta-feira');
// }
// else if (dia == "4"){
//     document.write ('Quinta-feira');
// }
// else if (dia == "5"){
//     document.write ('Sexta-feira');
// }
// else if (dia == "6"){
//     document.write ('Sábado');
// }
// else if (dia == "7"){
//     document.write ('Domingo');
// }


// const renda = prompt ('Digite sua renda anual');

// if (renda >= 24511.93 && renda <= 33919.80){
//     document.write ('O seu imposto é 7,5% totalizando R$1838.39');
// }
// else if (renda >= 33919.81 && renda <= 45012.60){
//     document.write ('O seu imposto é 15,0% totalizando R$ 4382.32');
// }
// else if (renda >= 45012.61 && renda <= 55976.16){
//     document.write ('O seu imposto é 22,5% totalizando R$7758.32');
// }
// else if (renda > 55976.17){
//     document.write ('O seu imposto é 22,5% totalizando R$7758.32');
// }
// else{
//     document.write ('Você não paga importo de renda!')
// }

const valor = prompt('Digite um valor entre 0 - 100');

if (valor <=100 && valor >=80){
    document.write ('A');
}
else if (valor <=79 && valor <=60){
    document.write ('B');
}
else if (valor <=59 && valor <=40){
    document.write ('C');
}
else if (valor <=39 && valor <=20){
    document.write ('D');
}
else{
    document.write ('digite um número válido');
}