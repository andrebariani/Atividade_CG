// Viewport definition
var w = window.innerWidth;
var h = window.innerHeight;
var viewSize = h;
var aspectRatio = w / h;

let _viewport = {
    viewSize: viewSize,
    aspectRatio: aspectRatio,
    left: (-aspectRatio * viewSize) / 2,
    right: (aspectRatio * viewSize) / 2,
    top: viewSize / 2,
    bottom: -viewSize / 2,
    near: -1000,
    far: 1000
}

// Camera setup
let cameras = [
    new THREE.PerspectiveCamera(75, w / h, 1, 1000),
    new THREE.PerspectiveCamera(75, w / h, 1, 1000),
    new THREE.PerspectiveCamera(75, w / h, 1, 1000),
    new THREE.PerspectiveCamera(75, w / h, 1, 1000),
    new THREE.OrthographicCamera(
        _viewport.left,
        _viewport.right,
        _viewport.top,
        _viewport.bottom,
        _viewport.near,
        _viewport.far)
];

cameras[0].applyMatrix(new THREE.Matrix4().makeTranslation(-5, 1, 0));
cameras[1].applyMatrix(new THREE.Matrix4().makeTranslation(0, 1, 5));
cameras[2].applyMatrix(new THREE.Matrix4().makeTranslation(0, 1, -5));
cameras[3].applyMatrix(new THREE.Matrix4().makeTranslation(5, 1, 0));
cameras[4].applyMatrix(new THREE.Matrix4().makeTranslation(20, 2.5, 0));
cameras[4].zoom = 35;
cameras[4].updateProjectionMatrix();

let camera = cameras[0];
let cameraControls = new THREE.OrbitControls(camera);

function changeCamera(cameraIndex) {
    camera = cameras[cameraIndex];
    cameraControls.reset();
    cameraControls.dispose();
    cameraControls = new THREE.OrbitControls(camera);
}

function currentCamera() {
    return camera;
}

export default { changeCamera, currentCamera };