let scene = new THREE.Scene();

let loader = new THREE.GLTFLoader();

let delorean = loader.load(
    'models/low_poly_art_delorean/scene.gltf',
    function (gltf) {
        gltf.scene.position.set(0, -6, 0);
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