import TemporadaMedia from "../../src/temporadas/temporadaMedia";
import Vehiculo from "../../src/vehiculos/vehiculo";

class VehiculoMock {
    constructor(private tarifa: number) { }
    getTarifaDiaria(): number {
        return this.tarifa;
    }
}

describe("Tests Unitarios de la clase TemporadaMedia", () => {
    let temporadaMedia: TemporadaMedia;

    beforeEach(() => {
        temporadaMedia = new TemporadaMedia();
    });

    test("Debería devolver 0 SIN IMPORTAR qué tarifa sea de la tarifa", () => {
        const vehiculoMock = new VehiculoMock(777);
        const resultado = temporadaMedia.porcentajePorTemporada(
            vehiculoMock as unknown as Vehiculo
        );
        expect(resultado).toBe(0);
    });

    test("Debería devolver 0 si la tarifa diaria es 0", () => {
        const vehiculoMock = new VehiculoMock(0);
        const resultado = temporadaMedia.porcentajePorTemporada(
            vehiculoMock as unknown as Vehiculo
        );
        expect(resultado).toBe(0);
    });

    test("Debería devolver 0 aunque la tarifa sea negativa (caso extremo)", () => {
        const vehiculoMock = new VehiculoMock(-500);
        const resultado = temporadaMedia.porcentajePorTemporada(
            vehiculoMock as unknown as Vehiculo
        );
        expect(resultado).toBe(0);
    });

    test("No debería lanzar ningún error al ejecutar el método", () => { // esta ok??
        const vehiculoMock = new VehiculoMock(800);
        expect(() =>
            temporadaMedia.porcentajePorTemporada(
                vehiculoMock as unknown as Vehiculo
            )
        ).not.toThrow();
    });
});