let scene = new THREE.Scene();

let loader = new THREE.GLTFLoader();

scene.boundingBox = {};

loader.load(
    'models/low_poly_art_delorean/delorean.glb',
    function (gltf) {
        gltf.scene.position.y -= 1.28;
        gltf.scene.position.z -= 0.35;
        gltf.scene.rotation.y += 0.08;
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