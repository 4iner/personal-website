import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import styled from '../components/styled';

// Memoize sections data to prevent recreation
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

// CSS classes instead of dynamic styled-components
const staticStyles = {
    exploring: {
        minHeight: 'auto',
        padding: '0',
    },
    default: {
        minHeight: '100%',
        padding: '20px',
    }
};

const PageContainer = styled(motion.div)`
    min-height: ${props => props.isExploring ? 'auto' : '100%'};
    position: relative;
    display: flex;
    flex-direction: column;
    padding: ${props => props.isExploring ? '0' : '20px'};
    transition: padding 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const HeroSection = styled(motion.div)`
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
    background: ${props => !props.isExploring && props.theme.color.contrastPrimary}95;
    border-radius: ${props => !props.isExploring && props.theme.size.borderRadius.medium};
    border: ${props => !props.isExploring && `1px solid ${props.theme.color.accent}40`};
`;

const Title = styled(motion.h1)`
    font-size: ${props => props.isExploring ? '1.5rem' : '2.75rem'};
    margin-bottom: ${props => props.isExploring ? '0' : '2rem'};
    color: ${props => props.theme.color.textLight};
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
    
    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        font-size: ${props => props.isExploring ? '1.25rem' : '2rem'};
        margin-bottom: ${props => props.isExploring ? '0' : '1.5rem'};
    }
`;

const InteractiveSection = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
    margin-top: ${props => props.isExploring ? '5px' : '0'};
    margin-bottom: ${props => props.isExploring ? '20px' : '0'};
`;

const Card = styled(motion.div)`
    background: ${props => props.theme.color.contrastPrimary}95;
    border: 2px solid ${props => props.theme.color.accent}40;
    border-radius: ${props => props.theme.size.borderRadius.medium};
    padding: ${props => props.isFirst ? '1.5rem' : '2rem'};
    margin: 0.75rem 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:last-child {
        margin-bottom: 0;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${props => props.theme.color.accent};
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 0;
    }

    &:hover:before {
        opacity: 0.05;
    }

    h2 {
        color: ${props => props.theme.color.accent};
        margin: 0 0 1rem;
        position: relative;
        z-index: 1;
    }

    p {
        color: ${props => props.theme.color.textLight};
        opacity: 0.9;
        margin: 0;
        position: relative;
        z-index: 1;
    }
`;

const Emoji = styled(motion.span)`
    font-size: 2rem;
    margin-right: 1rem;
    display: inline-block;
`;

const StartButton = styled(motion.button)`
    background: ${props => props.theme.color.accent};
    color: ${props => props.theme.color.textLight};
    border: none;
    padding: 0.85rem 2rem;
    font-size: 1.1rem;
    border-radius: 30px;
    cursor: pointer;
    margin: 0;
    transition: transform 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
        padding: 0.75rem 1.75rem;
        font-size: 1rem;
    }
`;

const IndexPage = () => {
    const [isExploring, setIsExploring] = React.useState(false);

    // Memoize all animation variants
    const variants = React.useMemo(() => ({
        page: {
            initial: { opacity: 1 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }
        },
        hero: {
            initial: { height: "calc(100vh - var(--header-height))" },
            animate: { 
                height: isExploring ? "80px" : "calc(100vh - var(--header-height))",
                transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
            }
        },
        title: {
            initial: { scale: 1 },
            animate: { 
                scale: isExploring ? 0.98 : 1,
                transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
            }
        },
        button: {
            initial: { opacity: 0, y: 10 },
            animate: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
            },
            exit: { 
                opacity: 0,
                scale: 0.98,
                transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
            }
        },
        section: {
            initial: { opacity: 0, y: 20 },
            animate: { 
                opacity: 1, 
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                    staggerChildren: 0.08,
                    delayChildren: 0.3
                }
            },
            exit: { 
                opacity: 0, 
                y: -10,
                transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
            }
        },
        card: {
            initial: { opacity: 0, y: 15 },
            animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
            }
        }
    }), [isExploring]);

    const handleExplore = React.useCallback(() => {
        setIsExploring(true);
    }, []);

    return (
        <Layout>
            <Seo title="Home" />
            <PageContainer
                isExploring={isExploring}
                variants={variants.page}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <HeroSection
                    isExploring={isExploring}
                    variants={variants.hero}
                    initial="initial"
                    animate="animate"
                >
                    <Title
                        isExploring={isExploring}
                        variants={variants.title}
                        initial="initial"
                        animate="animate"
                        layout
                    >
                        Welcome to My Digital Space
                    </Title>
                    <AnimatePresence>
                        {!isExploring && (
                            <StartButton
                                variants={variants.button}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                onClick={handleExplore}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Exploring
                            </StartButton>
                        )}
                    </AnimatePresence>
                </HeroSection>

                <AnimatePresence>
                    {isExploring && (
                        <InteractiveSection
                            isExploring={isExploring}
                            variants={variants.section}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {SECTIONS.map((section, index) => (
                                <Link to={section.link} key={section.link} style={{ textDecoration: 'none' }}>
                                    <Card
                                        isFirst={index === 0}
                                        variants={variants.card}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        <Emoji>{section.emoji}</Emoji>
                                        <h2>{section.title}</h2>
                                        <p>{section.description}</p>
                                    </Card>
                                </Link>
                            ))}
                        </InteractiveSection>
                    )}
                </AnimatePresence>
            </PageContainer>
        </Layout>
    );
};

export default React.memo(IndexPage);
