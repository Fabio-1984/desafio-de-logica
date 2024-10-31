// Desafio Classificador de nível Herói
// O que deve ser utilizado
// Variáveis | Operadores | Laços de repetição | Estruturas de decisões

// Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for Entre 1.001 e 2.000 = Bronze
// Se XP for Entre 2.001 e 5.000 = Prata
// Se XP for Entre 6.001 e 7.000 = Ouro
// Se XP for Entre 7.001 e 8.000 = Platina Diamante
// Se XP for Entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// Saída
// Ao final deve se exibir uma mensagem:
//"O herói de nome **{nome}** está no nível de **{nivel}**"

// Entrada de dados

const readline = require('readline');

// Criando a interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar e obter a entrada do usuário no terminal
function perguntar() {
    rl.question("Digite o nome do herói ou (sair) para encerrar a aplicação: ", (nome) => {
        // Verifica se o usuário digitou 'sair'
        if (nome.toLowerCase() === 'sair') {
            console.log("Saindo da aplicação...");
            rl.close();
            return; // Encerra a função
        }

        rl.question("Digite a quantidade de experiência (XP) do herói: ", (xpHeroi) => {
            const exp = parseInt(xpHeroi);
            let nivel;

            switch (true) {
                case (exp < 1000):
                    nivel = "Bronze";
                    break;
                case (exp >= 1001 && exp <= 2000):
                    nivel = "Ferro";
                    break;
                case (exp >= 2001 && exp <= 5000):
                    nivel = "Prata";
                    break;
                case (exp >= 6001 && exp <= 7000):
                    nivel = "Ouro";
                    break;
                case (exp >= 7001 && exp <= 9000):
                    nivel = "Platina Diamante";
                    break;
                case (exp >= 9001 && exp <= 10000):
                    nivel = "Imortal";
                    break;
                case (exp >= 10001):
                    nivel = "Radiante";
                    break;

                default:
                    nivel = "Nível desconhecido"; // Caso não se encaixe em nenhum nível
                    break;
            }

            // Saída com o nome do herói e sua classificação.
            console.log(`O herói de nome ${nome}, está no nível de ${nivel}`);

            // Chama a função novamente para perguntar novamente
            perguntar();
        });
    });
}

// Chama a função perguntar
perguntar();
