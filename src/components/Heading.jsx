import * as React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ as, label }) => {
    const Tag = '' + as;
    return <Tag>{label}</Tag>;
};

Heading.propTypes = {
    as: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Heading;
