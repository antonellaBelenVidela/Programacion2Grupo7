import GestionKilometraje from "../../src/gestiones/gestionKilometraje";
import Vehiculo from "../../src/vehiculos/Vehiculo"; 
import Reserva from "../../src/reserva"; 





const mockVehiculoFactory = (returnValue: number = 0) => {
    return {
       
        setKmSinMantenimiento: jest.fn(),
        calcularPago: jest.fn().mockReturnValue(returnValue),
       
    } as unknown as Vehiculo; 
};


const mockReserva: Reserva = {} as Reserva;


describe("GestionKilometraje Unit Tests", () => {
    let gestionKilometrajeTest: GestionKilometraje;
    let mockVehiculo: Vehiculo;

   
    beforeEach(() => {
        gestionKilometrajeTest = new GestionKilometraje();
        
        mockVehiculo = mockVehiculoFactory(50); 
    });

    test('El constructor debe inicializar kilometrosRecorridosPorDias como un array vacío', () => {
        expect(gestionKilometrajeTest.getKilometrosRecorridosPordia()).toEqual([]);
    });

    describe('setKilometrosRecorridosPorDia', () => {
        const kilometros = [120, 85, 200, 50];

        beforeEach(() => {
            gestionKilometrajeTest.setKilometrosRecorridosPorDia(kilometros, mockVehiculo);
        });

        test('Debe registrar todos los kilómetros en el array interno', () => {
            expect(gestionKilometrajeTest.getKilometrosRecorridosPordia()).toEqual(kilometros);
        });

        test('Debe llamar a vehiculo.setKmSinMantenimiento una vez por cada kilómetro', () => {
            
            expect(mockVehiculo.setKmSinMantenimiento).toHaveBeenCalledTimes(kilometros.length);
        });

        test('Debe llamar a vehiculo.setKmSinMantenimiento con cada valor individual de kilómetro', () => {
            
            expect(mockVehiculo.setKmSinMantenimiento).toHaveBeenCalledWith(120);
            expect(mockVehiculo.setKmSinMantenimiento).toHaveBeenCalledWith(85);
            expect(mockVehiculo.setKmSinMantenimiento).toHaveBeenCalledWith(200);
            expect(mockVehiculo.setKmSinMantenimiento).toHaveBeenCalledWith(50);
        });
    });

    describe('getKilometrosRecorridosPordia', () => {
        test('Debe devolver el array de kilómetros vacío si no se ha llamado a setKilometrosRecorridosPorDia', () => {
            expect(gestionKilometrajeTest.getKilometrosRecorridosPordia()).toEqual([]);
        });

        test('Debe devolver los kilómetros después de ser establecidos', () => {
            const kilometros = [400];
            gestionKilometrajeTest.setKilometrosRecorridosPorDia(kilometros, mockVehiculo);
            expect(gestionKilometrajeTest.getKilometrosRecorridosPordia()).toEqual(kilometros);
        });
    });

    describe('gestionarKilometrajeExtra', () => {
        test('Debe delegar el cálculo del pago a vehiculo.calcularPago y devolver su resultado', () => {
            const pagoEsperado = 75.25;
           
            (mockVehiculo.calcularPago as jest.Mock).mockReturnValue(pagoEsperado);

            const resultado = gestionKilometrajeTest.gestionarKilometrajeExtra(mockVehiculo, mockReserva);

           
            expect(mockVehiculo.calcularPago).toHaveBeenCalledTimes(1);

           
            expect(mockVehiculo.calcularPago).toHaveBeenCalledWith(gestionKilometrajeTest, mockReserva);

           
            expect(resultado).toBe(pagoEsperado);
        });
    });
});