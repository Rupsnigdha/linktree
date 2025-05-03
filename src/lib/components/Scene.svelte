<script>
	import { GLTF, useDraco, useGltf, useGltfAnimations } from '@threlte/extras';

	import { T } from '@threlte/core';
	const gltf = useGltf('/assets/model/scene.gltf');
	const { actions, mixer } = useGltfAnimations(gltf);
	mixer.timeScale = 0.5;
	$effect(() => {
		if ($actions && $actions['Animation']) {
			$actions['Animation'].play();
		}
	});

	const dracoLoader = useDraco();
</script>

<T.PerspectiveCamera
	makeDefault
	position={[15, 0, 15]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
></T.PerspectiveCamera>

{#await useGltf('/assets/model/scene.gltf') then { scene }}
	<T is={scene} {dracoLoader} />
{/await}
