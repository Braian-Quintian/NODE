const deapdool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getNombre()  {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log(deapdool.getNombre());

const { nombre, apellido, poder } = deapdool;

console.log(nombre,apellido,poder);