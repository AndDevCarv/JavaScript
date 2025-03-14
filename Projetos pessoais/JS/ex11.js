function bissexto (ano) {
    if (ano % 4 == 0){
        return true
    } else if (ano % 100 == 0 && ano % 400 == 0) {
        return true
    } else if (ano % 400 == 0) {
        return true
    }
    else if (ano % 100 == 0) {
            return false
    } else {
        return false
    }
}

console.log(bissexto(2000))