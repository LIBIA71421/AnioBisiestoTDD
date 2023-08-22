import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
  it("El 5 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
  });
});

describe("Es Bisiesto 400", () => {
  it("El 400 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(400)).toEqual(true);
  });
  it("El 2000 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });
});

describe("NO es Bisiesto 100", () => {
  it("El 100 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(100)).toEqual(false);
  });
  it("El 1700 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(1700)).toEqual(false);
  });
  it("El 1800 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(1800)).toEqual(false);
  });
  it("El 1900 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(1900)).toEqual(false); 
  });
  it("El 2100 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(2100)).toEqual(false);
  }); 
});