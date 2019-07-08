let scene = new THREE.Scene();

let loader = new THREE.GLTFLoader();

loader.load(
    'models/grid_terrain/scene2.gltf',
    function (gltf) {
        scene.add(gltf.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error ocurred');
    }
);

export { scene };