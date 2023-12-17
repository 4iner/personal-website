import * as React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import MButton from '@mui/material/Button';

const Button = ({ title, onClick, tooltip, ...props }) => {
    return <MButton title={title} onClick={onClick} type={tooltip} {...props}></MButton>;
};

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.function,
    tooltip: PropTypes.string,
};

Button.defaultProps = {
    siteTitle: ``,
};

export default Header;
