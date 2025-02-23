import * as React from 'react';
import styled from './styled';

const StyledProjectItem = styled('div')`
    background-color: ${props => props.theme.color.contrastPrimary}95;
    border: 1px solid ${props => props.theme.color.accent};
    border-radius: ${props => props.theme.size.borderRadius.medium};
    padding: 24px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    
    &.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        padding: 16px;
    }

    &:hover {
        background-color: ${props => props.theme.color.contrastSecondary}95;
        transform: translateY(-2px);
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

// Shared IntersectionObserver instance
const observer = typeof window !== 'undefined' ? 
    new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '50px'
        }
    ) : null;

const ProjectItem = ({ title, description, index }) => {
    const itemRef = React.useRef(null);

    React.useEffect(() => {
        const currentItem = itemRef.current;
        
        if (observer && currentItem) {
            observer.observe(currentItem);
            
            // Add delay based on index
            currentItem.style.transitionDelay = `${index * 0.1}s`;
        }

        return () => {
            if (observer && currentItem) {
                observer.unobserve(currentItem);
            }
        };
    }, [index]);

    return (
        <StyledProjectItem ref={itemRef}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </StyledProjectItem>
    );
};

export default React.memo(ProjectItem); 