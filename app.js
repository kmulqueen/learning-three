import * as THREE from "three";

/*
    Need 4 basic elements:
        1. Scene
        2. Objects
            - Can transform using position, rotation, and scale
        3. Camera (which is also an object)
        4. Renderer
*/

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Adding object to scene
scene.add(mesh);

// Sizes for camera Aspect Ratio & for Renderer Size
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

// Adding camera to scene
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// Render scene to canvas
renderer.render(scene, camera);
