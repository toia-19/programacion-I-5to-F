## PROGRAMACIÓN I

## Descripción
Taller de Programación I - 5to Com F

## Temas Trabajados:
- Selectivas/ Condicionales -> if/else, switch
- Repetitivas -> for, do while, while
- Arreglos -> Simples y Compuestos, Métodos
- P.O.O. -> Clases, Subclases, Objetos y Pilares
- D.O.M.

##
- Selectivas: Permiten que el programa tome decisiones. Si la condición es verdadera ejecuta una acción; si no, hace otra.
```bash
    if (this.stock > 0){
        console.log(`El stock está disponible y es igual a: ${this.stock}.`);
    } else {
        console.log('No hay stock disponible.');
    }
```

##
- Repetitivas: También conocidas como bucles, permiten ejecutar acciones una cantidad de veces indicada sin necesidad de reescribirla.

```bash
    for (let i = 0; i < frutas.length; i++) {
        console.log("Fruta número: " + i + " frutas[i]");
    }
```

##
- Arreglos: Colección ordenada de datos; almacena varios valores bajo un solo nombre de variable, a diferencia de una variable común que solo guarda un valor.

- Simples: Guarda una colección de datos individuales.
```bash
    let frutas = ["Uva", "Melón", "Mandarina"];
```

- Compuestos: Guarda una colección de datos compuestos por más de un dato.
```bash
    let estudiantes = [
        { id: 1, nombre: "Paulita" },
        { id: 2, nombre: "Juanma" }
    ];
```

##
- P.O.O.: Modelo de Programación en el que el diseño se organiza a través de clases y objetos. Abstracción, Herencia, Encapsulamiento y Polimorfismo.
```bash
class Persona {
    constructor(edad, nombre, apellido){
        this.edad = edad;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
```

##
- D.O.M.: Representación estructurada de una página web en forma de árbol; 
vinculamos HTML (visual), JavaScript (lógica) y CSS (estilos).
- JS:
```bash
    let titulo = document.createElement("h1");
    titulo.textContent = "¡Hola mundo!";
    titulo.classList.add("titulo");
```

- HTML:
```bash
    <h1>¡Hola mundo!</h1>
```

- CSS:
```bash
    .titulo {
        color: pink;
    }
```