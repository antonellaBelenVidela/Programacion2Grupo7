// tests/compacto.test.ts
import Compacto from "../../src/vehiculos/Compacto"; // ajustá la ruta si hace falta

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

describe("Test Unitario clase Compacto - Evalúo método calcularPago", () => {
  test("Evalúo precio SIN EXCEDENTES: cobra tarifa diaria + recargo por temporada por cada día", () => {
    const kmsPorDia = [50, 80]; // todos los que sean <= 100 SIN EXCEDENTES
    const kmMock = new KilometrajeMock(kmsPorDia);
    const reservaMock = new ReservaMock(5); // recargo por temporada = 5 por día

    const compacto = new Compacto(); 

    // pago por día = tarifa (30) + recargo(5) + extra(0)
    // total = (30+5) + (30+5) = 35 + 35 = 70
    const total = compacto.calcularPago(
      kmMock as unknown as any,
      reservaMock as unknown as any
    );
    expect(total).toBe(70);
  });

  test(" Evalúo precio CON EXCEDENTES: aplico un cargo extra solo por los kilometros que exceden 100 por día.", () => {
    // ejemplo: [90, 110, 150]
    // día1: 90 -> extra 0 -> 30 + 2 (supongamos recargo 2) = 32
    // día2: 110 -> extra 10 * 0.15 = 1.5 -> 30 + 2 + 1.5 = 33.5
    // día3: 150 -> extra 50 * 0.15 = 7.5 -> 30 + 2 + 7.5 = 39.5
    // total = 32 + 33.5 + 39.5 = 105
    const kms = [90, 110, 150];
    const kmMock = new KilometrajeMock(kms);
    const reservaMock = new ReservaMock(2); // - por temporada = 2 por día

    const compacto = new Compacto();

    const total = compacto.calcularPago(
      kmMock as unknown as any,
      reservaMock as unknown as any
    );

    // TIENE decimales Por eso del toBe CloseTo
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

  test("Llama a getKilometrosRecorridosPordia() del objeto Kilometraje y a porcentajePorTemporada() de Reserva", () => {
    // spy sobre los métodos para asegurar interacción
    const kms = [120];
    const kmMock = new KilometrajeMock(kms);
    const reservaMock = new ReservaMock(7);

    // espías: transformamos funciones reales a jest.fn para espiar llamadas  ??
    const kmSpyObj = {
      getKilometrosRecorridosPordia: jest.fn(() => kms),
    };
    const reservaSpyObj = {
      porcentajePorTemporada: jest.fn(() => 7),
    };

    const compacto = new Compacto();

    compacto.calcularPago(
      kmSpyObj as unknown as any,
      reservaSpyObj as unknown as any
    );

    expect(kmSpyObj.getKilometrosRecorridosPordia).toHaveBeenCalledTimes(1);
    // porcentajePorTemporada debe llamarse por cada día (en este caso 1 vez)
    expect(reservaSpyObj.porcentajePorTemporada).toHaveBeenCalledTimes(1);
    // además podemos comprobar que se llamó con la instancia del vehículo
    expect(reservaSpyObj.porcentajePorTemporada).toHaveBeenCalledWith(compacto);
  });

  test("Cálculo completo con ejemplo conocido (comprobación manual de la suma)", () => {
    // Caso con mezcla: tarifa diaria 30, recargo 5 por día, kms [100, 110]
    // día1: 100 -> extra 0 -> 30+5 = 35
    // día2: 110 -> extra 10*0.15 = 1.5 -> 30+5+1.5 = 36.5
    // total = 71.5
    const kms = [100, 110];
    const kmMock = new KilometrajeMock(kms);
    const reservaMock = new ReservaMock(5);

    const compacto = new Compacto();
    const total = compacto.calcularPago(
      kmMock as unknown as any,
      reservaMock as unknown as any
    );

    expect(total).toBeCloseTo(71.5);
  });
});