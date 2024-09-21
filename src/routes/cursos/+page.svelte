<script lang="ts">
    import '$lib/CSS/cursos.css';
    import { onMount } from 'svelte';
  
    let searchInput: HTMLInputElement;
    let courses = [
      { title: 'Historia del Arte', description: 'Aprende técnicas de pintura.', link: '../Curso/1/Nivel/1/Historia_Arte.html' },
      { title: 'Dibujo Simple (Básico)', description: 'Domina el arte de dibujar en varios estilos.', link: '#' },
      { title: 'Puntillismo', description: 'Domina el arte del puntillismo.', link: '../HTML/puntillismo.html' },
      { title: 'Pixel Art', description: 'Aprende a dibujar con Pixeles.', link: '../HTML/tamgram.html' },
      { title: 'Perspectiva', description: 'Domina el arte de dibujar con perspectiva.', link: '../HTML/perspetiva.html' },
      { title: 'Anatomía', description: 'Domina el arte de dibujar cuerpos humanos.', link: '../HTML/anatomia.html' },
      { title: 'Libera tu Creatividad', description: 'Dibuja lo que quieras', link: '../HTML/colorear.html' }
    ];
    let filteredCourses = [...courses];
    let noResultsMessage: HTMLElement;
  
    function search() {
      const input = searchInput.value.toLowerCase();
      filteredCourses = courses.filter(course => course.title.toLowerCase().includes(input));
      noResultsMessage.style.display = filteredCourses.length === 0 ? 'block' : 'none';
    }
  
    onMount(() => {
      noResultsMessage = document.getElementById('noResultsMessage') as HTMLElement;
    });
  </script>
  
  <svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprende con nuestros cursos de Draw This</title>
    <link rel="stylesheet" href="../CSS/cursos.css">
  </svelte:head>
  
  <header>
    <div class="menu-container">
      <nav>
        <img src="../IMAGES/IMG-20231013-WA0009.jpg" alt="Logo" class="logo">
        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            placeholder="Buscar"
            bind:this={searchInput}
            class="input"
            on:input={search}
          />
          <div class="menu-toggle" id="menuToggle">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <div class="side-menu" id="sideMenu">
            <a href="#contact">Contacto</a>
            <a href="#support">Soporte</a>
            <a href="#privacy">Privacidad</a>
            <a href="../HTML/landing page.html">Volver</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
  
  <div class="container" id="coursesContainer">
    {#each filteredCourses as course}
      <div class="course">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <button class="button" on:click={() => window.location.href = course.link}>Ver curso</button>
      </div>
    {/each}
    
    <div id="noResultsMessage" style="display: none;">
      <p><strong>ERROR 404:</strong> No se encontraron Coincidencias :(</p>
      <img src="https://www.freeiconspng.com/thumbs/error/shiny-metal-red-error-image-designs-1.png" alt="">
    </div>
  </div>
  