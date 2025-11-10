import Estado from "./estado";

export default class ENALQUILER implements Estado{
    public alquilar(): boolean {
        console.log("no se puede alquilar el auto ya esta reservado")
        return false
    }
}