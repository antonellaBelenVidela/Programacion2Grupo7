import TemporadaAlta from "../../src/temporadas/TemporadaAlta";
import Vehiculo from "../../src/vehiculos/vehiculo";

class VehiculoMock {
  constructor(private tarifa: number) {}
  getTarifaDiaria(): number { return this.tarifa; }
}

describe("Tests Unitarios de TemporadaAlta", () => {
  let temporadaAlta: TemporadaAlta;

  beforeEach(() => {
    temporadaAlta = new TemporadaAlta();
  });

  test("Debería calcular el 10% de la tarifa diaria", () => {
    const vehiculoMock = new VehiculoMock(1000);
    const resultado = temporadaAlta.porcentajePorTemporada(
      vehiculoMock as unknown as Vehiculo
    );
    expect(resultado).toBe(100);
  });

  test("Debería devolver 0 si la tarifa diaria es 0", () => {
    const vehiculoMock = new VehiculoMock(0);
    const resultado = temporadaAlta.porcentajePorTemporada(
      vehiculoMock as unknown as Vehiculo
    );
    expect(resultado).toBe(0);
  });

  test("Debería devolver un número positivo si tarifa > 0", () => {
    const vehiculoMock = new VehiculoMock(500);
    const resultado = temporadaAlta.porcentajePorTemporada(
      vehiculoMock as unknown as Vehiculo
    );
    expect(resultado).toBeGreaterThan(0);
  });
})

