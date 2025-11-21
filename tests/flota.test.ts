import vehiculo from "../src/vehiculos/Vehiculo";
import Estadistica from "../src/estadistica"
import Flota from "../src/flota";
import { DeepMockProxy, mock, mockDeep } from "jest-mock-extended";

jest.mock("../src/vehiculos/Vehiculo")


describe("pruebas unitarias de la clase flota",()=>{
    let FlotaDeAutos:Flota
    const mockVehiculo1:DeepMockProxy<vehiculo>=mockDeep()
    const MockVehiculo2:DeepMockProxy<vehiculo>=mockDeep()

  beforeEach(()=>{
     let autos= new Map<string,vehiculo>
      FlotaDeAutos= new Flota(autos)
  })

   test("verificar que se le agregue un vehiculo a la flota",()=>{
       const patente="23eb"
       mockVehiculo1.getPatente.mockReturnValue(patente)
       FlotaDeAutos.agregarVehiculo(patente,mockVehiculo1)
       const mapa=FlotaDeAutos.getFlota()
       expect(mapa.size).toEqual(1)
   })

  test("verificar que busque el vehiculo indica dentro de la flota",()=>{
      const patente="432e"
      mockVehiculo1.getPatente.mockReturnValue(patente)
      FlotaDeAutos.agregarVehiculo(patente,mockVehiculo1)

      expect(FlotaDeAutos.buscarVehiculo(patente)).toBe(true)

  })
  
  test("verificar que devuelva el vehiculo pedido",()=>{
     const patente="523C"
     mockVehiculo1.getPatente.mockReturnValue(patente)
     FlotaDeAutos.agregarVehiculo(patente,mockVehiculo1)

     expect(FlotaDeAutos.obtenerVehiculo(patente)).toBe(mockVehiculo1)
  })

   test("verifcar que devuelva el mapa completo",()=>{
      const patente1="535E"
      const patente2="A334"

      mockVehiculo1.getPatente.mockReturnValue(patente1)
      MockVehiculo2.getPatente.mockReturnValue(patente2)
      FlotaDeAutos.agregarVehiculo(patente1,mockVehiculo1)
      FlotaDeAutos.agregarVehiculo(patente2,MockVehiculo2)
      const mapaAutos=FlotaDeAutos.getFlota()
      expect(mapaAutos.size).toEqual(2)
   })

  
})