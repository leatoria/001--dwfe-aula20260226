const email="admin@exemplo.com";
const senha="1234";

function verificarCredenciais(){
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;


if(emailInformado === email) {
    alert("Email correto");
    if(senhaInformada === senha){
        alert("Login realizado com sucesso!");
        window.location = "home.html";
    } else 
        alert("Senha incorreta");

} 
else 
        alert("Email incorreto");


}