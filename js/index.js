import * as THREE from '../node_modules/three/build/three.module.js'
// import to ref
import { OrbitControls } from './vendor_mods/three/examples/js/controls/OrbitControls.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const light = new THREE.AmbientLight( 0x000000,.3);
scene.add( light );
light.position.set( 0, 2, 2 );
const createBorder = (width,depth = 0.10) => {
  const geometry = new THREE.BoxGeometry(width,0.10,depth);
  const material = new THREE.MeshPhongMaterial( { color: 0xffff00,emissive: 0xff00ff,shininess: 0 } );
  const border = new THREE.Mesh( geometry, material );
  
  return border
}

const makeFill = (width,depth) => {
  const geometry = new THREE.BoxGeometry(width,0.2,depth);
  const material = new THREE.MeshPhongMaterial( { color: 0x0000ff,emissive: 0x000fff,shininess: 100 } );
  const fill = new THREE.Mesh( geometry, material );
  return fill
}

const makeFrame = () => {
  const frame = new THREE.Group()
  frame.name = 'FRAME'
  const border1 = createBorder(3) // base border
  const border2 = createBorder(3)

  border2.position.set(1.5,0,1.5)
  border2.rotateY(33)

  const border3 = createBorder(3)
  border3.position.set(0,0,3)
  const border4 = createBorder(3)
  border4.position.set(-1.5,0,1.5)
  border4.rotateY(33)
  frame.add(border1,border2,border3,border4)
  return frame
}

const shelf = new THREE.Group()
shelf.name = 'SHELF'
const fill = makeFill(3,3,3)
const frame = makeFrame()
frame.position.z = -1.5
shelf.add(frame,fill)
shelf.position.setY(3)
scene.add( shelf );


camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setClearColor( 0xffffff, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



function animate() {
	requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
}
animate();