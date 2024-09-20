<script lang="ts">
	import { onMount } from 'svelte';
	import Uno from '$lib/IMAGES/17b68c2b-ad82-46be-821d-7373ceeecaf5.jpg';
	import Dos from '$lib/IMAGES/ee6d8afd-3406-4228-b285-de7b0ea8c97d.jpg';
	import Tres from '$lib/IMAGES/calle.jpg';
	import Cuatro from '$lib/IMAGES/Pixel Art.jpg';
	import Cinco from '$lib/IMAGES/Arte.jpg';
	import logo1 from '$lib/IMAGES/logo-1.png';
	import logo2 from '$lib/IMAGES/logo-2.png';
	import logo3 from '$lib/IMAGES/logo-3.png';
	import number1 from '$lib/IMAGES/number-1.jpg';
	import number2 from '$lib/IMAGES/number-2.jpg';
	import number3 from '$lib/IMAGES/number-3.jpg';
	import image1 from '$lib/IMAGES/Leccion.jpg';
	import image2 from '$lib/IMAGES/dibujando.jpg';
	import image3 from '$lib/IMAGES/material.jpg';
	import footer from '$lib/IMAGES/1697232378791.png';
	import './landing page.css';

	// CARRUSEL DE IMAGENES

	let currentSlide = 0;

	onMount(() => {
		const interval = setInterval(() => {
			currentSlide = currentSlide === 4 ? 0 : currentSlide + 1;
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	});

	// TARJETA DEL POPUP

	let isPopupVisible = false;

	function togglePopup() {
		isPopupVisible = !isPopupVisible;
	}
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Conoce y Descubre más de Draw This</title>
</svelte:head>

<div class="menu-container">
	<nav>
		<img src="../IMAGES/IMG-20231013-WA0009.jpg" alt="" class="logo" />
		<ul class="menu">
			<li><a href="../HTML/cursos.html">Cursos</a></li>
			<li><a href="../Contacto/+page.svelte">Contacto</a></li>
			<li><a href="../HTML/acerca de.html">Acerca de</a></li>
			<li><a href="../HTML">Ajustes</a></li>
			<li><button on:click={togglePopup} class="custom-button">Volver</button></li>
		</ul>
	</nav>

	{#if isPopupVisible}
		<div id="myPopup" class="popup {isPopupVisible ? 'show-popup' : ''}">
			<div class="popup-content">
				<span
					role="button"
					class="close"
					on:click={togglePopup}
					tabindex="0"
					on:keypress={(e) => e.key === 'Enter' && togglePopup()}>&times;</span
				>
				<div class="header-card">
					<div class="content-card">
						<span class="title-card">¿Estás seguro de Salir?</span>
						<p class="message">Si es así, ¡esperamos que vuelvas <br /> pronto!</p>
					</div>
					<div class="actions">
						<a href="../HTML/Inicio.html">
							<button type="button" class="enviar">Salir</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<div class="header">
	<div class="contenedor">
		<div class="header-texto">
			<h1>Bienvenido a <br /> <span>Draw This</span></h1>
			<br />
			<p>¡La Página que sacará tus dotes<br /> artísticos y los pondra a prueba!</p>
			<br />
			<br />
			<a href="../HTML/cursos.html">
				<button type="button" class="enviar-2">Ingresa a los Cursos</button>
			</a>
		</div>
		<div id="slider">
			<input type="radio" name="slider" id="s1" checked={currentSlide === 0} />
			<input type="radio" name="slider" id="s2" checked={currentSlide === 1} />
			<input type="radio" name="slider" id="s3" checked={currentSlide === 2} />
			<input type="radio" name="slider" id="s4" checked={currentSlide === 3} />
			<input type="radio" name="slider" id="s5" checked={currentSlide === 4} />

			<label for="s1" id="slide1">
				<img src={Uno} alt="" />
			</label>

			<label for="s2" id="slide2">
				<img src={Dos} alt="" />
			</label>

			<label for="s3" id="slide3">
				<img src={Tres} alt="" />
			</label>

			<label for="s4" id="slide4">
				<img src={Cuatro} alt="" />
			</label>

			<label for="s5" id="slide5">
				<img src={Cinco} alt="" />
			</label>
		</div>
	</div>
</div>

<main>
	<section class="second">
		<h2>Explorando el Mundo a Través del Arte</h2>
		<p>
			Sumérgete en un viaje visual que fusiona la realidad con la fantasía. Descubre el poder
			transformador del arte mientras aprendes. ¡En esta travesía creativa cada dibujo cuenta una
			historia única!
		</p>
		<h2 class="text">Ventajas al usar Draw This</h2>
		<div class="cards">
			<div class="card">
				<div class="circle">
					<img src={logo1} alt="" />
				</div>
				<h3>Expresión personal y creatividad</h3>
				<p>
					El dibujo es una forma de expresión artística que permite a las personas transmitir sus
					pensamientos, sentimientos y experiencias de manera visual.
				</p>
			</div>
			<div class="card">
				<div class="circle">
					<img src={logo2} alt="" />
				</div>
				<h3>Alivio del estrés y mejora del bienestar emocional</h3>
				<p>
					Dibujar puede servir como una forma de escape, permitiendo a las personas desconectarse
					del estrés diario y enfocarse en la creación artística.
				</p>
			</div>
			<div class="card">
				<div class="circle">
					<img src={logo3} alt="" />
				</div>
				<h3>Estimulación cognitiva</h3>
				<p>
					Dibujar implica la coordinación entre la mano y el ojo, lo que ayuda a desarrollar y
					mejorar habilidades motoras finas, fomentando la concentración y la percepción visual.
				</p>
			</div>
		</div>

		<div class="third">
			<h2>Lo que ofrecemos con Draw This:</h2>
			<div class="long-card">
				<div class="title">
					<div class="circle-2">
						<img src={number1} alt="" />
					</div>
					<h3>Lecciones Accesibles:</h3>
					<p>
						La plataforma ofrece una biblioteca de lecciones en video que cubren una amplia gama de
						técnicas y conceptos de dibujo. Están diseñadas para facilitar el aprendizaje de los
						estudiantes de manera flexible y adaptada a sus necesidades.
					</p>
				</div>
				<div class="image">
					<img src={image1} alt="" />
				</div>
			</div>
			<div class="long-card">
				<div class="title">
					<div class="circle-2">
						<img src={number2} alt="" />
					</div>
					<h3>Ejercicios Prácticos:</h3>
					<p>
						Actividades y proyectos diseñados para poner en práctica lo aprendido en las lecciones.
						Estos ejercicios pueden incluir instrucciones detalladas y ejemplos para que los
						estudiantes sigan y aprendan más a fondo.
					</p>
				</div>
				<div class="image">
					<img src={image2} alt="" />
				</div>
			</div>
			<div class="long-card">
				<div class="title">
					<div class="circle-2">
						<img src={number3} alt="" />
					</div>
					<h3>Materiales Didácticos Descargables:</h3>
					<p>
						Guías paso a paso, hojas de trabajo, plantillas y referencias visuales que los
						estudiantes pueden descargar e imprimir para complementar las lecciones en video.
					</p>
				</div>
				<div class="image">
					<img src={image3} alt="" />
				</div>
			</div>
		</div>
	</section>

	<section class="last">
		<h2>Algunas implementaciones futuras</h2>
		<p>
			En Draw this, se implementaran actualizaciones básicas que permitan un mejor rendimiento de la
			página, así mismo, satisfacer las necesidades de los usuarios y lograr la mejor calidad,
			algunas de estas son:
		</p>
		<div class="cards">
			<div class="card">
				<h4>Inicio de Sesión con Google</h4>
				<p>
					En Draw This planteamos la posibilidad de que los usuarios puedan iniciar en Draw This con
					su cuenta de Google, es decir, su gmail o Correo Electrónico.
				</p>
			</div>
			<div class="card">
				<h4>Sección de Preguntas</h4>
				<p>
					Cualquier duda posible que tenga el usuario pensamos resolverla por medio de preguntas
					frecuentes que tenga la página de Draw This. Estas preguntas serán preescritas y <b
						>no será posible</b
					> que los usuarios la pongan por ellos mismos.
				</p>
			</div>
			<div class="card">
				<h4>Ajustes</h4>
				<p>
					Se desea una sección en donde se implementen ajustes a la página, esto con el objetivo de
					tener más versatilidad en Draw This, un ejemplo es agregar el Modo Oscuro.
				</p>
			</div>
		</div>
	</section>
</main>
<footer>
	<div id="footer">
		<div class="contenedor">
			<div class="footer-texto">
				<p>Todos los derechos reservados a:</p>
				<img src={footer} alt="" />
				<br />
				<br />
			</div>
		</div>
	</div>
</footer>
