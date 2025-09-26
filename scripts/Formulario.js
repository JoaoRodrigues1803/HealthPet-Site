//mandar dados do form para o banco
document.querySelector('.form-cadastro').addEventListener('submit', async function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const data = {
        dono_id: document.getElementById('dono-id').value,  // Captura o ID do dono (do campo oculto)
        tipoAnimal: document.getElementById('tipo-animal').value,
        nome: document.getElementById('nome').value,
        raca: document.getElementById('raca').value,
        pelagem: document.getElementById('pelagem').value,
        dataNascimento: document.getElementById('idade').value,
        porte: document.getElementById('porte').value,
        peso: parseFloat(document.getElementById('peso').value),
        sexo: document.getElementById('sexo').value,
        vacinas: document.getElementById('vacinas').value === 'sim',
        vermifugado: document.getElementById('vermifugado').value === 'sim',
        castrado: document.getElementById('castrado').value === 'sim'
    };

    try {
        const response = await fetch('https://seusite.com.br/api/animais', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Animal cadastrado com sucesso!');
            document.querySelector('.form-cadastro').reset(); // Limpa o formulário
        } else {
            const erro = await response.json();
            alert('Erro ao cadastrar: ' + erro.message);
        }
    } catch (error) {
        console.error('Erro de rede:', error);
        alert('Erro de rede ao tentar enviar os dados.');
    }
});

//just test
// {
//     document.getElementById('tipo-animal').addEventListener('change', function() {
//             const titulo = document.getElementById('titulo-cadastro');
//             titulo.textContent = this.value === 'gato' ? 'Cadastro de Gato' : 'Cadastro de Cachorro';
//         });

//         document.querySelector('.form-cadastro').addEventListener('submit', function(e) {
//             e.preventDefault();
//             const tipoAnimal = document.getElementById('tipo-animal').value;
//             const nome = document.getElementById('nome').value;
//             const raca = document.getElementById('raca').value;
//             const pelagem = document.getElementById('pelagem').value;
//             const idade = document.getElementById('idade').value;
//             const porte = document.getElementById('porte').value;
//             const peso = document.getElementById('peso').value;
//             const sexo = document.getElementById('sexo').value;
//             const vacinas = document.getElementById('vacinas').value;
//             const vermifugado = document.getElementById('vermifugado').value;
//             const castrado = document.getElementById('castrado').value;

//             const params = new URLSearchParams({
//                 tipoAnimal, nome, raca, pelagem, idade, porte, peso, sexo, vacinas, vermifugado, castrado
//             }).toString();

//             window.location.href = `FichaPet.html?${params}`;
//         });
// }