const autoRotateBtn = document.getElementById('autoRotate');
autoRotateBtn.addEventListener('click', () => toggleAutoRotate(!autoRotate))

const zoomBtn = document.getElementById('zoom');
zoomBtn.addEventListener('click', () => toggleZoom(!zoomOut))

const loading = document.getElementById('loading');

document.addEventListener('mousemove', onMouseMove);

document.addEventListener('mousedown', onDocumentMouseDown, false);

class Place {
    constructor(filename, buttons) {
        this.filename = filename
        this.buttons = buttons
    }
}
class Button {
    constructor(onClickNextPhoto, x, y, z, buttonColor) {
        this.onClickNextPhoto = onClickNextPhoto;
        this.x = x;
        this.y = y;
        this.z = z;
        this.buttonColor = buttonColor;
    }
}

const buttonColor = '#F4F411'
let list_of_places = [
    new Place('1', [
        new Button('2', 5000, 300, 300, buttonColor),
        new Button('3', -5000, 800, 800, buttonColor),
    ]),
    new Place('2', [
        new Button('1', 5000, 300, 300, buttonColor),
        new Button('3', -5000, 800, 800, buttonColor),
    ]),
    new Place('3', [
        new Button('1', 5000, 300, 300, buttonColor),
        new Button('2', -5000, 800, 800, buttonColor),
    ]),
]

let scene, camera, renderer, skybox, controls, myReq;
let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
let zoomOut = false;
let autoRotate = false;
let skyboxImage = '1';
const color = new THREE.Color();

// const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// var sphereGeometry = new THREE.SphereGeometry(100, 32, 16);
// console.log(sphereGeometry)
// var sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.set(5000, 50, 0);

// sphere.name = 'sphere-2'

var targetList = [];
var projector, mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();


function createPathStrings(filename) {
    const basePath = "./img/";
    const baseFilename = basePath + filename;
    const fileType = ".png";
    const sides = ['px', 'nx', 'py', 'ny', 'pz', 'nz'];
    const pathStings = sides.map(side => {
        return baseFilename + "" + side + fileType;
    });
    return pathStings;
}

function createMaterialArray(filename) {
    const skyboxImagepaths = createPathStrings(filename);
    const materialArray = skyboxImagepaths.map(image => {
        let texture = new THREE.TextureLoader().load(image);

        return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    });
    return materialArray;
}

function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        45,
        30000,
    );
    camera.position.set(1200, -250, 2000);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.id = 'canvas';
    document.body.appendChild(renderer.domElement);

    switchSkyBox('3')

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enabled = true;
    controls.minDistance = 700;
    controls.maxDistance = 1500;
    controls.enablePan = false; // block right mouse button
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;



    window.addEventListener('resize', onWindowResize, false);
    animate();
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    controls.autoRotate = autoRotate;
    if (controls.maxDistance == 1500 && zoomOut) {

        controls.maxDistance = 20000;
        camera.position.z = 20000;
    } else if (controls.maxDistance == 20000 && !zoomOut) {
        console.log('called')
        controls.maxDistance = 1500;
        camera.position.z = 2000;
    }
    checkCollisionWithButton()
    controls.update();
    renderer.render(scene, camera);
    myReq = window.requestAnimationFrame(animate);

}

init();

function switchSkyBox(skyboxName) {
    console.log(skyboxName)
    targetList.forEach(element => {
        console.log(element)

        scene.remove(element);
    });
    targetList = []

    list_of_places.forEach(element => {
        if (element.filename == skyboxName) {
            element.buttons.forEach((element, i) => {
                targetList.push(new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), new THREE.MeshBasicMaterial({ color: element.buttonColor })));
                // targetList.push(new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), new THREE.MeshNormalMaterial()));

                targetList[i].position.set(element.x, element.y, element.z);
                targetList[i].name = 'sphere-' + element.onClickNextPhoto
                scene.add(targetList[i])
            });
        }
    });

    skyboxImage = skyboxName;
    const materialArray = createMaterialArray(skyboxImage);

    scene.remove(skybox);
    skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
}


function toggleZoom(value) {
    zoomOut = value;
    zoomBtn.textContent = value ? 'Inside Box' : "Outside Box";
}


function toggleAutoRotate(value) {
    autoRotate = value;
}

function onDocumentMouseDown(event) {
    console.log("Click.");

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // create an array containing all objects in the scene with which the ray intersects
    var intersects = raycaster.intersectObjects(targetList, false);

    if (intersects.length > 0) {
        intersects.forEach(element => {
            if (element.object.name.includes('sphere')) {
                console.log(element.object.name);
                switchSkyBox(element.object.name.split('-')[1]);
            }
        });
    }

}


function onMouseMove(event) {

    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}


function checkCollisionWithButton() {
    // console.log(document.body.style.cursor)
    if (mouse.x != 0 && mouse.y != 0) {
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(targetList, false);

        if (intersects.length > 0) {
            intersects.forEach(element => {
                if (element.object.name.includes('sphere')) {
                    // sphere.material.color = color.setHex(Math.random() * 0xffffff);
                    document.body.style.cursor = "pointer";
                    // console.log(document.body.style.cursor)
                }
            });
        }
        else {
            document.body.style.cursor = "auto";
        }
        renderer.render(scene, camera);

    }
}