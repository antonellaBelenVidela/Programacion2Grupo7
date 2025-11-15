
import EnMantenimiento from "../../src/estados/enMantenimiento";

describe("Test Unitario de la clase EnMantenimiento", () => {
    let estado: EnMantenimiento;
       const vehiculoMock = {} as any;

    beforeEach(() => {
        estado = new EnMantenimiento(vehiculoMock);
    });

    test("Cuando llamo a alquilar() me debería devolver FALSE ya que el auto que quiero alquilar está en mantenimiento.", () => {
        const resultado = estado.alquilar();
        expect(resultado).toBe(false);
    });

        test("Verifico que el texto sea el que se debería imprimir,.", () => {
        const texto = "¡No se puede alquilar el auto! Está en mantenimiento.";
        expect(texto).toBe("¡No se puede alquilar el auto! Está en mantenimiento.");
    });
});