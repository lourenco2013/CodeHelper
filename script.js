// =====================================================
// CODEHELPER - SCRIPT.JS COMPLETO
// =====================================================
// Inclui:
// - Traduções
// - Tema claro/escuro
// - Login
// - Criação de conta
// - Menu de idiomas
// - Copiar resposta
// - Copiar código
// - Analisar código
// - Corrigir código
// - DEFINIÇÕES window.codeHelper
// - Comunicação preparada para API
// =====================================================


// =====================================================
// CONFIGURAÇÃO DA API
// =====================================================

// Quando tiveres o backend, altera este endereço.
//
// Exemplo:
// const API_URL = "http://localhost:3000/api";
//
// Se o backend estiver noutro endereço:
// const API_URL = "https://teu-site.com/api";

const API_URL = "http://localhost:3000/api";


// =====================================================
// ELEMENTOS
// =====================================================

const analisar = document.getElementById("analisar");
const corrigir = document.getElementById("corrigir");
const limpar = document.getElementById("limpar");

const copiar = document.getElementById("copiar");
const copiarCodigo = document.getElementById("copiarCodigo");

const codigo = document.getElementById("codigo");
const pergunta = document.getElementById("pergunta");
const linguagem = document.getElementById("linguagem");

const textoResposta = document.getElementById("textoResposta");
const explicacaoErro = document.getElementById("explicacaoErro");
const textoExplicacao = document.getElementById("textoExplicacao");

const codigoCorrigido = document.getElementById("codigoCorrigido");
const textoCodigo = document.getElementById("textoCodigo");

const temaBotao = document.getElementById("temaBotao");
const idiomaBotao = document.getElementById("idiomaBotao");
const loginBotao = document.getElementById("loginBotao");


// =====================================================
// TRADUÇÕES
// =====================================================

