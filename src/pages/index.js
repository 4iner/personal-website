import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../components/index.module.css';
import { motion } from 'framer-motion';
//import useWindowDimensions from "../components/helpers"

const IndexPage = () => {
    //const { height, width } = useWindowDimensions();
    console.log('im in index');
    return (
        <Layout>
            <Seo title="Home" />
            <div>
                <p>Website is currently in development.</p>
            </div>
            <motion.div
                dragConstraints={{
                    top: 0,
                    right: 400,
                    bottom: 400,
                    left: 0,
                }}
                className="object"
                drag>
                HELLO
            </motion.div>
        </Layout>
    );
};

export default IndexPage;
