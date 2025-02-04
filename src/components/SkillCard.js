import React from 'react';
import { Text } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const SkillCard = ({ skill, isActive, onClick, rotation }) => {
    const springs = useSpring({
        scale: isActive ? 1.2 : 1,
        opacity: isActive ? 0.8 : 0.4,
        config: { mass: 2, tension: 200, friction: 20 }
    });

    return (
        <animated.group
            rotation={rotation}
            onClick={onClick}
            scale={springs.scale}
        >
            <animated.mesh>
                <boxGeometry args={[2, 1.2, 0.1]} />
                <animated.meshStandardMaterial 
                    transparent
                    opacity={springs.opacity}
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={0.2}
                    side={2} // Renders both sides
                />
            </animated.mesh>

            <Text
                position={[0, 0, 0.06]}
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
                maxWidth={1.8}
            >
                {skill.name}
            </Text>

            {isActive && (
                <Text
                    position={[0, -0.4, 0.06]}
                    fontSize={0.15}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={1.8}
                >
                    {skill.description}
                </Text>
            )}
        </animated.group>
    );
};

export default SkillCard; 