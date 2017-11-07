import React ,{Component}           from 'react'
import {Link}                       from 'react-router-dom'
import Style                        from './index.less'
import * as THREE                   from 'three';
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
        var SCREEN_WIDTH = window.innerWidth,
        SCREEN_HEIGHT = window.innerHeight,
        r = 450,
        mouseX = 0, mouseY = 0,
        windowHalfX = window.innerWidth / 2,
        windowHalfY = window.innerHeight / 2,
        camera, scene, renderer;
        init();
        animate();
        function init() {
            var container,particles, particle;
            container = document.createElement( 'div' );
            document.getElementById('index').appendChild(container);
            camera = new THREE.PerspectiveCamera( 80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000 );
            camera.position.z = 1000;
            scene = new THREE.Scene();
           // particles
            var PI2 = Math.PI * 2;
            var material = new THREE.Material( {
                color: 0xffffff,
                program: function ( context ) {
                    context.beginPath();
                    context.arc( 0, 0, 0.5, 0, PI2, true );
                    context.fill();
                }
            } );
            for ( var i = 0; i < 1000; i ++ ) {
                particle = new THREE.Sprite( material );
                particle.position.x = Math.random() * 2 - 1;
                particle.position.y = Math.random() * 2 - 1;
                particle.position.z = Math.random() * 2 - 1;
                particle.position.normalize();
                particle.position.multiplyScalar( Math.random() * 10 + 450 );
                particle.scale.multiplyScalar( 2 );
                scene.add( particle );
            }
            for (var i = 0; i < 300; i++) {
                var geometry = new THREE.Geometry();
                var vertex = new THREE.Vector3( Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1 );
                vertex.normalize();
                vertex.multiplyScalar( 450 );
                geometry.vertices.push( vertex );
                var vertex2 = vertex.clone();
                vertex2.multiplyScalar( Math.random() * 0.3 + 1 );
                geometry.vertices.push( vertex2 );
                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: Math.random() } ) );
                scene.add( line );
            }
            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
            renderer.setClearColor('#ff4400',1.0)
            container.appendChild( renderer.domElement );
            document.addEventListener( 'mousemove', onDocumentMouseMove, false );
            document.addEventListener( 'touchstart', onDocumentTouchStart, false );
            document.addEventListener( 'touchmove', onDocumentTouchMove, false );
            //
            window.addEventListener( 'resize', onWindowResize, false );
            // test geometry swapability 这个地方是定时变换的。可以去掉
            // setInterval( function () {
            //     var geometry = createGeometry();
            //     scene.traverse( function ( object ) {
            //         if ( object instanceof THREE.Line ) {
            //             object.geometry.dispose();
            //             object.geometry = geometry;
            //         }
            //     } );
            // }, 1000 );
        }
        /* function createGeometry() {
            for (var i = 0; i < 300; i++) {
                var geometry = new THREE.Geometry();
                var vertex = new THREE.Vector3( Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1 );
                vertex.normalize();
                vertex.multiplyScalar( 450 );
                geometry.vertices.push( vertex );
                var vertex2 = vertex.clone();
                vertex2.multiplyScalar( Math.random() * 0.3 + 1 );
                geometry.vertices.push( vertex2 );
                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: Math.random() } ) );
                scene.add( line );
            }
            return geometry;
        } */
        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
        function onDocumentMouseMove( event ) {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        }
        function onDocumentTouchStart( event ) {
            if ( event.touches.length > 1 ) {
                event.preventDefault();
                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;
            }
        }
        function onDocumentTouchMove( event ) {
            if ( event.touches.length == 1 ) {
                event.preventDefault();
                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;
            }
        }
        //
        function animate() {
            requestAnimationFrame( animate );
            
            camera.position.x += ( mouseX - camera.position.x ) * .05;
            camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
            camera.lookAt( scene.position );
            renderer.render( scene, camera );
        }
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