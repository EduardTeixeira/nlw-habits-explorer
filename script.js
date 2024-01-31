const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //const today = "01/01"

  if (nlwSetup.dayExists(today)) {
    alert("Dia já incluso ❌")
    return
  }

  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

/*
const data = {
  run: ["01-01", "01-02", "01-03"],
  water: ["01-01", "01-03", "01-04"],
  food: ["01-01", "01-06", "01-08"],
  journal: ["01-01", "01-07", "01-09"],
  takePills: ["01-11", "01-16", "01-18", "01-20"],
}
*/
