import React from 'react';
import styled from '../components/styled';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import ContactForm from '../components/ContactForm';

const AboutContainer = styled('div')`
  max-width: var(--size-content);
  margin: 0 auto;
  padding: var(--space-4);
`;

const ProfileImageWrapper = styled('div')`
  position: relative;
  width: 280px;
  height: 280px;
  transform: rotate(-3deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px) rotate(-3deg);

    &::after {
      opacity: 1;
      transform: translateX(-80%) translateY(-3px) rotate(3deg);
    }

    img {
      box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.7);
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 65px;
    height: 26px;
    background: url('/meme_sunglasses.jpg') no-repeat center;
    background-size: contain;
    mix-blend-mode: multiply;
    top: 37%;
    left: 50.5%;
    transform: translateX(-80%) translateY(-30px) rotate(3deg);
    opacity: 0;
    transition: all 0.4s ease-out;
    z-index: 10;
    filter: contrast(1.2);
  }

  @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
    width: 200px;
    height: 200px;
    margin: var(--space-4) 0;

    &::after {
      width: 45px;
      height: 18px;
    }
  }
`;

const ProfileImage = styled('img')`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 20%;
  border: 4px solid ${props => props.theme.color.accent};
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
`;

const HeroSection = styled('section')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  margin-bottom: var(--space-5);

  @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const HeroContent = styled('div')`
  flex: 1;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: var(--space-4);
    background: linear-gradient(120deg, ${props => props.theme.color.accent}, ${props => props.theme.color.textLight});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme.color.textLight}CC;
    max-width: 600px;
    line-height: 1.6;
  }
`;

const ContentSection = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  margin-bottom: var(--space-5);

  @media (max-width: ${props => props.theme.size.mobile.breakpoint}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled('div')`
  background: ${props => props.theme.color.contrastPrimary}40;
  border: 1px solid ${props => props.theme.color.accent}40;
  border-radius: 12px;
  padding: var(--space-4);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  h2 {
    color: ${props => props.theme.color.accent};
    margin-bottom: var(--space-3);
    font-size: 1.5rem;
  }

  p {
    color: ${props => props.theme.color.textLight}CC;
    line-height: 1.6;
    margin-bottom: var(--space-3);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: ${props => props.theme.color.textLight}CC;
      margin-bottom: var(--space-2);
      display: flex;
      align-items: center;

      &:before {
        content: "→";
        color: ${props => props.theme.color.accent};
        margin-right: var(--space-2);
      }
    }
  }
`;

const SkillsGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--space-3);
  margin-top: var(--space-3);
`;

const SkillTag = styled('span')`
  background: ${props => props.theme.color.accent}20;
  color: ${props => props.theme.color.textLight};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  text-align: center;
  border: 1px solid ${props => props.theme.color.accent}40;
`;

export function Head() {
  return <Seo title="About Me" />
}

const AboutPage = () => {
  return (
    <Layout>
      <AboutContainer>
        <HeroSection>
          <HeroContent>
            <h1>About Me</h1>
            <p>
              Software developer based in Ottawa. I've worked across the stack —
              backends, frontends, cloud infra, integrations — and I tend to end up
              caring a lot about the details that make something actually usable.
            </p>
          </HeroContent>
          <ProfileImageWrapper>
            <ProfileImage src="/me.jpg" alt="Profile picture" />
          </ProfileImageWrapper>
        </HeroSection>

        <ContentSection>
          <InfoCard>
            <h2>Background</h2>
            <p>
              I studied Software Engineering at Carleton and have been working in
              the industry since 2018. I've done integrations consulting, enterprise
              backend work, a short stint in telecom, and now energy modelling software.
            </p>
            <p>
              The through-line has been full-stack work — I'm comfortable on the
              backend but I also care about the frontend being good, not just functional.
            </p>
          </InfoCard>

          <InfoCard>
            <h2>Technical Skills</h2>
            <SkillsGrid>
              <SkillTag>Java</SkillTag>
              <SkillTag>React</SkillTag>
              <SkillTag>REST APIs</SkillTag>
              <SkillTag>Python</SkillTag>
              <SkillTag>AWS</SkillTag>
              <SkillTag>Docker</SkillTag>
              <SkillTag>GraphQL</SkillTag>
              <SkillTag>SQL DBs</SkillTag>
            </SkillsGrid>
          </InfoCard>

          <InfoCard>
            <h2>Outside of Work</h2>
            <ul>
              <li>Skiing ⛷️</li>
              <li>Teaching and mentoring 📖</li>
              <li>Traveling 🌍</li>
            </ul>
            <p>
              I also enjoy helping people get into software development. There's
              something satisfying about explaining something until it clicks for someone.
            </p>
          </InfoCard>

          <InfoCard>
            <h2>What I Value</h2>
            <p>
              I care about the code being readable to the next person, and the product
              being usable to the actual user. I tend to ask "why" a lot — why is this
              built this way, why is this the requirement — because the answer usually
              changes what you build.
            </p>
          </InfoCard>
        </ContentSection>

        <ContactForm />
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage; 