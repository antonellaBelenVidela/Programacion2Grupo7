import { version } from "moment";
import Flota from "./flota";
import Vehiculo from "./vehiculos/Vehiculo";
import ENALQUILER from "./estados/enAlquiler";

export default class estadistica {

    private flota:Flota

    constructor(flota:Flota){
        this.flota=flota
        
    }

 /**
  * 
  * @returns devuelve el vehiculo mas alquilado de la flota de autos
  */
 public autoMasAlquilado():Vehiculo{
    if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
    let MasVecesAlquilado=0
    let VehiculoMasAlquilado= undefined as unknown as Vehiculo
   let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
      if(vehiculo.GetVecesAlquilado()>MasVecesAlquilado)
         MasVecesAlquilado= vehiculo.GetVecesAlquilado()
        VehiculoMasAlquilado=vehiculo
     });
    
    return VehiculoMasAlquilado
 }
/**
 * 
 * @returns devuelve el auto menos alquilado en la flota
 */
 public autoMenosAlquilado():Vehiculo{
     if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
    let MenosVecesAlquilado=999
    let VehiculoMenosAlquilado= undefined as unknown as Vehiculo
   let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
      if(MenosVecesAlquilado>vehiculo.GetVecesAlquilado())
         MenosVecesAlquilado= vehiculo.GetVecesAlquilado()
         VehiculoMenosAlquilado=vehiculo
     });
    
    return VehiculoMenosAlquilado
 }

/**
 * 
 * @returns devuelve el auto que mas ganancias hizo
 */
 public AutoMasRentable():Vehiculo{
       if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
    let MayorGanacia=0
    let AutoMasRentable=undefined as unknown as Vehiculo
   let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
       let GanaciaDelAuto= vehiculo.GetGanaciasTotales()-vehiculo.getCostoMantenimiento()
       if(GanaciaDelAuto >MayorGanacia)
         MayorGanacia=GanaciaDelAuto
         AutoMasRentable=vehiculo
     }); 
     return AutoMasRentable
 }
/**
 * 
 * @returns devuevle el auto que menos plata hizo
 */
 public AutoMenosRentable():Vehiculo{
       if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
    let MenorGanancia=99999999
    let AutoMenosRentable=undefined as unknown as Vehiculo
   let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
       let GanaciaDelAuto= vehiculo.GetGanaciasTotales()-vehiculo.getCostoMantenimiento()
       if(MenorGanancia>GanaciaDelAuto)
         MenorGanancia=GanaciaDelAuto
         AutoMenosRentable=vehiculo
     }); 
     return AutoMenosRentable
 }
/**
 * 
 * @returns devuelve el porcentaje de autos que estan en estado EnAlquiler
 */
 public OcupacionFlota():number{
    if(!this.flota){
        throw console.error("no hay ningun vehiculo para alquilar");
        
    }
     let AutosEnAlquiler=0
     let cantidaDeAutos=0
     let estado= new ENALQUILER()
     let AutosMap:Map<string,Vehiculo>=this.flota.getFlota()
     AutosMap.forEach((vehiculo: Vehiculo, clave: string) => {
        if(vehiculo.getEstado()=== estado ){
            AutosEnAlquiler++
        }
       cantidaDeAutos++
     }); 
    
    return AutosEnAlquiler/cantidaDeAutos
 }


}