const input = document.querySelector('input')

let arrayNumbers = []
let firstNumberOfExpression;
let choice;

function AddNumber(number){
    arrayNumbers.push(number)
    input.value = arrayNumbers.join('');
    console.log(arrayNumbers)
}

function add(){
    firstNumberOfExpression = parseFloat(arrayNumbers.join(''));
    input.value = ''
    arrayNumbers = []
    choice = '+'
}

function subtract(){
    firstNumberOfExpression = parseFloat(arrayNumbers.join(''));
    input.value = ''
    arrayNumbers = []
    choice = '-'
}

function multiply(){
    firstNumberOfExpression = parseFloat(arrayNumbers.join(''));
    input.value = ''
    arrayNumbers = []
    choice = '*'
}

function devide(){
    firstNumberOfExpression = parseFloat(arrayNumbers.join(''));
    input.value = ''
    arrayNumbers = []
    choice = '/'
}

function result(){
    switch(choice) {
        case '+':
            [8] + [6,7,9]
            input.value = firstNumberOfExpression + parseFloat(arrayNumbers.join(''));
             break;
        case '-':
            input.value = firstNumberOfExpression - parseFloat(arrayNumbers.join(''));
            break;
        case '*':
            input.value = firstNumberOfExpression * parseFloat(arrayNumbers.join(''));
            break;
        case '/':
            input.value = firstNumberOfExpression / parseFloat(arrayNumbers.join(''));
            break;
      } 
}

function percent(){
    var percentage =  arrayNumbers.join('') / 100
    input.value = percentage
}

function negate(){
    var negate = arrayNumbers.join('') * -1
    console.log(arrayNumbers)
    //var negate = Math.abs(arrayNumbers.join(''))
    input.value = negate
}

function clearLastNumber(){
    arrayNumbers.pop()
    input.value = arrayNumbers.join('');

}

function clearAll(){
    arrayNumbers = []
    input.value = ''
}




