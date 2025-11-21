import GestionTarifa from "../../src/gestiones/gestionTarifa";
import Vehiculo from "../../src/vehiculos/Vehiculo";
import Kilometraje from "../../src/gestiones/gestionKilometraje";
import Reserva from "../../src/reserva";


const mockVehiculoFactory = (pagoSimulado: number) => {
    return {
        
        calcularPago: jest.fn().mockReturnValue(pagoSimulado),
        SetGanaciasTotales: jest.fn(),

        
    } as unknown as Vehiculo;
};


const mockKilometraje: Kilometraje = {} as Kilometraje;


const mockReserva: Reserva = {} as Reserva;



describe("GestionTarifa Unit Tests", () => {
    let gestionTarifaTest: GestionTarifa;
    const tarifaCalculadaSimulada = 150.75;
    
    beforeEach(() => {
        gestionTarifaTest = new GestionTarifa();
    });

    describe('gestionarTarifa', () => {
        let mockVehiculo: Vehiculo;
        
       
        beforeEach(() => {
            
            mockVehiculo = mockVehiculoFactory(tarifaCalculadaSimulada);

            
            gestionTarifaTest.gestionarTarifa(mockVehiculo, mockKilometraje, mockReserva);
        });

        test('Debe delegar el cálculo de la tarifa llamando a vehiculo.calcularPago una vez', () => {
          
            expect(mockVehiculo.calcularPago).toHaveBeenCalledTimes(1);
        });

        test('Debe llamar a vehiculo.calcularPago con las dependencias correctas', () => {
          
            expect(mockVehiculo.calcularPago).toHaveBeenCalledWith(mockKilometraje, mockReserva);
        });

        test('Debe registrar las ganancias llamando a vehiculo.SetGanaciasTotales con el resultado del cálculo', () => {
            
            expect(mockVehiculo.SetGanaciasTotales).toHaveBeenCalledTimes(1);

           
            expect(mockVehiculo.SetGanaciasTotales).toHaveBeenCalledWith(tarifaCalculadaSimulada);
        });

        test('No debería devolver ningún valor (void)', () => {
            
            const resultado = gestionTarifaTest.gestionarTarifa(mockVehiculo, mockKilometraje, mockReserva);
            expect(resultado).toBeUndefined();
        });
    });
});