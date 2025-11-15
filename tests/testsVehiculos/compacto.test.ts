import Compacto from "../../src/vehiculos/compacto";

class ReservaMock {
  constructor(private porcentaje: number) {}
  porcentajePorTemporada(tipoVehiculo: any): number {
    return this.porcentaje;
  }
}
class KilometrajeMock {
  constructor(private arrayDeKms: number[]) {}
  getKilometrosRecorridosPordia(): number[] {
    return this.arrayDeKms;
  }
}

describe("Test Unitario de la clase Compacto", () => {

    test("Evalúo que la TARIFA DIARIA del Compacto debería ser 30", () => {
    const compacto = new Compacto();
    expect(compacto.getTarifaDiaria()).toBe(30);
  });

  test("Método calcularPago - Evalúo precio SIN EXCEDENTES de kms por día: cobra tarifa diaria + recargo por temporada por cada día", () => {
    const kmsPorDia = [50, 80]; // todos los que sean <= 100 SIN EXCEDENTES
    const kmMock = new KilometrajeMock(kmsPorDia);
    const reservaMock = new ReservaMock(5); 
    const compacto = new Compacto(); 

    const total = compacto.calcularPago(
      kmMock as unknown as any,
      reservaMock as unknown as any
    );
    expect(total).toBe(70);
  });

  test("Método calcularPago Evalúo - Evalúo precio CON EXCEDENTES de kms: aplico un cargo extra solo por los kilometros que exceden 100 por día.", () => {

    const kms = [90, 110, 150];
    const kmMock = new KilometrajeMock(kms);
    const reservaMock = new ReservaMock(2); 
    const compacto = new Compacto();

    const total = compacto.calcularPago(
      kmMock as unknown as any,
      reservaMock as unknown as any
    );

    expect(total).toBeCloseTo(105);
  });

  test("Verifico situacion: que haya un ARRAY VACÍO de kilómetros -> pago total 0", () => {
    const kmMock = new KilometrajeMock([]);
    const reservaMock = new ReservaMock(10);

    const compacto = new Compacto();
    const total = compacto.calcularPago(
      kmMock as unknown as any,
      reservaMock as unknown as any
    );

    expect(total).toBe(0);
  });
});