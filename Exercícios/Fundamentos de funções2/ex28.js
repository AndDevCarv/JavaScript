function bubbleSort (arr) {
    let trocado;

    do {
        trocado = false
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]){
                let temp = arr[i]
                
                arr[i] = arr[i+1]
                arr[i+1] = temp
                
                trocado = true
            }
        }

    } while (trocado)
    
    return arr
}
const nums = [13,3,2,1,14,11,15,21,1]
const novoArr = bubbleSort(nums)

console.log(novoArr[novoArr.length - 2]);
