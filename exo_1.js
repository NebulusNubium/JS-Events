const button = document.createElement('button')
button.textContent = 'Valider'
document.body.append(button)

const userInput = document.getElementById('userInput')
const message = document.getElementById('message')
button.addEventListener('click', function(event){
    if (userInput.value=='Bonjour'){
        message.textContent = 'Bonne Journée!'
        message.style.color = 'green'
    } else if (userInput.value=='Au revoir'){
        message.textContent = 'A la prochaine!'
        message.style.color = 'green'
    } else {
        message.textContent = 'Je ne comprends pas'
        message.style.color = 'red'
    }
})

