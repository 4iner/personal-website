import * as React from 'react';
import { motion } from 'framer-motion';
import styled from './styled';

const StyledProjectItem = styled(motion.div)`
    background-color: ${props => props.theme.color.contrastPrimary}95;
    border: 1px solid ${props => props.theme.color.accent};
    border-radius: ${props => props.theme.size.borderRadius.medium};
    padding: 24px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    
    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        padding: 16px;
    }

    &:hover {
        background-color: ${props => props.theme.color.contrastSecondary}95;
    }
`;

const Title = styled('h2')`
    margin: 0;
    font-size: 1.25rem;
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 0.25px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: -24px;
        right: -24px;
        bottom: 0;
        height: 1px;
        background: linear-gradient(
            90deg,
            ${props => props.theme.color.accent}20 0%,
            ${props => props.theme.color.accent}60 50%,
            ${props => props.theme.color.accent}20 100%
        );

        @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
            left: -16px;
            right: -16px;
        }
    }
`;

const Description = styled('p')`
    color: #ffffff;
    line-height: 1.8;
    font-size: 0.95rem;
    letter-spacing: 0.3px;
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    opacity: 0.9;

    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        min-width: unset;
        max-width: 100%;
        width: 100%;
    }
`;

const ProjectItem = ({ title, description, index }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const itemRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <StyledProjectItem
            ref={itemRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20
            }}
            transition={{ 
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2 // Stagger the animation based on index
            }}
        >
            <Title>{title}</Title>
            <Description>{description}</Description>
        </StyledProjectItem>
    );
};

export default ProjectItem; 