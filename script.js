//todos os script js do projeto

fetch('https://tcc-api-e2y4.onrender.com')
.then(response => {
    if (!response.ok) {
    throw new Error(`Erro: ${response.statusText}`);
    }
    return response.text();  // Converte a resposta em texto primeiro
})
.then(data => {
    console.log(data);  // Verifique o conteúdo da resposta
    // Se for um JSON, podemos convertê-lo
    try {
    const jsonData = JSON.parse(data);
    //document.getElementById('heart-rate-value').textContent = jsonData.bpm || '--';
    } catch (e) {
    console.error('Erro ao parsear JSON:', e);
    }
})
.catch(error => {
    console.error('Erro ao consultar API:', error);
});

async function carregarMapa() {
// Teste com valores fixos
const lat = -23.105454851125238;
const lng = -47.70891389442661;

const url = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
document.getElementById("map").src = url;
}

carregarMapa();
