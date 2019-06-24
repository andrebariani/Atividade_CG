varying vec3 normalInterp;
varying vec3 vertPos;
varying vec3 vUv;

void main(){
    vUv = position;
    vec4 vertPos4 = modelViewMatrix * vec4(position, 1.0);
    vertPos = vec3(vertPos4) / vertPos4.w;
    normalInterp = vec3(normalMatrix * normal);
    gl_Position = projectionMatrix * vertPos4;
}