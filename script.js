// <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>

// function to tranform pass type text to pass

let eye = document.querySelector(".viewPassNo")

eye.onclick = (e) => {
    e.preventDefault()
    let myInput = document.querySelector("#userPass")
    
    if (myInput.type == "password") {
        myInput.type = "text"
        eye.classList.remove("viewPassNo")
        eye.classList.add("viewPassYes")
        eye.innerHTML = "<svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'></path></svg>"
    }else if (myInput.type == "text") {
        myInput.type = "password"
        eye.classList.remove("viewPassYes")
        eye.classList.add("viewPassNo")
        eye.innerHTML = "<svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z'></path></svg>"
    }
}


// function to focus input email


let inputEmail = document.querySelector("#userEmail")

inputEmail.addEventListener("blur", () => {
    if (inputEmail.value != "") {
        inputEmail.parentNode.querySelector("label").setAttribute("style", "transform: translateY(-12px); font-size: 1.2rem; letter-spacing: 0.1em;")
    } else {
        inputEmail.parentNode.querySelector("label").removeAttribute("style")
    }
})





// Function to validate form and message error

const fields = document.querySelectorAll("[required]")


function validateField(field) {

        // loica para verificar se existem erros
        function verifyErrors() {
            let foundError = false;
    
            for (let error in field.validity) {
                // se não for customError
                // então verifica se tem error
                if (field.validity[error] && !field.validity.valid){
                    foundError = error;
                }
            }
    
            return foundError;
        }

        function customMessage(typeError) {
            const messages = {
                password: {
                    valueMissing: "Por farvor, preencha este campo"
                },
                email: {
                    valueMissing: "Email é obrigatório",
                    typeMismatch: "Por farvor, preencha um email válido"
                }
            }

            return messages[field.type][typeError]
        }

        function setCustomMessage(message) {
            const spanError = field.parentNode.querySelector(".spanError")

            if (message) {
                spanError.classList.add("active")
                spanError.innerHTML = message
            } else {
                spanError.classList.remove("active")
                spanError.innerHTML = ""
            }

        } 

        return function () {

            const error = verifyErrors();

            if (error) {
                const message = customMessage(error)

                field.parentNode.style.borderBottom = "1px solid rgba(134, 114, 68, 0.5)"
                field.parentNode.querySelector("svg").style.fill = "rgb(40,39,44)"
                setCustomMessage(message)
            } else {
                field.parentNode.style.borderBottom = "1px solid green"
                field.parentNode.querySelector("svg").style.fill = "green"
                setCustomMessage("")
            }
        }
}



function customValidation(event) {


    const field = event.target;
    const validation = validateField(field);

    validation();
    
}


for (field of fields) {
    field.addEventListener("invalid", event => {
        // eliminar o bubble
        event.preventDefault();

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}


document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("enviar formulário")

        // não envia o formulário
        event.preventDefault()
})

