import * as React from 'react';
import PropTypes from 'prop-types';
import styled from './styled';
import Button from './Button';

const ButtonGroup = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

ButtonGroup.propTypes = {
    children: PropTypes.arrayOf(Button),
    className: PropTypes.string,
};

ButtonGroup.defaultProps = {
    siteTitle: ``,
};

const StyledButtonGroup = styled(ButtonGroup)`
    display: flex;
    gap: 0;
    overflow: hidden;
    padding: 1px;

    @media (min-width: 769px) {
        border-radius: 7px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        gap: 0;
        border-radius: 7px;
        background: #2D2D2D;
    }

    > * {
        flex: 1;
        position: relative;

        @media (min-width: 769px) {
            &:not(:last-child)::after {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                border-right: 1px solid #4A4A4A;
                border-left: 1px solid #1A1A1A;
            }
        }
        
        button {
            border: none;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            min-width: 100px;
            background: #2D2D2D;
            box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
            border-radius: 0;
            transition: all 0.2s ease;

            @media (min-width: 769px) {
                &:hover {
                    background: #404040;
                    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
                }
            }

            @media (max-width: 768px) {
                width: 100%;
                justify-content: flex-start;
                padding: 12px 16px;
                height: 44px;

                &:hover {
                    background: #404040;
                }
            }

            &:active {
                box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.4);
                transform: translateY(1px);
            }
        }

        /* Desktop: First item gets only left side rounded corners */
        &:first-child button {
            @media (min-width: 769px) {
                border-top-left-radius: 7px;
                border-bottom-left-radius: 7px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        /* Desktop: Last item gets only right side rounded corners */
        &:last-child button {
            @media (min-width: 769px) {
                border-top-right-radius: 7px;
                border-bottom-right-radius: 7px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }

        /* Mobile: First item gets only top rounded corners */
        &:first-child button {
            @media (max-width: 768px) {
                border-top-left-radius: 7px;
                border-top-right-radius: 7px;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        /* Mobile: Last item gets only bottom rounded corners */
        &:last-child button {
            @media (max-width: 768px) {
                border-bottom-left-radius: 7px;
                border-bottom-right-radius: 7px;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
        
        &:not(:first-child):not(:last-child) button {
            border-radius: 0;
        }
    }

    a {
        text-decoration: none;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

export default StyledButtonGroup;
