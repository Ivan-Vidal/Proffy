//procurar botão
document.querySelector("#add-time")
    .addEventListener('click', cloneField)

// quando clicar no botão

//executar uma ação
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false
        //Duplicar os campos
        //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
        //cada campo limpar
    fields.forEach(function(field) {
        field.value = ""
    });

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}