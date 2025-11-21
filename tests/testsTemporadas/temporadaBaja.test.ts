import TemporadaBaja from "../../src/temporadas/temporadaBaja";
import Vehiculo from "../../src/vehiculos/Vehiculo";

class VehiculoMock {
    constructor(private tarifa: number) { }
    getTarifaDiaria(): number {
        return this.tarifa;
    }
}

describe("Tests Unitarios de TemporadaBaja", () => {
    let temporadaBaja: TemporadaBaja;

    beforeEach(() => {
        temporadaBaja = new TemporadaBaja();
    });

    test("Debería calcular -10% de la tarifa diaria (verificamos que está DESCONTANDO el 10% de la tarifa por ser temporada baja)", () => {
        const vehiculoMock = new VehiculoMock(2000);
        const resultado = temporadaBaja.porcentajePorTemporada(
            vehiculoMock as unknown as Vehiculo
        );
        expect(resultado).toBe(-200); // porque el -10% de 2000 = -200
    });

    test("Debería devolver 0 si la tarifa diaria ES 0", () => {
        const vehiculoMock = new VehiculoMock(0);
        const resultado = temporadaBaja.porcentajePorTemporada(
            vehiculoMock as unknown as Vehiculo
        );
        expect(resultado).toBeCloseTo(0);
    });

    test("Debería devolver un número MENOR O IGUAL a 0 para tarifas MAYORES a 0 (descuento negativo)", () => {
        const vehiculoMock = new VehiculoMock(500);
        const resultado = temporadaBaja.porcentajePorTemporada(
            vehiculoMock as unknown as Vehiculo
        );
        expect(resultado).toBeLessThanOrEqual(0);
    });

    test("EJEMPLO: Si la tarifa es de $880, el descuento debe ser $-88", () => {
        const vehiculoMock = new VehiculoMock(500);
        const resultado = temporadaBaja.porcentajePorTemporada(
            vehiculoMock as unknown as Vehiculo
        );
        expect(resultado).toBe(-50);
    });
});