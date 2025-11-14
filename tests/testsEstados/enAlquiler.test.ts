import EnAlquiler from "../../src/estados/enAlquiler";

describe("Test Unitario de la clase EnAlquiler", () => {
    let estado: EnAlquiler;

    beforeEach(() => {
        estado = new EnAlquiler();
    });

    test("Cuando llamo a alquilar() me debería devolver FALSE ya que el auto que quiero alquilar está ya alquilado en ese momento.", () => {
        const resultado = estado.alquilar();
        expect(resultado).toBe(false);
    });

        test("Verifico que el texto sea el que se debería imprimir.", () => {
        const texto = "¡No se puede alquilar el auto! Ya está reservado.";
        expect(texto).toBe("¡No se puede alquilar el auto! Ya está reservado.");
    });
});