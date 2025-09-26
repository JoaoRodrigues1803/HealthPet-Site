//todos os script js do projeto
fetch('https://tcc-api-e2y4.onrender.com')
.then(response => {
    if (!response.ok) {
    throw new Error(`Erro: ${response.statusText}`);
    }
    return response.text();  // Converte a resposta em texto primeiro
})
.catch(error => {
    console.error('Erro ao consultar API:', error);
});

async function carregarMapa() {
//teste com valores fornecidos pela API
const response = await fetch('https://tcc-api-e2y4.onrender.com/localizacao');
const data = await response.json();
const lat = data[1].latitude;
const lng = data[1].longitude;
console.log(data);

const url = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
document.getElementById("map").src = url;
}
carregarMapa();

async function carregarBPM() {
  try {
    const response = await fetch('https://tcc-api-e2y4.onrender.com/batimentos');
    const bpms = await response.json();
    console.log(bpms);

    const bpm = bpms[2]?.frequencia_cardiaca || '';
    document.getElementById('heart-rate-value').textContent = bpm;
  } catch (err) {
    console.error("Erro ao carregar BPM:", err);
  }
}
carregarBPM();
//atualiza o BPM a cada 5 segundos
// setInterval(() => {
// carregarBPM();
// }, 5000);'


// Atualiza o mapa a cada 60 segundos
// setInterval(() => {
// carregarMapa();
// }, 60000);
