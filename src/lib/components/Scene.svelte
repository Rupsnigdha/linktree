<script>
	import {
		Environment,
		OrbitControls,
		useDraco,
		useGltf,
		useGltfAnimations
	} from '@threlte/extras';
      import { TextureLoader, EquirectangularReflectionMapping } from 'three'

	import { T } from '@threlte/core';
	const gltf = useGltf('/assets/model/scene.gltf');
	const { actions, mixer } = useGltfAnimations(gltf);
	mixer.timeScale = 0.5;
	$effect(() => {
		if ($actions && $actions['Animation']) {
			$actions['Animation'].play();
		}
	});
</script>


<T.PerspectiveCamera
	makeDefault
	position={[15, 0, 15]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
>
</T.PerspectiveCamera>

{#await gltf then { scene }}
	<T is={scene} />
{/await}
