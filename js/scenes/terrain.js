let scene = new THREE.Scene();

let loader = new THREE.GLTFLoader();

let terrains = [];

function randomTerrain() {
    return (new THREE.Scene()).add(terrains[Math.floor(Math.random()*(terrains.length-1))]);
}

loader.load(
    'models/grid_terrain/scene3.gltf',
    function (gltf) {
        gltf.children.forEach(terrain => {
            terrains.push(terrain);
        });
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error ocurred');
    }
);

export { randomTerrain };