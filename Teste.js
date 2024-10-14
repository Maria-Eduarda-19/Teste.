function isFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b === num || num === 0;
}

function res1() {
    let num = parseInt(document.getElementById("txtn").value);
    let resposta = document.getElementById("resp");
    
    if (isNaN(num)) {
        resposta.innerHTML = "Por favor, insira um número válido.";
    } else if (isFibonacci(num)) {
        resposta.innerHTML = `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        resposta.innerHTML = `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

function contarLetraA() {
    // Obtém o valor inserido no input
    let texto = document.getElementById("inputString").value;

    // Converte a string para minúsculas e filtra as ocorrências da letra 'a'
    let contagem = texto.toLowerCase().split('').filter(letra => letra === 'a').length;

    // Exibe o resultado
    let resultadoDiv = document.getElementById("resultado");
    if (contagem > 0) {
        resultadoDiv.innerHTML = `A letra 'a' apareceu ${contagem} vezes.`;
    } else {
        resultadoDiv.innerHTML = "A letra 'a' não foi encontrada.";
    }
}

function Soma() {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    // Executando o loop enquanto K for menor que INDICE
    while (K < INDICE) {
        K = K + 1;   // Incrementa K em 1
        SOMA = SOMA + K;  // Adiciona K ao valor de SOMA
    }

    // Exibindo o valor final de SOMA
    document.getElementById("resultado3").innerHTML = `O valor final de SOMA é: ${SOMA}`;
}
function sequenciaA() {
    let proximo = 9; // A sequência está incrementando de 2 (1, 3, 5, 7, 9)
    document.getElementById("resultadoA").innerHTML = `O próximo número é: ${proximo}`;
}

// Sequência B: potências de 2
function sequenciaB() {
    let proximo = 128; // A sequência segue potências de 2 (2^7 = 128)
    document.getElementById("resultadoB").innerHTML = `O próximo número é: ${proximo}`;
}

// Sequência C: quadrados perfeitos
function sequenciaC() {
    let proximo = 49; // A sequência segue números quadrados (7^2 = 49)
    document.getElementById("resultadoC").innerHTML = `O próximo número é: ${proximo}`;
}

// Sequência D: quadrados pares
function sequenciaD() {
    let proximo = 100; // A sequência é de quadrados de números pares (10^2 = 100)
    document.getElementById("resultadoD").innerHTML = `O próximo número é: ${proximo}`;
}

// Sequência E: sequência de Fibonacci
function sequenciaE() {
    let proximo = 13; // Fibonacci (1, 1, 2, 3, 5, 8, 13)
    document.getElementById("resultadoE").innerHTML = `O próximo número é: ${proximo}`;
}

// Sequência F: padrão misto
function sequenciaF() {
    let proximo = 20; // A sequência segue: (2, 10, 12, 16, 17, 18, 19, 20)
    document.getElementById("resultadoF").innerHTML = `O próximo número é: ${proximo}`;
}

let lampadas = [false, false, false]; // Todas as lâmpadas começam desligadas
    let aquecidas = [false, false, false]; // Para saber se a lâmpada ficou quente
    let interruptores = [false, false, false]; // Estado inicial dos interruptores (todos desligados)
    let visitouSala = 0; // Para contar as visitas à sala das lâmpadas

    // Função para ligar ou desligar os interruptores
    function ligarDesligar(interruptor) {
        interruptores[interruptor - 1] = !interruptores[interruptor - 1]; // Alterna o estado
        // Se o interruptor foi ligado, a lâmpada aquece
        if (interruptores[interruptor - 1]) {
            lampadas[interruptor - 1] = true;
        } else {
            // Se foi desligada, mantemos o status de "aquecida"
            aquecidas[interruptor - 1] = true;
            lampadas[interruptor - 1] = false;
        }
        atualizarEstado();
    }

    // Função para visitar a sala e verificar as lâmpadas
    function visitarSala() {
        visitouSala++; // Conta quantas vezes o usuário visitou a sala
        if (visitouSala > 2) {
            document.getElementById("resultado").innerHTML = "Você já visitou a sala duas vezes. Decida agora!";
            return;
        }

        let resultado = "Estado das lâmpadas na visita " + visitouSala + ":<br>";

        for (let i = 0; i < lampadas.length; i++) {
            if (lampadas[i]) {
                resultado += `Lâmpada ${i + 1}: Acesa<br>`;
            } else if (!lampadas[i] && aquecidas[i]) {
                resultado += `Lâmpada ${i + 1}: Desligada, mas quente<br>`;
            } else {
                resultado += `Lâmpada ${i + 1}: Desligada e fria<br>`;
            }
        }

        document.getElementById("resultado").innerHTML = resultado;
    }

    // Função para atualizar o estado dos interruptores na página
    function atualizarEstado() {
        let estado = "Estado dos interruptores:<br>";
        for (let i = 0; i < interruptores.length; i++) {
            estado += `Interruptor ${i + 1}: ${interruptores[i] ? "Ligado" : "Desligado"}<br>`;
        }
        document.getElementById("estadoInterruptores").innerHTML = estado;
        atualizarEstado();
    }

    
