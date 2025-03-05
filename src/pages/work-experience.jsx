import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import ExperienceItem from '../components/ExperienceItem';
import styled from '../components/styled';

const ExperienceContainer = styled('div')`
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

const ExperienceList = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 0;
`;

const WorkExperiencePage = () => {
    const experiences = React.useMemo(() => [
        {
            company: 'Superna',
            period: '2022 - Present',
            description: `Full-Stack Software Developer working on enterprise-level data archiving and backup solutions.

<ul>
<li>Led architecture, design, and development of 21 new features and enhancements to the GoldenCopy application using Java backend with a GraphQL API, and React frontend, with python as the CLI</li>

<li>Developed an automated testing framework using Python to run over 14 integration tests on the system to ensure less accidental bugs</li>

<li>Identified, and fixed, over 50 different bugs in the system</li>
</ul>`
        },
        {
            company: 'Modulus Data',
            period: '2020 - 2022',
            description: `Integration Consultant and Developer, specializing in HR system integrations.

<ul>
<li>Developed over 30 data integrations, specialized in HR systems, using iPaaS solutions and Groovy scripting to prevent double data entry, create seamless real-time integrations, and balance journal entries for clients</li>

<li>Conceptualized a testing framework that would reduce project turnover for a specific HR system by approximately a week and a half</li>

<li>Reviewed, debugged, and corrected peers' Groovy code to adhere to client requirements, as well as training new employees to utilize integration software</li>

<li>Researched and documented the caveats of multiple HR system APIs, such as ADP, Oracle HCM, BambooHR, Greenhouse, and Predictive Index</li>
</ul>`
        },
        {
            company: 'Amdocs',
            period: '2019',
            description: `Software Engineering Intern focused on telecommunications software.

<ul>
<li>Automated and implemented backup and recovery procedures using Kubernetes for a Spring Boot system that resulted in greater availability and scalability</li>

<li>Developed Helm charts for the Kubernetes elements to allow for faster, more manageable deployments on the cluster</li>

<li>Resolved problems introduced through database migration in the Spring Boot backend, and the React-Redux frontend</li>
</ul>`
        },
        {
            company: 'Statistics Canada',
            period: '2018 - 2019',
            description: `Junior Developer working on data analysis tools and infrastructure.

<ul>
<li>Developed a website for viewing logs fetched through an API in C# Html and JavaScript, using the ASP.NET Core libraries, where the log details are updated in real-time using ajax calls to partial views</li>

<li>Developed and appended additional features to G-Link, a record linkage software, using C#, Windows Presentation Foundation, and the M-V-VM pattern, based on client requirements</li>

<li>Presented research findings on Apache Nifi, an open-source data pipelining tool, and Kylo, a tool that utilizes Nifi, by implementing them to automate a Use Case at Statistics Canada</li>

<li>Wrote technical documents on all findings, such as comparisons between Hive and HBase, Best Practices for using NiFi, Kylo, and MiNiFi, and SSL Certificate setup for a NiFi deployment, to pass on to next student and for developers</li>
</ul>`
        }
    ], []);

    return (
        <Layout>
            <Seo title="Work Experience" />
            <ExperienceContainer>
                <Title>Work Experience</Title>
                <ExperienceList>
                    {experiences.map((experience, index) => (
                        <ExperienceItem
                            key={index}
                            index={index}
                            company={experience.company}
                            period={experience.period}
                            description={experience.description}
                        />
                    ))}
                </ExperienceList>
            </ExperienceContainer>
        </Layout>
    );
};

export default React.memo(WorkExperiencePage);
