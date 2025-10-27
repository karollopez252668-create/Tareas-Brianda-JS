
class Proyecto {
    constructor(nombre, id, tecnologias = [], descripcion = '', colaboradores = [], repositorio = '') {
        this.nombre = nombre;
        this.id = id;
        this.tecnologias = tecnologias;
        this.descripcion = descripcion;
        this.colaboradores = colaboradores;
        this.repositorio = repositorio;
    }
}

class SuperProyecto {
    constructor(fechaImplementacion, linkDespliegue, contactoCliente, esquemas = []) {
        this.fechaImplementacion = fechaImplementacion;
        this.linkDespliegue = linkDespliegue;
        this.contactoCliente = contactoCliente;
        this.esquemas = esquemas;
    }
}

class PortafolioService {
    constructor() {
        this.proyectos = [];
    }


    getProyectos() {
        return this.proyectos;
    }

    guardarProyecto(proyecto) {
        this.proyectos.push(proyecto);
        return proyecto;
    }

    eliminarProyecto(id) {
        this.proyectos = this.proyectos.filter(proyecto => proyecto.id !== id);
    }


    actualizarProyecto(id, proyecto) {
        const index = this.proyectos.findIndex(p => p.id === id);
        if (index !== -1) {
            this.proyectos[index] = proyecto;
        } else {
            console.warn(`No se encontro proyecto con id ${id}`);
        }
    }


    superActualizarProyecto(id, superProyecto) {
        const index = this.proyectos.findIndex(p => p.id === id);
        if (index !== -1) {
            const proyectoOriginal = this.proyectos[index];
            this.proyectos[index] = { ...proyectoOriginal, superProyecto };
        } else {
            console.warn(`No se encontro proyecto con id ${id} para super actualizacion`);
        }
    }
}



/*
const portafolio = new PortafolioService();

const proyecto1 = new Proyecto("Sitio Web", 1, ["HTML", "CSS", "JS"], "Sitio web corporativo", ["Karol", "Eliu"], "https://repo1.com");
const proyecto2 = new Proyecto("App Movil", 2, ["React Native", "JS"], "Aplicacion movil para clientes", ["Criss"], "https://repo2.com");

portafolio.guardarProyecto(proyecto1);
portafolio.guardarProyecto(proyecto2);

console.log("Lista de proyectos:", portafolio.getProyectos());

// Actualiza
const proyectoActualizado = new Proyecto("App Movil V2", 2, ["React Native", "JS"], "Actualizacion con nuevas funciones", ["Eliu", "Maria"], "https://repo2.com/v2");
portafolio.actualizarProyecto(2, proyectoActualizado);

console.log("Después de actualización:", portafolio.getProyectos());

// En eel Super actualiza el proyecto
const superProyecto = new SuperProyecto("2025-10-27", "https://deploy.com/app", "cliente@correo.com", ["diagrama UML", "esquema DB"]);
portafolio.superActualizarProyecto(2, superProyecto);

console.log("Despues de super actualizacion:", portafolio.getProyectos());

// Elimina proyecto
portafolio.eliminarProyecto(1);
console.log("Despues de eliminar proyecto 1:", portafolio.getProyectos());

kañol

*/

