window.addEventListener('DOMContentLoaded', () => {
  const formulaElement = document.getElementById("formula");
  formulaElement.innerHTML = window.katexAPI.render("V = I \\times R");

  const btn = document.getElementById("btnCalcular");
  const voltInput = document.getElementById("voltaje");
  const corrInput = document.getElementById("corriente");
  const resInput = document.getElementById("resistencia");
  const resultado = document.getElementById("resultado");

  btn.addEventListener('click', () => {
    const V = parseFloat(voltInput.value);
    const I = parseFloat(corrInput.value);
    const R = parseFloat(resInput.value);
    let formula = "";
    let resText = "";

    if (V && I) {
      const volt = I * R;
      formula = `V = I \\times R = ${I} \\times ${R} = ${(I*R).toFixed(2)} V`;
      resText = window.katexAPI.render(formula);
    } else if (V && R) {
      const corriente = V / R;
      formula = `I = V / R = ${V} / ${R} = ${(V/R).toFixed(2)} A`;
      resText = window.katexAPI.render(formula);
    } else if (I && R) {
      const voltaje = I * R;
      formula = `V = I \\times R = ${I} \\times ${R} = ${voltaje.toFixed(2)} V`;
      resText = window.katexAPI.render(formula);
    } else {
      resText = "Ingresa al menos dos valores para calcular el tercero";
    }

    resultado.innerHTML = resText;
  });
});
