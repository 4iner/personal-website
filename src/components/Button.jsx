import * as React from 'react';
import PropTypes from 'prop-types';
import styled from './styled';
import { Link } from 'gatsby';

const Button = ({ title, onClick, to, className }) => {
    const redirect = to ? 'window.location.href = ' + to : null;
    return (
        <ButtonDiv onclick={redirect}>
            <Link to={to} style={{ textDecoration: 'none' }}>
                <button className={className} onClick={onClick}>
                    {title}
                </button>
            </Link>
        </ButtonDiv>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.function,
    to: PropTypes.string,
    tooltip: PropTypes.string,
    className: PropTypes.string,
};

Button.defaultProps = {
    siteTitle: '',
};

const ButtonDiv = styled('div')`
    overflow: hidden;
    display: inline-block;

    button {
        border: none;
        border-radius: ${props => props.theme.size.borderRadius.medium};
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        min-width: 100px;
        background: #2D2D2D;
        box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
        padding: 6px 12px;
        color: white;
        font-size: 13px;
        letter-spacing: 0.2px;
        white-space: nowrap;
        transition: all 0.2s ease;

        &:hover {
            background: #404040;
            box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
        }

        &:active {
            box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.4);
            transform: translateY(1px);
        }
    }
`;

const StyledButton = styled(Button)`
    width: 100%;
`;

export default StyledButton;
