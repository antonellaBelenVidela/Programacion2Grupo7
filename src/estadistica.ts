import { version } from "moment";
import Flota from "./flota";
import Vehiculo from "./vehiculos/vehiculo";
import ENALQUILER from "./estados/enAlquiler";
import Suv from "./vehiculos/suv";
/**
 * esta clase se encarga de calcular las diferentes estadisticas de la flota de autos del local
 * 
 * tiene como atribuo la clase{@link Flota} para asi recorrerla y poder hacer la estadistica dentre los autos del local
 */
export default class estadistica {

    private flota:Flota

    constructor(flota:Flota){
        this.flota=flota
        
    }

 /**
  * 
  * @returns devuelve el vehiculo mas alquilado de la flota de autos
  * esta funcion se encarga de comparar las veces que fue alquilado cada vehiculo de la flota
  */
 public autoMasAlquilado():string{
    if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
    let MasVecesAlquilado=0
    let VehiculoMasAlquilado= undefined as unknown as Vehiculo
   let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
      if(vehiculo.GetVecesAlquilado()>MasVecesAlquilado){
         MasVecesAlquilado= vehiculo.GetVecesAlquilado()
         VehiculoMasAlquilado=vehiculo
         }
     });
    
    return VehiculoMasAlquilado.getPatente()
 }
/**
 * 
 * @returns devuelve el auto menos alquilado en la flota
 * esta funcion se encarga de comparar cual fue el vehiculo menos alquilado de la flota
 */
 public autoMenosAlquilado():string{
     if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
    let MenosVecesAlquilado=999
    let VehiculoMenosAlquilado= undefined as unknown as Vehiculo
   let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
      if(MenosVecesAlquilado>vehiculo.GetVecesAlquilado()){
         MenosVecesAlquilado= vehiculo.GetVecesAlquilado()
         VehiculoMenosAlquilado=vehiculo
         }
     });
    
    return VehiculoMenosAlquilado.getPatente()
 }

/**
 * 
 * @returns devuelve el auto que mas ganancias hizo
 * esta funcion va comparando las ganacias de cada vehiculo en la flota para ver cual fue el que mas ganacias hizo
 */
 public AutoMasRentable():string{
       if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
    let MayorGanacia=0
    let AutoMasRentable=undefined as unknown as Vehiculo
   let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
       let GanaciaDelAuto= vehiculo.GetGanaciasTotales()-vehiculo.getCostoMantenimiento()
       if(GanaciaDelAuto >MayorGanacia){
         MayorGanacia=GanaciaDelAuto
         AutoMasRentable=vehiculo
         }
     }); 
     return AutoMasRentable.getPatente()
 }
/**
 * 
 * @returns devuevle el auto que menos plata hizo
 * esta funcion va comparando los vehiculos de la flota para verificar cual fue el que menos ganacias tuvo
 */
 public AutoMenosRentable():string{
       if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
    let MenorGanancia=99999999
    let AutoMenosRentable=undefined as unknown as Vehiculo
   let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
       let GanaciaDelAuto= vehiculo.GetGanaciasTotales()-vehiculo.getCostoMantenimiento()
       if(MenorGanancia>GanaciaDelAuto){
         MenorGanancia=GanaciaDelAuto
         AutoMenosRentable=vehiculo
         }
     }); 
     return AutoMenosRentable.getPatente()
 }
/**
 * 
 * @returns devuelve el porcentaje de autos que estan en estado EnAlquiler
 * esta funcion recorre la flota de autos para ver cuales se encuentran enAlquiler
 */
 public OcupacionFlota():number{
    if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
     let AutosEnAlquiler=0
     let cantidaDeAutos=0
     const vehiculo:Vehiculo= new Suv
     let estado= new ENALQUILER(vehiculo)
     let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
        if(vehiculo.getEstado() === estado ){
            AutosEnAlquiler++
        }
       cantidaDeAutos++
     }); 
    
    return AutosEnAlquiler/cantidaDeAutos
 }


}