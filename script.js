const input = document.querySelector('input')

let arrayNumbers = []

function AddNumber(number){
    arrayNumbers.push(number)
    input.value = arrayNumbers.join('');
    console.log(arrayNumbers)
}

function percent(event){
    var percentage =  arrayNumbers.join('') / 100
    input.value = percentage
}

function negate(event){
    var negate = arrayNumbers.join('') * -1
    //var negate = Math.abs(arrayNumbers.join(''))
    input.value = negate
    console.log(negate)
}

function clearLastNumber(event){
    arrayNumbers.pop()
    input.value = arrayNumbers.join('');

}

function clearAll(event){
    arrayNumbers = []
    input.value = ''
}

