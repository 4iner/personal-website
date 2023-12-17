import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GithubIcon from '../../images/github-icon.png';
import './headerItem.css';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const HeaderItemStyled = styled(Button)`
`

const HeaderItem = ({ link, title }) => <HeaderItemStyled>{title}</HeaderItemStyled>;

export default HeaderItem;
