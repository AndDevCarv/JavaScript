let nums = [1,2,3,4,5];

externo: 
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
    }
};