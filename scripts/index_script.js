document.getElementById('accessForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const correctPassword = 'admin123'; 

    if (password === correctPassword) {
        document.getElementById('accessContainer').style.display = 'none'; // Oculta o formulário de senha
        document.getElementById('formContainer').style.display = 'block'; // Exibe o formulário principal
    } else {
        document.getElementById('accessError').style.display = 'block';
        password.value = "";
    }
});

document.getElementById('formConversion').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const sendButton = document.querySelector('.sendButton');
    sendButton.disabled = true;
    sendButton.textContent = 'Enviando...'; 

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('https://builder.conversionflow.com.br/webhook/dados-formulario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Sucesso:', result);
        alert('Formulário enviado com sucesso!');
        this.reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar o formulário. Tente novamente.');
    })
    .finally(() => {
        sendButton.disabled = false; // Reabilita o botão
        sendButton.textContent = 'Enviar'; // Restaura o texto do botão
    });
});
