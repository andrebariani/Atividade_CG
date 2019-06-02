let scene = new THREE.Scene();

let loader = new THREE.GLTFLoader();

<<<<<<< HEAD
loader.load(
    'models/low_poly_art_delorean/good_delorean.glb',
=======
let delorean = loader.load(
    'models/low_poly_art_delorean/delorean.glb',
>>>>>>> 3ca9f34bc740d0caece923754d7fc8d4605f1e69
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