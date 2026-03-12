import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useGLTF, Center, Environment, ContactShadows } from '@react-three/drei';
import { EffectComposer, Pixelation } from '@react-three/postprocessing';
import * as THREE from 'three';

const Model = () => {
    const groupRef = useRef();
    const { scene } = useGLTF('/models/niknet_art-crt-2749.glb');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ensure all materials are visible and set up correctly for the light
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            // Some models have very low emissive or dark materials that need a boost
            if (child.material) {
                child.material.envMapIntensity = 1.5;
            }
        }
    });

    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Normalize to [-1, 1]
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            if (isMobile) {
                // Clear mouse rotation and rotate automatically on mobile
                groupRef.current.rotation.y += 0.005;
                groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            } else {
                const targetRotationY = mouse.current.x;
                const targetRotationX = -mouse.current.y;

                groupRef.current.rotation.y = THREE.MathUtils.lerp(
                    groupRef.current.rotation.y,
                    targetRotationY,
                    0.05
                );
                groupRef.current.rotation.x = THREE.MathUtils.lerp(
                    groupRef.current.rotation.x,
                    targetRotationX,
                    0.05
                );
            }
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={isMobile ? 0.2 : 0}
            floatIntensity={isMobile ? 1 : 0.5}
        >
            <primitive
                ref={groupRef}
                object={scene}
                scale={isMobile ? 3.5 : 4.8}
                position={isMobile ? [0, 0, 0] : [3, -0.5, 0]}
            />
        </Float>
    );
};

const HeroCanvas = () => {
    return (
        <div className="w-full h-full opacity-95">
            <Canvas
                shadows
                camera={{ position: [0, 0, 10], fov: 45 }}
                dpr={[1, 2]}
            >

                {/* Enhanced Lighting Setup */}
                <ambientLight intensity={2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} castShadow />
                <pointLight position={[-10, -10, -10]} color="#14b8a6" intensity={5} />

                <Suspense fallback={null}>
                    {/* Environment provides the necessary reflections for PBR materials */}
                    <Environment preset="city" />
                    <Model />
                    <EffectComposer disableNormalPass>
                        <Pixelation granularity={5} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroCanvas;
