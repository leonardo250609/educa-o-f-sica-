document.addEventListener('DOMContentLoaded', () => {
    
    const botaoCalcular = document.getElementById('btn-calcular');
    const selectAtividade = document.getElementById('atividade');
    const divResultado = document.getElementById('resultado');

    botaoCalcular.addEventListener('click', () => {
        // Pega o valor da caloria associada à opção selecionada
        const calorias = selectAtividade.value;
        
        // Pega o texto do nome da atividade
        const nomeAtividade = selectAtividade.options[selectAtividade.selectedIndex].text.split(' (')[0];

        // Atualiza a tela com o resultado formatado
        divResultado.innerHTML = `
            <p>🔥 Praticando <strong>${nomeAtividade}</strong> por 30 minutos, você queima aproximadamente <strong>${calorias} calorias</strong>!</p>
            <small style="color: #27ae60; display:block; margin-top:10px;">Parabéns por escolher se movimentar!</small>
        `;
        
        // Adiciona um efeito rápido de destaque no resultado
        divResultado.style.borderLeft = "5px solid #2ecc71";
    });
});