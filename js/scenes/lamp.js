// Colors setup
const palette = [
    new THREE.Color(0xff71ce),
    new THREE.Color(0x01cdfe),
    new THREE.Color(0x05ffa1),
    new THREE.Color(0xb967ff),
    new THREE.Color(0xfffb96)
];

let currentColorIndex = 0;
let currentColorValue = palette[currentColorIndex];

function nextColor() {
    const nextColorIndex = (currentColorIndex + 1) % palette.length;

    const nextColorValue = palette[nextColorIndex];

    const colorStep = 0.01;

    if (currentColorValue.r < nextColorValue.r) {
        currentColorValue.r += colorStep;
    } else if (currentColorValue.r > nextColorValue.r) {
        currentColorValue.r -= colorStep;
    }

    if (currentColorValue.g < nextColorValue.g) {
        currentColorValue.g += colorStep;
    } else if (currentColorValue.g > nextColorValue.g) {
        currentColorValue.g -= colorStep;
    }

    if (currentColorValue.b < nextColorValue.b) {
        currentColorValue.b += colorStep;
    } else if (currentColorValue.b > nextColorValue.b) {
        currentColorValue.b -= colorStep;
    }

    if ((currentColorValue.r - nextColorValue.r) <= colorStep &&
        (currentColorValue.g - nextColorValue.g) <= colorStep &&
        (currentColorValue.b - nextColorValue.b) <= colorStep) {
        currentColorIndex++;
    }

    directionalLight.color.set(currentColorValue);

    return currentColorValue;
}

let scene = new THREE.Scene();

let loader = new THREE.GLTFLoader();

let directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1, 100);
directionalLight.name = "directionalLight";
directionalLight.castShadow = true;

loader.load(
    'models/teascroll_clubhouse_-_lamp_prop/scene.gltf',
    function (gltf) {
        gltf.scene.position.y = 0.75;
        scene.add(gltf.scene);
        scene.add(directionalLight);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error ocurred');
    }
);

export default { scene, nextColor };