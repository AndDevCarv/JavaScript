function multiplica (vezes) {
    const arr = []
    while (vezes+1 > Array.length) {
        arr.push('+')
        vezes--
    } console.log(arr);
}

multiplica(1)