const traducoes = {

    pt: {
        nome: "Português",
        titulo: "CodeHelper",
        subtitulo: "O teu assistente pessoal de programação",
        linguagem: "Linguagem",
        codigo: "Código",
        pergunta: "Pergunta",
        placeholderCodigo: "Cola aqui o teu código...",
        placeholderPergunta: "Ex: Porque é que este código dá erro?",
        analisar: "🔍 Analisar código",
        corrigir: "🔧 Corrigir código",
        limpar: "🗑️ Limpar",
        resposta: "💡 Resposta",
        copiar: "📋 Copiar",
        explicacao: "📝 Explicação",
        codigoCorrigido: "🔧 Código corrigido",
        copiarCodigo: "📋 Copiar código",
        respostaPlaceholder: "A resposta aparecerá aqui.",
        idioma: "Alterar idioma",
        login: "Login",
        entrar: "Entrar",
        criarConta: "Criar conta",
        email: "Email",
        password: "Palavra-passe",
        nomeUtilizador: "Nome",
        sair: "Sair",
        semCodigo: "⚠️ Cola primeiro o código que queres analisar.",
        semPergunta: "⚠️ Escreve uma pergunta sobre o código.",
        aAnalisar: "🤖 A analisar o teu código...",
        aCorrigir: "🔧 A corrigir o teu código...",
        erroIA: "❌ Ocorreu um erro ao comunicar com a IA.",
        erroServidor: "❌ Não foi possível contactar o servidor.",
        contaCriada: "✅ Conta criada com sucesso!",
        loginSucesso: "✅ Login efetuado com sucesso!",
        loginErro: "❌ Email ou palavra-passe incorretos.",
        contaExiste: "❌ Já existe uma conta com esse email.",
        ola: "Olá",
        preencher: "⚠️ Preenche todos os campos."
    },

    en: {
        nome: "English",
        titulo: "CodeHelper",
        subtitulo: "Your personal programming assistant",
        linguagem: "Language",
        codigo: "Code",
        pergunta: "Question",
        placeholderCodigo: "Paste your code here...",
        placeholderPergunta: "Example: Why does this code give an error?",
        analisar: "🔍 Analyze code",
        corrigir: "🔧 Fix code",
        limpar: "🗑️ Clear",
        resposta: "💡 Answer",
        copiar: "📋 Copy",
        explicacao: "📝 Explanation",
        codigoCorrigido: "🔧 Fixed code",
        copiarCodigo: "📋 Copy code",
        respostaPlaceholder: "The answer will appear here.",
        idioma: "Change language",
        login: "Login",
        entrar: "Log in",
        criarConta: "Create account",
        email: "Email",
        password: "Password",
        nomeUtilizador: "Name",
        sair: "Log out",
        semCodigo: "⚠️ Paste the code you want to analyze first.",
        semPergunta: "⚠️ Write a question about the code.",
        aAnalisar: "🤖 Analyzing your code...",
        aCorrigir: "🔧 Fixing your code...",
        erroIA: "❌ An error occurred while contacting the AI.",
        erroServidor: "❌ Could not contact the server.",
        contaCriada: "✅ Account created successfully!",
        loginSucesso: "✅ Login successful!",
        loginErro: "❌ Incorrect email or password.",
        contaExiste: "❌ An account with this email already exists.",
        ola: "Hello",
        preencher: "⚠️ Fill in all fields."
    },

    es: {
        nome: "Español",
        titulo: "CodeHelper",
        subtitulo: "Tu asistente personal de programación",
        linguagem: "Lenguaje",
        codigo: "Código",
        pergunta: "Pregunta",
        placeholderCodigo: "Pega aquí tu código...",
        placeholderPergunta: "Ejemplo: ¿Por qué este código da error?",
        analisar: "🔍 Analizar código",
        corrigir: "🔧 Corregir código",
        limpar: "🗑️ Limpiar",
        resposta: "💡 Respuesta",
        copiar: "📋 Copiar",
        explicacao: "📝 Explicación",
        codigoCorrigido: "🔧 Código corregido",
        copiarCodigo: "📋 Copiar código",
        respostaPlaceholder: "La respuesta aparecerá aquí.",
        idioma: "Cambiar idioma",
        login: "Iniciar sesión",
        entrar: "Entrar",
        criarConta: "Crear cuenta",
        email: "Email",
        password: "Contraseña",
        nomeUtilizador: "Nombre",
        sair: "Cerrar sesión",
        semCodigo: "⚠️ Pega primero el código que quieres analizar.",
        semPergunta: "⚠️ Escribe una pregunta sobre el código.",
        aAnalisar: "🤖 Analizando tu código...",
        aCorrigir: "🔧 Corrigiendo tu código...",
        erroIA: "❌ Ocurrió un error al comunicarse con la IA.",
        erroServidor: "❌ No se pudo contactar con el servidor.",
        contaCriada: "✅ ¡Cuenta creada correctamente!",
        loginSucesso: "✅ ¡Inicio de sesión correcto!",
        loginErro: "❌ Email o contraseña incorrectos.",
        contaExiste: "❌ Ya existe una cuenta con este email.",
        ola: "Hola",
        preencher: "⚠️ Completa todos los campos."
    },

    fr: {
        nome: "Français",
        titulo: "CodeHelper",
        subtitulo: "Votre assistant personnel de programmation",
        linguagem: "Langage",
        codigo: "Code",
        pergunta: "Question",
        placeholderCodigo: "Collez votre code ici...",
        placeholderPergunta: "Exemple : pourquoi ce code donne-t-il une erreur ?",
        analisar: "🔍 Analyser le code",
        corrigir: "🔧 Corriger le code",
        limpar: "🗑️ Effacer",
        resposta: "💡 Réponse",
        copiar: "📋 Copier",
        explicacao: "📝 Explication",
        codigoCorrigido: "🔧 Code corrigé",
        copiarCodigo: "📋 Copier le code",
        respostaPlaceholder: "La réponse apparaîtra ici.",
        idioma: "Changer de langue",
        login: "Connexion",
        entrar: "Se connecter",
        criarConta: "Créer un compte",
        email: "Email",
        password: "Mot de passe",
        nomeUtilizador: "Nom",
        sair: "Se déconnecter",
        semCodigo: "⚠️ Collez d'abord le code à analyser.",
        semPergunta: "⚠️ Écrivez une question sur le code.",
        aAnalisar: "🤖 Analyse de votre code...",
        aCorrigir: "🔧 Correction de votre code...",
        erroIA: "❌ Une erreur s'est produite avec l'IA.",
        erroServidor: "❌ Impossible de contacter le serveur.",
        contaCriada: "✅ Compte créé avec succès !",
        loginSucesso: "✅ Connexion réussie !",
        loginErro: "❌ Email ou mot de passe incorrect.",
        contaExiste: "❌ Un compte avec cet email existe déjà.",
        ola: "Bonjour",
        preencher: "⚠️ Remplissez tous les champs."
    },

    de: {
        nome: "Deutsch",
        titulo: "CodeHelper",
        subtitulo: "Dein persönlicher Programmierassistent",
        linguagem: "Sprache",
        codigo: "Code",
        pergunta: "Frage",
        placeholderCodigo: "Füge deinen Code hier ein...",
        placeholderPergunta: "Beispiel: Warum verursacht dieser Code einen Fehler?",
        analisar: "🔍 Code analysieren",
        corrigir: "🔧 Code korrigieren",
        limpar: "🗑️ Löschen",
        resposta: "💡 Antwort",
        copiar: "📋 Kopieren",
        explicacao: "📝 Erklärung",
        codigoCorrigido: "🔧 Korrigierter Code",
        copiarCodigo: "📋 Code kopieren",
        respostaPlaceholder: "Die Antwort wird hier angezeigt.",
        idioma: "Sprache ändern",
        login: "Anmelden",
        entrar: "Anmelden",
        criarConta: "Konto erstellen",
        email: "E-Mail",
        password: "Passwort",
        nomeUtilizador: "Name",
        sair: "Abmelden",
        semCodigo: "⚠️ Füge zuerst den Code ein.",
        semPergunta: "⚠️ Schreibe eine Frage zum Code.",
        aAnalisar: "🤖 Dein Code wird analysiert...",
        aCorrigir: "🔧 Dein Code wird korrigiert...",
        erroIA: "❌ Fehler bei der Kommunikation mit der KI.",
        erroServidor: "❌ Der Server konnte nicht kontaktiert werden.",
        contaCriada: "✅ Konto erfolgreich erstellt!",
        loginSucesso: "✅ Anmeldung erfolgreich!",
        loginErro: "❌ Falsche E-Mail oder falsches Passwort.",
        contaExiste: "❌ Für diese E-Mail existiert bereits ein Konto.",
        ola: "Hallo",
        preencher: "⚠️ Fülle alle Felder aus."
    },

    it: {
        nome: "Italiano",
        titulo: "CodeHelper",
        subtitulo: "Il tuo assistente personale di programmazione",
        linguagem: "Linguaggio",
        codigo: "Codice",
        pergunta: "Domanda",
        placeholderCodigo: "Incolla qui il tuo codice...",
        placeholderPergunta: "Esempio: Perché questo codice dà errore?",
        analisar: "🔍 Analizza codice",
        corrigir: "🔧 Correggi codice",
        limpar: "🗑️ Cancella",
        resposta: "💡 Risposta",
        copiar: "📋 Copia",
        explicacao: "📝 Spiegazione",
        codigoCorrigido: "🔧 Codice corretto",
        copiarCodigo: "📋 Copia codice",
        respostaPlaceholder: "La risposta apparirà qui.",
        idioma: "Cambia lingua",
        login: "Accedi",
        entrar: "Accedi",
        criarConta: "Crea account",
        email: "Email",
        password: "Password",
        nomeUtilizador: "Nome",
        sair: "Esci",
        semCodigo: "⚠️ Incolla prima il codice da analizzare.",
        semPergunta: "⚠️ Scrivi una domanda sul codice.",
        aAnalisar: "🤖 Analisi del codice...",
        aCorrigir: "🔧 Correzione del codice...",
        erroIA: "❌ Si è verificato un errore con l'IA.",
        erroServidor: "❌ Impossibile contattare il server.",
        contaCriada: "✅ Account creato con successo!",
        loginSucesso: "✅ Accesso effettuato!",
        loginErro: "❌ Email o password errati.",
        contaExiste: "❌ Esiste già un account con questa email.",
        ola: "Ciao",
        preencher: "⚠️ Compila tutti i campi."
    },

    "pt-br": {
        nome: "Português (Brasil)",
        titulo: "CodeHelper",
        subtitulo: "Seu assistente pessoal de programação",
        linguagem: "Linguagem",
        codigo: "Código",
        pergunta: "Pergunta",
        placeholderCodigo: "Cole seu código aqui...",
        placeholderPergunta: "Exemplo: Por que este código dá erro?",
        analisar: "🔍 Analisar código",
        corrigir: "🔧 Corrigir código",
        limpar: "🗑️ Limpar",
        resposta: "💡 Resposta",
        copiar: "📋 Copiar",
        explicacao: "📝 Explicação",
        codigoCorrigido: "🔧 Código corrigido",
        copiarCodigo: "📋 Copiar código",
        respostaPlaceholder: "A resposta aparecerá aqui.",
        idioma: "Alterar idioma",
        login: "Login",
        entrar: "Entrar",
        criarConta: "Criar conta",
        email: "Email",
        password: "Senha",
        nomeUtilizador: "Nome",
        sair: "Sair",
        semCodigo: "⚠️ Cole primeiro o código que deseja analisar.",
        semPergunta: "⚠️ Escreva uma pergunta sobre o código.",
        aAnalisar: "🤖 Analisando seu código...",
        aCorrigir: "🔧 Corrigindo seu código...",
        erroIA: "❌ Ocorreu um erro ao comunicar com a IA.",
        erroServidor: "❌ Não foi possível contactar o servidor.",
        contaCriada: "✅ Conta criada com sucesso!",
        loginSucesso: "✅ Login efetuado com sucesso!",
        loginErro: "❌ Email ou senha incorretos.",
        contaExiste: "❌ Já existe uma conta com este email.",
        ola: "Olá",
        preencher: "⚠️ Preencha todos os campos."
    },

    nl: {
        nome: "Nederlands",
        titulo: "CodeHelper",
        subtitulo: "Jouw persoonlijke programmeerassistent",
        linguagem: "Taal",
        codigo: "Code",
        pergunta: "Vraag",
        placeholderCodigo: "Plak hier je code...",
        placeholderPergunta: "Voorbeeld: Waarom geeft deze code een fout?",
        analisar: "🔍 Code analyseren",
        corrigir: "🔧 Code corrigeren",
        limpar: "🗑️ Wissen",
        resposta: "💡 Antwoord",
        copiar: "📋 Kopiëren",
        explicacao: "📝 Uitleg",
        codigoCorrigido: "🔧 Verbeterde code",
        copiarCodigo: "📋 Code kopiëren",
        respostaPlaceholder: "Het antwoord verschijnt hier.",
        idioma: "Taal wijzigen",
        login: "Inloggen",
        entrar: "Inloggen",
        criarConta: "Account maken",
        email: "E-mail",
        password: "Wachtwoord",
        nomeUtilizador: "Naam",
        sair: "Uitloggen",
        semCodigo: "⚠️ Plak eerst de code die je wilt analyseren.",
        semPergunta: "⚠️ Stel een vraag over de code.",
        aAnalisar: "🤖 Je code wordt geanalyseerd...",
        aCorrigir: "🔧 Je code wordt gecorrigeerd...",
        erroIA: "❌ Er is een fout opgetreden met de AI.",
        erroServidor: "❌ De server kon niet worden bereikt.",
        contaCriada: "✅ Account succesvol aangemaakt!",
        loginSucesso: "✅ Succesvol ingelogd!",
        loginErro: "❌ Onjuiste e-mail of wachtwoord.",
        contaExiste: "❌ Er bestaat al een account met dit e-mailadres.",
        ola: "Hallo",
        preencher: "⚠️ Vul alle velden in."
    },

    ja: {
        nome: "日本語",
        titulo: "CodeHelper",
        subtitulo: "あなたのプログラミングアシスタント",
        linguagem: "言語",
        codigo: "コード",
        pergunta: "質問",
        placeholderCodigo: "ここにコードを貼り付けてください...",
        placeholderPergunta: "例：このコードはなぜエラーになりますか？",
        analisar: "🔍 コードを分析",
        corrigir: "🔧 コードを修正",
        limpar: "🗑️ クリア",
        resposta: "💡 回答",
        copiar: "📋 コピー",
        explicacao: "📝 説明",
        codigoCorrigido: "🔧 修正されたコード",
        copiarCodigo: "📋 コードをコピー",
        respostaPlaceholder: "回答がここに表示されます。",
        idioma: "言語を変更",
        login: "ログイン",
        entrar: "ログイン",
        criarConta: "アカウント作成",
        email: "メール",
        password: "パスワード",
        nomeUtilizador: "名前",
        sair: "ログアウト",
        semCodigo: "⚠️ まず分析したいコードを貼り付けてください。",
        semPergunta: "⚠️ コードについて質問してください。",
        aAnalisar: "🤖 コードを分析しています...",
        aCorrigir: "🔧 コードを修正しています...",
        erroIA: "❌ AIとの通信中にエラーが発生しました。",
        erroServidor: "❌ サーバーに接続できませんでした。",
        contaCriada: "✅ アカウントを作成しました！",
        loginSucesso: "✅ ログインしました！",
        loginErro: "❌ メールまたはパスワードが正しくありません。",
        contaExiste: "❌ このメールアドレスはすでに登録されています。",
        ola: "こんにちは",
        preencher: "⚠️ すべての項目を入力してください。"
    },

    zh: {
        nome: "中文",
        titulo: "CodeHelper",
        subtitulo: "你的个人编程助手",
        linguagem: "语言",
        codigo: "代码",
        pergunta: "问题",
        placeholderCodigo: "在这里粘贴你的代码...",
        placeholderPergunta: "例如：为什么这段代码会报错？",
        analisar: "🔍 分析代码",
        corrigir: "🔧 修复代码",
        limpar: "🗑️ 清除",
        resposta: "💡 回答",
        copiar: "📋 复制",
        explicacao: "📝 解释",
        codigoCorrigido: "🔧 修复后的代码",
        copiarCodigo: "📋 复制代码",
        respostaPlaceholder: "回答将在这里显示。",
        idioma: "更改语言",
        login: "登录",
        entrar: "登录",
        criarConta: "创建账户",
        email: "邮箱",
        password: "密码",
        nomeUtilizador: "姓名",
        sair: "退出登录",
        semCodigo: "⚠️ 请先粘贴要分析的代码。",
        semPergunta: "⚠️ 请提出一个关于代码的问题。",
        aAnalisar: "🤖 正在分析你的代码...",
        aCorrigir: "🔧 正在修复你的代码...",
        erroIA: "❌ 与 AI 通信时发生错误。",
        erroServidor: "❌ 无法连接服务器。",
        contaCriada: "✅ 账户创建成功！",
        loginSucesso: "✅ 登录成功！",
        loginErro: "❌ 邮箱或密码错误。",
        contaExiste: "❌ 此邮箱已经注册了账户。",
        ola: "你好",
        preencher: "⚠️ 请填写所有字段。"
    }

};


