import { version } from "moment";
import Flota from "./flota";
import Vehiculo from "./vehiculos/Vehiculo";

export default class estadistica {

    private flota:Flota

    constructor(flota:Flota){
        this.flota=flota
        
    }

 
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


}