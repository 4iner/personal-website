import * as React from 'react';
import PropTypes from 'prop-types';

import './headerItem.css';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const HeaderItemStyled = styled(Button)``;

const HeaderItem = ({ link, title }) => <HeaderItemStyled a={link}>{title}</HeaderItemStyled>;

HeaderItem.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
};

export default HeaderItem;
