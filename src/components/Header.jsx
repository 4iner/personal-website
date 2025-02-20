import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GithubIcon from '../images/github-icon.png';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import styled from './styled';
import { useState, useEffect } from 'react';

const Header = ({ siteTitle, className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${className} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ButtonGroup>
                        <Button to="/" title="Home" />
                        <Button to="/projects" title="Projects" />
                        <Button to="/work-experience" title="Work Experience" />
                        <Button to="/skills" title="Skills" />
                        <Button title="About me" />
                    </ButtonGroup>
                </nav>

                <div className="right-section">
                    <Link
                        to="https://github.com/4iner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link">
                        <div className="github-content">
                            <img
                                alt="Github Logo"
                                height={20}
                                src={GithubIcon}
                            />
                            <span className="github-text">{siteTitle}</span>
                        </div>
                    </Link>
                </div>

                <button 
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

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
    border-bottom: 1px solid ${({ theme }) => theme.color.accent || '#8a2be2'};
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);

    &.scrolled {
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
        background-image: linear-gradient(
            0deg,
            ${({ theme }) => theme.color.contrastPrimary || '#2d2d2d'}E6 0%,
            ${({ theme }) => theme.color.contrastSecondary || '#1a1a1a'}E6 100%
        );
    }

    .header-content {
        max-width: var(--size-content);
        margin: 0 auto;
        padding: var(--space-3) var(--size-gutter);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);
        position: relative;

        @media (max-width: 768px) {
            flex-wrap: wrap;
            padding: var(--space-3) var(--space-4);
        }
    }

    .right-section {
        display: flex;
        align-items: center;
        margin-left: auto;

        @media (max-width: 768px) {
            margin-left: 0;
        }
    }

    .menu-toggle {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 100;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }

        span {
            display: block;
            width: 100%;
            height: 2px;
            background-color: white;
            border-radius: 3px;
            transition: all 0.3s ease;
            transform-origin: left;
        }

        &.open {
            span {
                &:first-child {
                    transform: rotate(45deg);
                }
                &:nth-child(2) {
                    opacity: 0;
                    transform: translateX(-10px);
                }
                &:last-child {
                    transform: rotate(-45deg);
                }
            }
        }

        @media (max-width: 768px) {
            display: flex;
            order: -1;
        }
    }

    .nav-menu {
        flex: 0 1 auto;

        @media (max-width: 768px) {
            flex: 0 0 100%;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            order: 4;
            opacity: 0;
            transform: translateY(-10px);
            margin-top: var(--space-2);

            &.open {
                max-height: 300px;
                opacity: 1;
                transform: translateY(0);
            }
        }
    }

    .github-link {
        font-size: var(--font-sm);
        text-decoration: none;
        transition: all 0.2s ease;
        padding: 6px 12px;
        border-radius: 6px;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(1px);
        }

        .github-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        img {
            margin: 0;
            transition: transform 0.2s ease;
        }

        &:hover img {
            transform: rotate(8deg);
        }

        .github-text {
            color: ${({ theme }) => theme.color.textLight || '#ffffff'};
            font-weight: 500;

            @media (max-width: 480px) {
                display: none;
            }
        }
    }
`;

export default StyledHeader;
