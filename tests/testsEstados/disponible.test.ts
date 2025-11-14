import Disponible from "../../src/estados/disponible";

describe("Test Unitario de la clase Disponible", () => {
    let estado: Disponible;

    beforeEach(() => {
        estado = new Disponible();
    });

    test("Cuando llamo a alquilar() me debería devolver TRUE ya que está disponible para ser alquilado.", () => {
        const resultado = estado.alquilar();
        expect(resultado).toBe(true);
    });

        test("Verifico que el texto sea el que se debería imprimir.", () => {
        const texto = "¡El auto se encuentra disponible! Se puede realizar la reserva.";
        expect(texto).toBe("¡El auto se encuentra disponible! Se puede realizar la reserva.");
    });
});
