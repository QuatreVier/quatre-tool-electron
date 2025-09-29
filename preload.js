const { contextBridge } = require("electron");

// Importacion y API de Katex
const katex = require('katex');
contextBridge.exposeInMainWorld('katexAPI', {
  render: (formula) => katex.renderToString(formula, { throwOnError: false })
});