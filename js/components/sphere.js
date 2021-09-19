import * as THREE from '../../node_modules/three/build/three.module.js'
// use just one sphere for everything
export const createSphere = (materialOptions = {}, geometryOptions = {}) => {
   geometryOptions = {
      radius: 1,
      widthSegments: 6,
      heightSegments: 6,
   }
   const {radius,widthSegments,heightSegments} = geometryOptions
   const sphereGeometry = new THREE.SphereGeometry(radius,widthSegments,heightSegments)

   const material = new THREE.MeshPhongMaterial(materialOptions)
   const mesh = new THREE.Mesh(sphereGeometry,material)
   
   return mesh
}