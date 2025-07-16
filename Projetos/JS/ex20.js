function notas (n) {
    let nota100 = Math.floor(n / 100)
    n %= 100;
    let nota50 = Math.floor(n / 50)
    n %= 50;
    let nota10 = Math.floor(n / 10)
    n %=10;
    let nota5 = Math.floor(n / 5)
    n %= 5;
    let nota1 = n

    if (nota100 > 0) console.log(`Nota de 100: ${nota100}`);
    if (nota50 > 0) console.log(`Nota de 50: ${nota50}`);
    if (nota10 > 0) console.log(`Nota de 10: ${nota10}`);
    if (nota5 > 0) console.log(`Nota de 5: ${nota5}`);
    if (nota1 > 0) console.log(`Nota de 1: ${nota1}`);        
}

notas(86)