import React from 'react';
import styled from '../components/styled';
import Layout from '../components/Layout';
import Seo from '../components/seo';

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

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About Me" />
      <AboutContainer>
        <HeroSection>
          <HeroContent>
            <h1>About Me</h1>
            <p>
              A passionate software developer with a love for creating elegant solutions
              to complex problems. I believe in the power of technology to make the world
              a better place.
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
              With over 5 years of experience in software development, I've worked
              on a wide range of projects from web applications to system architecture.
              My journey in tech started with a curiosity about how things work, which
              led me to pursue a degree in Software Engineering.
            </p>
            <p>
              Currently, I'm focused on full-stack development, with a particular
              interest in:
            </p>
            <ul>
              <li>Building scalable web applications</li>
              <li>Cloud architecture</li>
              <li>User experience design</li>
              <li>Performance optimization</li>
            </ul>
          </InfoCard>

          <InfoCard>
            <h2>Technical Skills</h2>
            <p>
              I'm constantly learning and expanding my skill set. Here are some of
              the technologies I work with regularly:
            </p>
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
            <h2>Interests</h2>
            <p>
              Beyond coding, I'm passionate about:
            </p>
            <ul>
              <li>Skiing ⛷️</li>
              <li>Teaching and mentoring 📖</li>
              <li>Traveling 🌍</li>
              <li>Continuous learning 📚</li>
            </ul>
            <p>
              I believe in sharing knowledge and helping others grow in their
              technical journey, as well as traveling the world while experiencing new cultures.
            </p>
          </InfoCard>

          <InfoCard>
            <h2>Professional Philosophy</h2>
            <p>
              I approach every project with these core principles:
            </p>
            <ul>
              <li>Write clean, maintainable code</li>
              <li>Focus on user experience</li>
              <li>Embrace continuous learning</li>
              <li>Collaborate effectively with teams</li>
            </ul>
            <p>
              I believe that the best solutions come from understanding both the
              technical requirements and the human aspects of a problem.
            </p>
          </InfoCard>
        </ContentSection>
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage; 