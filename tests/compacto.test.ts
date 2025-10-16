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
    test('Deberia calcular el PAGO solo con la TARIFA DIARIA si es que NO SE EXCEDEN los 100km por día.', () => {
        const kilometrosPorDiaArray = [50, 80, 100]; // hago prueba con vector de km x 3 dias SI EXCEDERME DE 100km. 
        // Hago que el mock devuelva el array
        mockGestionKilometraje.getKilometrosRecorridosPordias.mockReturnValue(kilometrosPorDiaArray);

        const pagoEsperado = 30 * 3; // deberia dar 90
        expect(compacto.calcularPago(mockGestionKilometraje)).toBe(pagoEsperado);
    });

    test('Deberia calcular el PAGO con EL CARGO EXTRA si es que un día se excede el límite (100km)', () => {
    const kilometrosPorDiaArray = [100, 120, 90];
    mockGestionKilometraje.getKilometrosRecorridosPordias.mockReturnValue(kilometrosPorDiaArray);

    // D1: 30 - D2: 30 + (20 * 0.15) = 33 - D3: 30 ----> total: 93
    const pagoEsperado = 30 + 33 + 30; // 93
    expect(compacto.calcularPago(mockGestionKilometraje)).toBeCloseTo(pagoEsperado);
  });

   test('Deberia calcular de forma CORRECTA si TODOS LOS DÍAS se EXCEDE DEL LÍMITE de km diarios (100km)', () => {
    const kilometrosPorDiaArray = [150, 200];
    mockGestionKilometraje.getKilometrosRecorridosPordias.mockReturnValue(kilometrosPorDiaArray); // CUANDO S LLAME A ESTE METODO DEL MOCK va a retornar ese valor

    // D1: 30 + (50 * 0.15) = 37.5 - D2: 30 + (100 * 0.15) = 45
    const pagoEsperado = 37.5 + 45; // 82.5
    expect(compacto.calcularPago(mockGestionKilometraje)).toBeCloseTo(pagoEsperado);
  });

  test('Deberia devolver 0 si NO hay kilómetros registrados (SI EL ARRAY ESTÁ VACIO)', () => {
    mockGestionKilometraje.getKilometrosRecorridosPordias.mockReturnValue([]);

    expect(compacto.calcularPago(mockGestionKilometraje)).toBe(0);
  });

  test('Deberia LLAMAR al método getKilometrosRecorridosPordias de GestionKilometraje', () => {
    mockGestionKilometraje.getKilometrosRecorridosPordias.mockReturnValue([90]);
    compacto.calcularPago(mockGestionKilometraje);
    expect(mockGestionKilometraje.getKilometrosRecorridosPordias).toHaveBeenCalled();
  });


});
