import Disponible from "../../src/estados/disponible";
import { DeepMockProxy, mockDeep } from "jest-mock-extended";
import EnMantenimiento from "../../src/estados/EnMantenimiento";
import Mantenimiento from "../../src/mantenimiento";
import Vehiculo from "../../src/vehiculos/Vehiculo";

jest.mock("../../src/vehiculos/Vehiculo")
jest.mock("../../src/mantenimiento")
jest.mock("../../src/estados/disponible")

describe("Test Unitario de la clase EnMantenimiento", () => {
    let estado: EnMantenimiento;
    const mockVehiculo:DeepMockProxy<Vehiculo> =mockDeep<Vehiculo>();
    const mockMantenimiento:DeepMockProxy<Mantenimiento>= mockDeep<Mantenimiento>();
 
    beforeEach(() => {
        estado = new EnMantenimiento(mockVehiculo as any);
    });

    test("debe tirar une error al intentar alquilar el vehiculo",()=>{
      expect(()=>estado.alquilar()).toThrow(Error)
    })

    test("debe tirar error al llamar el metodo terminar reserva",()=>{
        expect(()=>estado.TerminarReserva()).toThrow(Error)
    })

    test("probar que el estado del vehiculo cambie al disponible cuando se termina la reserva",()=>{
       estado.TerminarMantenimiento()
       expect(mockVehiculo.cambiarEstado).toHaveBeenCalledTimes(1)
       const cambioEstado=mockVehiculo.cambiarEstado.mock.calls[0][0]
       expect(cambioEstado).toBeInstanceOf(Disponible)
       expect(Disponible).toHaveBeenCalledWith(mockVehiculo)

    })


});