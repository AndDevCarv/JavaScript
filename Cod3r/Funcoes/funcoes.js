//funcao de forma literal

function fun1 (a, b) {
    return console.log(a + b);
}
fun1 (3, 3)

//funcao em forma de varável

const fun2 = function (a, b) {
    return console.log(a + b);
}
fun2(4,5)

//em forma de objeto, primeiro criamos o objeto

const obj = {}

//apos isso atribuimos uma funcao a ele

obj.falar = function () {return 'Opa'}
console.log(obj.falar())

