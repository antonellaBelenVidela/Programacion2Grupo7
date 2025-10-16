import Compacto from '../src/vehiculos/compacto';
import GestionKilometraje from '../src/gestiones/gestionKilometraje';


// Hago el mock de la clase GestionKilometraje para no tener que forzar al test a realizar mas de una cosa
jest.mock('../src/gestiones/gestionKilometraje', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getKilometrosRecorridosPordias: jest.fn()
        };
    });
});

describe('Test Unitario de la Clase Compacto', () => {
    let compacto: Compacto;
    let mockGestionKilometraje: jest.Mocked<GestionKilometraje>; // hago mock de la clase de GestionKilometraje ya que la necesito usar para obtener pos km por dias

    beforeEach(() => {
        // Creo nueva instancia falsa que se va a ejecutar antes de cada test
        compacto = new Compacto();
        mockGestionKilometraje = new GestionKilometraje() as jest.Mocked<GestionKilometraje>;
    });

    // Hago prueba como si no tuviera kilómetros extra
    test('Debería calcular el pago solo con la TARIFA DIARIA si es que NO SE EXCEDEN los 100km por día.', () => {
        const kilometrosPorDia = [50, 80, 100]; // hago prueba con vector de km x 3 dias SI EXCEDERME DE 100km. 
        // Hago que el mock devuelva el array
        mockGestionKilometraje.getKilometrosRecorridosPordias.mockReturnValue(kilometrosPorDia);

        const pagoEsperado = 30 * 3; // deberia dar 90
        expect(compacto.calcularPago(mockGestionKilometraje)).toBe(pagoEsperado);
    });

});
