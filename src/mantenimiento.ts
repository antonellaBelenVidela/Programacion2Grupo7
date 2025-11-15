import Disponible from "./estados/disponible"
import EnMantenimiento from "./estados/enMantenimiento"
import Vehiculo from "./vehiculos/vehiculo"

export default class Mantenimiento {
  private tipoMantenimiento: string
  private costoMantenimiento: number
  private fechaInicioMant: Date
  private FechaFinMant: Date
  private Vehiculo: Vehiculo

  constructor() {
    this.tipoMantenimiento = ""
    this.costoMantenimiento = 0
    this.FechaFinMant = undefined as unknown as Date
    this.fechaInicioMant = undefined as unknown as Date
    this.Vehiculo = undefined as unknown as Vehiculo
  }


  public setTipoMantenimiento(Mantenimiento: string) {
    this.tipoMantenimiento = Mantenimiento
  }

  public getTipoMantenimiento(): string {
    return this.tipoMantenimiento
  }

  public setCostoMantenimiento(costo: number) {
    this.costoMantenimiento = costo
  }

  public getCosto(): number {
    return this.costoMantenimiento
  }


  public setFechaInico(fecha: Date) {
    this.fechaInicioMant = fecha
  }

  public getFechaInicio(): Date {
    return this.fechaInicioMant
  }

  public setFechFin(fecha: Date) {
    this.FechaFinMant = fecha
  }

  public getFechaFin(): Date {
    return this.FechaFinMant
  }

  public setVehiculo(vehiculo: Vehiculo) {
    this.Vehiculo = vehiculo
  }

  public getVehiculo(): Vehiculo {
    return this.Vehiculo
  }
  /**
   * 
   * @param vehiculo 
   * @returns verifica si el auto debe pasar a mantenimiento
   */
  public pasarMantenimiento(vehiculo: Vehiculo): boolean {
    return vehiculo.getKmSinMantenimiento() > 12000 || vehiculo.geTMesesSinMantenimiento() > 12 || vehiculo.getVecesAlquilado() > 5

  }
  /**
   * 
   * @param vehiculo 
   * @param fechaInicio 
   * @param fechaFin 
   * se encarga de pasar el auto en mantenimiento y cuando va a inicar ese mantenimiento
   */
  public mantenimiento(vehiculo: Vehiculo, fechaInicio: Date, fechaFin: Date) {
    if (this.pasarMantenimiento(vehiculo) === true) {
      let estado = new EnMantenimiento
      vehiculo.cambiarEstado(estado)
      this.setVehiculo(vehiculo)
      this.setFechaInico(fechaInicio)
      this.setFechFin(fechaFin)
    }
  }
  /**
   * 
   * @param fecha 
   * saca el auto del estado de mantenimiento y lo devuelve a un estado disponible si es que ya llegó la fecha fin de su mantenimiento
   */
  public terminarMantimiento(fecha: Date): void {
    //Excepicion
    if (fecha >= this.FechaFinMant) {
      let estado = new Disponible()
      this.Vehiculo.cambiarEstado(estado)
      this.Vehiculo.setCostoMantenimiento(this.costoMantenimiento)
      this.Vehiculo.setKmSinMantenimiento(0)
      this.Vehiculo.setMesesSinMantenimiento(0)
    }
  }
}