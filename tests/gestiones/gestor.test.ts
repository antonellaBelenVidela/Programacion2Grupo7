import Gestor from "../../src/gestiones/gestor"
import GestionReserva from "../../src/gestiones/gestionReserva";
import GestionKilometraje from '../../src/gestiones/gestionKilometraje';
import GestionTarifa from '../../src/gestiones/gestionTarifa';


jest.mock('../src/GestionReserva');
jest.mock('../src/kilometraje');
jest.mock('../src/tarifa');



class MockFlota {}
class MockConsumidor {}
class MockCliente {}
class MockVehiculo {}
class MockReserva {}
class MockTemporadas {}


describe('Gestor', () => {
    let gestor: Gestor;
    let mockFlota: MockFlota;
    let mockConsumidor: MockConsumidor;

   
    const MockGestionReserva = GestionReserva as jest.MockedClass<typeof GestionReserva>;
    const MockKilometraje = GestionKilometraje as jest.MockedClass<typeof GestionKilometraje>;
    const MockTarifa = GestionTarifa as jest.MockedClass<typeof GestionTarifa>;

    beforeEach(() => {
        
        mockFlota = new MockFlota();
        mockConsumidor = new MockConsumidor();

       
        jest.clearAllMocks();

       
        gestor = new Gestor(mockFlota as any, mockConsumidor as any);
    });

   
    describe('Constructor y Getters', () => {
        test('debería inicializar las dependencias correctamente en el constructor', () => {
          
            expect(MockKilometraje).toHaveBeenCalledTimes(1);
            expect(MockTarifa).toHaveBeenCalledTimes(1);
           
            expect(MockGestionReserva).toHaveBeenCalledTimes(1);
            expect(MockGestionReserva).toHaveBeenCalledWith(mockFlota, mockConsumidor);
        });

        test('GetKilometraje debería devolver la instancia de GestionarKilometraje', () => {
            expect(gestor.GetKilometraje()).toBeInstanceOf(MockKilometraje);
        });
        
        test('GetTarifa debería devolver la instancia de GestionarTarifa', () => {
            expect(gestor.GetTarifa()).toBeInstanceOf(MockTarifa);
        });

        test('GetReserva debería devolver la instancia de GestionarReserva', () => {
            expect(gestor.GetReserva()).toBeInstanceOf(MockReserva);
        });
    });

   
    describe('Reserva', () => {
        test('debería llamar a GestionarReserva.realizarReserva con los argumentos correctos', () => {
           
            const mockCliente = new MockCliente();
            const mockVehiculo = new MockVehiculo();
            const mockTemporada = new MockTemporadas();

           
            gestor.Reserva(mockCliente as any, mockVehiculo as any, mockTemporada as any);

           
            const gestionReservaInstance = MockGestionReserva.mock.instances[0];

            expect(gestionReservaInstance.realizarReserva).toHaveBeenCalledTimes(1);
            expect(gestionReservaInstance.realizarReserva).toHaveBeenCalledWith(
                mockCliente,
                mockVehiculo,
                mockTemporada
            );
        });
    });

    
    describe('Kilometraje', () => {
        test('debería llamar a GestionarKilometraje.gestionarKilometrajeExtra con los argumentos correctos', () => {
            
            const mockVehiculo = new MockVehiculo();
            const mockReserva = new MockReserva();

           
            gestor.Kilometraje(mockVehiculo as any, mockReserva as any);

            const gestionarKilometrajeInstance = MockKilometraje.mock.instances[0];
            
            expect(gestionarKilometrajeInstance.gestionarKilometrajeExtra).toHaveBeenCalledTimes(1);
            expect(gestionarKilometrajeInstance.gestionarKilometrajeExtra).toHaveBeenCalledWith(
                mockVehiculo,
                mockReserva
            );
        });
    });

    
    describe('Tarifa', () => {
        test('debería llamar a setKilometrosRecorridosPorDia y luego a gestionarTarifa en orden', () => {
           
            const mockVehiculo = new MockVehiculo();
            const mockReserva = new MockReserva();
            const mockKilometros = [100, 120, 90];

           
            gestor.Tarifa(mockVehiculo as any, mockReserva as any, mockKilometros);

            
            const gestionarKilometrajeInstance = MockKilometraje.mock.instances[0];
            const gestionarTarifaInstance = MockTarifa.mock.instances[0];
            
           
            expect(gestionarKilometrajeInstance.setKilometrosRecorridosPorDia).toHaveBeenCalledTimes(1);
            expect(gestionarKilometrajeInstance.setKilometrosRecorridosPorDia).toHaveBeenCalledWith(
                mockKilometros,
                mockVehiculo
            );
            
           
            expect(gestionarTarifaInstance.gestionarTarifa).toHaveBeenCalledTimes(1);
            expect(gestionarTarifaInstance.gestionarTarifa).toHaveBeenCalledWith(
                mockVehiculo,
                gestor.GetKilometraje(), 
                mockReserva
            );

            
          
        });
    });

   
    describe('TerminarReserva', () => {
        test('debería llamar a GestionarReserva.terminarReserva con los argumentos correctos', () => {
            
            const mockFecha = new Date('2025-11-15');
            const mockReserva = new MockReserva();

           
            gestor.TerminarReserva(mockFecha, mockReserva as any);

            
            const gestionReservaInstance = MockGestionReserva.mock.instances[0];

            expect(gestionReservaInstance.terminarReserva).toHaveBeenCalledTimes(1);
            expect(gestionReservaInstance.terminarReserva).toHaveBeenCalledWith(
                mockFecha,
                mockReserva
            );
        });
    });
});