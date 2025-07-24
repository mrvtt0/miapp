const formulario = document.querySelector('.from-create');
let cont = 1;
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector('#descripcion').value;
    const contenedor = document.querySelector('.publicaciones');
    contenedor.innerHTML += `
        <div class="publicacion">
            <p>id:${cont}</p>
            <p>${descripcion}</p>
            <button onclick="editar(this)">editar</button>
            <button onclick="eliminar(this)">Eliminar</button>
        </div>`;
    cont++;
});

function editar(e){
    const parrafo =e.parentElement.querySelector('p:nth-child(2)');
    if (e.textContent === 'editar') {
        parrafo.contentEditable = true;
        e.textContent = 'Guardar';
        parrafo.focus();
    }
        else{
            e.textContent = 'editar';
            parrafo.contentEditable = false;
        }
} 

function eliminar(e) {
    e.parentElement.remove();
}
