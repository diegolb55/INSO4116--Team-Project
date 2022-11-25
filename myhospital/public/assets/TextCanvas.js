import { ReactDOM } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef } from 'react';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


import kanit from './Kanit Light_Regular.json'
import { extend } from '@react-three/fiber'
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'


extend({ TextGeometry });
extend({ OrbitControls });

const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
      camera,
      gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const PLight = () => {
    const light = useRef()
    useFrame(({clock}) => {

        const b = ( Math.sin(clock.getElapsedTime()) *.8 ) * 2;

        light.current.position.x = b;

    });

    return (
        <pointLight ref={light} position={[0, 0, 0]} color="#E4DEC2" intensity={1}/>

    )
}
const Text = ({text}) => {

    const font = new FontLoader().parse(kanit);

    const textbox = useRef()


    useFrame(({clock}) => {
       

        const a = ( Math.sin(clock.getElapsedTime()) * 0.09 ) * .5;
        const b = ( Math.sin(clock.getElapsedTime()) * .03 ) * 1;

        textbox.current.rotation.x = a;
        textbox.current.rotation.z = b;


        



    });

    return (
        <mesh position={[-8, -1, 2]} ref={textbox}>
            <textGeometry args={[text, {font, size:1.5, height:.5}]}/>
            <meshLambertMaterial attach='material' color={'lightgray'} emissive={"red"}/>
        </mesh>
    )
}


export default function TextCanvas({text}){


   

    return (
        

        <div id="canvas-container">
            <Canvas>
                {/* <CameraControls /> */}
                <Text text={text}/>
                <PLight/>
                

            </Canvas>
        </div>
    )
}