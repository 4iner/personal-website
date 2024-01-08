import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { motion } from 'framer-motion';

const indexPage = () => (
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
            Drag me :D
        </motion.div>
    </Layout>
);

export default indexPage;
