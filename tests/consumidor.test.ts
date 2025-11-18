import { DeepMockProxy, mock, mockDeep } from "jest-mock-extended";
import Cliente from "../src/cliente";
import consumidor from "../src/consumidor"
import Consumidor from "../src/consumidor";


jest.mock("../src/cliente")

describe('Clase Consumidor', () => {
    let clientes: consumidor;
    const mockCliente1:DeepMockProxy<Cliente>=mockDeep();
    const mockCliente2:DeepMockProxy<Cliente>=mockDeep()


    
    beforeEach(() => {
        clientes = new Consumidor();
       jest.clearAllMocks()
    });

   
  
        test('Debe agregar un cliente al Map usando su ID como clave', () => {
              const clienteId = "2122";
         
              mockCliente1.getId.mockReturnValue(clienteId); 
    
             clientes.agregarCliente(clienteId, mockCliente1);
      
             const Mapa = clientes.obtenerMapClientes();
             expect(Mapa.size).toEqual(1);
    
             expect(Mapa.get(clienteId)).toBe(mockCliente1); 
        });

        test("probar que busque al cliente que se le pidio",()=>{
               const clienteId = "2122";
                mockCliente1.getId.mockReturnValue(clienteId);
              clientes.agregarCliente(clienteId, mockCliente1);
               expect(clientes.buscarCliente(clienteId)).toBe(true);
              expect(clientes.buscarCliente("9999")).toBe(false);

        })

        test("probar que devuelva el cliente buscado con el metodo obtener cliente",()=>{
                  const id1 = "2122";
                  const id2 = "4354";
                 mockCliente1.getId.mockReturnValue(id1);
                 mockCliente2.getId.mockReturnValue(id2);
                 clientes.agregarCliente(id1, mockCliente1);
                 clientes.agregarCliente(id2, mockCliente2);
                 expect(clientes.obtenerCliente(id2)).toBe(mockCliente2);
                 expect(clientes.obtenerCliente(id1)).toBe(mockCliente1);
                  expect(clientes.obtenerCliente("1000")).toBeFalsy();
           })
        
        test("probar que devuelva todo el mapa de clientes",()=>{
             const id1 = "2122";
             const id2 = "4354";
             mockCliente1.getId.mockReturnValue(id1);
             mockCliente2.getId.mockReturnValue(id2);
    
             clientes.agregarCliente(id1, mockCliente1);
             clientes.agregarCliente(id2, mockCliente2);

              expect(clientes.obtenerMapClientes().size).toEqual(2)
        })
    
});