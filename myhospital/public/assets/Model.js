import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { extend } from '@react-three/fiber'


import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


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
    return <orbitControls ref={controls} args={[camera, domElement]} enableZoom={false} />;
};


const PLight = () => {
    const light = useRef()
    // useFrame(({clock}) => {

    //     const b = ( Math.sin(clock.getElapsedTime()) *.8 ) * 2;

    //     light.current.position.x = b;

    // });

    return (
        <>
            <pointLight ref={light} position={[4, 4, 4]} color="#E4DEC2" intensity={4}/>
            <ambientLight intensity={2} />
            {/* <pointLight ref={light} position={[-4, -4, -4]} color="#E4DEC2" intensity={2}/> */}

        </>

    )
}
const ImportedScene = () => {
    const gltf = useLoader(GLTFLoader, '/assets/heartBubble/scene.gltf');
    // console.log(gltf);
    gltf.scene.scale.set(.03, .03, .03)

    useFrame(({clock}) => {

        const b = ( Math.sin(clock.getElapsedTime())) * 4 ;

        gltf.scene.children[0].rotation.z = b;

    });

    return (
        <Suspense fallback={null}>
            <primitive object={gltf.scene} />
        </Suspense>
    )
}

export default function HeartCanvas(){

    
    return (
        <div style={{
            // border: "2px solid red",
            height: "60vw",
            width: "60vw",
            margin: "50px auto",
            borderRadius: "100%",
            overflow:'hidden'
        }}>
            <Canvas>
                <CameraControls/>
                <ImportedScene />
                <PLight/>
            </Canvas>
        </div>
    )
}