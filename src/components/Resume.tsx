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
    window.open('/../../Resume2025_Haocheng_Fan.pdf', '_blank')
  }

  return (
      <Section>
        {/* Title and Download Button Side by Side */}
        <TitleWrapper>
          <Title>Resume</Title>
          <DownloadButton href="/Resume2025_Haocheng_Fan.pdf" download>
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

        {/* Technical Skills Section */}
        <Category>
          <CategoryTitle>🛠 Technical Skills</CategoryTitle>
          <BulletPoints>
            <li><strong>Languages:</strong> TypeScript, JavaScript, Java, C++, Python</li>
            <li><strong>Developer Tools:</strong> Visual Studio Code, IntelliJ, MatLab, Convex, Git, Railway</li>
            <li><strong>Technologies:</strong> HTML, CSS, React, Node.js, SQL, Django, Bootstrap, Tailwind, Redis, Docker, AWS</li>
          </BulletPoints>
        </Category>

        {/* Experience Section */}
        <Category>
          <CategoryTitle>
            <FaBriefcase /> Related Experience
          </CategoryTitle>

          <ExperienceItem>
            <Institution>UBC GAVE Development Club</Institution>
            <SubTitle>Software Development Engineer</SubTitle>
            <Duration>Sep 2024 — Present</Duration>
            <Location>Vancouver, Canada</Location>
            <BulletPoints>
              <li>Developed and programmed interactive 2D and 3D game mechanics using Unity and C#.</li>
              <li>Utilized version control (Git, GitHub) for collaborative development with the team.</li>
              <li>Collaborated with artists and designers to create immersive gameplay experiences.</li>
              <li>Participated in weekly sprint meetings to discuss progress, features, and challenges.</li>
            </BulletPoints>
          </ExperienceItem>

          <ExperienceItem>
            <Institution>AI Interview Coach (Easy Hack Hackathon)</Institution>
            <SubTitle>Software Engineer</SubTitle>
            <Duration>March 15-16, 2025</Duration>
            <Location>Vancouver, Canada</Location>
            <BulletPoints>
              <li>Developed an AI-powered interview simulation using React, TypeScript, and Tailwind.</li>
              <li>Integrated OpenAI’s GPT-4 & Text-to-Speech API with Web Speech API for voice interaction.</li>
              <li>Utilized AWS S3 for secure resume storage, enhancing scalability and reliability.</li>
              <li>Extracted job description & resume content using React-PDF for AI-driven contextual interviews.</li>
            </BulletPoints>
          </ExperienceItem>

          <ExperienceItem>
            <Institution>JobMatcher (Build with AI Hackathon)</Institution>
            <SubTitle>Software Engineer</SubTitle>
            <Duration>March 1, 2025</Duration>
            <Location>Vancouver, Canada</Location>
            <BulletPoints>
              <li>Developed an AI-powered job application automation platform using React and TypeScript.</li>
              <li>Built an AI-driven job matching system with Node.js backend and Next.js API Routes.</li>
              <li>Used PostgreSQL to store job listings, user profiles, and application statuses.</li>
              <li>Automated PDF content extraction using Gumloop workflows.</li>
            </BulletPoints>
          </ExperienceItem>

        </Category>

        {/* Projects Section */}
        <Category>
          <CategoryTitle>🚀 Projects</CategoryTitle>

          <ExperienceItem>
            <Institution>UBC Campus Explorer</Institution>
            <SubTitle>Software Engineer</SubTitle>
            <Duration>Sep - Dec 2024</Duration>
            <BulletPoints>
              <li>Built a backend query system using Node.js and TypeScript.</li>
              <li>Implemented black-box testing to validate dataset queries.</li>
              <li>Developed a RESTful API with Express.js for retrieving room coordinates.</li>
              <li>Integrated Google Maps API with Next.js for an interactive campus map.</li>
            </BulletPoints>
          </ExperienceItem>

          <ExperienceItem>
            <Institution>Medical Diagnostic AI Platform (UBC CIC Hackathon)</Institution>
            <SubTitle>Software Engineer</SubTitle>
            <Duration>Oct 5, 2024</Duration>
            <BulletPoints>
              <li>Developed a Flutter-based mobile app for AI-driven medical diagnostics.</li>
              <li>Implemented secure authentication using AWS Cognito.</li>
              <li>Designed a serverless backend using AWS Lambda, API Gateway, and Bedrock.</li>
            </BulletPoints>
          </ExperienceItem>

        </Category>

      </Section>
  )
}

export default Resume
