import esBisiesto from "./esBisiesto";

const first = document.querySelector("#anio");
const form = document.querySelector("#bisiesto");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anio = Number.parseInt(first.value);
  let val = esBisiesto(anio);

  let resp = "BISIESTO";
  if(val == 0){
    resp = "NO BISIESTO"
  }

  div.innerHTML = "<p>" + resp + "</p>";
});
