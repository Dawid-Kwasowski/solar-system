import * as THREE from '../node_modules/three/build/three.module.js'
import { createSphere } from '/js/components/sphere.js';
const scene = new THREE.Scene()
const solarSystem = new THREE.Object3D()
const earthOrbit = new THREE.Object3D()
const moonOrbit = new THREE.Object3D()

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(0,50,0)
camera.up.set(0,1,0)
camera.lookAt(0,0,0)
const color  = 0xFFFFFF
const intesity = 3
const light = new THREE.PointLight(color,intesity)
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const objects = []

const sunMesh = createSphere({emissive: 0xFFFF00})
const earthMesh = createSphere({color: 0x2233FF, emissive: 0x112244})
const moonMesh = createSphere({color: 0x888888, emissive: 0x222222})

earthOrbit.position.x = 20
moonOrbit.position.x = 5
sunMesh.scale.set(5,5,5)
earthOrbit.scale.set(2,2,2)
moonMesh.scale.set(.5, .5, .5);

objects.push(solarSystem)
objects.push(earthOrbit)
objects.push(moonMesh)
function render(time) {
   time *= 0.001;

   objects.forEach((obj) => {
    //  obj.rotation.y = time;
    //  obj.rotation.x = time
     obj.rotation.z = time
   });
   
   renderer.render(scene, camera);

   requestAnimationFrame(render);
 }

 


scene.add(solarSystem)
solarSystem.add(sunMesh)
solarSystem.add(earthOrbit)
earthOrbit.add(earthMesh)
earthOrbit.add(moonOrbit)
moonOrbit.add(moonMesh)
scene.add(light)
requestAnimationFrame(render);