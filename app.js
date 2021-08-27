
import * as THREE from '../libs/three/three.module.js';
import { GLTFLoader } from '../libs/three/jsm/GLTFLoader.js';
import { DRACOLoader } from '../libs/three/jsm/DRACOLoader.js';
import { RGBELoader } from '../libs/three/jsm/RGBELoader.js';
import { Stats } from '../libs/stats.module.js';
import { LoadingBar } from '../libs/LoadingBar.js';
import { VRButton } from '../libs/VRButton.js';
import { CanvasUI } from '../libs/CanvasUI.js';
import { JoyStick } from '../libs/Toon3D.js';
import { XRControllerModelFactory } from '../libs/three/jsm/XRControllerModelFactory.js';
// import gsap from '../../gsap-public/src/index.js';
const obj=[];
var camera,scene;
const explore = $(".explore");
const explore1 = $(".explore1");
var explorer = false;
const raycaster1 = new THREE.Raycaster();
const mouse = new THREE.Vector2();
function create1(){
    const config1 = {
        panelSize: { height: 7,width:7},
        height: 256,
        name: { fontSize: 50, height: 70 },
        info: { position:{ top: 70, backgroundColor: "#ccc", fontColor:"#000" } }
    }
    const content1 = {
        name: "name",
        info: "info"
    }
    const ui1 = new CanvasUI( content1, config1 );
    ui1.mesh.position.set(-70, 4, -17 );
    ui1.mesh.rotation.set(1,360,237.75);
    scene.add( ui1.mesh );
}

function create2(){
    const config2 = {
        panelSize: { height: 7,width:7},
        height: 256,
        name: { fontSize: 50, height: 70 },
        info: { position:{ top: 70, backgroundColor: "#ccc", fontColor:"#000" } }
    }
    const content2 = {
        name: "name",
        info: "info"
    }
    const ui2 = new CanvasUI( content2, config2 );
    ui2.mesh.position.set(-70, 4, -37 );
    ui2.mesh.rotation.set(1,360,237.75);
    scene.add( ui2.mesh );
}

