class Estudiante{
    constructor(cedula, nota_final){
        this.cedula = cedula,
        this.nota_final = nota_final
    }
}

class Salon{
    constructor(){
        this.contador_estudiantes = 0,
        this.contador_aprobados = 0,
        this.estudiante_mayor_nota = 0,
        this.mayor_nota = 0
    }
    procesarEstudiante(e){
        this.contador_estudiantes++
        if(e.nota_final >= 48){
            this.contador_aprobados++
        }
        if(e.nota_final > this.mayor_nota){
            this.mayor_nota = e.nota_final
            this.estudiante_mayor_nota = e.cedula
        }
    }
    porcentajeAprobados(){
        return ((this.contador_aprobados/this.contador_estudiantes) * 100).toFixed(2) + "%"
    }
}

let estudiante1 = new Estudiante(888, 60)
let estudiante2 = new Estudiante(777, 50)
let estudiante3 = new Estudiante(999, 40)
let estudiante4 = new Estudiante(333, 90)
let estudiante5 = new Estudiante(111, 30)
let estudiante6 = new Estudiante(666, 90)
let estudiante7 = new Estudiante(444, 48)
let estudiante8 = new Estudiante(222, 60)

let salon = new Salon()

salon.procesarEstudiante(estudiante1)
salon.procesarEstudiante(estudiante2)
salon.procesarEstudiante(estudiante3)
salon.procesarEstudiante(estudiante4)
salon.procesarEstudiante(estudiante5)
salon.procesarEstudiante(estudiante6)
salon.procesarEstudiante(estudiante7)
salon.procesarEstudiante(estudiante8)


let salida = document.getElementById("salida")

salida.innerHTML = `

Porcentaje de aprobados: ${salon.porcentajeAprobados()} <br>
Cedula de uno de los mejores estudiantes:  ${salon.estudiante_mayor_nota}

`