// =====================================================
// IDIOMA ATUAL
// =====================================================

let idiomaAtual =
    localStorage.getItem("codehelper_idioma") || "pt";


// =====================================================
// FUNÇÃO DE TRADUÇÃO
// =====================================================

function t(chave) {

    return (
        traducoes[idiomaAtual]?.[chave] ||
        traducoes.pt[chave] ||
        chave
    );

}


// =====================================================
// APLICAR IDIOMA
// =====================================================

function aplicarIdioma() {

    document.documentElement.lang = idiomaAtual;

    const logo =
        document.querySelector(".logo");

    if (logo) {
        logo.textContent =
            "💻 " + t("titulo");
    }

    const titulo =
        document.querySelector(".topo h1");

    if (titulo) {
        titulo.textContent =
            "🧠 " + t("titulo");
    }

    const subtitulo =
        document.querySelector(".topo p");

    if (subtitulo) {
        subtitulo.textContent =
            t("subtitulo");
    }

    const labels =
        document.querySelectorAll(".campo label");

    if (labels[0]) {
        labels[0].textContent =
            t("linguagem");
    }

    if (labels[1]) {
        labels[1].textContent =
            t("codigo");
    }

    if (labels[2]) {
        labels[2].textContent =
            t("pergunta");
    }

    if (codigo) {
        codigo.placeholder =
            t("placeholderCodigo");
    }

    if (pergunta) {
        pergunta.placeholder =
            t("placeholderPergunta");
    }

    if (analisar) {
        analisar.textContent =
            t("analisar");
    }

    if (corrigir) {
        corrigir.textContent =
            t("corrigir");
    }

    if (limpar) {
        limpar.textContent =
            t("limpar");
    }

    const respostaTitulo =
        document.querySelector(".resposta-topo h2");

    if (respostaTitulo) {
        respostaTitulo.textContent =
            t("resposta");
    }

    if (copiar) {
        copiar.textContent =
            t("copiar");
    }

    const explicacaoTitulo =
        explicacaoErro?.querySelector("h3");

    if (explicacaoTitulo) {
        explicacaoTitulo.textContent =
            t("explicacao");
    }

    const codigoTitulo =
        codigoCorrigido?.querySelector("h3");

    if (codigoTitulo) {
        codigoTitulo.textContent =
            t("codigoCorrigido");
    }

    if (copiarCodigo) {
        copiarCodigo.textContent =
            t("copiarCodigo");
    }

    if (idiomaBotao) {
        idiomaBotao.title =
            t("idioma");
    }

    atualizarLoginBotao();

    localStorage.setItem(
        "codehelper_idioma",
        idiomaAtual
    );

}


