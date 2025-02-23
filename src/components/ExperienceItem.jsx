import * as React from 'react';
import PropTypes from 'prop-types';
import styled from './styled';

const StyledExperienceItem = styled('div')`
    background-color: ${props => props.theme.color.contrastPrimary}95;
    border: 1px solid ${props => props.theme.color.accent};
    border-radius: ${props => props.theme.size.borderRadius.medium};
    padding: 24px;
    margin-bottom: 32px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    
    &.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        padding: 16px;
        margin-bottom: 24px;
    }

    &:hover {
        background-color: ${props => props.theme.color.contrastSecondary}95;
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -16px;
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent 0%,
            ${props => props.theme.color.accent}40 50%,
            transparent 100%
        );
        
        @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
            bottom: -12px;
        }
    }

    &:last-child {
        margin-bottom: 0;
        
        &:after {
            display: none;
        }
    }
`;

const Title = styled('h2')`
    color: ${props => props.theme.color.accent};
    margin: 0 0 1rem;
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Period = styled('span')`
    color: ${props => props.theme.color.textLight};
    opacity: 0.8;
    font-size: 0.9rem;
    font-weight: normal;
`;

const Description = styled('p')`
    color: ${props => props.theme.color.textLight};
    line-height: 1.8;
    margin: 0;
    opacity: 0.9;
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

const ExperienceItem = ({ company, period, description, index }) => {
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
        <StyledExperienceItem ref={itemRef}>
            <Title>
                {company}
                <Period>{period}</Period>
            </Title>
            <Description>{description}</Description>
        </StyledExperienceItem>
    );
};

ExperienceItem.propTypes = {
    company: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    index: PropTypes.number
};

export default React.memo(ExperienceItem); 