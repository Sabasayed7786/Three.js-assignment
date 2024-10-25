// initializing the three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);

// defining the position for nodes and member
const nodes = [
  { id: 1, position: [-8.7036, 0, 49.0748] },
  { id: 2, position: [-72.9996, 0, 49.0748] },
  { id: 3, position: [-75, 0, 49.0748] },
  { id: 4, position: [-75.9996, 0, 43.8788] },
  { id: 5, position: [-78.9996, 0, 38.6828] },
  { id: 6, position: [-44.8512, 0, -13.5364] },
  { id: 7, position: [-46.8516, 0, -16.9996] },
  { id: 8, position: [-10.704, 0, 45.6104] },
  { id: 9, position: [-80.0004, 0, 40.4144] },
  { id: 10, position: [-38.148, 0, -32.0752] },
  { id: 11, position: [-34.1484, 0, -32.0752] },
  { id: 12, position: [-6, 0, -87.7576] },
  { id: 13, position: [-5.0004, 0, -89.4892] },
  { id: 14, position: [8.7036, 0, 49.0748] },
  { id: 15, position: [72.9996, 0, 49.0748] },
  { id: 16, position: [75, 0, 49.0748] },
  { id: 17, position: [75.9996, 0, 43.8788] },
  { id: 18, position: [78.9996, 0, 38.6828] },
  { id: 19, position: [44.8512, 0, -13.5364] },
  { id: 20, position: [46.8516, 0, -16.9996] },
  { id: 21, position: [10.704, 0, 45.6104] },
  { id: 22, position: [80.0004, 0, 40.4144] },
  { id: 23, position: [38.148, 0, -32.0752] },
  { id: 24, position: [34.1484, 0, -32.0752] },
  { id: 25, position: [6, 0, -87.7576] },
  { id: 26, position: [5.0004, 0, -89.4892] },
  { id: 27, position: [0, 0, -87.7576] },
  { id: 28, position: [11.3127, 0, 6.5311] },
  { id: 29, position: [0, 0, -13.0622] },
  { id: 30, position: [-11.3127, 0, 6.5311] },
  { id: 31, position: [-77.4996, 0, 41.2808] },
  { id: 32, position: [-74.4996, 0, 46.4768] },
  { id: 33, position: [-64.0097, 60, 18.6311] },
  { id: 34, position: [-64.0097, -12, 18.6311] },
  { id: 35, position: [18.5003, 60, -66.1068] },
  { id: 36, position: [18.5003, -12, -66.1068] },
  { id: 37, position: [54.5003, 60, -3.753] },
  { id: 38, position: [54.5003, -12, -3.753] },
  { id: 39, position: [72.0203, 60, 26.5926] },
  { id: 40, position: [72.0203, -12, 26.5926] },
  { id: 41, position: [-24.1573, 60, 45.7931] },
  { id: 42, position: [-24.1573, -36, 45.7931] },
  { id: 43, position: [-59.178, 60, 46.2687] },
  { id: 44, position: [-59.178, -12, 46.2687] }
];

const members = [
  { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, 
  { start: 4, end: 5 }, { start: 5, end: 6 }, { start: 6, end: 7 }, 
  { start: 7, end: 8 }, { start: 8, end: 9 }, { start: 9, end: 10 }, 
  { start: 10, end: 11 }, { start: 11, end: 12 }, { start: 12, end: 13 },
  { start: 14, end: 15 }, { start: 15, end: 16 }, { start: 16, end: 17 }, 
  { start: 17, end: 18 }, { start: 18, end: 19 }, { start: 19, end: 20 },
  { start: 21, end: 22 }, { start: 22, end: 23 }, { start: 23, end: 24 },
  { start: 25, end: 26 }, { start: 26, end: 27 }, { start: 28, end: 29 },
  { start: 29, end: 30 }, { start: 31, end: 32 }, { start: 33, end: 34 },
  { start: 35, end: 36 }, { start: 37, end: 38 }, { start: 39, end: 40 },
  { start: 41, end: 42 }, { start: 43, end: 44 }
];

// visulizing nodes as spheres
const nodeGeometry = new THREE.SphereGeometry(1, 16, 16);
const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

nodes.forEach(node => {
  const sphere = new THREE.Mesh(nodeGeometry, nodeMaterial);
  sphere.position.set(...node.position);
  scene.add(sphere);
});

// visualizing members as line connecting
const memberMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

members.forEach(member => {
  const startNode = nodes.find(n => n.id === member.start);
  const endNode = nodes.find(n => n.id === member.end);

  const points = [
    new THREE.Vector3(...startNode.position),
    new THREE.Vector3(...endNode.position)
  ];

  const memberMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); 

  const memberGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(memberGeometry, memberMaterial);
  scene.add(line);
});

// settin camera and animating
camera.position.z = 150;

function animate() {
  requestAnimationFrame(animate);
  
  // Rotate code
  scene.rotation.x += 0.005;
  scene.rotation.y += 0.005;

  renderer.render(scene, camera);
}

animate();
