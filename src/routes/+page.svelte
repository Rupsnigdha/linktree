<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/demo/scene.svelte';
	import Scene2 from '$lib/components/Scene.svelte';
	import Background from '$lib/assets/background.jpg';
	import ProfilePicture from '$lib/assets/me.jpg';
</script>

<div class="relative h-screen overflow-hidden">
	<div class="absolute inset-0 z-20 h-screen">
		<Canvas>
			<Scene2 />
		</Canvas>
	</div>

	<div class="absolute inset-0 flex h-screen flex-col items-center gap-4 py-12">
		<div class="h-36 w-36 rounded-full bg-white">
			<img src={ProfilePicture} alt="" class="h-full w-full rounded-full object-cover" />
		</div>
		<div class="font-raleway text-2xl font-bold">@rupsnigdha</div>
	</div>
	<div class="absolute inset-0 -z-10 h-screen w-screen">
		<img
			src={Background}
			alt=""
			class="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
		/>
	</div>
</div>
