const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-03"],
  water: ["01-01", "01-03", "01-04"],
  food: ["01-01", "01-06", "01-08"],
  journal: ["01-01", "01-07", "01-09"],
  takePills: ["01-11", "01-16", "01-18", "01-20"],
}

nlwSetup.setData(data)
nlwSetup.load()
