import * as THREE from "three";

export default function flag() {
  const section = document.querySelector(".flag");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  section.appendChild(renderer.domElement);

  const loader = new THREE.TextureLoader()

  const geometry = new THREE.PlaneGeometry(5, 3, 50, 30);
  
  const material = new THREE.MeshBasicMaterial({
    map: loader.load("assets/images/why-makear-office-team-noida.png")
  });

  const flag = new THREE.Mesh(geometry, material);
  scene.add(flag);

  flag.rotation.set(-0.1, 0, 0);

  camera.position.z = 5;

  const clock = new THREE.Clock();
  let v = new THREE.Vector3();
  let pos = flag.geometry.attributes.position;

  function animate() {
    const t = clock.getElapsedTime();

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const wavex1 = 0.5 * Math.sin(v.x * 2 + t);
      const wavex2 = 0.25 * Math.sin(v.x + t * 2);
      const wavex3 = 0.5 * Math.sin(v.y + t);

      pos.setZ(i, wavex1 + wavex2 + wavex3);
    }
    pos.needsUpdate = true;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}
