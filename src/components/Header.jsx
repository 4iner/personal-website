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
        <header className={`${className} ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-content">
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
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
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ButtonGroup>
                        <Button to="/" title="Home" />
                        <Button to="/projects" title="Projects" />
                        <Button to="/work-experience" title="Work Experience" />
                        <Button to="/skills" title="Skills" />
                        <Button title="About me" />
                    </ButtonGroup>
                </nav>
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

    @media (max-width: 768px) {
        position: sticky;
    }

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
        padding: var(--space-3) 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-4);
        position: relative;

        @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
            flex-wrap: wrap;
            padding: 10px 0;
            margin-left: var(--space-4);
            margin-right: var(--space-4);
            min-height: 41px;
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
        margin-left: 0;

        @media (max-width: 768px) {
            display: flex;
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
        }

        &:hover {
            transform: scale(1.1) translateY(-50%);
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
    }

    .right-section {
        display: flex;
        align-items: center;
        margin-left: auto;
        order: 2;

        @media (max-width: 768px) {
            margin-left: auto;
            padding-left: 44px;
        }
    }

    .nav-menu {
        flex: 0 1 auto;
        order: 1;

        @media (max-width: 768px) {
            position: fixed;
            top: 0;
            left: -300px;
            height: 100vh;
            width: 300px;
            background: ${({ theme }) => theme.color.contrastPrimary};
            padding: 60px 20px 20px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: none;
            z-index: 90;
            order: 4;

            &.open {
                left: 0;
                box-shadow: 2px 0 12px rgba(0, 0, 0, 0.3);
            }

            /* Style adjustments for ButtonGroup in mobile nav */
            > div {  /* ButtonGroup container */
                flex-direction: column;
                width: 100%;
                background: none;
                box-shadow: none;

                > * {  /* Button wrappers */
                    width: 100%;

                    button {
                        width: 100%;
                        justify-content: flex-start;
                        padding: 12px 16px;
                        border-radius: 7px;
                        margin-bottom: 8px;

                        &:hover {
                            background: #404040;
                        }
                    }
                }
            }
        }
    }

    /* Add overlay when menu is open */
    &:after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        pointer-events: none;
        z-index: 80;
    }

    &.menu-open:after {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
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
