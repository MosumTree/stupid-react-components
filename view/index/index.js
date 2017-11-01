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
    animate(camera,scene,renderer) {
        const _this = this;
        var count = 0;
        var time = performance.now() / 1000;
        scene.traverse( function ( child ) {
            child.rotation.x = count + ( time / 3 );
            child.rotation.z = count + ( time / 4 );
            count ++;
        } );
        renderer.render( scene, camera );
        requestAnimationFrame( _this.animate(camera,scene,renderer) );
    }
    componentDidMount(){
        var camera, scene, renderer;
        var container, separation = 100, amountX = 50, amountY = 50,
        particles, particle;
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xff6700);

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        camera = new THREE.PerspectiveCamera( 33, window.innerWidth / window.innerHeight, 0.1, 100 );
        camera.position.z = 10;
        scene.background = new THREE.Color( 0, 0, 0 );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        //
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
        var geometry = new THREE.Geometry();
        for ( var i = 0; i < 100; i ++ ) {
            particle = new THREE.Sprite( material );
            particle.position.x = Math.random() * 2 - 1;
            particle.position.y = Math.random() * 2 - 1;
            particle.position.z = Math.random() * 2 - 1;
            particle.position.normalize();
            particle.position.multiplyScalar( Math.random() * 10 + 450 );
            particle.scale.x = particle.scale.y = 10;
            scene.add( particle );
            geometry.vertices.push( particle.position );
        }
        // lines
        var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
        scene.add( line );




        //
        window.addEventListener( 'resize', this.onWindowResize.bind(camera,renderer), false );
        var animate = function () {
            var count = 0;
            var time = performance.now() / 1000;
            scene.traverse( function ( child ) {
                child.rotation.x = count + ( time / 3 );
                child.rotation.z = count + ( time / 4 );
                count ++;
            } );
            renderer.render( scene, camera );
            requestAnimationFrame( animate );
        };

        animate();
    }
    render(){
        let _this = this;
        return  <div className={Style.indexContainer}>
                    <div className={Style.animate}>
                    </div>
                    <h1 className = {Style.title}>Stupid Components</h1>
                </div>
        
    }
}