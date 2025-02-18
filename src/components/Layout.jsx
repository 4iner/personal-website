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
        padding: var(--size-gutter);
        background: #333333;
        border-radius: 8px;
        margin-top: 20px;
        border: 1px solid #4A4A4A;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
