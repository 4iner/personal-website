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
    min-width: 480px;
    padding: 1px;

    > * {
        flex: 1;
        position: relative;

        &:not(:last-child)::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            border-right: 1px solid #4A4A4A;
            border-left: 1px solid #1A1A1A;
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

            &:hover {
                background: #404040;
                box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
            }

            &:active {
                box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.4);
                transform: translateY(1px);
            }
        }

        &:first-child:last-child button {
            border-radius: 7px;
        }

        &:first-child:not(:last-child) button {
            border-top-left-radius: 7px;
            border-bottom-left-radius: 7px;
        }

        &:last-child:not(:first-child) button {
            border-top-right-radius: 7px;
            border-bottom-right-radius: 7px;
        }
    }

    a {
        text-decoration: none;
    }
`;

export default StyledButtonGroup;
