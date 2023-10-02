function cargarPagina(pagina) {
      var contenido = document.getElementById('content');
      if (pagina === 'aviones') {
        contenido.innerHTML = '<h1>Aviones</h1><p>Esta es la sección de aviones.</p><img src="https://www.preferente.com/wp-content/uploads/2023/04/copa.jpg" alt="Avión" class="contenido-img">';
        contenido.className = 'aviones';
      } else if (pagina === 'tanques') {
        contenido.innerHTML = '<h1>Tanques</h1><p>Esta es la sección de tanques.</p><img src="https://www.publico.es/files/article_main//files/crop/uploads/2020/04/20/5e9dafd247003.r_1587416005789.143-0-1186-695.jpeg" alt="Tanque" class="contenido-img">';
        contenido.className = 'tanques';
      } else if (pagina === 'Barcos') {
        contenido.innerHTML = '<h1>Barcos</h1><p>Esta es la sección de barcos.</p><img src="https://i0.wp.com/ensedeciencia.com/wp-content/uploads/2023/01/Copia-de-C-EdCiencia-P-2023-01-24T103519.000.jpg?resize=1200%2C676&ssl=1" alt="Barco" class="contenido-img">';
        contenido.className = 'barcos';
      } else if (pagina === 'Helicopteros') {
        contenido.innerHTML = '<h1>Helicópteros</h1><p>Esta es la sección de helicópteros.</p><img src="https://israelnoticias.com/wp-content/uploads/2023/04/HELICOPTERO_FUTURO-750x536.webp" alt="Helicóptero" class="contenido-img">';
        contenido.className = 'helicopteros';
      } else if (pagina === 'Armas') {
        contenido.innerHTML = '<h1>Armas</h1><p>Esta es la sección de armas.</p><img src="https://cdnuploads.aa.com.tr/uploads/Contents/2022/04/12/thumbs_b_c_c8ccfd7c3f0c7f83c7627535f0118af8.jpg?v=010516" alt="Arma" class="contenido-img">';
        contenido.className = 'armas';
      }
    }

    // Cargar la página de aviones por defecto
    cargarPagina('aviones');