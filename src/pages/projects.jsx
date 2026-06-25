import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import ProjectItem from '../components/ProjectItem';
import styled from '../components/styled';

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

const ProjectList = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 0;
`;

export function Head() {
    return <Seo title="Projects" />
}

const ProjectsPage = () => {
    const projects = React.useMemo(() => [
        {
            title: 'This website',
            description: 'Built with Gatsby and deployed to AWS S3 + CloudFront with a single command. I wanted somewhere to practice building components and making UX decisions from scratch, outside of an existing codebase. Also a better resume format than a PDF.'
        },
        {
            title: 'Clinic CRM',
            description: 'A freelance project from 2020. A local clinic needed patient and appointment management, so I built them an app with React, Spring Boot, and SQL on AWS. JWT auth, static S3 for the frontend.\n\nDemo at https://clinic-app.mufasa.ca -- Username: "Demo", Password: "ClinicAppDemo". Give it a minute to start up after signing in.'
        },
        {
            title: 'CrossPath',
            description: "A puzzle game built in Processing, based on Linedoku's CrossPath. You expand numbered nodes across a grid until every cell is covered. I wrote the whole thing on a 12-hour road trip. Download it at https://github.com/4iner/CrossPath/releases/tag/initial"
        },
        {
            title: 'GUI Chess',
            description: "Carleton had us build a text-based Chess game for an assignment. I finished it and kept going, turning the same logic into a graphical version using Java Swing. Download it at https://github.com/4iner/GUI-Chess/releases/tag/initial"
        }
    ], []);

    return (
        <Layout>
            <ProjectsContainer>
                <Title>My Projects</Title>
                <ProjectList>
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
};

export default React.memo(ProjectsPage);
