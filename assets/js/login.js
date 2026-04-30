const email = "admin@exemplo.com"; // mock ou mockup: inserção de dados fictícios
const senha = "1234";

function verificarCredenciais(){
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;
    
    if(emailInformado === email){
        alert("E-mail informado corretamente");
        if(senhaInformada === senha){
            alert("Senha informada corretamente!");
            window.location = "home.html";
        }
        else 
            alert("Senha informada incorretamente!");       
    }
    else
        alert("E-mail informado incorretamente!");
}