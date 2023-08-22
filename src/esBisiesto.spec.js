import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
  it("El 5 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
  });

  it("El 400 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(400)).toEqual(true);
  });
  it("El 2000 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });
});
