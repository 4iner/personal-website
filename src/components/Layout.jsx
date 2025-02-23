/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from './styled';
import Header from './Header';
import './layout.css';

const StyledLayout = styled('div')`
    min-height: 100vh;
    position: relative;
    background: #2D2D2D;
    
    /* Remove unnecessary 3D transforms that can cause jank */
    transform: translate3d(0, 0, 0);
    
    &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #2D2D2D;
        z-index: -2;
    }

    /* Optimize the gradient animation */
    &::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(
            circle at 50% 50%,
            ${props => props.theme.color.accent}10 0%,
            transparent 70%
        );
        opacity: 0.5;
        z-index: -1;
        pointer-events: none;
        /* Reduce animation complexity */
        animation: none; /* Remove the pulse animation for better performance */
    }

    .content-wrapper {
        margin: 0 auto;
        max-width: var(--size-content);
        border-radius: 7px;
        margin: 20px auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        position: relative;
        z-index: 1;
        /* Remove blur filter which can cause performance issues */
        background: ${props => props.theme.color.contrastPrimary};

        @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
            margin-left: var(--space-4);
            margin-right: var(--space-4);
            min-width: ${props => props.theme.size.mobile.minWidth};
            max-width: ${props => props.theme.size.mobile.contentMaxWidth};
            width: ${props => props.theme.size.mobile.maxWidth};
        }
    }

    footer {
        margin-top: var(--space-5);
        font-size: var(--font-sm);
        color: #999;
        text-align: center;
        position: relative;
        z-index: 1;
    }
`;

const Main = styled('main')`
    padding-top: var(--header-height);
    min-height: calc(100vh - var(--header-height));
    position: relative;
    z-index: 1;
    /* Simplify transform */
    transform: translate3d(0, 0, 0);
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <StyledLayout>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div className="content-wrapper">
                <Main>{children}</Main>
                <footer></footer>
            </div>
        </StyledLayout>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default React.memo(Layout); // Memoize the Layout component
