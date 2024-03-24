import * as React from 'react';
import PropTypes from 'prop-types';
import styled from './styled';

const Text = ({ children }) => {
    return <text>{children}</text>;
};

Text.propTypes = {
    children: PropTypes.element,
};

Text.defaultProps = {
    siteTitle: '',
};

const StyledText = styled(Text)``;

export default StyledText;
