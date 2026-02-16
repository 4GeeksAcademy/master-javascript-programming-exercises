function isOldEnoughToDrink(age) {
    // your code here
    let legal_age = false;
    
    if (age >= 21) {
        legal_age = true;
    }

    else {
        legal_age = false
    }

    return legal_age
}

isOldEnoughToDrink(15)