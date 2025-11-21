import EnAlquiler from "../../src/estados/enAlquiler";
import Disponible from "../../src/estados/disponible";
import { DeepMockProxy, mockDeep } from "jest-mock-extended";
import Vehiculo from "../../src/vehiculos/Vehiculo";
import Mantenimiento from "../../src/mantenimiento";

jest.mock("../../src/vehiculos/Vehiculo")
jest.mock("../../src/mantenimiento")
jest.mock("../../src/estados/disponible")

describe("Test Unitario de la clase EnAlquiler",() => {
    let alquilado:EnAlquiler
    const mockVehiculo:DeepMockProxy<Vehiculo> =mockDeep<Vehiculo>();
    const mockMantenimiento:DeepMockProxy<Mantenimiento>= mockDeep<Mantenimiento>();
    beforeEach(() => {
        alquilado = new EnAlquiler(mockVehiculo as any);
    });

    test("verifico que tire error al intentar alquilar un auto en alquiler",()=>{
         expect(()=>alquilado.alquilar()).toThrow(Error)
    })


   test("verifico que tire erro al intentar ponerlo en mantenimiento.",()=>{
     expect(()=>alquilado.mantenimiento(mockMantenimiento)).toThrow(Error)
   })

   test("verifico que tire error al sacarlo del mantenimiento",()=>{
      expect(()=>alquilado.TerminarMantenimiento()).toThrow(Error)
   })

   test("verifico que le auto cambie de estado a disponible cuando termina su reserva",()=>{
          alquilado.TerminarReserva()
          expect(mockVehiculo.cambiarEstado).toHaveBeenCalledTimes(1)
          const CambioDeEstado=mockVehiculo.cambiarEstado.mock.calls[0][0]
          expect(CambioDeEstado).toBeInstanceOf(Disponible)
          expect(Disponible).toHaveBeenCalledWith(mockVehiculo)
   })
});