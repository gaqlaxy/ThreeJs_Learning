import './style.css'
import * as THREE from 'three'

// Canvas


// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z= 1;
mesh.position.set(0.7,-0.6,1);

// mesh.scale.x = 1.5;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(1.5,0.5,0.5);

mesh.rotation.z = 2;
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
console.log(mesh.position.distanceTo(camera.position));
scene.add(camera)

/**
 * Renderer
 */
const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)