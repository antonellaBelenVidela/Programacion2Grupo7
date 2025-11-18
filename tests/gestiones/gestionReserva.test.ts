import { DeepMockProxy, mock, mockDeep } from "jest-mock-extended";
import GestionReserva from "../../src/gestiones/gestionReserva"
import Flota from "../../src/flota";
import Consumidor from "../../src/consumidor";
import Cliente from "../../src/cliente";
import Vehiculo from "../../src/vehiculos/vehiculo";
import Temporadas from "../../src/temporadas/temporadas";
import Estado from "../../src/estados/estado";


let gestionReservaTest: GestionReserva;
const FlotaMock: DeepMockProxy<Flota> = mockDeep<Flota>();
const ConsumidorMock: DeepMockProxy<Consumidor> = mockDeep<Consumidor>();
const VehiculoMock: DeepMockProxy<Vehiculo> = mockDeep<Vehiculo>();
const ClienteMock: DeepMockProxy<Cliente> = mockDeep<Cliente>();
const TemporadaMock: DeepMockProxy<Temporadas> = mockDeep<Temporadas>();


const EstadoMock: DeepMockProxy<Estado> = mockDeep<Estado>();


class MockReserva {
   
    constructor(fechaInicio: Date, fechaFin: Date, cliente: Cliente) {} 
    setTemporada = jest.fn();
    setVehiculo = jest.fn();
}


jest.mock('../../src/reserva', () => ({
    Reserva: MockReserva,
}));


describe('GestionReserva', () => {
    const fechaInicio = new Date('2025-01-10');
    const fechaFin = new Date('2025-01-15');
    const patente = 'ABC123';
    const nombreCliente = 'Juan';

    beforeEach(() => {
        
        gestionReservaTest = new GestionReserva(FlotaMock, ConsumidorMock);

        
        jest.clearAllMocks();

       
        const clientesMapMock = new Map([[nombreCliente, ClienteMock]]);
        const flotaMapMock = new Map([[patente, VehiculoMock]]);

        ConsumidorMock.obtenerMapClientes.mockReturnValue(clientesMapMock as any);
        FlotaMock.getFlota.mockReturnValue(flotaMapMock as any);

        
        ClienteMock.getNombre.mockReturnValue(nombreCliente);
        ClienteMock.getFechaInico.mockReturnValue(fechaInicio);
        ClienteMock.getFechaFinal.mockReturnValue(fechaFin);
        
        
        VehiculoMock.getPatente.mockReturnValue(patente);
        VehiculoMock.getEstado.mockReturnValue(EstadoMock); 
    });

    
    describe('realizarReserva', () => {
        test('debería ejecutar todos los pasos de la reserva correctamente', () => {
            
            gestionReservaTest.realizarReserva(ClienteMock, VehiculoMock, TemporadaMock);

           
            expect(ConsumidorMock.obtenerMapClientes).toHaveBeenCalledTimes(1);
            expect(FlotaMock.getFlota).toHaveBeenCalledTimes(1);
           
            expect(VehiculoMock.getEstado).toHaveBeenCalledTimes(1);
            expect(EstadoMock.alquilar).toHaveBeenCalledTimes(1);
            
           
            expect(MockReserva).toHaveBeenCalledWith(fechaInicio, fechaFin, ClienteMock);

            
            expect(MockReserva.prototype.setTemporada).toHaveBeenCalledWith(TemporadaMock);
            expect(MockReserva.prototype.setVehiculo).toHaveBeenCalledWith(VehiculoMock);
            
           
            expect(ClienteMock.setReserva).toHaveBeenCalledTimes(2); 
            expect(VehiculoMock.agregarReserva).toHaveBeenCalledTimes(1);
            expect(VehiculoMock.setVecesAlquilado).toHaveBeenCalledWith(1);
        });

    });
});