const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("codeHelper", {

    analisarCodigo: (dados) => {
        return ipcRenderer.invoke("analisar-codigo", dados);
    },

    corrigirCodigo: (dados) => {
        return ipcRenderer.invoke("corrigir-codigo", dados);
    }

});