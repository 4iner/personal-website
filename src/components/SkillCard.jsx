/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';

const SkillCard = ({ pos }) => {
    return (
        <mesh position={[pos, 0, 0]}>
            <boxGeometry />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    );
};

SkillCard.propTypes = {
    pos: PropTypes.number.isRequired,
};

export default SkillCard;
