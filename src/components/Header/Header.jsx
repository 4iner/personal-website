import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GithubIcon from '../../images/github-icon.png';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import styled from '../styled';

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
            className="TEST"
            style={{
                display: 'flex',
            }}>
            <Button title="Projects" />
            <Button title="Work Experience" />
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
        ${({ theme }) => theme.color.primary} 0%,
        ${({ theme }) => theme.color.secondary} 100%
    );
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid violet;
`;

export default StyledHeader;
