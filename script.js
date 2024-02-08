function checkCredentials() {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    
    if (email === "recepcao" && password === "teste") {
        
        window.location.href = "https://www.anfavea.com.br";
    } else {
        
        alert("Credenciais inválidas. Tente novamente.");
    }

    
    return false;
}

