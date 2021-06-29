// Function where you submit a list of names and it'll randomise whos paying
function whosPaying(names){
    var payingPerson = Math.random() * (names.length);
    payingPerson = Math.floor(payingPerson);
    return names[payingPerson] + " is going to buy lunch today!";
}
