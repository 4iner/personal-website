/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Html } from '@react-three/drei';
import Layout from '../components/Layout';

const skills = [
    { name: 'Java', description: 'Enterprise development with Spring Boot and Android apps.' },
    { name: 'React', description: 'Frontend development with React and React Native.' },
    { name: 'Python', description: 'Data science, automation, and backend development.' },
    { name: 'GraphQL', description: 'API development and integration.' },
    { name: 'PostgreSQL', description: 'Database design and optimization.' },
    { name: 'C#', description: '.NET development and Unity game programming.' },
];

function SkillCard({ position, rotation, skill, isActive, onClick }) {
    return (
        <group position={position} rotation={rotation} onClick={onClick}>
            <mesh>
                <planeGeometry args={[2, 1]} />
                <meshBasicMaterial 
                    color={isActive ? "#ffffff" : "#cccccc"}
                    transparent
                    opacity={isActive ? 1 : 0.7}
                />
            </mesh>
            <Text
                position={[0, 0, 0.01]}
                fontSize={0.2}
                color="#000000"
                anchorX="center"
                anchorY="middle"
            >
                {skill.name}
            </Text>
        </group>
    );
}

function Carousel() {
    const [activeSkill, setActiveSkill] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const groupRef = useRef();
    const targetRotation = useRef(0);
    const isDragging = useRef(false);
    const previousMouseX = useRef(0);
    const dragStartRotation = useRef(0);
    const dragVelocity = useRef(0);
    const lastDragDirection = useRef(1); // 1 for right, -1 for left

    const handlePointerDown = (e) => {
        isDragging.current = true;
        previousMouseX.current = e.clientX;
        dragStartRotation.current = groupRef.current.rotation.y;
        dragVelocity.current = 0;
    };

    const handlePointerMove = (e) => {
        if (isDragging.current && !activeSkill) {
            const deltaX = e.clientX - previousMouseX.current;
            const rotationSpeed = 0.002;
            
            const rotation = deltaX * rotationSpeed;
            groupRef.current.rotation.y += rotation;
            
            // Store drag direction
            lastDragDirection.current = Math.sign(deltaX) || 1;
            
            dragVelocity.current = rotation;
            previousMouseX.current = e.clientX;
        }
    };

    const handlePointerUp = (e) => {
        if (isDragging.current) {
            isDragging.current = false;
            
            // Calculate final velocity based on movement speed
            const deltaX = e.clientX - previousMouseX.current;
            const deltaTime = performance.now() - previousMouseX.current;
            dragVelocity.current = (deltaX * 0.001) / (deltaTime || 1);
        }
    };

    useFrame((state, delta) => {
        if (!activeSkill && !isDragging.current) {
            if (Math.abs(dragVelocity.current) > 0.0001) {
                // Momentum follows drag direction
                dragVelocity.current *= 0.98;
                groupRef.current.rotation.y += dragVelocity.current;
            } else {
                dragVelocity.current = 0;
                // Auto-rotate in the last drag direction
                groupRef.current.rotation.y += 0.001 * lastDragDirection.current;
                
                if (groupRef.current.rotation.y >= Math.PI * 2) {
                    groupRef.current.rotation.y = 0;
                } else if (groupRef.current.rotation.y <= -Math.PI * 2) {
                    groupRef.current.rotation.y = 0;
                }
            }
        } else if (activeSkill) {
            const diff = targetRotation.current - groupRef.current.rotation.y;
            const normalizedDiff = ((diff + Math.PI) % (Math.PI * 2)) - Math.PI;
            groupRef.current.rotation.y += normalizedDiff * 0.05;
        }
    });

    const handleClick = (skill, index) => {
        const dragDistance = Math.abs(groupRef.current.rotation.y - dragStartRotation.current);
        if (dragDistance < 0.01) {
            if (activeSkill === skill) {
                setActiveSkill(null);
                setActiveIndex(null);
                groupRef.current.rotation.y = groupRef.current.rotation.y % (Math.PI * 2);
                targetRotation.current = groupRef.current.rotation.y;
            } else {
                setActiveSkill(skill);
                setActiveIndex(index);
                
                const currentRotation = groupRef.current.rotation.y % (Math.PI * 2);
                const normalizedCurrent = currentRotation < 0 ? currentRotation + Math.PI * 2 : currentRotation;
                
                const targetAngle = -(index / skills.length) * Math.PI * 2;
                const normalizedTarget = targetAngle % (Math.PI * 2);
                
                let diff = normalizedTarget - normalizedCurrent;
                if (Math.abs(diff) > Math.PI) {
                    diff = diff > 0 ? diff - Math.PI * 2 : diff + Math.PI * 2;
                }
                
                targetRotation.current = normalizedCurrent + diff;
            }
        }
    };

    return (
        <group 
            ref={groupRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            {skills.map((skill, index) => {
                const angle = (index / skills.length) * Math.PI * 2;
                const radius = 4;
                return (
                    <SkillCard
                        key={skill.name}
                        position={[
                            Math.sin(angle) * radius,
                            0,
                            Math.cos(angle) * radius
                        ]}
                        rotation={[0, angle, 0]}
                        skill={skill}
                        isActive={activeSkill === skill}
                        onClick={() => handleClick(skill, index)}
                    />
                );
            })}
            {activeSkill && (
                <Html position={[0, 1.5, 0]} center>
                    <div style={{
                        background: 'rgba(0, 0, 0, 0.8)',
                        padding: '20px',
                        borderRadius: '8px',
                        color: 'white',
                        width: '300px',
                        textAlign: 'center',
                    }}>
                        <h3 style={{ margin: '0 0 10px 0' }}>{activeSkill.name}</h3>
                        <p style={{ margin: '0' }}>{activeSkill.description}</p>
                        <button 
                            onClick={() => {
                                setActiveSkill(null);
                                setActiveIndex(null);
                            }}
                            style={{
                                background: 'white',
                                border: 'none',
                                padding: '5px 15px',
                                borderRadius: '4px',
                                marginTop: '10px',
                                cursor: 'pointer'
                            }}
                        >
                            Close
                        </button>
                    </div>
                </Html>
            )}
        </group>
    );
}

const SkillsPage = () => (
    <Layout>
        <div style={{ 
            width: '100%', 
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Canvas 
                camera={{ 
                    position: [0, 2, 11],
                    fov: 45,
                }}
                gl={{ alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Carousel />
            </Canvas>
        </div>
    </Layout>
);

export default SkillsPage;
