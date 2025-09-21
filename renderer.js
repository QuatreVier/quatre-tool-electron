function calcular() {
  const voltaje = parseFloat(document.getElementById("voltaje").value);
  const corriente = parseFloat(document.getElementById("corriente").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(voltaje) || isNaN(corriente) || corriente === 0) {
    resultadoDiv.textContent = "Por favor ingresa valores válidos.";
    resultadoDiv.style.color = "red";
    return;
  }

  const resistencia = voltaje / corriente;
  resultadoDiv.textContent = `Resistencia: ${resistencia.toFixed(2)} Ω`;
  resultadoDiv.style.color = "blue";
}

const btn = document.getElementById("systemBtn");
if (btn) {
  btn.addEventListener("click", async () => {
    const info = await window.systemAPI.getSystemInfo();
    document.getElementById("systemInfo").innerText = JSON.stringify(info, null, 2);
  });
}

function volver() {
  window.location.href = "index.html";
}