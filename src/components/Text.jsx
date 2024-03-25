import * as React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children }) => {
    return <text>{children}</text>;
};

Text.propTypes = {
    children: PropTypes.element,
};

Text.defaultProps = {
    siteTitle: '',
};

export default Text;
