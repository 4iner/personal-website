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
    background: #2D2D2D;
    min-height: 100vh;
    color: white;

    .content-wrapper {
        margin: 0 auto;
        max-width: var(--size-content);
        background: #333333;
        border-radius: 7px;
        margin-top: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;

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
    }
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
                <main>{children}</main>
                <footer></footer>
            </div>
        </StyledLayout>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
