document.getElementById('accessForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário de acesso

    const password = document.getElementById('password');
    const correctPassword = 'admin123'; //Senha

    if (password.value === correctPassword) {
        window.location.href = 'pages/formPage.html';
    } else {
        //Erro
        document.getElementById('accessError').style.display = 'block'; 
        password.style.border = "1px solid red"
    }
});
