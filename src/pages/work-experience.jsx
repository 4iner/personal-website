import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import ExperienceItem from '../components/ExperienceItem';
import styled from '../components/styled';

const ExperienceContainer = styled('div')`
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 24px;
`;

const Title = styled('h1')`
    color: ${props => props.theme.color.textLight};
    margin-bottom: 32px;
    font-size: 2rem;
    letter-spacing: 0.5px;
`;

const experiences = [
    {
        company: 'Superna',
        period: '2022 - Present',
        description: 'Software Developer working on enterprise-level data protection and disaster recovery solutions. Developing and maintaining features for ransomware detection, automated DR testing, and backup validation using React, TypeScript, and Java.'
    },
    {
        company: 'Modulus Data',
        period: '2020 - 2022',
        description: 'Full Stack Developer specializing in integration solutions. Built and maintained secure, high-performance data integration pipelines using React, Spring Boot, and AWS. Implemented JWT authentication and automated deployment workflows.'
    },
    {
        company: 'Amdocs',
        period: '2019',
        description: 'Software Developer Intern focused on telecommunications software. Contributed to the development of customer management systems and billing solutions using Java and Oracle technologies.'
    },
    {
        company: 'Statistics Canada',
        period: '2018 - 2019',
        description: 'Junior Developer working on data analysis tools. Developed internal applications for statistical analysis and data visualization using Python and R. Collaborated with statisticians to implement efficient data processing algorithms.'
    }
];

const WorkExperiencePage = () => (
    <Layout>
        <Seo title="Work Experience" />
        <ExperienceContainer>
            <Title>Work Experience</Title>
            {experiences.map((experience, index) => (
                <ExperienceItem
                    key={`experience-${experience.company.toLowerCase()}`}
                    {...experience}
                />
            ))}
        </ExperienceContainer>
    </Layout>
);

export default WorkExperiencePage;
