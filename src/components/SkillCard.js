import React from 'react';
import { Text, RoundedBox } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

const SkillCard = ({ position, rotation, skill, isActive, onClick }) => {
    const springs = useSpring({
        scale: isActive ? 1.2 : 1,
        config: { mass: 2, tension: 200, friction: 20 }
    });

    // Create rounded rectangle shape for white faces
    const shape = new THREE.Shape();
    const width = 0.98;  // Half of the final width
    const height = 0.48; // Half of the final height
    const radius = 0.06; // Corner radius

    shape.moveTo(-width + radius, -height);
    shape.lineTo(width - radius, -height);
    shape.quadraticCurveTo(width, -height, width, -height + radius);
    shape.lineTo(width, height - radius);
    shape.quadraticCurveTo(width, height, width - radius, height);
    shape.lineTo(-width + radius, height);
    shape.quadraticCurveTo(-width, height, -width, height - radius);
    shape.lineTo(-width, -height + radius);
    shape.quadraticCurveTo(-width, -height, -width + radius, -height);

    return (
        <animated.group 
            position={position} 
            rotation={rotation} 
            onClick={onClick}
            scale={springs.scale}
        >
            {/* Black border with rounded corners */}
            <RoundedBox
                args={[2.04, 1.04, 0.12]}
                radius={0.08}
                smoothness={4}
            >
                <meshStandardMaterial 
                    color="#000000"
                    metalness={0.1}
                    roughness={0.3}
                    side={2}
                />
            </RoundedBox>

            {/* Front white face */}
            <mesh position={[0, 0, 0.061]}>
                <shapeGeometry args={[shape]} />
                <meshBasicMaterial 
                    color={isActive ? "#ffffff" : "#e0e0e0"}
                />
            </mesh>

            {/* Back white face */}
            <mesh position={[0, 0, -0.061]} rotation={[0, Math.PI, 0]}>
                <shapeGeometry args={[shape]} />
                <meshBasicMaterial 
                    color={isActive ? "#ffffff" : "#e0e0e0"}
                />
            </mesh>

            {/* Front text */}
            <Text
                position={[0, 0, 0.062]}
                fontSize={0.2}
                color="#000000"
                anchorX="center"
                anchorY="middle"
            >
                {skill.name}
            </Text>

            {/* Back text */}
            <Text
                position={[0, 0, -0.062]}
                fontSize={0.2}
                color="#000000"
                anchorX="center"
                anchorY="middle"
                rotation={[0, Math.PI, 0]}
            >
                {skill.name}
            </Text>
        </animated.group>
    );
};

export default SkillCard; 