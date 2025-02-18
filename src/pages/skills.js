/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Html } from '@react-three/drei';
import Layout from '../components/Layout';
import SkillCard from '../components/SkillCard';

const skills = [
    { name: 'Java', description: 'Enterprise development with Spring Boot and Android apps.' },
    { name: 'React', description: 'Frontend development with React and React Native.' },
    { name: 'Python', description: 'Data science, automation, and backend development.' },
    { name: 'GraphQL', description: 'API development and integration.' },
    { name: 'PostgreSQL', description: 'Database design and optimization.' },
    { name: 'C#', description: '.NET development and Unity game programming.' },
];

function Carousel() {
    const [activeSkill, setActiveSkill] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const groupRef = useRef();
    const targetRotation = useRef(0);
    const isDragging = useRef(false);
    const previousMouseX = useRef(0);
    const dragStartRotation = useRef(0);
    const dragVelocity = useRef(0);
    const lastDragDirection = useRef(1);
    const [carouselRadius, setCarouselRadius] = useState(5);
    const touchStartTime = useRef(0);
    const touchStartPos = useRef(null);

    // Update radius based on screen width
    React.useEffect(() => {
        const updateRadius = () => {
            const width = window.innerWidth;
            // Scale radius between 3.5 and 6 based on screen width
            const newRadius = Math.max(3.5, Math.min(6, width / 300));
            setCarouselRadius(newRadius);
        };

        // Initial update
        updateRadius();

        // Update on resize
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, []);

    useFrame((state, delta) => {
        if (!activeSkill && !isDragging.current) {
            if (Math.abs(dragVelocity.current) > 0.0001) {
                dragVelocity.current *= 0.98;
                groupRef.current.rotation.y += dragVelocity.current;
            } else {
                dragVelocity.current = 0;
                groupRef.current.rotation.y += 0.001 * lastDragDirection.current;
                
                if (groupRef.current.rotation.y > Math.PI) {
                    groupRef.current.rotation.y -= Math.PI * 2;
                } else if (groupRef.current.rotation.y < -Math.PI) {
                    groupRef.current.rotation.y += Math.PI * 2;
                }
            }
        } else if (activeSkill) {
            const diff = targetRotation.current - groupRef.current.rotation.y;
            const normalizedDiff = ((diff + Math.PI) % (Math.PI * 2)) - Math.PI;
            groupRef.current.rotation.y += normalizedDiff * 0.05;
        }
    });

    const handlePointerDown = (e) => {
        isDragging.current = true;
        previousMouseX.current = e.touches ? e.touches[0].clientX : e.clientX;
        dragStartRotation.current = groupRef.current.rotation.y;
        dragVelocity.current = 0;
    };

    const handlePointerMove = (e) => {
        if (isDragging.current && !activeSkill) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const deltaX = clientX - previousMouseX.current;
            const rotationSpeed = 0.002;
            
            const rotation = deltaX * rotationSpeed;
            groupRef.current.rotation.y += rotation;
            
            lastDragDirection.current = Math.sign(deltaX) || 1;
            
            dragVelocity.current = rotation;
            previousMouseX.current = clientX;
        }
    };

    const handlePointerUp = (e) => {
        if (isDragging.current) {
            isDragging.current = false;
            
            const clientX = e.touches ? 
                e.changedTouches[0].clientX : 
                e.clientX;
            
            const deltaX = clientX - previousMouseX.current;
            const deltaTime = performance.now() - previousMouseX.current;
            dragVelocity.current = (deltaX * 0.001) / (deltaTime || 1);
        }
    };

    const handleTouchStart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isDragging.current = false; // Start as not dragging
        touchStartTime.current = Date.now();
        touchStartPos.current = e.touches[0].clientX;
        previousMouseX.current = e.touches[0].clientX;
        dragStartRotation.current = groupRef.current.rotation.y;
        dragVelocity.current = 0;
    };

    const handleTouchMove = (e) => {
        if (!touchStartPos.current) return;
        
        e.preventDefault();
        e.stopPropagation();

        const moveX = Math.abs(e.touches[0].clientX - touchStartPos.current);
        
        // Only start dragging if we've moved significantly
        if (moveX > 5) {
            isDragging.current = true;
        }

        if (isDragging.current) {
            const touch = e.touches[0];
            const deltaX = touch.clientX - previousMouseX.current;
            const rotationSpeed = 0.005;
            
            groupRef.current.rotation.y += deltaX * rotationSpeed;
            lastDragDirection.current = Math.sign(deltaX) || 1;
            dragVelocity.current = deltaX * rotationSpeed;
            previousMouseX.current = touch.clientX;
        }
    };

    const handleTouchEnd = (e) => {
        if (!isDragging.current) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        isDragging.current = false;
        
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - previousMouseX.current;
        dragVelocity.current = deltaX * 0.002; // Adjusted momentum
    };

    React.useEffect(() => {
        // Prevent default touch behavior on the canvas
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.style.touchAction = 'none';
        }
    }, []);

    const handleClick = (skill, index) => {
        // Only check drag distance if we were actually dragging
        if (isDragging.current) {
            const dragDistance = Math.abs(groupRef.current.rotation.y - dragStartRotation.current);
            if (dragDistance > 0.01) return; // Ignore if we've dragged too far
        }

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
    };

    return (
        <group ref={groupRef}>
            <mesh
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                visible={false}
            >
                <cylinderGeometry args={[carouselRadius + 2, carouselRadius + 2, 0.1, 32]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>

            {/* Carousel content */}
            {skills.map((skill, index) => {
                const angle = (index / skills.length) * Math.PI * 2;
                return (
                    <SkillCard
                        key={skill.name}
                        position={[
                            Math.sin(angle) * carouselRadius,
                            0,
                            Math.cos(angle) * carouselRadius
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
            width: '100vw',           // Full viewport width
            height: '70vh',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',     // Added for proper positioning
            left: '50%',              // Center the div
            right: '50%',             // Center the div
            marginLeft: '-50vw',      // Negative margin to span full width
            marginRight: '-50vw',     // Negative margin to span full width
            background: 'transparent' // Optional: ensure background is transparent
        }}>
            <Canvas 
                camera={{ 
                    position: [0, 2, 13.5],
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