function create3(){
    const config3 = {
        panelSize: { height: 7,width:7},
        height: 256,
        name: { fontSize: 50, height: 70 },
        info: { position:{ top: 70, backgroundColor: "#ccc", fontColor:"#000" } }
    }
    const content3 = {
        name: "name",
        info: "info"
    }
    const ui3 = new CanvasUI( content3, config3 );
    ui3.mesh.position.set( -7, 4, -60 );
    // ui3.mesh.rotation.set(0,0,0);
    scene.add( ui3.mesh );
}
function create4(){
    const config4 = {
        panelSize: { height: 7,width:7},
        height: 256,
        name: { fontSize: 50, height: 70 },
        info: { position:{ top: 70, backgroundColor: "#ccc", fontColor:"#000" } }
    }
    const content4 = {
        name: "name",
        info: "info"
    }
    const ui4 = new CanvasUI( content4, config4 );
    ui4.mesh.position.set( -50, 4, -60 );
    // ui3.mesh.rotation.set(0,0,0);
    scene.add( ui4.mesh );
}

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );

		this.assetsPath = '../assets/';
        
		camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 500 );
		camera.position.set( 1, 1.6, 0 );
        
        this.dolly = new THREE.Object3D(  );
        this.dolly.position.set(-15, 0, 0);
        this.dolly.add( camera );
        this.dummyCam = new THREE.Object3D();
        camera.add( this.dummyCam );
        
		scene = new THREE.Scene();
        scene.add( this.dolly );
        
		const ambient = new THREE.HemisphereLight(0xFFFFFF, 0xAAAAAA, 0.8);
		scene.add(ambient);

        // explore.click(() => {
        //     if(!gsap.isTweening(camera.position)){
        //       gsap.to(camera.position,{
        //         duration: 1,
        //         z: explorer ?-50:4,
        //         ease: "power3.inOut",
        //       })
        //       explorer = !explorer;
        //     console.log("hai");
        //     }
        //   });
        //   explore1.click(() => {
        //     if(!gsap.isTweening(camera.position)){
        //       gsap.to(camera.position,{
        //         duration: 1,
        //         z: -50,
        //         ease: "power3.inOut",
        //       })
        //       explorer = !explorer;
        //     }
        //   });
			
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.outputEncoding = THREE.sRGBEncoding;
		container.appendChild( this.renderer.domElement );
        this.setEnvironment();
	
        window.addEventListener( 'resize', this.resize.bind(this) );
        

        // const config = {
        //     panelSize: { height: 7,width:7},
        //     height: 256,
        //     name: { fontSize: 50, height: 70 },
        //     info: { position:{ top: 70, backgroundColor: "#ccc", fontColor:"#000" } }
        // }
        // const content = {
        //     name: "name",
        //     info: "info"
        // }

        // this.ui1 = new CanvasUI( content, config );
        // this.ui1.mesh.position.set(-30, 4, -7 );
        // this.ui1.mesh.rotation.set(1,360,237.75);
        // this.scene.add( this.ui1.mesh );

        // this.ui2 = new CanvasUI( content, config );
        // this.ui2.mesh.position.set(-30, 4, 23 );
        // this.ui2.mesh.rotation.set(1,360,237.75);
        // this.scene.add( this.ui2.mesh );

        // this.ui5 = new CanvasUI( content, config );
        // this.ui5.mesh.position.set(-30, 4, 57 );
        // this.ui5.mesh.rotation.set(1,360,237.75);
        // this.scene.add( this.ui5.mesh );

        // this.ui3 = new CanvasUI( content, config );
        // this.ui3.mesh.position.set(-30, 4, -35 );
        // this.ui3.mesh.rotation.set(1,360,237.75);
        // this.scene.add( this.ui3.mesh );

        // this.ui4 = new CanvasUI( content, config );
        // this.ui4.mesh.position.set(-30, 4, -70 );
        // this.ui4.mesh.rotation.set(1,360,237.75);
        // this.scene.add( this.ui4.mesh );

        this.clock = new THREE.Clock();
        this.up = new THREE.Vector3(0,1,0);
        this.origin = new THREE.Vector3();
        this.workingVec3 = new THREE.Vector3();
        this.workingQuaternion = new THREE.Quaternion();
        this.raycaster = new THREE.Raycaster();
        
        this.stats = new Stats();
		container.appendChild( this.stats.dom );
        
		this.loadingBar = new LoadingBar();
		
		this.loadCollege();
        
        const self = this;
        
        // fetch('./college.json')
        //     .then(response => response.json())
        //     .then(obj =>{
        //         self.boardShown = '';
        //         self.boardData = obj;
        //     });
	}
	
    setEnvironment(){
        const loader = new RGBELoader().setDataType( THREE.UnsignedByteType );
        const pmremGenerator = new THREE.PMREMGenerator( this.renderer );
        pmremGenerator.compileEquirectangularShader();
        
        const self = this;
        
        loader.load( '../assets/hdr/living_room.hdr', ( texture ) => {
          const envMap = pmremGenerator.fromEquirectangular( texture ).texture;
          pmremGenerator.dispose();

          scene.environment = envMap;

        }, undefined, (err)=>{
            console.error( 'An error occurred setting the environment');
        } );
    }
    
    resize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );  
    }
    
    

    // onClick() {
       
    //     mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    //     mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    //     raycaster1.setFromCamera( mouse, camera );
    
    //     var inter = raycaster1.intersectObjects( obj, true );
    //     // console.log(obj);
    //      if ( inter.length > 0 ) {
    //         console.log( 'Intersection:', inter );
    //         // var object = intersects[0].object;
    //         for ( let i = 0; i < inter.length; i ++ ) {

    //             if(inter[i].object.name=="Vainavam_Lakshmi_14"){
                    
    //                 create1();
    //             }
                
    //             else if(inter[i].object.name=="Vainavam_Varaaka_moorthi_28_0"){
                    
    //                 create2();
    //             }
    //             else if(inter[i].object.name=="Krishnar_obj1"){
                    
    //                 create3();
    //             }
                
    //             else if(inter[i].object.name=="Boha_shakthi_obj"){
                    
    //                 create4();
    //             }
        
    //         }
          
        
        
    //      }
        
    // }
    
    
	loadCollege(){
        
		const loader = new GLTFLoader( ).setPath(this.assetsPath);
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath( '../libs/three/js/draco/' );
        loader.setDRACOLoader( dracoLoader );
        
        const self = this;
		
		// Load a glTF resource
		loader.load(
			// resource URL
			'museum_santhosh.glb',
			// called when the resource is loaded
			function ( gltf ) {

                const college = gltf.scene;
				scene.add( college );
                console.log(college);
				
				college.traverse(function (child) {
    				if (child.isMesh){
                        // console.log(child);
                        // self.proxy = child;
						if (child.name.indexOf("pot020")!=-1){
							// child.material.visible = false;
                            // obj.push(child);
							self.proxy = child;
						}
                        // if (child.name.indexOf("Vainavam_Varaaka_moorthi")!=-1){
						// 	// child.material.visible = false;
                        //     obj.push(child);
						
						// }
                        
                        // if (child.name.indexOf("Krishnar_obj1")!=-1){
						// 	// child.material.visible = false;
                        //     obj.push(child);
						
						// }
                        
                        // if (child.name.indexOf("Boha_shakthi_obj")!=-1){
						// 	// child.material.visible = false;
                        //     obj.push(child);
						
						}
                        // else if (child.material.name.indexOf('Glass')!=-1){
                        //     child.material.opacity = 0.1;
                        //     child.material.transparent = true;
                        // }else if (child.material.name.indexOf("SkyBox")!=-1){
                        //     const mat1 = child.material;
                        //     const mat2 = new THREE.MeshBasicMaterial({map: mat1.map});
                        //     child.material = mat2;
                        //     mat1.dispose();
                        // }
				});
                       
                // const door1 = college.getObjectByName("LobbyShop_Door__1_");
                // const door2 = college.getObjectByName("LobbyShop_Door__2_");
                // const pos = door1.position.clone().sub(door2.position).multiplyScalar(0.5).add(door2.position);
                // const obj = new THREE.Object3D();
                // obj.name = "LobbyShop";
                // obj.position.copy(pos);
                // college.add( obj );
                
                self.loadingBar.visible = false;
			
                self.setupXR();
			},
			// called while loading is progressing
			function ( xhr ) {

				self.loadingBar.progress = (xhr.loaded / xhr.total);
				
			},
			// called when loading has errors
			function ( error ) {

				console.log( 'An error happened' );

			}
		);
	}
    
    onMove( forward, turn ){
        if (this.dolly){
            this.dolly.userData.forward = forward;
            this.dolly.userData.turn = -turn;
        }
    }
    
    setupXR(){
        this.renderer.xr.enabled = true;

        const self = this;

        self.joystick = new JoyStick({
            onMove: self.onMove.bind(self)
        });
 
        function vrStatus( available ){
            if (available){
        
                function onSelectStart( event ) {

                    this.userData.selectPressed = true;

                }

                function onSelectEnd( event ) {

                    this.userData.selectPressed = false;

                }

                self.controllers = self.buildControllers( self.dolly );

                self.controllers.forEach( ( controller ) =>{
                    controller.addEventListener( 'selectstart', onSelectStart );
                    controller.addEventListener( 'selectend', onSelectEnd );
                });
                
            }else{
                
                self.joystick = new JoyStick({
                    onMove: self.onMove.bind(self)
                });
                
            }
        }
        
        // const btn = new VRButton( this.renderer, { vrStatus } );
        
        this.renderer.setAnimationLoop( this.render.bind(this) );
    }
    
    buildControllers( parent = this.scene ){
        const controllerModelFactory = new XRControllerModelFactory();

        const geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -1 ) ] );

        const line = new THREE.Line( geometry );
        line.scale.z = 0;
        
        const controllers = [];
        
        for(let i=0; i<=1; i++){
            const controller = this.renderer.xr.getController( i );
            controller.add( line.clone() );
            controller.userData.selectPressed = false;
            parent.add( controller );
            controllers.push( controller );
            
            const grip = this.renderer.xr.getControllerGrip( i );
            grip.add( controllerModelFactory.createControllerModel( grip ) );
            parent.add( grip );
        }
        
        return controllers;
    }
    
    moveDolly(dt){
        if (this.proxy === undefined) return;
        
        const wallLimit = 1.3;
        const speed = 2;
		let pos = this.dolly.position.clone();
        pos.y += 1;
        
		let dir = new THREE.Vector3();
        
        if (this.joystick === undefined){
            //Store original dolly rotation
            const quaternion = this.dolly.quaternion.clone();
            //Get rotation for movement from the headset pose
            this.dolly.quaternion.copy( this.dummyCam.getWorldQuaternion() );
            this.dolly.getWorldDirection(dir);
            dir.negate();
        }else{
            this.dolly.getWorldDirection(dir);
            if (this.dolly.userData.forward>0){
                dir.negate();
            }else{
                dt = -dt;
            }
        }
		this.raycaster.set(pos, dir);
		
        let blocked = false;
		
		let intersect = this.raycaster.intersectObject(this.proxy);
        if (intersect.length>0){
            if (intersect[0].distance < wallLimit) blocked = true;
        }
		
		if (!blocked){
            this.dolly.translateZ(-dt*speed);
            pos = this.dolly.getWorldPosition( this.origin );
		}
		
        //cast left
        dir.set(-1,0,0);
        dir.applyMatrix4(this.dolly.matrix);
        dir.normalize();
        this.raycaster.set(pos, dir);

        intersect = this.raycaster.intersectObject(this.proxy);
        if (intersect.length>0){
            if (intersect[0].distance<wallLimit) this.dolly.translateX(wallLimit-intersect[0].distance);
        }

        //cast right
        dir.set(1,0,0);
        dir.applyMatrix4(this.dolly.matrix);
        dir.normalize();
        this.raycaster.set(pos, dir);

        intersect = this.raycaster.intersectObject(this.proxy);
        if (intersect.length>0){
            if (intersect[0].distance<wallLimit) this.dolly.translateX(intersect[0].distance-wallLimit);
        }

        //cast down
        dir.set(0,-1,0);
        pos.y += 1.5;
        this.raycaster.set(pos, dir);
        
        intersect = this.raycaster.intersectObject(this.proxy);
        if (intersect.length>0){
            this.dolly.position.copy( intersect[0].point );
        }

        //Restore the original rotation
        if (this.joystick === undefined) this.dolly.quaternion.copy( quaternion );
	}
		
    get selectPressed(){
        return ( this.controllers !== undefined && (this.controllers[0].userData.selectPressed || this.controllers[1].userData.selectPressed) );    
    }
    
    showInfoboard( name, info, pos ){
        if (this.ui === undefined ) return;
        this.ui.position.copy(pos).add( this.workingVec3.set( 0, 1.3, 0 ) );
        const camPos = this.dummyCam.getWorldPosition( this.workingVec3 );
        this.ui.updateElement( 'name', info.name );
        this.ui.updateElement( 'info', info.info );
        this.ui.update();
        this.ui.lookAt( camPos )
        this.ui.visible = true;
        this.boardShown = name;
    }

	render( timestamp, frame ){
        const dt = this.clock.getDelta();
        
        let moved = false;


        
        
        
        if (this.renderer.xr.isPresenting && this.selectPressed){
            this.moveDolly(dt);
            moved = true;
        }
        
        if (this.joystick !== undefined){
            if (this.dolly.userData.forward !== undefined){
                if (this.dolly.userData.forward != 0){
                    this.moveDolly(dt);
                    moved = true;
                }
                this.dolly.rotateY(this.dolly.userData.turn*dt);
            }
        }
        
        // window.addEventListener( 'click', this.onClick, false );
        this.stats.update();
		this.renderer.render(scene, camera);
	}
}

export { App };
