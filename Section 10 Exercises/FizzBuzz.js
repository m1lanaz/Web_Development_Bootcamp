var output = [];
number = 1;

function FizzBuzz() {
    if (number % 3 === 0 && number % 5 === 0){
        output.push("FizzBuzz");
    } 
    else if (number % 3 === 0){
        output.push("Fizz");
    } 
    else if (number % 5 === 0){
        output.push("Buzz");
    } 
    else{
        output.push(number);
    }
    number ++;
    return output;
}