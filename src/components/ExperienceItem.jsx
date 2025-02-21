import * as React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from './styled';

const StyledExperienceItem = styled(motion.div)`
    background-color: ${props => props.theme.color.contrastPrimary}95;
    border: 1px solid ${props => props.theme.color.accent};
    border-radius: ${props => props.theme.size.borderRadius.medium};
    padding: 24px;
    margin-bottom: 32px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
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
    margin: 0;
    font-size: 1.25rem;
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 0.25px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

const Period = styled('span')`
    color: ${props => props.theme.color.accent};
    font-size: 0.9rem;
    font-weight: 500;
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

const ExperienceItem = ({ company, period, description, index }) => {
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
        <StyledExperienceItem
            ref={itemRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20
            }}
            transition={{ 
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1
            }}
        >
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

export default ExperienceItem; 