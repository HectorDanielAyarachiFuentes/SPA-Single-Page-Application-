// Obtener los datos desde el archivo JSON "datos.json"
fetch('datos.json')
  .then(response => response.json())
  .then(data => {
    // Los datos se han cargado correctamente
    // Ahora puedes trabajar con los datos
    // Agregar un evento de clic a cada enlace de navegación
    const enlaces = document.querySelectorAll('nav ul li a');
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', function (event) {
        event.preventDefault();
        const pagina = this.getAttribute('data-pagina');
        cargarPagina(pagina, data);
      });
    });
    // Cargar la página de aviones por defecto
    cargarPagina('aviones', data);
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
function cargarPagina(pagina, data) {
  var contenido = document.getElementById('content');
  var seccion = obtenerSeccionPorID(pagina, data);
  if (seccion) {
    contenido.innerHTML = `<h1>${seccion.titulo}</h1><p>${seccion.descripcion}</p><img src="${seccion.imagen}" alt="${seccion.titulo}" class="contenido-img">`;
    contenido.className = seccion.id;
  }
}
function obtenerSeccionPorID(id, data) {
  // Obtener la sección correspondiente del JSON por su ID
  return data.find(seccion => seccion.id === id);
}
