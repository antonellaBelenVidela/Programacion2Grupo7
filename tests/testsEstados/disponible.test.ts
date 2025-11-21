import Disponible from "../../src/estados/disponible";
import EnAlquiler from "../../src/estados/enAlquiler";
import EnMantenimiento from "../../src/estados/EnMantenimiento";
import Vehiculo from "../../src/vehiculos/Vehiculo";
import Mantenimiento from "../../src/mantenimiento";
import {DeepMockProxy,mockDeep} from "jest-mock-extended"

  jest.mock("../../src/estados/enAlquiler")
  jest.mock("../../src/estados/EnMantenimiento")
  jest.mock("../../src/vehiculos/Vehiculo")
  jest.mock("../../src/mantenimiento")
 

describe("Test Unitario de la clase Disponible", () => {
  let disponible:Disponible;
  const mockVehiculo:DeepMockProxy<Vehiculo> =mockDeep<Vehiculo>();
  const mockMantenimiento:DeepMockProxy<Mantenimiento>= mockDeep<Mantenimiento>();
  beforeEach(()=>{
     jest.clearAllMocks()
     disponible= new Disponible(mockVehiculo as any)
  })
 
 test("debe cambiar de estado a enAlquiler al usar el metodo alquilar",()=>{
     disponible.alquilar()
     expect(mockVehiculo.cambiarEstado).toHaveBeenCalledTimes(1)
     const nuevoEstado=mockVehiculo.cambiarEstado.mock.calls[0][0]
     expect(nuevoEstado).toBeInstanceOf(EnAlquiler)
     expect(EnAlquiler).toHaveBeenCalledWith(mockVehiculo)


 })
 
 test("debe tirar error al utilizar el metodo terminar reserva",()=>{

    
   expect(()=> disponible.TerminarReserva()).toThrow(Error)

 })

 test("debe de tirar erroa al utilizar el metodo terminar mantenimiento",()=>{
     expect(()=> disponible.TerminarMantenimiento()).toThrow(Error)
 })


 test("debe cambiar de estado a enMantenimiento",()=>{
    mockVehiculo.geTMesesSinMantenimiento.mockReturnValue(12)
    disponible.mantenimiento(mockMantenimiento);
    expect(mockVehiculo.cambiarEstado).toHaveBeenCalledTimes(1)
    const cambioEstado= mockVehiculo.cambiarEstado.mock.calls[0][0]
    expect(cambioEstado).toBeInstanceOf(EnMantenimiento)
    expect(mockMantenimiento.SetVehiculo).toHaveBeenCalledWith(mockVehiculo)
 })

 });
