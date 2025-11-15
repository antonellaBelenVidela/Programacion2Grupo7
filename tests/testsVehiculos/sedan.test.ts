import Sedan from "../../src/vehiculos/sedan";
import Kilometraje from "../../src/gestiones/gestionKilometraje";
import Vehiculo from "../../src/vehiculos/vehiculo";
import Reserva from "../../src/reserva";

class KilometrajeMock {
    private kmPorDia: number[];

    constructor(kmPorDia: number[]) {
        this.kmPorDia = kmPorDia;
    }

    getKilometrosRecorridosPordia(): number[] {
        return this.kmPorDia;
    }
}

class ReservaMock {
    private porcentaje: number;

    constructor(porcentaje: number) {
        this.porcentaje = porcentaje;
    }

    porcentajePorTemporada(vehiculo: Vehiculo): number {
        return this.porcentaje;
    }
}

describe("Tests Unitarios de la clase Sedan", () => {

    test("Verifico que la tarifa diaria del Sedan debería ser 50", () => {
    const sedan = new Sedan();
    expect(sedan.getTarifaDiaria()).toBe(50);
  });

    test("Si hay SOLO UN DÍA de alquiler (solo hay 1 valor de kms cargados en el array), verificar si funciona.", () => {
        const kilometraje = new KilometrajeMock([40]);
        const reserva = new ReservaMock(10);
        const sedan = new Sedan();

        const resultado = sedan.calcularPago(kilometraje as any, reserva as any);

        const resultadoEsperado = (40 * 0.25) + 50 + 10;

        expect(resultado).toBe(resultadoEsperado);
    });

    test("Calcula el pago correctamente con, por ej, 3 días de alquiler.", () => {

        const kilometraje = new KilometrajeMock([10, 20, 30]);
        const reserva = new ReservaMock(5);
        const sedan = new Sedan();
        const resultado = sedan.calcularPago(kilometraje as any, reserva as any);
        const resultadoEsperado = (57.5 + 60 + 62.5);

        expect(resultado).toBeCloseTo(resultadoEsperado);
    });

    test("Si NO HAY kilómetros cargados en el array (si está vacío), el pago debería ser 0.", () => {
        const kilometraje = new KilometrajeMock([]);
        const reserva = new ReservaMock(5);
        const sedan = new Sedan();

        const resultado = sedan.calcularPago(kilometraje as any, reserva as any);

        expect(resultado).toBe(0);
    });

    test("Si hay SOLO UN DÍA de alquiler (solo hay 1 valor de kms cargados en el array), verificar si funciona.", () => {
        const kilometraje = new KilometrajeMock([40]);
        const reserva = new ReservaMock(10);
        const sedan = new Sedan();

        const resultado = sedan.calcularPago(kilometraje as any, reserva as any);

        const resultadoEsperado = (40 * 0.25) + 50 + 10;

        expect(resultado).toBe(resultadoEsperado);
    });

});
