import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import ProjectItem from '../components/ProjectItem';
import styled from '../components/styled';
import { motion } from 'framer-motion';

const ProjectsContainer = styled('div')`
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 24px;

    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        padding: 24px 16px;
    }
`;

const Title = styled('h1')`
    color: ${props => props.theme.color.textLight};
    margin-bottom: 32px;
    font-size: 2rem;
    letter-spacing: 0.5px;
    text-align: center;
`;

const ProjectList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 0;
`;

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const projects = [
    {
        title: 'This website',
        description: 'This project was made to experiment more with React. All of the elements were made using plain HTML, styled with styled-components (and css), on the Gatsby framework so that serving it on AWS S3 using Cloudfront will be as simple as a single command. Custom-made components, UX, ESLinting, and css are some things that I wanted to improve on for my professional career, and this makes for a more fun resume!'
    },
    {
        title: 'Clinic CRM',
        description: 'A freelance project made during the 2020 COVID pandemic. React, Spring-Boot Java, and SQL. A wonderful combination that is simple, quick, and efficient to set up. Hosted entirely on AWS, it is ensured to always be up when the user required it. Static S3 website hosting and JWT security for a low-cost, highly-available secure application.'
    },
    {
        title: 'CrossPath',
        description: "A windows application game, created with the Processing IDE. This game was inspired by Linedoku's CrossPath, where you have to expand nodes on a grid orthogonally by the number indicated on them. This was purely for fun, as it was developed on a 12-hour roadtrip."
    },
    {
        title: 'GUI Chess',
        description: "One of Carleton's assignments was to program a text-based Chess for one of our classes. I was bored after completing it, so I decided to go a step further and use the implementation of the logic and the classes to make it visual, with the Swing Java library."
    }
];

const ProjectsPage = () => (
    <Layout>
        <Seo title={'Projects'} />
        <ProjectsContainer>
            <Title>My Projects</Title>
            <ProjectList
                variants={container}
                initial="hidden"
                animate="show"
            >
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        index={index}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </ProjectList>
        </ProjectsContainer>
    </Layout>
);

export default ProjectsPage;
