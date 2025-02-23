import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import styled from '../components/styled';

const PageContainer = styled('div')`
    min-height: ${props => props.isExploring ? 'auto' : '100%'};
    position: relative;
    display: flex;
    flex-direction: column;
    padding: ${props => props.isExploring ? '0 0 40px' : '20px 20px 40px'};
    transition: padding 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate3d(0, 0, 0);
`;

const HeroSection = styled('div')`
    min-height: ${props => props.isExploring ? '80px' : 'calc(100vh - var(--header-height) - 40px)'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    padding: ${props => props.isExploring ? '2px 20px' : '20px'};
    overflow: hidden;
    margin: 0;
    background: ${props => !props.isExploring && props.theme.color.contrastPrimary};
    border-radius: ${props => !props.isExploring && props.theme.size.borderRadius.medium};
    border: ${props => !props.isExploring && `1px solid ${props.theme.color.accent}40`};
    transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate3d(0, 0, 0);
`;

const Title = styled('h1')`
    font-size: ${props => props.isExploring ? '1.5rem' : '2.75rem'};
    margin-bottom: ${props => props.isExploring ? '0' : '2rem'};
    color: ${props => props.theme.color.textLight};
    background: ${props => props.theme.color.accent};
    background: linear-gradient(
        45deg,
        ${props => props.theme.color.accent},
        ${props => props.theme.color.textLight}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
    padding: 0;
    max-width: 600px;
    transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    
    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        font-size: ${props => props.isExploring ? '1.25rem' : '2rem'};
        margin-bottom: ${props => props.isExploring ? '0' : '1.5rem'};
    }
`;

const InteractiveSection = styled('div')`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
    margin-top: ${props => props.isExploring ? '5px' : '0'};
    margin-bottom: ${props => props.isExploring ? '20px' : '0'};
    opacity: ${props => props.isVisible ? 1 : 0};
    transform: translateY(${props => props.isVisible ? '0' : '20px'});
    transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Card = styled(Link)`
    display: block;
    text-decoration: none;
    background: ${props => props.theme.color.contrastPrimary}95;
    border: 2px solid ${props => props.theme.color.accent}40;
    border-radius: ${props => props.theme.size.borderRadius.medium};
    padding: ${props => props.isFirst ? '1.5rem' : '2rem'};
    margin: 0.75rem 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        transform: translateY(-2px);
        background: ${props => props.theme.color.contrastSecondary}95;
    }

    &:active {
        transform: translateY(0);
    }

    h2 {
        color: ${props => props.theme.color.accent};
        margin: 0 0 1rem;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
    }

    p {
        color: ${props => props.theme.color.textLight};
        opacity: 0.9;
        margin: 0;
        position: relative;
        z-index: 1;
    }
`;

const Emoji = styled('span')`
    font-size: 2rem;
    margin-right: 1rem;
    display: inline-block;
`;

const StartButton = styled('button')`
    background: ${props => props.theme.color.accent};
    color: ${props => props.theme.color.textLight};
    border: none;
    padding: 0.85rem 2rem;
    font-size: 1.1rem;
    border-radius: 30px;
    cursor: pointer;
    margin: 0;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        padding: 0.75rem 1.75rem;
        font-size: 1rem;
    }
`;

const SECTIONS = [
    {
        title: "Projects Showcase 🚀",
        description: "Dive into my portfolio of projects! From web applications to creative experiments, discover the solutions I've built. Each project comes with its own story and technical journey.",
        link: "/projects",
        emoji: "🚀"
    },
    {
        title: "Professional Journey 💼",
        description: "Explore my career path and professional experiences. See how I've grown as a developer and the impact I've made in different roles.",
        link: "/work-experience",
        emoji: "💼"
    },
    {
        title: "Technical Skills 🛠",
        description: "Check out my technical toolkit! An interactive showcase of the technologies and skills I've mastered. Play with the 3D carousel to explore different technologies.",
        link: "/skills",
        emoji: "🛠"
    }
];

const SectionCard = React.memo(({ section, isFirst }) => (
    <Card 
        to={section.link} 
        isFirst={isFirst}
    >
        <h2>
            <Emoji>{section.emoji}</Emoji>
            {section.title}
        </h2>
        <p>{section.description}</p>
    </Card>
));

const IndexPage = () => {
    const [isExploring, setIsExploring] = React.useState(false);

    const handleExplore = React.useCallback(() => {
        setIsExploring(true);
    }, []);

    return (
        <Layout>
            <Seo title="Home" />
            <PageContainer isExploring={isExploring}>
                <HeroSection isExploring={isExploring}>
                    <Title isExploring={isExploring}>
                        Welcome to My Digital Space
                    </Title>
                    {!isExploring && (
                        <StartButton onClick={handleExplore}>
                            Start Exploring
                        </StartButton>
                    )}
                </HeroSection>

                {isExploring && (
                    <InteractiveSection isVisible={isExploring}>
                        {SECTIONS.map((section, index) => (
                            <SectionCard 
                                key={section.link}
                                section={section}
                                isFirst={index === 0}
                            />
                        ))}
                    </InteractiveSection>
                )}
            </PageContainer>
        </Layout>
    );
};

export default React.memo(IndexPage);
