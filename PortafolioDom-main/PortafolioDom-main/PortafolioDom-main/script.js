import { PortafolioService, Proyecto, SuperProyecto } from "./portafolioService.js";

const portafolioService = new PortafolioService();
const formulario = document.getElementById('formProyecto');
const projectsContainer = document.querySelector('.projects__container');

formulario.addEventListener('submit', createProyecto);

function createProyecto(event)
{
    event.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('name').value;
    const descripcion = document.getElementById('description').value;
    const tecnologias = document.getElementById('tecnologies').value;
    const colaboradores = document.getElementById('contributors').value;
    const repositorio = document.getElementById('repository').value;
    
    // Crear el nuevo proyecto
    const nuevoProyecto = new Proyecto(
        nombre,
        tecnologias,
        descripcion,
        colaboradores,
        repositorio
    );
    
    
    portafolioService.guardarProyecto(nuevoProyecto);
    
    
    renderProyectos();
    
    
    formulario.reset();
}

function renderProyectos() {
    projectsContainer.innerHTML = '';
    const proyectos = portafolioService.getProyectos();
    
    proyectos.forEach(proyecto => {
        const projectDiv = crearElementoProyecto(proyecto);
        projectsContainer.appendChild(projectDiv);
    });
}

function crearElementoProyecto(proyecto) {
    const projectDiv = document.createElement('div');
    projectDiv.id = `${proyecto.id}-project`;
    projectDiv.className = 'project';
    
    
    const tecnologiasArray = proyecto.tecnologias.split('\n').filter(t => t.trim() !== '');
    const colaboradoresArray = proyecto.coolaboradores.split('\n').filter(c => c.trim() !== '');
    
    projectDiv.innerHTML = `
        <h3>${proyecto.nombre}</h3>
        <p>${proyecto.descripcion}</p>
        <p><strong>Tecnologias</strong></p>
        <div class="projects__section">
            <ul>
                ${tecnologiasArray.map(tec => `<li>${tec.trim()}</li>`).join('')}
            </ul>
        </div>
        
        <p><strong>Coolaboradores</strong></p>
        <div class="projects__section">
            <ul>
                ${colaboradoresArray.map(col => `<li>${col.trim()}</li>`).join('')}
            </ul>
        </div>
        <div>
            Puedes encontrar el repositorio en <a href="${proyecto.repositorio}" target="_blank">${proyecto.repositorio}</a>
        </div>
    `;
    
    return projectDiv;
}


renderProyectos();