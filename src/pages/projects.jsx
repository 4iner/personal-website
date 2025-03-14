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

const ProjectsPage = () => {
    const projects = React.useMemo(() => [
        {
            title: 'This website',
            description: 'This project was made to experiment more with React. All of the elements were made using plain HTML, styled with styled-components (and css), on the Gatsby framework so that serving it on AWS S3 using Cloudfront will be as simple as a single command. Custom-made components, UX, ESLinting, and css are some things that I wanted to improve on for my professional career, and this makes for a more fun resume!'
        },
        {
            title: 'Clinic CRM',
            description: 'A freelance project made during the 2020 COVID pandemic using React, Spring-Boot Java, and SQL. This combination provides a simple, quick, and efficient setup. The application is hosted entirely on AWS to ensure high availability when users need it.\n\nFeatures include static S3 website hosting and JWT security for a low-cost, highly-available secure application. You can try the demo at https://clinic-app.mufasa.ca using:\n\nUsername: "Demo"\nPassword: "ClinicAppDemo"\n\nNote: Please allow 1-2 minutes after clicking sign in, as the backend instance needs to start up. If you encounter an error, please try again or contact me through the "About me" section.'
        },
        {
            title: 'CrossPath',
            description: "A windows application game, created with the Processing IDE. This game was inspired by Linedoku's CrossPath, where you have to expand nodes on a grid orthogonally by the number indicated on them. This was purely for fun, as it was developed on a 12-hour roadtrip. You can download and try the game at https://github.com/4iner/CrossPath/releases/tag/initial"
        },
        {
            title: 'GUI Chess',
            description: "One of Carleton's assignments was to program a text-based Chess for one of our classes. I was bored after completing it, so I decided to go a step further and use the implementation of the logic and the classes to make it visual, with the Swing Java library. You can download and try the game at https://github.com/4iner/GUI-Chess/releases/tag/initial"
        }
    ], []);

    return (
        <Layout>
            <Seo title={'Projects'} />
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
