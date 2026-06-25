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
            description: `Full-Stack Developer on an energy modelling platform — React/Next.js frontend, NestJS backend, GoLang legacy runner, and a Marimo Python API service.

<ul>
<li>Migrated the legacy energy modelling software off a Windows-only VM by stripping out VB-specific code, making it Linux-compatible and cutting the image size from ~3 GB to ~500 MB</li>

<li>Built a web UI to run the legacy software on the cloud; it previously required a local Windows machine, so this cut run times by ~40% and let users get their computers back while jobs ran remotely</li>

<li>Built a graph-based UI so users can see and navigate their energy system — previously everything was managed through folders, which didn't scale well</li>

<li>Work closely with end-users (colleagues at the organization) and regularly ship changes based on their feedback</li>
</ul>`
        },
        {
            company: 'Superna',
            period: '2022 - 2025',
            description: `Full-Stack Developer on GoldenCopy, an enterprise data archiving and backup product — Java/GraphQL backend, React frontend, Python CLI.

<ul>
<li>Architected and shipped 21 features and enhancements end-to-end, from design through to production</li>

<li>Wrote a Python integration testing framework covering 14+ test scenarios, which caught regressions before they reached users</li>

<li>Tracked down and resolved 50+ bugs across the stack</li>
</ul>`
        },
        {
            company: 'Modulus Data',
            period: '2020 - 2022',
            description: `Integration Developer and Consultant, building HR system integrations for clients using iPaaS platforms and Groovy scripting.

<ul>
<li>Built 30+ integrations across HR systems including ADP, Oracle HCM, BambooHR, Greenhouse, and Predictive Index — covering real-time data sync, payroll journal balancing, and eliminating double data entry</li>

<li>Designed a testing framework for one HR system that cut typical project delivery time by about a week and a half</li>

<li>Reviewed and debugged peers' Groovy code, and trained new hires on the integration tooling</li>

<li>Documented API quirks and gotchas for each HR system we worked with, so the next person didn't have to rediscover them</li>
</ul>`
        },
        {
            company: 'Amdocs',
            period: '2019',
            description: `Software Engineering Intern on a telecommunications platform built with Spring Boot and React/Redux.

<ul>
<li>Set up automated backup and recovery for the Spring Boot system using Kubernetes, improving availability and making the deployment more resilient</li>

<li>Wrote Helm charts for the Kubernetes components so the team could deploy and manage the cluster more easily</li>

<li>Fixed data integrity issues that surfaced after a database migration, across both the backend and the React-Redux frontend</li>
</ul>`
        },
        {
            company: 'Statistics Canada',
            period: '2018 - 2019',
            description: `Junior Developer — split time between building internal tools and researching data pipeline technologies.

<ul>
<li>Built a real-time log viewer in ASP.NET Core (C#/JS) that polled an internal API and updated the page live using AJAX partial views</li>

<li>Added features to G-Link, a record linkage tool, using C#, WPF, and MVVM — working directly from client requirements</li>

<li>Researched Apache NiFi and Kylo by actually implementing them against a real Statistics Canada use case, then presented the findings to the team</li>

<li>Wrote technical docs on everything — NiFi best practices, Hive vs. HBase, SSL setup — so the next student (and the devs) wouldn't start from scratch</li>
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
