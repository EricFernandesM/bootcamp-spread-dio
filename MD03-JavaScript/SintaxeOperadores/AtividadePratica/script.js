function comparanumeros(n1, n2){
    const primeirafrase = criaPrimeiraFrase(n1,n2);
    const segundafrase = criaSegundaFrase(n1,n2);
    return `${primeirafrase} ${segundafrase}` 
}

function criaPrimeiraFrase (n1, n2){
    var saoIguais = '';

    if (n1 !== n2){
        saoIguais = 'não';
    }
    return `Os numeros ${n1} e ${n2} ${saoIguais} são iguais`
}
function criaSegundaFrase(n1,n2){
    const soma = n1 + n2;
    
    var resultado10 = 'menor';
    var resultado20 = 'menor';
    
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    
    if (compara10){
        const resultado10 = 'maior'; 
    } else if (compara20){
        const resultado20 = 'maior';
    }
    return ` Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparanumeros(1, 2));









