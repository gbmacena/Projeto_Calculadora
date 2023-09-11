export default function (ev) {
    const button = ev.currentTarget
    const resultInput = document.getElementById('result')
    if (button.innerText === "Copiar") {
      button.innerText = "Copiado!"
      button.classList.add("success")
      navigator.clipboard.writeText(resultInput.value)
    } else {
      button.innerText = "Copiar"
      button.classList.remove("success")
    }
  }