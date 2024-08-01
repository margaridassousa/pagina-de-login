let mostrarSenha = document.getElementById('mostrarSenha')
let inputSenha = document.getElementById('isenha')
mostrarSenha.onclick = function() {
    if(inputSenha.type == 'isenha'){
        inputSenha.type = 'text'
        mostrarSenha.classList.add('mostrar')
    }else{
        inputSenha.type = 'isenha'
        mostrarSenha.classList.remove('mostrar')
    }
}