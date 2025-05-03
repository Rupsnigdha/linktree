<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/demo/scene.svelte';
	import Scene2 from '$lib/components/Scene.svelte';
	import Background from '$lib/assets/background.jpg';
	import ProfilePicture from '$lib/assets/me.jpg';
	import { Share } from '@lucide/svelte';
</script>

<div class="relative h-screen overflow-hidden">
	<div class="absolute top-4 right-4">
		<button
			class="relative rounded-full p-2"
			onclick={() => {
				if (navigator.share) {
					navigator
						.share({
							title: `Rupsnigdha's Linktree`,
							text: '',
							url: 'https://links.rups.fun'
						})
						.then(() => console.log('Successful share'))
						.catch((error) => console.log('Error sharing', error));
				} else {
					console.log('Share not supported on this browser, do it the old way.');
				}
			}}
		>
			<Share />
		</button>
	</div>

	<div
		class="absolute bottom-0 left-1/2 z-30 flex w-full -translate-x-1/2 flex-col gap-4 p-12 pb-30"
	>
		<div
			class="font-raleway relative mb-2 border-2 border-black bg-[#CA8E82] px-4 py-2 font-medium"
		>
			<div class="absolute top-1 -right-1 -z-10 h-full w-full bg-black"></div>
			Portfolio
		</div>
		<div
			class="font-raleway relative mb-2 border-2 border-black bg-[#CA8E82] px-4 py-2 font-medium"
		>
			<div class="absolute top-1 -right-1 -z-10 h-full w-full bg-black"></div>
			Garage Workshop
		</div>
		<div class="font-raleway relative border-2 border-black bg-[#CA8E82] px-4 py-2 font-medium">
			<div class="absolute top-1 -right-1 -z-10 h-full w-full bg-black"></div>
			Github
		</div>
	</div>
	<div class="absolute inset-0 z-20 h-screen">
		<Canvas>
			<Scene />
		</Canvas>
	</div>

	<div class="absolute inset-0 flex h-screen flex-col items-center gap-4 py-12">
		<div class="h-36 w-36 rounded-full bg-white">
			<img src={ProfilePicture} alt="" class="h-full w-full rounded-full object-cover" />
		</div>
		<div class="font-raleway text-2xl font-bold">@rupsnigdha</div>
	</div>

	<div class="absolute inset-0 -z-10 h-screen w-screen bg-[#BAE0DA]"></div>
</div>

<style>
	.background {
		padding: 0;
		margin: 0;
		background-color: #bae0da;
		background-image: radial-gradient(circle, #f2e7dd 5px, transparent 5px);
		background-size: 20px 20px;
		background-position: 0 0;
		animation: slide 10s linear infinite;
	}
</style>
