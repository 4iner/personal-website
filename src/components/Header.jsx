import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GithubIcon from '../images/github-icon.png';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import styled from './styled';

const Header = ({ siteTitle, className }) => (
    <header
        className={className}
        style={{
            padding: `var(--space-4) var(--size-gutter)`,
        }}>
        <Link
            to="/"
            rel="noopener noreferrer"
            style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
            }}>
            <Button title="Home" />
        </Link>
        <ButtonGroup
            style={{
                display: 'flex',
            }}>
            <Button to="/projects" title="Projects" />
            <Button to="/work-experience" title="Work Experience" />
            <Button to="/skills" title="Skills" />
            <Button title="About me" />
        </ButtonGroup>

        <Link
            to="https://github.com/4iner"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
            }}>
            <div
                style={{
                    display: `flex`,
                    alignItems: `stretch`,
                    justifyContent: `space-between`,
                }}>
                <img
                    alt="Github Logo"
                    height={20}
                    style={{ margin: '0px 10px 0px 0px' }}
                    src={GithubIcon}
                />
                {siteTitle}
            </div>
        </Link>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
    className: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

const StyledHeader = styled(Header)`
    background-image: linear-gradient(
        0deg,
        ${({ theme }) => theme.color.contrastPrimary || '#2d2d2d'} 0%,
        ${({ theme }) => theme.color.contrastSecondary || '#1a1a1a'} 100%
    );
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.color.accent || '#8a2be2'};
`;

export default StyledHeader;
