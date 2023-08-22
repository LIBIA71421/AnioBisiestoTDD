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

describe("Es Bisiesto 4", () => {
  it("El 2008 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(2008)).toEqual(true);
  });
  it("El 2012 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(2012)).toEqual(true);
  });
  it("El 2016 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(2016)).toEqual(true);
  });
});

describe("No es Bisiesto 4", () => {
  it("El 2017 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(2017)).toEqual(false);
  });
  it("El 2018 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(2018)).toEqual(false);
  });
  it("El 2019 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(2019)).toEqual(false);
  });
});