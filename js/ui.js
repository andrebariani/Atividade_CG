let cameras = document.querySelectorAll(".camera");
let lightColor = document.querySelector("#lightColor");

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

export default { setCamera, setLightColor };