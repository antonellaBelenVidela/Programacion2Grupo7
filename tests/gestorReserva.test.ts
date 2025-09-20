import gestorReservas  from '../src/gestiones/gestionReserva'
import Clientela from '../src/clientela';
import Flota from '../src/flota';
import Vehiculo from '../src/vehiculos/Vehiculo';
import Cliente from '../src/cliente';
import Reserva  from '../src/reserva';
import GestionReserva from '../src/gestiones/gestionReserva';

describe('GestorDeReservas', () => {

    // Test 1: Reserva exitosa
    test('debería crear una reserva si el vehiculo esta disponible', () => {
        // --- Inicialización del entorno ---
        const vehiculo = new Vehiculo("12345", "disponible", 200, "disponible", 100, 1000);
        const cliente = new Cliente("1", "Juan", "Perez", "juan@ejemplo.com");
        const flota = new Flota();
        flota.agregarVehiculo(vehiculo.getPatente(), vehiculo);
        const clientela = new Clientela();
        clientela.agregarCliente(cliente.getId(), cliente);
        const gestorReservas = new GestionReserva(flota, clientela);
        // ---------------------------------
        
        const fechaInicio = new Date('2025-10-20');
        const fechaFin = new Date('2025-10-25');
        const params = {
            patente: vehiculo.getPatente(),
            idCliente: cliente.getId(),
            fechaInicio,
            fechaFin
        };
        const resultado = gestorReservas.Gestionar(params.patente, params.idCliente, params.fechaInicio, params.fechaFin);
        expect(resultado).toBe(true);
    });

    // Test 2: Reserva fallida por falta de disponibilidad
    test('no debería crear una reserva si ya hay una para las mismas fechas', () => {
        // --- Inicialización del entorno ---
        const vehiculo = new Vehiculo("54321", "disponible", 300, "disponible", 500, 1650);
        const cliente = new Cliente("6", "Toto", "Peroti", "Peroti@ejemplo.com");
        const flota = new Flota();
        const clientes = new Clientela();
        const gestorReservas = new GestionReserva(flota, clientes);
        // ---------------------------------
        
        // Primero, creamos una reserva para que el vehículo no esté disponible
        const reservaExistente = new Date('2025-10-20');
        const finExistente = new Date('2025-10-25');
        const reservaDePrueba = new Reserva(reservaExistente, finExistente, cliente);
        vehiculo.agregarReserva(reservaDePrueba);

        // Ahora, intentamos crear una nueva reserva que se superpone
        const fechaInicio = new Date('2025-10-22');
        const fechaFin = new Date('2025-10-27');
        const params = {
            patente: vehiculo.getPatente(),
            idCliente: cliente.getId(),
            fechaInicio,
            fechaFin
        };
        const resultado = gestorReservas.// Llamada correcta (4 argumentos separados)
            Gestionar(params.patente, params.idCliente, params.fechaInicio, params.fechaFin);;
        expect(resultado).toBe(false);
    });
    
    // ... Puedes continuar con los otros tests siguiendo este mismo patrón.
    // Solo debes copiar y pegar el bloque de inicialización en cada uno.
});