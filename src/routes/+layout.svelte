<script>
	import { onMount } from 'svelte';

	// PANTALLA DE CARGA
	let isLoading = true;

    onMount(() => {
        isLoading = false;
    });
</script>

{#if isLoading}
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>
{/if}

<style>
	#loading-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
	}

	#loading-spinner {
		border: 8px solid #f3f3f3;
		border-top: 8px solid #3498db;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>

<slot />