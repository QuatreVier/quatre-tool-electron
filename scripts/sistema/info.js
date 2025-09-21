const btn = document.getElementById("systemBtn");
if (btn) {
  btn.addEventListener("click", async () => {
    const info = await window.systemAPI.getSystemInfo();
    document.getElementById("systemInfo").innerText = JSON.stringify(info, null, 2);
  });
}