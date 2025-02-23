import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import styled from './styled';
import { useState, useEffect } from 'react';

// SVG Icons as components
const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const DownloadIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
);

const SocialLinks = styled('div')`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: 1rem;

    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        margin-left: 0.5rem;
    }
`;

const SocialButton = styled('a')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: ${props => props.theme.color.textLight};
    transition: all 0.2s ease;
    
    svg {
        width: 20px;
        height: 20px;
        transition: transform 0.2s ease;
    }
    
    &:hover {
        color: ${props => props.theme.color.accent};
        svg {
            transform: scale(1.1);
        }
    }

    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        width: 32px;
        height: 32px;
        
        svg {
            width: 18px;
            height: 18px;
        }
    }
`;

const HintContainer = styled('div')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 1000;
    
    /* Desktop positioning */
    bottom: -34px;
    
    /* Mobile positioning */
    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        bottom: auto;
        top: 36px;
        z-index: 1001;
    }
`;

const DownloadHint = styled('span')`
    position: relative;
    background: ${props => props.theme.color.contrastPrimary}E6;
    color: ${props => props.theme.color.textLight};
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.85rem;
    white-space: nowrap;
    border: 1px solid ${props => props.theme.color.accent}40;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    opacity: ${props => props.show ? 1 : 0};
    transition: opacity 0.3s ease;

    &:before, &:after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-style: solid;
    }

    /* Outer arrow (border) */
    &:before {
        bottom: 100%;
        border-width: 0 8px 8px 8px;
        border-color: transparent transparent ${props => props.theme.color.accent}40 transparent;
    }

    /* Inner arrow (background) */
    &:after {
        bottom: 100%;
        border-width: 0 7px 7px 7px;
        border-color: transparent transparent ${props => props.theme.color.contrastPrimary}E6 transparent;
        margin-bottom: -1px;
    }

    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        font-size: 0.75rem;
        padding: 6px 10px;

        /* Keep the same arrow direction as desktop */
        &:before {
            bottom: 100%;
            top: auto;
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent ${props => props.theme.color.accent}40 transparent;
        }

        &:after {
            bottom: 100%;
            top: auto;
            border-width: 0 7px 7px 7px;
            border-color: transparent transparent ${props => props.theme.color.contrastPrimary}E6 transparent;
            margin-bottom: -1px;
            margin-top: 0;
        }
    }
`;

const Header = ({ siteTitle, className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Only show hint if we're on the home page
        if (typeof window !== 'undefined' && window.location.pathname === '/') {
            setShowHint(true);
            const timer = setTimeout(() => {
                setShowHint(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
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
                    <SocialLinks>
                        <SocialButton
                            href="/Resume.pdf"
                            download
                            aria-label="Download my resume"
                        >
                            <DownloadIcon />
                            <HintContainer>
                                <DownloadHint show={showHint}>
                                    PDF Resume
                                </DownloadHint>
                            </HintContainer>
                        </SocialButton>
                        <SocialButton
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my GitHub profile"
                        >
                            <GitHubIcon />
                        </SocialButton>
                        <SocialButton
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect with me on LinkedIn"
                        >
                            <LinkedInIcon />
                        </SocialButton>
                    </SocialLinks>
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
