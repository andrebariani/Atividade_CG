var scene = new THREE.Scene();
var curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3(-5, 0, 0),
    new THREE.Vector3(-2, 5, 0),
    new THREE.Vector3(6, 5, 0),
    new THREE.Vector3(5, 0, 0)
);
var points = curve.getPoints(50);
var geometry = new THREE.BufferGeometry().setFromPoints(points);
var curveObject = new THREE.Line(geometry);
scene.add(curveObject);

export { scene };