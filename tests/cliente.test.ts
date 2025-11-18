
import Cliente from "../src/cliente"; 




describe("clase cliente test unitarios",()=>{
    let cliente:Cliente
  
    
   
  beforeEach(()=>{
     let cliente= new Cliente
     let idCliente = cliente.setId("")
     let nombreCliente= cliente.setNombre("")
     let apellidoCliente= cliente.setApellido("")
     let FechaInico= cliente.SetFechaInicio(new Date)
     let fechaFin = cliente.SetFechaFin(new Date)
     let email= cliente.setEmail("")
  })
 
  const clienteTest= new Cliente()

  test("se le asigna correctamente el nombre al cliente",()=>{
      
      clienteTest.setNombre("Juan")
      expect(clienteTest.getNombre()).toBe("Juan")
  })


  test("se le asigne correctamente el apellido al cliente",()=>{
    
     clienteTest.setApellido("Darian")
     expect(clienteTest.getApellido()).toBe("Darian")
  })

   test("se le asigne correctamente el email al cliente",()=>{
      clienteTest.setEmail("argag@gmail")
      expect(clienteTest.getEmail()).toBe("argag@gmail")
   })

   test("se le asigne correctamente la fecha de inico de la reserva",()=>{
      clienteTest.SetFechaInicio(new Date(2025,2))
      expect(clienteTest.getFechaInico()).toEqual(new Date(2025,2))
   })
    
  test("se le asigne bien la fecha final de la reserva",()=>{
     clienteTest.SetFechaFin(new Date(2025,2,4))
     expect(clienteTest.getFechaFinal()).toEqual(new Date(2025,2,4))
  })

  test("se le asigne correctamente el id al cliente",()=>{
     clienteTest.setId("2350")
     expect(clienteTest.getId()).toBe("2350")
  })
})