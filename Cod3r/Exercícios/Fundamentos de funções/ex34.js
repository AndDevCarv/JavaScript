let a = 'gatao'
let b = 'toga'

function achaString (string1, string2){
    let array1 = string1.split('')
    let array2 = string2.split('')

    let conjunto1 = new Set(array1)
    let conjunto2 = new Set(array2)


    if (conjunto1.size !== conjunto2.size) {
        return false
    }


    for (let elemento in conjunto1) {
        if (!conjunto2.has(elemento)) {
            return false
        }
    }
    return true
}

console.log(achaString(a, b))