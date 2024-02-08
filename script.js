function checkCredentials() {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    
    if (email === "recepcao" && password === "teste") {
        
        window.location.href = "https://viniciussantoos.github.io/painel/";
    } else {
        
        alert("Credenciais inválidas. Tente novamente.");
    }

    
    return false;
}

