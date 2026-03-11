import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useGLTF, Center, Environment, ContactShadows } from '@react-three/drei';
import { EffectComposer, Pixelation } from '@react-three/postprocessing';

const Model = () => {
    // Model moved to public/models for consistent Vite serving
    const groupRef = useRef();
    const { scene } = useGLTF('/models/niknet_art-crt-2749.glb');

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

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(t / 4) * 0.3;
            groupRef.current.rotation.x = Math.cos(t / 8) * 0.1;
        }
    });

    return (
        <primitive
            ref={groupRef}
            object={scene}
            scale={3.8}
            position={[5, 1, 1]}
        />
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

                    <Float speed={2} rotationIntensity={5} floatIntensity={5}>
                        <Center>
                            <Model />
                        </Center>
                    </Float>

                    <ContactShadows
                        position={[0, -2.5, 0]}
                        opacity={0.4}
                        scale={20}
                        blur={2.5}
                        far={4.5}
                    />

                    <EffectComposer disableNormalPass>
                        <Pixelation granularity={3} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroCanvas;
