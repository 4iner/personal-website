import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import Heading from '../components/Heading';
import Text from '../components/Text';

const SupernaText = '';
const ModulusText =
    'A freelance project made during the 2020 COVID pandemic. React, Spring-Boot Java, and SQL. A wonderful combination that is simple, quick, and efficient to set up. Hosted entirely on AWS, it is ensured to always be up when the user required it. Static S3 website hosting and JWT security for a low-cost, highly-available secure application.';
const AmdocsText =
    "A windows application game, created with the Processing IDE. This game was inspired by Linedoku's CrossPath, where you have to expand nodes on a grid orthogonally by the number indicated on them. This was purely for fun, as it was developed on a 12-hour roadtrip.";
const StatCanText =
    "One of Carleton's assignments was to program a text-based Chess for one of our classes. I was bored after completing it, so I decided to go a step further and use the implementation of the logic and the classes to make it visual, with the Swing Java library.";
const WorkExperiencePage = () => (
    <Layout>
        <Seo title={'Work Experience'} />
        <Heading as={'h2'} label={'Superna 2022 - Present'} />
        <Text>{SupernaText}</Text>
        <Heading as={'h2'} label={'Modulus Data 2020-2022'} />
        <Text>{ModulusText}</Text>
        <Heading as={'h2'} label={'Amdocs 2019'} />
        <Text>{AmdocsText}</Text>
        <Heading as={'h2'} label={'Statistics Canada 2018 - 2019'} />
        <Text>{StatCanText}</Text>
    </Layout>
);

export default WorkExperiencePage;
