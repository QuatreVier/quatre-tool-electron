const { contextBridge } = require("electron");
const si = require("systeminformation");

//importacion y API de systemAPI
contextBridge.exposeInMainWorld("systemAPI", {
  getSystemInfo: async () => {
    const cpu = await si.cpu();
    const mem = await si.mem();
    const os = await si.osInfo();

    return {
      cpu: cpu.brand,
      cores: cpu.cores,
      speed: cpu.speed + " GHz",
      totalMem: (mem.total / 1e9).toFixed(2) + " GB",
      freeMem: (mem.free / 1e9).toFixed(2) + " GB",
      os: os.distro + " " + os.release
    };
  }
});

// Importacion y API de Katex
const katex = require('katex');
contextBridge.exposeInMainWorld('katexAPI', {
  render: (formula) => katex.renderToString(formula, { throwOnError: false })
});