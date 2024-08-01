let mostrarSenha = document.getElementById('mostrarSenha');
let inputSenha = document.getElementById('isenha');
mostrarSenha.onclick = function() {
    if(inputSenha.type == 'password'){
        inputSenha.type = 'text';
        mostrarSenha.classList.add('mostrar');
    }else{
        inputSenha.type = 'password';
        mostrarSenha.classList.remove('mostrar');
    }
}