// =====================================================
// MENU DE IDIOMAS
// =====================================================

function criarMenuIdioma() {

    const antigo =
        document.getElementById("menuIdioma");

    if (antigo) {
        antigo.remove();
        return;
    }

    const menu =
        document.createElement("div");

    menu.id = "menuIdioma";

    menu.innerHTML = `

        <div class="menu-idioma-titulo">
            🌐 ${t("idioma")}
        </div>

        <button data-idioma="pt">🇵🇹 Português</button>
        <button data-idioma="en">🇬🇧 English</button>
        <button data-idioma="es">🇪🇸 Español</button>
        <button data-idioma="fr">🇫🇷 Français</button>
        <button data-idioma="de">🇩🇪 Deutsch</button>
        <button data-idioma="it">🇮🇹 Italiano</button>
        <button data-idioma="pt-br">🇧🇷 Português (Brasil)</button>
        <button data-idioma="nl">🇳🇱 Nederlands</button>
        <button data-idioma="ja">🇯🇵 日本語</button>
        <button data-idioma="zh">🇨🇳 中文</button>

    `;

    document.body.appendChild(menu);

    menu.querySelectorAll("button")
        .forEach(botao => {

            botao.addEventListener(
                "click",
                () => {

                    idiomaAtual =
                        botao.dataset.idioma;

                    aplicarIdioma();

                    menu.remove();

                }
            );

        });

}


