let scene = new THREE.Scene();

let loader = new THREE.GLTFLoader();

var geometry = new THREE.BoxGeometry(3.25, 1, 1.75);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var carCollisionBox = new THREE.Mesh(geometry, material);
carCollisionBox.visible = false;
carCollisionBox.rotation.y -= 0.08;
carCollisionBox.position.x += 0.2;
carCollisionBox.position.y += 0.6;
carCollisionBox.position.z += 0.4;

scene.collisionBox = carCollisionBox;

scene.add(carCollisionBox);

loader.load(
    'models/low_poly_art_delorean/delorean.glb',
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