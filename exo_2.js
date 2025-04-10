
const calculate = document.getElementById('calculate')
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const result = document.getElementById('result')

calculate.addEventListener('click', function(event){
    result.textContent = number1.value*number2.value
})