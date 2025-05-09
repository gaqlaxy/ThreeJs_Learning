import * as THREE from 'three';


console.log(THREE);


// CREATE SCENE 
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000});

// CREATE MESH 
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

// CREATE CAMERA 

const sizes ={
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 3;
scene.add(camera);

//RENDER

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);



