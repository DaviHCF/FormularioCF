document.getElementById('formConversion').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const sendButton = document.querySelector('.sendButton');
    sendButton.disabled = true; // Desabilita o botão enquanto envia
    sendButton.textContent = 'Enviando...'; // Altera o texto do botão

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('https://builder.conversionflow.com.br/webhook-test/dados-formulario', {
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
        this.reset(); // Limpa os inputs após o envio
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