if (idiomaBotao) {

    idiomaBotao.addEventListener(
        "click",
        criarMenuIdioma
    );

}


// =====================================================
// ESCONDER CORREÇÃO
// =====================================================

function esconderCorrecao() {

    if (explicacaoErro) {
        explicacaoErro.style.display =
            "none";
    }

    if (codigoCorrigido) {
        codigoCorrigido.style.display =
            "none";
    }

}


// =====================================================
// FORMATAR TEXTO
// =====================================================

function formatarTexto(texto) {

    return escapeHtml(
        String(texto ?? "")
    ).replace(/\n/g, "<br>");

}


// =====================================================
// SEGURANÇA
// =====================================================

function escapeHtml(texto) {

    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =====================================================
// PEDIDO À API
// =====================================================

async function fazerPedidoAPI(endpoint, dados) {

    const resposta =
        await fetch(
            `${API_URL}${endpoint}`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(dados)
            }
        );

    if (!resposta.ok) {

        throw new Error(
            `Erro HTTP ${resposta.status}`
        );

    }

    const resultado =
        await resposta.json();

    return resultado;

}


// =====================================================
// DEFINIÇÃO 1
// ANALISAR CÓDIGO
// =====================================================

async function analisarCodigo({
    linguagem,
    codigo,
    pergunta
}) {

    if (!linguagem) {
        throw new Error(
            "Linguagem não definida."
        );
    }

    if (!codigo) {
        throw new Error(
            "Código não definido."
        );
    }

    if (!pergunta) {
        throw new Error(
            "Pergunta não definida."
        );
    }


    // =================================================
    // ENVIA PARA O BACKEND
    // =================================================

    const resultado =
        await fazerPedidoAPI(
            "/analisar",
            {
                linguagem,
                codigo,
                pergunta,
                idioma: idiomaAtual
            }
        );


    return {

        sucesso:
            resultado.sucesso !== false,

        resposta:
            resultado.resposta ||
            resultado.message ||
            ""

    };

}


// =====================================================
// DEFINIÇÃO 2
// CORRIGIR CÓDIGO
// =====================================================

async function corrigirCodigo({
    linguagem,
    codigo
}) {

    if (!linguagem) {
        throw new Error(
            "Linguagem não definida."
        );
    }

    if (!codigo) {
        throw new Error(
            "Código não definido."
        );
    }


    const resultado =
        await fazerPedidoAPI(
            "/corrigir",
            {
                linguagem,
                codigo,
                idioma: idiomaAtual
            }
        );


    return {

        sucesso:
            resultado.sucesso !== false,

        resposta:
            resultado.resposta ||
            resultado.message ||
            ""

    };

}


// =====================================================
// AQUI ESTÁ A DEFINIÇÃO QUE FALTAVA
// =====================================================

window.codeHelper = {

    analisarCodigo:
        analisarCodigo,

    corrigirCodigo:
        corrigirCodigo

};


// =====================================================
// ANALISAR CÓDIGO - BOTÃO
// =====================================================

if (analisar) {

    analisar.addEventListener(
        "click",
        async () => {

            const codigoTexto =
                codigo.value.trim();

            const perguntaTexto =
                pergunta.value.trim();


            if (!codigoTexto) {

                textoResposta.innerHTML =
                    `<p>${t("semCodigo")}</p>`;

                return;

            }


            if (!perguntaTexto) {

                textoResposta.innerHTML =
                    `<p>${t("semPergunta")}</p>`;

                return;

            }


            esconderCorrecao();


            textoResposta.innerHTML =
                `<p>${t("aAnalisar")}<br><br>⏳</p>`;


            try {

                const resultado =
                    await window.codeHelper
                        .analisarCodigo({

                            linguagem:
                                linguagem.value,

                            codigo:
                                codigoTexto,

                            pergunta:
                                perguntaTexto

                        });


                if (!resultado.sucesso) {

                    textoResposta.innerHTML =
                        `<p>${formatarTexto(
                            resultado.resposta
                        )}</p>`;

                    return;

                }


                textoResposta.innerHTML =
                    `<p>${formatarTexto(
                        resultado.resposta
                    )}</p>`;


            } catch (erro) {

                console.error(
                    "Erro ao analisar:",
                    erro
                );

                textoResposta.innerHTML =
                    `<p>${t("erroServidor")}</p>`;

            }

        }
    );

}


// =====================================================
// CORRIGIR CÓDIGO - BOTÃO
// =====================================================

