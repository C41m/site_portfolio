import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
    const textRef = useRef();
  
    // Use useFrame para animar o texto
    useFrame((state) => {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    });
    return (
        <mesh>
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={['orange']}/>
                    <Text ref={textRef} fontSize={1.3} color="black">
                        Hello World!
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
};

export default Cube;
