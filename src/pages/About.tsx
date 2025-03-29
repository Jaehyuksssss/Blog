import styled from "styled-components";
import { Layout } from "../components/Layout/Layout";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileSection = styled.section`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h1 {
    ${({ theme }) => theme.typography.h1}
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    color: ${({ theme }) => theme.colors.monochrome[600]};
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ContentSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  h2 {
    ${({ theme }) => theme.typography.h2}
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.6;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const SkillItem = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.monochrome[100]};
  border-radius: 4px;
  text-align: center;
`;

function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "Docker",
  ];

  return (
    <Layout>
      <AboutContainer>
        <ProfileSection>
          <img src="/profile.jpg" alt="Profile" />
          <h1>About Me</h1>
          <p>
            소프트웨어 엔지니어링과 클라우드 기술에 대한 이야기를 공유합니다.
          </p>
        </ProfileSection>

        <ContentSection>
          <h2>Who Am I?</h2>
          <p></p>
        </ContentSection>

        <ContentSection>
          <h2>Skills</h2>
          <SkillsGrid>
            {skills.map((skill) => (
              <SkillItem key={skill}>{skill}</SkillItem>
            ))}
          </SkillsGrid>
        </ContentSection>
      </AboutContainer>
    </Layout>
  );
}

export default About;
