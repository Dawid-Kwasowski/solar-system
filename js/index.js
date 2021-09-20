import * as THREE from '../node_modules/three/build/three.module.js'
import { createSphere } from '/js/components/sphere.js';
import { downloader } from './components/downloader.js';
const scene = new THREE.Scene()
const solarSystem = new THREE.Object3D()
const earthOrbit = new THREE.Object3D()
const moonOrbit = new THREE.Object3D()
const mercuryOrbit = new THREE.Object3D()
const wenusOrbit = new THREE.Object3D()
const marsOrbit = new THREE.Object3D()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(80,30,0)
camera.up.set(0,1,0)
camera.lookAt(0,0,0)
const color  = 0xFFFFFF
const intesity = 3
const light = new THREE.PointLight(color,intesity)
const renderer = new THREE.WebGLRenderer({
  preserveDrawingBuffer: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const objects = []

const sunMesh = createSphere({emissive: 0xFFFF00})
const earthMesh = createSphere({color: 0x2233FF, emissive: 0x112244})
const moonMesh = createSphere({color: 0x888888, emissive: 0x222222})
const mercuryMesh = createSphere({color: 0x8a805f, emissive: 0x423d2e})
const wenusMesh = createSphere({color: 0xb59e59, emissive: 0x5c502c})
const marsMesh = createSphere({color: 0x9e2626, emissive: 0x451010})

earthOrbit.position.x = 40
moonOrbit.position.x = 2
mercuryOrbit.position.x = 10
mercuryOrbit.position.z = 10
wenusOrbit.position.x = 20
wenusOrbit.position.z = -30
marsOrbit.position.x = 50
marsOrbit.position.z = -10
sunMesh.scale.set(8,8,8)
moonMesh.scale.set(.5, .5, .5);
earthOrbit.scale.set(2,2,2)

objects.push(solarSystem)
objects.push(earthOrbit)

function render(time) {
   time *= 0.001;

   objects.forEach((obj) => {
     obj.rotation.y = time;
    //  obj.rotation.x = time
    //  obj.rotation.z = time
   });
   
   renderer.render(scene, camera);

   requestAnimationFrame(render);
 }

 
console.log(renderer)


scene.add(solarSystem)

solarSystem.add(sunMesh)
solarSystem.add(earthOrbit)
solarSystem.add(mercuryOrbit)
solarSystem.add(wenusOrbit)
solarSystem.add(marsOrbit)
earthOrbit.add(earthMesh)
earthOrbit.add(moonOrbit)
mercuryOrbit.add(mercuryMesh)
wenusOrbit.add(wenusMesh)
marsOrbit.add(marsMesh)
moonOrbit.add(moonMesh)
scene.add(light)
requestAnimationFrame(render);

downloader("download frame","div",renderer)