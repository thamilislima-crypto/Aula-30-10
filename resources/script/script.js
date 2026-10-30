let form = document.querySelector("form")
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")
let message = document.querySelector("span")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = inputEmail.value
    let password = inputPassword.value
    if (validarUsuario(email, password)) {
        console.log("Usuario logado com sucesso")
    }
    else (
        console.log("Erro! Senha ou Email incorretos")
    )

})
form.style.backgroundColor = "pink"
form.style.borderRadius = "40px"
form.style.margin = "20px"


let email = "thamilis@gmail.com"
let password = '180720'
function validarUsuario(email, password) {
    if (email === "" || password === "") {
        message.innerText = "Não deixe o campo vazio"
        message.style.color = "red"
        return false
    }
    else if (password.length < 8) {
        message.innerText = "Senha muito curta"
        message.style.color = "red"
        return false
    }

}

