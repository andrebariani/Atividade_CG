let cameras = document.querySelectorAll(".camera");
let lightColor = document.querySelector("#lightColor");
let lightHeight = document.querySelector("#lightHeight");
let lightRotation = document.querySelector("#lightRotation");

setCamera(0);

function setCamera(index) {
    cameras.forEach(function (camera) {
        camera.classList.remove("active");
    });
    cameras[index].classList.add("active");
}

function setLightColor(color) {
    lightColor.style.backgroundColor = "#" + color.getHexString();
    lightColor.innerHTML = "#" + color.getHexString();
}

function setLightHeight(height) {
    lightHeight.innerHTML = height.toFixed(3);
}

function setLightRotation(rotation) {
    lightRotation.innerHTML = (rotation*180/Math.PI).toFixed(3) + "º";
}

export default { setCamera, setLightColor, setLightHeight, setLightRotation };