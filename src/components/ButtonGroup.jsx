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
    > * {
        &:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right: 0;
        }

        &:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left: 0;
        }
        &:not(:first-child):not(:last-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-left-width: ${({ theme }) => theme.size.spacing.small / 4}px;
            border-right-width: ${({ theme }) => theme.size.spacing.small / 4}px;
        }
    }
`;

export default StyledButtonGroup;
