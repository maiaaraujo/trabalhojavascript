//desenvolver um algoritmo que efetue a soma de todos os numeros impares que são e que se encontram no conjunto de numeros de 1 ate 500



let soma = 0;

for (let i = 0; i < 500; i++){ // para ler do 1 ao 500 
    if((i % 2) != 0){ //os numeros impares
        if((i % 3) == 0) // os numeros multiplos de 3
        soma = soma + i;
    }

}

alert (soma);


