import React, { useEffect, useRef } from 'react';
import styled from './styled';

const Canvas = styled('canvas')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.7;
`;

// Throttle function to limit the rate of function calls
const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

class Particle {
    constructor(x, y, ctx, color) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 20) + 1; // Reduced density range
        this.size = 1.5; // Slightly smaller particles
        this.distance = 80; // Reduced interaction distance
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    update(mouseX, mouseY) {
        if (mouseX === undefined || mouseY === undefined) {
            // Optimize: Skip calculation if no mouse position
            if (this.x !== this.baseX) {
                const dx = this.x - this.baseX;
                this.x -= dx/10;
            }
            if (this.y !== this.baseY) {
                const dy = this.y - this.baseY;
                this.y -= dy/10;
            }
            return;
        }

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.distance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (this.distance - distance) / this.distance;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                const dx = this.x - this.baseX;
                this.x -= dx/10;
            }
            if (this.y !== this.baseY) {
                const dy = this.y - this.baseY;
                this.y -= dy/10;
            }
        }
    }
}

const ParticleField = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: undefined, y: undefined });
    const animationFrameRef = useRef();
    const fpsRef = useRef(0);
    const lastTimeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        let particles = [];

        const init = () => {
            particles = [];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Adaptive particle count based on screen size and device performance
            const baseCount = (canvas.width * canvas.height) / 25000; // Reduced base density
            const performanceScale = fpsRef.current < 30 ? 0.5 : (fpsRef.current < 45 ? 0.75 : 1);
            const numberOfParticles = Math.floor(baseCount * performanceScale);
            
            const colors = ['#74EBD5', '#70ACE6', '#FF6B6B'];

            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const color = colors[Math.floor(Math.random() * colors.length)];
                particles.push(new Particle(x, y, ctx, color));
            }
            particlesRef.current = particles;
        };

        const connect = () => {
            const maxConnections = 3; // Limit connections per particle
            const connectionDistance = 100; // Slightly reduced connection distance
            
            for (let i = 0; i < particles.length; i++) {
                let connections = 0;
                for (let j = i + 1; j < particles.length && connections < maxConnections; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        connections++;
                        const opacity = (connectionDistance - distance) / connectionDistance;
                        ctx.strokeStyle = `rgba(116, 235, 213, ${opacity * 0.15})`; // Reduced opacity
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = (timestamp) => {
            // Calculate FPS
            if (lastTimeRef.current) {
                const deltaTime = timestamp - lastTimeRef.current;
                fpsRef.current = 1000 / deltaTime;
            }
            lastTimeRef.current = timestamp;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update(mouseRef.current.x, mouseRef.current.y);
                particle.draw();
            });
            
            connect();
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = throttle((event) => {
            mouseRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        }, 16); // ~60fps throttle

        const handleResize = throttle(() => {
            init();
        }, 100);

        init();
        animate();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    return <Canvas ref={canvasRef} />;
};

export default ParticleField; 