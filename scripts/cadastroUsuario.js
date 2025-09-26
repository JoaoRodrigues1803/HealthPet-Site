document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio do formulário

    // Obtém as credenciais do formulário
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Envia a requisição POST para a API de login
    fetch('https://tcc-api-e2y4.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, senha })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Salva o token no localStorage ou cookie
            localStorage.setItem('authToken', data.token);
            // Redireciona para a página protegida
            window.location.href = '../site/CadastroC.html';
        } else {
            alert('Usuário ou senha incorretos!');
        }
    })
    .catch(error => {
        console.error('Erro de autenticação:', error);
        alert('Erro de comunicação com a API.');
    });
});