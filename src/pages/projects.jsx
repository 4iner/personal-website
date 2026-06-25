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
            description: 'I wanted a project where I had full ownership over the component design, styling, and UX decisions — not just features inside an existing codebase. Built with Gatsby (React) and deployed to AWS S3 + CloudFront with a single command. I used it as a reason to get better at building reusable components from scratch, setting up ESLint properly, and thinking about performance. It also makes for a more interesting resume than a PDF.'
        },
        {
            title: 'Clinic CRM',
            description: 'A freelance project I took on during the COVID lockdowns in 2020. A local clinic needed a way to manage patients and appointments, so I built them a full app — React frontend, Spring Boot backend, SQL database, all hosted on AWS.\n\nI kept costs low by using static S3 hosting for the frontend and a JWT-based auth flow that didn\'t need a heavy session server. The main thing I got out of this was experience scoping and delivering a real product for a non-technical client.\n\nYou can try a demo at https://clinic-app.mufasa.ca — Username: "Demo", Password: "ClinicAppDemo". Give it a minute or two to start up after signing in.'
        },
        {
            title: 'CrossPath',
            description: "A puzzle game built in Processing, inspired by Linedoku's CrossPath — you expand numbered nodes across a grid until every cell is covered. I coded the whole thing on a 12-hour road trip, just for the fun of it. It was a good reminder that side projects don't need a reason beyond wanting to build something. Download it at https://github.com/4iner/CrossPath/releases/tag/initial"
        },
        {
            title: 'GUI Chess',
            description: "Carleton had us implement text-based Chess as an assignment. I finished it and thought — why stop there? I took the same game logic and classes and built a visual version using Java Swing. I mostly just wanted to see if I could, and it turned out to be a good exercise in separating game logic from presentation. Download it at https://github.com/4iner/GUI-Chess/releases/tag/initial"
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
