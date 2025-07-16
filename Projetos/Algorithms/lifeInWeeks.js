function lifeInWeeks (age) {
    let formAge = 90 - age;
    let day = formAge * 365
    let week = formAge * 52
    let month = formAge * 12

    console.log(`You have ${day} days, ${week} weeks and ${month} months`);    
}

lifeInWeeks(56)