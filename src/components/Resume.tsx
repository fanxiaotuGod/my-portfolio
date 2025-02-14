import styled from '@emotion/styled'
import { FaGraduationCap, FaBriefcase } from "react-icons/fa"

const Section = styled.section`
  margin-bottom: 3rem;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

const Title = styled.h2`
  font-size: 2rem;
`

const DownloadButton = styled.button`
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #ffed4a;
    transform: translateY(-2px);
  }
`

const Category = styled.div`
  margin-bottom: 2.5rem;
`

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffd700;
`

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  position: relative;
  padding-left: 1rem;
  
  &:before {
    content: "•";
    color: #ffd700;
    position: absolute;
    left: 0;
  }
`

const Institution = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`

const SubTitle = styled.div`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

const Duration = styled.div`
  color: #ffd700;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

const Location = styled.div`
  color: #888;
  font-style: italic;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

const BulletPoints = styled.ul`
  list-style: none;
  margin-left: 1rem;
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &:before {
      content: "•";
      color: #ffd700;
      position: absolute;
      left: -1rem;
    }
  }
`

const Resume = () => {
  const handleDownloadCV = () => {
    window.open('/path-to-your-cv.pdf', '_blank')
  }

  return (
    <Section>
      {/* Title and Download Button Side by Side */}
      <TitleWrapper>
        <Title>Resume</Title>
        <DownloadButton onClick={handleDownloadCV}>
          📥 Download CV
        </DownloadButton>
      </TitleWrapper>

      {/* Education Section */}
      <Category>
        <CategoryTitle>
          <FaGraduationCap /> Education
        </CategoryTitle>
        
        <ExperienceItem>
          <Institution>The University of British Columbia</Institution>
          <SubTitle>Bachelor of Science in Computer Science and Mathematics</SubTitle>
          <Duration>2023 — 2026</Duration>
        </ExperienceItem>

        <ExperienceItem>
          <Institution>Langara College</Institution>
          <SubTitle>University Transfer Program</SubTitle>
          <Duration>2022 — 2023</Duration>
        </ExperienceItem>
      </Category>

      {/* Experience Section */}
      <Category>
        <CategoryTitle>
          <FaBriefcase /> Related Experience
        </CategoryTitle>
        
        <ExperienceItem>
          <Institution>UBC GAVE Development Club</Institution>
          <SubTitle>Software Development Engineer</SubTitle>
          <Duration>Sep, 2024 — Present</Duration>
          <Location>Vancouver, Canada</Location>
          <BulletPoints>
            <li>Developed and programmed interactive 2D and 3D game mechanics using Unity and C#.</li>
            <li>Utilized version control (Git, GitHub) for collaborative development with the team.</li>
            <li>Collaborated with artists and designers to create immersive gameplay experiences.</li>
            <li>Participated in weekly sprint meetings to discuss progress, features, and challenges.</li>
          </BulletPoints>
        </ExperienceItem>


        <ExperienceItem>
          <Institution>UBC CIC Generative AI and Sustainability Hackathon</Institution>
          <SubTitle>Medical Diagnostic Project – Software Engineer</SubTitle>
          <Duration>March, 2024</Duration>
          <Location>Vancouver, Canada</Location>
          <BulletPoints>
            <li>Developed an AI-powered medical diagnostic app using AWS services.</li>
            <li>Built a Flutter-based frontend to provide online consultations to users.</li>
            <li>Implemented AWS Cognito for user authentication and secure login.</li>
            <li>Designed and integrated RESTful APIs using AWS API Gateway and Lambda functions.</li>
            <li>Leveraged AWS Bedrock to generate symptom-based medical recommendations.</li>
            <li>Enhanced healthcare accessibility for underserved regions through AI-driven solutions.</li>
            <li>Worked in a fast-paced hackathon environment, collaborating with a multidisciplinary team.</li>
          </BulletPoints>
        </ExperienceItem>

      </Category>
    </Section>
  )
}

export default Resume
