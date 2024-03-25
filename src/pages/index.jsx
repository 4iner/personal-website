import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { motion } from 'framer-motion';

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <div>
            <p>Website is currently in development.</p>
        </div>
    </Layout>
);

export default IndexPage;
