let scene = new THREE.Scene();

let loader = new THREE.OBJLoader();

var textureLoader = new THREE.TextureLoader();
var map = textureLoader.load('models/low_poly_rocks/GreyRockTexture.png');
var material = new THREE.MeshPhongMaterial({map: map});

let rocks = [];

function randomRock() {
    return rocks[Math.floor(Math.random()*rocks.length)].clone();
}

loader.load(
    'models/low_poly_rocks/RockPackByPava.obj',
    function (obj) {
        obj.children.forEach(rock => {
            rock.traverse(node => {
                if(node.isMesh) node.material = material;
            });
            rocks.push(rock);
        });
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error ocurred');
    }
);

export { randomRock };