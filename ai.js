const OLLAMA_URL = "http://localhost:11434/api/chat";
const MODELO = "qwen2.5-coder:7b";

async function perguntarIA(mensagens) {
    const resposta = await fetch(OLLAMA_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: MODELO,
            stream: false,
            temperature: 0,
            messages: mensagens
        })
    });

    if (!resposta.ok) {
        throw new Error(`Ollama respondeu com HTTP ${resposta.status}`);
    }

    const dados = await resposta.json();

    return dados.message.content;
}


// 🔍 ANALISAR CÓDIGO

async function analisarCodigo(linguagem, codigo, pergunta) {

    return perguntarIA([
        {
            role: "system",
            content:
                "És um especialista em programação. " +
                "Analisa código, encontra erros e explica de forma simples. " +
                "Responde sempre em português de Portugal."
        },
        {
            role: "user",
            content:
                `Linguagem: ${linguagem}\n\n` +
                `Código:\n${codigo}\n\n` +
                `Pergunta:\n${pergunta}`
        }
    ]);
}


// 🔧 CORRIGIR CÓDIGO

async function corrigirCodigo(linguagem, codigo) {

    return perguntarIA([
        {
            role: "system",
            content:
                "És um especialista em programação.\n\n" +
                "Analisa o código fornecido e encontra os erros.\n\n" +
                "Responde EXATAMENTE neste formato:\n\n" +
                "EXPLICAÇÃO:\n" +
                "Explica de forma simples quais eram os erros e como foram corrigidos.\n\n" +
                "CÓDIGO CORRIGIDO:\n" +
                "Coloca aqui o código completo corrigido dentro de um bloco de código.\n\n" +
                "Responde em português de Portugal."
        },
        {
            role: "user",
            content:
                `Linguagem: ${linguagem}\n\n` +
                `Código para corrigir:\n${codigo}`
        }
    ]);
}


module.exports = {
    analisarCodigo,
    corrigirCodigo
};