if (corrigir) {

    corrigir.addEventListener(
        "click",
        async () => {

            const codigoTexto =
                codigo.value.trim();


            if (!codigoTexto) {

                textoResposta.innerHTML =
                    `<p>${t("semCodigo")}</p>`;

                return;

            }


            esconderCorrecao();


            textoResposta.innerHTML =
                `<p>${t("aCorrigir")}<br><br>⏳</p>`;


            try {

                const resultado =
                    await window.codeHelper
                        .corrigirCodigo({

                            linguagem:
                                linguagem.value,

                            codigo:
                                codigoTexto

                        });


                if (!resultado.sucesso) {

                    textoResposta.innerHTML =
                        `<p>${formatarTexto(
                            resultado.resposta
                        )}</p>`;

                    return;

                }


                mostrarResultadoCorrecao(
                    resultado.resposta
                );


            } catch (erro) {

                console.error(
                    "Erro ao corrigir:",
                    erro
                );

                textoResposta.innerHTML =
                    `<p>${t("erroServidor")}</p>`;

            }

        }
    );

}


// =====================================================
// MOSTRAR RESULTADO DA CORREÇÃO
// =====================================================

function mostrarResultadoCorrecao(resposta) {

    const texto =
        String(resposta ?? "");


    const marcadoresExplicacao = [
        "EXPLICAÇÃO:",
        "EXPLICACAO:",
        "EXPLANATION:",
        "EXPLICACIÓN:",
        "EXPLICATION:"
    ];


    const marcadoresCodigo = [
        "CÓDIGO CORRIGIDO:",
        "CODIGO CORRIGIDO:",
        "FIXED CODE:",
        "CÓDIGO CORREGIDO:",
        "CODE CORRIGÉ:"
    ];


    let marcadorExplicacao = null;
    let marcadorCodigo = null;


    for (
        const marcador
        of marcadoresExplicacao
    ) {

        if (
            texto
                .toUpperCase()
                .includes(marcador)
        ) {

            marcadorExplicacao =
                marcador;

            break;

        }

    }


    for (
        const marcador
        of marcadoresCodigo
    ) {

        if (
            texto
                .toUpperCase()
                .includes(marcador)
        ) {

            marcadorCodigo =
                marcador;

            break;

        }

    }


    if (
        marcadorExplicacao &&
        marcadorCodigo
    ) {

        const textoMaiusculo =
            texto.toUpperCase();


        const inicioExplicacao =
            textoMaiusculo.indexOf(
                marcadorExplicacao
            );


        const inicioCodigo =
            textoMaiusculo.indexOf(
                marcadorCodigo
            );


        let explicacao =
            texto.substring(
                inicioExplicacao +
                marcadorExplicacao.length,
                inicioCodigo
            ).trim();


        let codigoResposta =
            texto.substring(
                inicioCodigo +
                marcadorCodigo.length
            ).trim();


        codigoResposta =
            removerMarkdownCodigo(
                codigoResposta
            );


        textoExplicacao.textContent =
            explicacao;


        textoCodigo.textContent =
            codigoResposta;


        textoResposta.innerHTML =
            "";


        textoResposta.appendChild(
            explicacaoErro
        );


        textoResposta.appendChild(
            codigoCorrigido
        );


        explicacaoErro.style.display =
            "block";


        codigoCorrigido.style.display =
            "block";


        return;

    }


    textoResposta.innerHTML =
        `<p>${formatarTexto(texto)}</p>`;

}


// =====================================================
// REMOVER ``` DO CÓDIGO
// =====================================================

function removerMarkdownCodigo(codigoTexto) {

    return String(codigoTexto)

        .replace(
            /^```[a-zA-Z0-9#+._-]*\s*/i,
            ""
        )

        .replace(
            /```\s*$/i,
            ""
        )

        .trim();

}


// =====================================================
// COPIAR RESPOSTA
// =====================================================

if (copiar) {

    copiar.addEventListener(
        "click",
        async () => {

            try {

                await navigator.clipboard
                    .writeText(
                        textoResposta.innerText
                    );


                const textoOriginal =
                    t("copiar");


                copiar.textContent =
                    "✅ Copiado!";


                setTimeout(
                    () => {

                        copiar.textContent =
                            textoOriginal;

                    },
                    2000
                );


            } catch (erro) {

                console.error(
                    "Erro ao copiar:",
                    erro
                );

            }

        }
    );

}


// =====================================================
// COPIAR CÓDIGO
// =====================================================

if (copiarCodigo) {

    copiarCodigo.addEventListener(
        "click",
        async () => {

            try {

                await navigator.clipboard
                    .writeText(
                        textoCodigo.textContent
                    );


                copiarCodigo.textContent =
                    "✅ Copiado!";


                setTimeout(
                    () => {

                        copiarCodigo.textContent =
                            t("copiarCodigo");

                    },
                    2000
                );


            } catch (erro) {

                console.error(
                    "Erro ao copiar código:",
                    erro
                );

            }

        }
    );

}


// =====================================================
// LIMPAR
// =====================================================

if (limpar) {

    limpar.addEventListener(
        "click",
        () => {

            codigo.value = "";

            pergunta.value = "";

            textoResposta.innerHTML = `

                <p class="placeholder">
                    ${t("respostaPlaceholder")}
                </p>

            `;

            esconderCorrecao();

        }
    );

}


// =====================================================
// TEMA
// =====================================================

if (temaBotao) {

    temaBotao.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "claro"
            );


            const claro =
                document.body.classList.contains(
                    "claro"
                );


            temaBotao.textContent =
                claro
                    ? "🌙"
                    : "☀️";


            localStorage.setItem(
                "codehelper_tema",
                claro
                    ? "claro"
                    : "escuro"
            );

        }
    );

}


