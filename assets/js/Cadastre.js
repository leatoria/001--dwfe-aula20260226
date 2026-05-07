// PEGAR O FORMULÁRIO
const form = document.getElementById("formCadastro");

// PEGAR A DIV DE MENSAGEM
const mensagem = document.getElementById("mensagem");

// QUANDO O FORMULÁRIO FOR ENVIADO
form.addEventListener("submit", function(event){

    // IMPEDIR RECARREGAMENTO DA PÁGINA
    event.preventDefault();

    // PEGAR VALOR DO NOME
    const nome = document.getElementById("nome").value;

    // PEGAR VALOR DO EMAIL
    const email = document.getElementById("email").value;

    // PEGAR VALOR DA SENHA
    const senha = document.getElementById("senha").value;

    // PEGAR VALOR DA CONFIRMAÇÃO DE SENHA
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // VERIFICAR SE EXISTE CAMPO VAZIO
    if(
        nome === "" ||
        email === "" ||
        senha === "" ||
        confirmarSenha === ""
    ){

        // COR DA MENSAGEM
        mensagem.style.color = "red";

        // TEXTO DA MENSAGEM
        mensagem.innerText = "Preencha todos os campos!";

        // PARAR O CÓDIGO
        return;
    }

    // VERIFICAR SE AS SENHAS SÃO DIFERENTES
    if(senha !== confirmarSenha){

        // COR DA MENSAGEM
        mensagem.style.color = "red";

        // TEXTO
        mensagem.innerText = "As senhas não coincidem!";

        // PARAR O CÓDIGO
        return;
    }

    // MENSAGEM DE SUCESSO
    mensagem.style.color = "green";

    // TEXTO DE SUCESSO
    mensagem.innerText = "Cadastro realizado com sucesso!";

    // LIMPAR FORMULÁRIO
    form.reset();

     // ESPERAR 1 SEGUNDO
    setTimeout(function(){

        // REDIRECIONAR PARA HOME.HTML
        window.location.href = "home.html";

    }, 1000);

});

