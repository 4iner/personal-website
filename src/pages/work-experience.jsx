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

export function Head() {
    return <Seo title="Work Experience" />
}

const WorkExperiencePage = () => {
    const experiences = React.useMemo(() => [
        {
            company: 'Posterity Group',
            period: 'Oct 2025 - Present',
            description: `Full-Stack Developer on an energy modelling platform. Stack: React/Next.js, NestJS, Go, Python/Marimo.

<ul>
<li>Migrated the legacy modelling runner from a Windows-only VM to Linux by removing VB-specific code; image size dropped from ~3 GB to ~500 MB</li>

<li>Built a web UI to run the modelling software on the cloud, cutting job times by ~40%. Previously it only ran on local Windows machines</li>

<li>Built a graph UI for navigating energy systems; the previous workflow was entirely folder-based</li>

<li>Work directly with colleagues who use the product and regularly ship changes based on their feedback</li>
</ul>`
        },
        {
            company: 'Superna',
            period: '2022 - 2025',
            description: `Full-Stack Developer on GoldenCopy, an enterprise data archiving and backup product. Java/GraphQL backend, React frontend, Python CLI.

<ul>
<li>Designed and shipped 21 features across the full stack</li>

<li>Wrote a Python integration testing framework with 14+ test scenarios</li>

<li>Found and fixed 50+ bugs across the stack</li>
</ul>`
        },
        {
            company: 'Modulus Data',
            period: '2020 - 2022',
            description: `Integration Developer and Consultant, building HR system integrations using iPaaS platforms and Groovy scripting.

<ul>
<li>Built 30+ integrations for clients across ADP, Oracle HCM, BambooHR, Greenhouse, and Predictive Index, covering real-time data sync, payroll journal balancing, and eliminating double data entry</li>

<li>Designed a testing framework for one HR system that cut delivery time by about a week and a half per project</li>

<li>Reviewed peers' Groovy code and trained new hires on the integration tooling</li>

<li>Documented API behaviour and edge cases for each HR system we worked with</li>
</ul>`
        },
        {
            company: 'Amdocs',
            period: '2019',
            description: `Software Engineering Intern on a Spring Boot / React-Redux telecommunications platform.

<ul>
<li>Set up Kubernetes-based backup and recovery for the Spring Boot system</li>

<li>Wrote Helm charts for all Kubernetes components</li>

<li>Fixed data integrity issues introduced by a database migration on both the backend and the frontend</li>
</ul>`
        },
        {
            company: 'Statistics Canada',
            period: '2018 - 2019',
            description: `Junior Developer, split between building internal tooling and researching data pipeline technologies.

<ul>
<li>Built a real-time log viewer in ASP.NET Core (C#/JS) using AJAX partial view polling</li>

<li>Added features to G-Link, a record linkage tool, in C# and WPF (MVVM)</li>

<li>Researched Apache NiFi and Kylo by implementing them on a real use case, then presented findings to the team</li>

<li>Wrote documentation on NiFi best practices, Hive vs. HBase, and SSL setup for future developers</li>
</ul>`
        }
    ], []);

    return (
        <Layout>
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
