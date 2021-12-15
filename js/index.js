import * as THREE from '../node_modules/three/build/three.module.js'
// import to ref
import { OrbitControls } from './vendor_mods/three/examples/js/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const createBorder = (width,depth = 0.10) => {
  const geometry = new THREE.BoxGeometry(width,0.10,depth);
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  const border = new THREE.Mesh( geometry, material );
  
  return border
}

const makeFill = (width,depth,height) => {
  const geometry = new THREE.BoxGeometry(width,0.5,depth);
  const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
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
scene.add( shelf );


camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



function animate() {
	requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
}
animate();