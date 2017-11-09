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
        camera, scene, renderer,light;
        init();
        animate();
        function init() {
            var container;
            container = document.createElement( 'div' );
            document.getElementById('index').appendChild(container);
            camera = new THREE.PerspectiveCamera( 80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000 );
            camera.position.z = 1000;
            scene = new THREE.Scene();
            scene.background = new THREE.Color().setRGB( 0, 0.3, 0.3 );
            scene.fog = new THREE.Fog( scene.background, 1, 5000 );
            var i, line, vertex1, vertex2, material, p,
                parameters = [ [ 0.9, 0xffffff, 0.125, 1.2 ],
                             [ 5.5, 0xffffff, 0.125, 1.5 ] ];
            var geometry = createGeometry();
            for( i = 0; i < parameters.length; ++ i ) {
                p = parameters[ i ];
                material = new THREE.LineBasicMaterial( { color: p[ 1 ], opacity: p[ 2 ], linewidth: p[ 3 ] } );
                line = new THREE.LineSegments( geometry, material );
                line.scale.x = line.scale.y = line.scale.z = p[ 0 ];
                line.originalScale = p[ 0 ];
                line.rotation.y = Math.random() * Math.PI;
                line.updateMatrix();
                scene.add( line );
            }

            



            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
            renderer.setClearColor(0X001133,1.0);
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
        function createGeometry() {
            var geometry = new THREE.Geometry();
            for ( var i = 0; i < 300; i ++ ) {
                var vertex1 = new THREE.Vector3();
                vertex1.x = Math.random() * 2 - 1;
                vertex1.y = Math.random() * 2 - 1;
                vertex1.z = Math.random() * 2 - 1;
                vertex1.normalize();
                vertex1.multiplyScalar( r );
                var vertex2 = vertex1.clone();
                vertex2.multiplyScalar( Math.random() * 0.3 + 1 );
                geometry.vertices.push( vertex1 );
                geometry.vertices.push( vertex2 );
            }
            for ( var i = 0; i < 1000; i ++ ) {
                var vertex1 = new THREE.Vector3();
                vertex1.x = Math.random() * 2 - 1;
                vertex1.y = Math.random() * 2 - 1;
                vertex1.z = Math.random() * 2 - 1;
                vertex1.normalize();
                vertex1.multiplyScalar( r );
                var vertex2 = vertex1.clone();
                vertex2.multiplyScalar( 1.01 );
                geometry.vertices.push( vertex1 );
                geometry.vertices.push( vertex2 );
            }
            return geometry;
        }
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
                //event.preventDefault();
                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;
            }
        }
        function onDocumentTouchMove( event ) {
            if ( event.touches.length == 1 ) {
                //event.preventDefault();
                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;
            }
        }
        //
        function animate() {
            requestAnimationFrame( animate );
            
            camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
            camera.position.x += ( - mouseX + 200 - camera.position.x ) * .05;
            camera.lookAt( scene.position );
            renderer.render( scene, camera );
            var time = Date.now() * 0.0001;
            for ( var i = 0; i < scene.children.length; i ++ ) {
                var object = scene.children[ i ];
                if ( object instanceof THREE.Line ) {
                    object.rotation.y = time * ( i < 4 ? ( i + 1 ) : - ( i + 1 ) );
                    if ( i < 5 ) object.scale.x = object.scale.y = object.scale.z = object.originalScale * (i/5+1) * (1 + 0.2 * Math.sin( 7*time ) );
                }
            }
        }
    }
    goComponent(){
        alert("hahah")
    }
    render(){
        let _this = this;
        return  <div className={Style.indexContainer} id = "index">
                    <div className={Style.animate}>
                    </div>
                    <h1 className = {Style.title}>Stupid Components</h1>
                    <p>The react components library</p>
                    <div className = {Style.buttonWrapper}>
                        <div><Link className = {Style.start} to="/buttonView">开始体验</Link></div>
                        <div>点个赞</div>
                    </div>
                </div>
        
    }
}