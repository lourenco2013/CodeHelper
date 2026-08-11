// =====================================================
// CODEHELPER - MAIN.JS
// Electron
// =====================================================

const {
    app,
    BrowserWindow,
    ipcMain
} = require("electron");

const path = require("path");

const {
    analisarCodigo,
    corrigirCodigo
} = require("./ai");


// =====================================================
// CONFIGURAÇÃO
// =====================================================

let janelaPrincipal = null;


// =====================================================
// CRIAR JANELA
// =====================================================

function criarJanela() {

    janelaPrincipal = new BrowserWindow({

        width: 1200,
        height: 800,

        minWidth: 900,
        minHeight: 600,

        title: "CodeHelper",

        backgroundColor: "#0f172a",

        webPreferences: {

            // Segurança
            contextIsolation: true,

            // Não permitir Node.js diretamente no HTML
            nodeIntegration: false,

            // Liga o preload ao frontend
            preload: path.join(
                __dirname,
                "preload.js"
            )
        }

    });


    // Carregar o teu index.html
    janelaPrincipal.loadFile(
        path.join(
            __dirname,
            "index.html"
        )
    );


    // Limpar referência quando fechar
    janelaPrincipal.on(
        "closed",
        () => {

            janelaPrincipal = null;

        }
    );

}


// =====================================================
// IPC
// ANALISAR CÓDIGO
// =====================================================

ipcMain.handle(
    "analisar-codigo",
    async (event, dados) => {

        try {

            if (!dados) {

                throw new Error(
                    "Dados não recebidos."
                );

            }


            const linguagem =
                dados.linguagem;

            const codigo =
                dados.codigo;

            const pergunta =
                dados.pergunta;


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


            const resposta =
                await analisarCodigo(
                    linguagem,
                    codigo,
                    pergunta
                );


            return {

                sucesso: true,

                resposta:
                    resposta || ""

            };

        } catch (erro) {

            console.error(
                "ERRO AO ANALISAR:",
                erro
            );


            return {

                sucesso: false,

                resposta:
                    "❌ Não foi possível analisar o código."

            };

        }

    }
);


// =====================================================
// IPC
// CORRIGIR CÓDIGO
// =====================================================

ipcMain.handle(
    "corrigir-codigo",
    async (event, dados) => {

        try {

            if (!dados) {

                throw new Error(
                    "Dados não recebidos."
                );

            }


            const linguagem =
                dados.linguagem;

            const codigo =
                dados.codigo;


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


            const resposta =
                await corrigirCodigo(
                    linguagem,
                    codigo
                );


            return {

                sucesso: true,

                resposta:
                    resposta || ""

            };

        } catch (erro) {

            console.error(
                "ERRO AO CORRIGIR:",
                erro
            );


            return {

                sucesso: false,

                resposta:
                    "❌ Não foi possível corrigir o código."

            };

        }

    }
);


// =====================================================
// ELECTRON READY
// =====================================================

app.whenReady().then(() => {

    criarJanela();


    app.on(
        "activate",
        () => {

            if (
                BrowserWindow
                    .getAllWindows()
                    .length === 0
            ) {

                criarJanela();

            }

        }
    );

});


// =====================================================
// FECHAR APLICAÇÃO
// =====================================================

app.on(
    "window-all-closed",
    () => {

        // Windows / Linux
        if (
            process.platform !== "darwin"
        ) {

            app.quit();

        }

    }
);