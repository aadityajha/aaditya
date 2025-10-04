"use client";
import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sky, Environment } from "@react-three/drei";
import * as THREE from "three";
import "./Jungle3DScene.css";

// --------- Procedural Grass Hill -----------
function Hill() {
    const geom = useMemo(() => {
        const g = new THREE.PlaneGeometry(300, 300, 300, 300);
        g.rotateX(-Math.PI / 2);
        // add noise to vertices for hill bumps
        const pos = g.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            const z = pos.getZ(i);
            const noise = 6 * (Math.sin(x * 0.05) + Math.cos(z * 0.05)) + Math.random() * 2;
            pos.setY(i, y + noise * 0.3);
        }
        pos.needsUpdate = true;
        g.computeVertexNormals();
        return g;
    }, []);

    const mat = useMemo(
        () =>
            new THREE.MeshStandardMaterial({
                color: "#1f4d1f",
                roughness: 1,
                metalness: 0,
            }),
        []
    );

    return <mesh geometry={geom} material={mat} receiveShadow castShadow />;
}

// --------- Rain Particles -----------
function Rain({ count = 4000 }) {
    const ref = useRef();
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const ix = i * 3;
            p[ix] = (Math.random() - 0.5) * 300;
            p[ix + 1] = Math.random() * 80;
            p[ix + 2] = (Math.random() - 0.5) * 300;
        }
        return p;
    }, [count]);

    const geom = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return g;
    }, [positions]);

    const mat = useMemo(
        () =>
            new THREE.PointsMaterial({
                color: "#cde6ff",
                size: 0.15,
                transparent: true,
                opacity: 0.7,
                depthWrite: false,
            }),
        []
    );

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.position.y = -(t * 20) % 80;
    });

    return <points ref={ref} geometry={geom} material={mat} />;
}

// --------- Volumetric Clouds -----------
function Clouds() {
    const mat = new THREE.MeshStandardMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.35,
        depthWrite: false,
    });

    return (
        <group position={[0, 25, 0]}>
            {Array.from({ length: 12 }).map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (Math.random() - 0.5) * 150,
                        Math.random() * 20,
                        (Math.random() - 0.5) * 150,
                    ]}
                    rotation={[0, 0, 0]}
                    scale={[
                        60 + Math.random() * 40,
                        20 + Math.random() * 10,
                        30 + Math.random() * 20,
                    ]}
                >
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial {...mat} />
                </mesh>
            ))}
        </group>
    );
}

// --------- Jungle Scene -----------
function Scene() {
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        state.camera.position.x = Math.sin(t * 0.03) * 12;
        state.camera.position.z = 22 + Math.cos(t * 0.05) * 12;
        state.camera.position.y = 10 + Math.sin(t * 0.2) * 1.5;
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <>
            {/* Light */}
            <ambientLight intensity={0.4} />
            <directionalLight
                position={[40, 50, 20]}
                intensity={1.3}
                castShadow
                shadow-mapSize={[2048, 2048]}
            />

            {/* Atmosphere */}
            <fog attach="fog" args={["#0a1a0f", 20, 180]} />
            <Sky sunPosition={[50, 15, 10]} turbidity={12} rayleigh={2} />
            <Environment preset="forest" />

            {/* Elements */}
            <Suspense fallback={null}>
                <Hill />
                <Clouds />
                <Rain />
            </Suspense>

            <OrbitControls enablePan={false} enableZoom={false} />
        </>
    );
}

// --------- Main Page -----------
export default function Jungle3DScene() {
    return (
        <div className="canvas-wrap">
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 8, 24], fov: 40 }}
                gl={{ antialias: true }}
            >
                <Scene />
            </Canvas>
            <div className="hint">🌿 Hyper-real 3D Jungle · Clouds · Fog · Rain</div>
        </div>
    );
}