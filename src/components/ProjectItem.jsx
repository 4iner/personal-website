import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styled from './styled';

const StyledAccordion = styled(Accordion)`
    background-color: ${props => props.theme.color.contrastPrimary}95;
    margin: 0 !important;
    box-shadow: none;
    border: none;
    border-radius: 0 !important;
    position: relative;
    
    &:before {
        display: none;
    }

    &.Mui-expanded {
        margin: 0 !important;
    }

    /* Main border */
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid ${props => props.theme.color.accent};
        border-bottom: none;
        pointer-events: none;
    }

    &:first-of-type {
        &:after {
            border-top-left-radius: ${props => props.theme.size.borderRadius.medium};
            border-top-right-radius: ${props => props.theme.size.borderRadius.medium};
        }
    }

    &:last-of-type {
        &:after {
            border-bottom: 1px solid ${props => props.theme.color.accent};
            border-bottom-left-radius: ${props => props.theme.size.borderRadius.medium};
            border-bottom-right-radius: ${props => props.theme.size.borderRadius.medium};
        }
    }

    & + & {
        &:after {
            border-top: none;
        }
    }

    /* Inner dividers */
    .MuiAccordionSummary-root {
        &:before, &:after {
            content: '';
            position: absolute;
            left: 1px;
            right: 1px;
            height: 1px;
            background-color: ${props => props.theme.color.accent};
            opacity: 0.5;
            z-index: 1;
        }

        &:before {
            top: 0;
        }

        &:after {
            bottom: 0;
        }

        &.Mui-expanded:after {
            display: none;
        }
    }
`;

const StyledSummary = styled(AccordionSummary)`
    background-color: ${props => props.theme.color.contrastPrimary}95;
    min-height: 56px !important;
    transition: background-color 0.2s ease;
    position: relative;
    padding: 0 24px;
    
    &.Mui-expanded {
        min-height: 56px !important;
        background-color: ${props => props.theme.color.contrastSecondary}90;
    }
    
    &:hover {
        background-color: ${props => props.theme.color.contrastSecondary}95;
    }

    .MuiAccordionSummary-content {
        margin: 12px 0 !important;
        
        &.Mui-expanded {
            margin: 12px 0 !important;
        }
    }

    .MuiAccordionSummary-expandIconWrapper {
        color: ${props => props.theme.color.accent};
        transition: color 0.2s ease;
        font-size: 1.5rem;

        &.Mui-expanded {
            color: ${props => props.theme.color.accent};
        }
    }
`;

const Title = styled('h2')`
    margin: 0;
    font-size: 1.25rem;
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 0.25px;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
    padding: 24px;
    background-color: ${props => props.theme.color.contrastSecondary}85;
    line-height: 1.6;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: ${props => props.theme.color.accent};
        opacity: 0.7;
    }
`;

const Description = styled('p')`
    color: #ffffff;
    line-height: 1.8;
    font-size: 0.95rem;
    max-width: 800px;
    letter-spacing: 0.3px;
    margin: 0;
    padding: 0;
`;

const ProjectItem = ({ title, description }) => (
    <StyledAccordion>
        <StyledSummary
            expandIcon={<ExpandMore />}
            aria-controls={`${title}-content`}
            id={`${title}-header`}
        >
            <Title>{title}</Title>
        </StyledSummary>
        <StyledAccordionDetails>
            <Description>{description}</Description>
        </StyledAccordionDetails>
    </StyledAccordion>
);

export default ProjectItem; 