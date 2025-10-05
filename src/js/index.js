// Objetivo:
// Enviar um texto de um formulário para uma API do n8n e exibir o resultado o código html, css e colocar a animação no fundo da tela do site.

// Passos:
// 1. No JavaScript, pegar o evento de submit do formulário para evitar o recarregamento da página.
// 2. Obter o valor digitado pelo usuário no campo de texto.
// 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
// 4. Fazer uma requisição HTTP (POST) para a API do n8n, enviando o texto do formulário no corpo da requisição em formato JSON.
// 5. Receber a resposta da API do n8n (esperando um JSON com o código HTML/CSS do background).
// 6. Se a resposta for válida, exibir o código HTML/CSS retornado na tela:
//    - Mostrar o HTML gerado em uma área de preview.
//    - Inserir o CSS retornado dinamicamente na página para aplicar o background.
// 7. Remover o indicador de carregamento após o recebimento da resposta.`

function setLoading(isLoading) {
    const btnSpam = document.getElementById('generate-btn');

    if (isLoading) {
        btnSpam.innerHTML = 'Gerando BackGround...';
    } else {
        btnSpam.innerHTML = 'Gerar BackGround Magico';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript Carregado e Rodando com sucesso!');

    const form = document.querySelector('.form-group');
    const textArea = document.getElementById('description');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const description = textArea.value.trim();

        if (!description) {
            console.log('Por favor, insira uma descrição para gerar o background!');
            return;
        }
        // console.log('Menssagem enviada:', description);

        setLoading(true);

        try {

            const response = await fetch('https://davidev.app.n8n.cloud/webhook/gerador-background', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description })
            });

            console.log('Response da API:', response);

        } catch {

        } finally {

        }
    });
});