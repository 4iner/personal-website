import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GithubIcon from '../images/github-icon.png';
import './header.css';

const HeaderItem = ({ link, title }) => <div className="headerItem">{title}</div>;

export default HeaderItem;
