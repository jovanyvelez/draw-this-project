<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import '$lib/CSS/landing_page.css';
	import { logo, footer } from '$lib/IMAGES/todas';
	import {
		slides,
		advantageCards,
		offerCards,
		futureImplementations
	} from '$lib/datos_prueba/info';

	let currentSlide = 3;

	onMount(() => {
		const interval = setInterval(() => {
			currentSlide = currentSlide === 4 ? 0 : currentSlide + 1;
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	});

	// TARJETA DEL POPUP

	let isPopupVisible2 = false;

	function togglePopup2() {
		isPopupVisible2 = !isPopupVisible2;
	}
</script>

<svelte:head>
	<title>Conoce y Descubre más de Draw This</title>
</svelte:head>

<div class="menu-container">
	<nav>
		<img src={logo} alt="" class="logo" />
		<ul class="menu">
			<li><a href="/cursos" data-sveltekit-reload data-sveltekit-preload-data="tap">Cursos</a></li>
			<li><a href="/contacto" data-sveltekit-preload-data="tap">Contacto</a></li>
			<li>
				<a href="/acerca-de" data-sveltekit-reload data-sveltekit-preload-data="tap">Acerca de</a>
			</li>
			<li><a href="#In Process" data-sveltekit-preload-data="tap">Ajustes</a></li>
			<li><button on:click={togglePopup2} class="custom-button">Volver</button></li>
		</ul>
	</nav>

	{#if isPopupVisible2}
		<div id="myPopup" class="popup {isPopupVisible2 ? 'show-popup' : ''}">
			<div class="popup-content">
				<div class="header-card">
					<span
						role="button"
						class="close"
						on:click={togglePopup2}
						tabindex="0"
						on:keypress={(e) => e.key === 'Enter' && togglePopup2()}>&times;</span
					>
					<div class="content-card">
						<span class="title-card">¿Estás seguro de Salir?</span>
						<p class="message">Si es así, ¡esperamos que vuelvas <br /> pronto!</p>
					</div>
					<div class="actions">
						<button type="button" class="enviar" on:click={() => goto('/')}>Salir</button>
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

			{#each slides as slide}
				<label for={slide.id} id={`slide${slide.id[1]}`}>
					<img src={slide.image} alt="Slide" />
				</label>
			{/each}
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
			{#each advantageCards as card}
				<div class="card">
					<div class="circle">
						<img src={card.logo} alt={card.title} />
					</div>
					<h3>{card.title}</h3>
					<p>{card.description}</p>
				</div>
			{/each}
		</div>

		<div class="third">
			<h2>Lo que ofrecemos con Draw This:</h2>
			{#each offerCards as card}
				<div class="long-card">
					<div class="title">
						<div class="circle-2">
							<img src={card.number} alt={card.title} />
						</div>
						<h3>{card.title}</h3>
						<p>{card.description}</p>
					</div>
					<div class="image">
						<img src={card.image} alt={card.title} />
					</div>
				</div>
			{/each}
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
			{#each futureImplementations as implementation}
				<div class="card">
					<h4>{implementation.title}</h4>
					<p>{implementation.description}</p>
				</div>
			{/each}
		</div>
	</section>
</main>

<footer>
	<div id="footer">
		<div class="contenedor">
			<div class="footer-texto">
				<p>Todos los derechos reservados a:</p>
				<img src={footer} alt="Footer logo" />
			</div>
		</div>
	</div>
</footer>