// =====================================================
// CARREGAR TEMA
// =====================================================

function carregarTema() {

    const tema =
        localStorage.getItem(
            "codehelper_tema"
        );


    if (tema === "claro") {

        document.body.classList.add(
            "claro"
        );


        if (temaBotao) {
            temaBotao.textContent =
                "🌙";
        }

    } else {

        if (temaBotao) {
            temaBotao.textContent =
                "☀️";
        }

    }

}


// =====================================================
// LOGIN
// =====================================================

function criarLoginModal() {

    const antigo =
        document.getElementById(
            "loginModal"
        );


    if (antigo) {

        antigo.remove();

        return;

    }


    const modal =
        document.createElement("div");


    modal.id =
        "loginModal";


    modal.innerHTML = `

        <div class="login-caixa">

            <button
                id="fecharLogin"
                class="fechar-login"
            >
                ✕
            </button>

            <div class="login-titulo">
                👤 ${t("login")}
            </div>

            <div id="loginUtilizador"></div>

            <div class="login-form">

                <label>
                    ${t("email")}
                </label>

                <input
                    type="email"
                    id="loginEmail"
                    placeholder="${t("email")}"
                >

                <label>
                    ${t("password")}
                </label>

                <input
                    type="password"
                    id="loginPassword"
                    placeholder="${t("password")}"
                >

                <input
                    type="text"
                    id="loginNome"
                    placeholder="${t("nomeUtilizador")}"
                    style="display:none;"
                >

                <button id="entrarConta">
                    ${t("entrar")}
                </button>

                <button
                    id="mostrarCriarConta"
                    class="botao-secundario"
                >
                    ${t("criarConta")}
                </button>

                <button
                    id="sairConta"
                    class="botao-sair"
                    style="display:none;"
                >
                    🚪 ${t("sair")}
                </button>

                <p id="loginMensagem"></p>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    configurarLogin();

}


// =====================================================
// CONFIGURAR LOGIN
// =====================================================

function configurarLogin() {

    const fechar =
        document.getElementById(
            "fecharLogin"
        );

    const entrar =
        document.getElementById(
            "entrarConta"
        );

    const criar =
        document.getElementById(
            "mostrarCriarConta"
        );

    const sair =
        document.getElementById(
            "sairConta"
        );

    const nome =
        document.getElementById(
            "loginNome"
        );

    const mensagem =
        document.getElementById(
            "loginMensagem"
        );


    fechar.addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "loginModal"
                )
                ?.remove();

        }
    );


    atualizarModalLogin();


    criar.addEventListener(
        "click",
        () => {

            if (
                nome.style.display ===
                "none"
            ) {

                nome.style.display =
                    "block";


                criar.textContent =
                    "← " + t("entrar");


                entrar.textContent =
                    t("criarConta");

            } else {

                nome.style.display =
                    "none";


                criar.textContent =
                    t("criarConta");


                entrar.textContent =
                    t("entrar");

            }

        }
    );


    entrar.addEventListener(
        "click",
        () => {

            const email =
                document.getElementById(
                    "loginEmail"
                )
                    .value
                    .trim();


            const password =
                document.getElementById(
                    "loginPassword"
                )
                    .value;


            const nomeValor =
                nome.value.trim();


            if (!email || !password) {

                mensagem.textContent =
                    t("preencher");

                return;

            }


            const contas =
                JSON.parse(
                    localStorage.getItem(
                        "codehelper_contas"
                    ) || "[]"
                );


            // =========================================
            // CRIAR CONTA
            // =========================================

            if (
                nome.style.display !==
                "none"
            ) {

                if (!nomeValor) {

                    mensagem.textContent =
                        "⚠️ " +
                        t("nomeUtilizador");

                    return;

                }


                const existe =
                    contas.find(
                        conta =>
                            conta.email ===
                            email
                    );


                if (existe) {

                    mensagem.textContent =
                        t("contaExiste");

                    return;

                }


                contas.push({

                    nome:
                        nomeValor,

                    email:
                        email,

                    password:
                        password

                });


                localStorage.setItem(
                    "codehelper_contas",
                    JSON.stringify(contas)
                );


                localStorage.setItem(
                    "codehelper_sessao",
                    JSON.stringify({

                        nome:
                            nomeValor,

                        email:
                            email

                    })
                );


                mensagem.textContent =
                    t("contaCriada");


                setTimeout(
                    () => {

                        atualizarLoginBotao();

                        document
                            .getElementById(
                                "loginModal"
                            )
                            ?.remove();

                    },
                    1000
                );


                return;

            }


            // =========================================
            // LOGIN
            // =========================================

            const conta =
                contas.find(
                    utilizador =>

                        utilizador.email ===
                        email &&

                        utilizador.password ===
                        password
                );


            if (!conta) {

                mensagem.textContent =
                    t("loginErro");

                return;

            }


            localStorage.setItem(
                "codehelper_sessao",
                JSON.stringify({

                    nome:
                        conta.nome,

                    email:
                        conta.email

                })
            );


            mensagem.textContent =
                t("loginSucesso");


            setTimeout(
                () => {

                    atualizarLoginBotao();

                    document
                        .getElementById(
                            "loginModal"
                        )
                        ?.remove();

                },
                1000
            );

        }
    );


    sair.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "codehelper_sessao"
            );


            atualizarLoginBotao();


            document
                .getElementById(
                    "loginModal"
                )
                ?.remove();

        }
    );

}


// =====================================================
// MODAL LOGIN
// =====================================================

function atualizarModalLogin() {

    const sessao =
        JSON.parse(
            localStorage.getItem(
                "codehelper_sessao"
            ) || "null"
        );


    const entrar =
        document.getElementById(
            "entrarConta"
        );

    const criar =
        document.getElementById(
            "mostrarCriarConta"
        );

    const sair =
        document.getElementById(
            "sairConta"
        );

    const utilizador =
        document.getElementById(
            "loginUtilizador"
        );


    if (!entrar) {
        return;
    }


    if (sessao) {

        utilizador.innerHTML = `

            <div class="utilizador-logado">

                ${t("ola")},

                <strong>
                    ${escapeHtml(
                        sessao.nome
                    )}
                </strong>

                <br>

                <small>
                    ${escapeHtml(
                        sessao.email
                    )}
                </small>

            </div>

        `;


        entrar.style.display =
            "none";

        criar.style.display =
            "none";

        sair.style.display =
            "block";

    }

}


// =====================================================
// BOTÃO LOGIN
// =====================================================

function atualizarLoginBotao() {

    if (!loginBotao) {
        return;
    }


    const sessao =
        JSON.parse(
            localStorage.getItem(
                "codehelper_sessao"
            ) || "null"
        );


    loginBotao.textContent =
        "👤";


    if (sessao) {

        loginBotao.title =
            `${t("ola")}, ${sessao.nome}`;

    } else {

        loginBotao.title =
            t("login");

    }

}


if (loginBotao) {

    loginBotao.addEventListener(
        "click",
        criarLoginModal
    );

}


// =====================================================
// ESTILOS DOS MENUS
// =====================================================

function adicionarEstilosMenus() {

    if (
        document.getElementById(
            "codehelper-estilos-menus"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "codehelper-estilos-menus";


    style.textContent = `

        #menuIdioma {

            position: fixed;

            left: 25px;

            bottom: 85px;

            width: 230px;

            max-height: 500px;

            overflow-y: auto;

            background: #111827;

            border: 1px solid #374151;

            border-radius: 14px;

            padding: 10px;

            z-index: 2000;

            box-shadow:
                0 10px 30px rgba(0,0,0,.4);

        }


        .menu-idioma-titulo {

            padding: 10px;

            font-weight: bold;

            color: #e5e7eb;

            border-bottom:
                1px solid #273244;

            margin-bottom: 5px;

        }


        #menuIdioma button {

            width: 100%;

            background: transparent;

            color: #e5e7eb;

            text-align: left;

            border-radius: 8px;

            padding: 10px;

        }


        #menuIdioma button:hover {

            background: #1f2937;

        }


        #loginModal {

            position: fixed;

            inset: 0;

            background:
                rgba(0,0,0,.65);

            display: flex;

            align-items: center;

            justify-content: center;

            z-index: 3000;

            padding: 20px;

        }


        .login-caixa {

            position: relative;

            width: 100%;

            max-width: 420px;

            background: #111827;

            border: 1px solid #374151;

            border-radius: 18px;

            padding: 30px;

            box-shadow:
                0 20px 50px rgba(0,0,0,.5);

        }


        .login-titulo {

            text-align: center;

            font-size: 24px;

            font-weight: bold;

            margin-bottom: 25px;

        }


        .fechar-login {

            position: absolute;

            right: 15px;

            top: 15px;

            width: 35px;

            height: 35px;

            padding: 0;

            border-radius: 50%;

            background: #1f2937;

            color: white;

        }


        .login-form {

            display: flex;

            flex-direction: column;

            gap: 10px;

        }


        .login-form label {

            font-size: 14px;

            font-weight: bold;

            color: #cbd5e1;

        }


        .login-form input {

            width: 100%;

            padding: 12px;

            border-radius: 9px;

            border: 1px solid #374151;

            background: #0f172a;

            color: white;

            outline: none;

        }


        #entrarConta {

            margin-top: 10px;

            background: #4f46e5;

            color: white;

        }


        .botao-secundario {

            background: #374151;

            color: white;

        }


        .botao-sair {

            background: #dc2626;

            color: white;

        }


        #loginMensagem {

            text-align: center;

            min-height: 25px;

            margin-top: 8px;

        }


        .utilizador-logado {

            text-align: center;

            padding: 15px;

            margin-bottom: 15px;

            background: #0f172a;

            border-radius: 10px;

            line-height: 1.7;

        }


        body.claro #menuIdioma {

            background: white;

            border-color: #cbd5e1;

        }


        body.claro .menu-idioma-titulo {

            color: #0f172a;

            border-color: #e2e8f0;

        }


        body.claro #menuIdioma button {

            color: #0f172a;

        }


        body.claro #menuIdioma button:hover {

            background: #f1f5f9;

        }


        body.claro .login-caixa {

            background: white;

            border-color: #cbd5e1;

            color: #0f172a;

        }


        body.claro .login-form label {

            color: #334155;

        }


        body.claro .login-form input {

            background: #f8fafc;

            color: #0f172a;

            border-color: #cbd5e1;

        }


        body.claro .utilizador-logado {

            background: #f1f5f9;

        }

    `;


    document.head.appendChild(
        style
    );

}


// =====================================================
// INICIALIZAÇÃO
// =====================================================

adicionarEstilosMenus();

carregarTema();

aplicarIdioma();

esconderCorrecao();

atualizarLoginBotao();


// =====================================================
// VERIFICAÇÃO DAS DEFINIÇÕES
// =====================================================

console.log(
    "CodeHelper carregado."
);

console.log(
    "window.codeHelper:",
    window.codeHelper
);

console.log(
    "analisarCodigo:",
    typeof window.codeHelper.analisarCodigo
);

console.log(
    "corrigirCodigo:",
    typeof window.codeHelper.corrigirCodigo
);