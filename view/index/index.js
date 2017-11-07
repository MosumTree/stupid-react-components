import React ,{Component}           from 'react'
import {Link}                       from 'react-router-dom'
import Style                        from './index.less'
import * as THREE                   from 'three';
//import {Stats}                        from 'stats';
export default class extends Component{
    constructor(props){
        super(props);
    }
    onWindowResize(camera,renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
    componentDidMount(){
         /* 
            * 围绕某个 x,y,z轴测试
            */
            
            
            var renderer,width,height;
            var stats;

            function initThree() {
                width = document.body.clientWidth;
                height = document.body.clientHeight;
                renderer = new THREE.WebGLRenderer({
                    antialias : true
                });
                renderer.setSize(width, height);
                document.getElementById('index').appendChild(renderer.domElement);
                //document.body.appendChild(renderer.domElement);
                renderer.setClearColor(0xFF4400, 1);
                
                // stats = new Stats();
                // stats.domElement.style.position = 'absolute';
                // stats.domElement.style.left = '0px';
                // stats.domElement.style.top = '0px';
                // document.body.appendChild(stats.domElement);
            }

            var camera;
            function initCamera() {
                camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
                camera.position.x = 100;
                camera.position.y = 300;
                camera.position.z = 600;
                camera.up.x = 0;
                camera.up.y = 1;
                camera.up.z = 0;
                camera.lookAt({
                    x : 0,
                    y : 0,
                    z : 0
                });
            }

            var scene;
            function initScene() {
                scene = new THREE.Scene();
            }

            var light;
            function initLight() {
                light = new THREE.AmbientLight(0xFF0000);
                light.position.set(100, 100, 200);
                scene.add(light);

            }

            var cube;
            var mesh;
            function initObject() {
               
                var geometry = new THREE.BoxGeometry( 100, 100, 100 );
                
                for ( var i = 0; i < geometry.faces.length; i += 2 ) {

                    var hex = Math.random() * 0xffffff;
                    geometry.faces[ i ].color.setHex( hex );
                    geometry.faces[ i + 1 ].color.setHex( hex );

                }
                
                var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
                mesh = new THREE.Mesh( geometry,material);
                //mesh.position = new THREE.Vector3(0,0,0);
                scene.add(mesh);
                
                
            }
            
            function initGrid(){
                var helper = new THREE.GridHelper( 1000, 50 ,0x666666,0x666666);
                scene.add( helper );
            }
            
            function threeStart() {
                initThree();
                initCamera();
                initScene();
                initLight();


                initObject();
                initGrid();
                
                animation();

            }

            // 帧循环、游戏循环
            function animation()
            {
                mesh.rotation.y +=0.01;
                mesh.rotation.z +=0.01;
                renderer.render(scene, camera);
                requestAnimationFrame(animation);

            }
        threeStart();
    }
    render(){
        let _this = this;
        return  <div className={Style.indexContainer} id = "index">
                    <div className={Style.animate}>
                    </div>
                    <h1 className = {Style.title}>Stupid Components</h1>
                </div>
        
    }
}