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
          <FaBriefcase /> Experience
        </CategoryTitle>
        
        <ExperienceItem>
          <Institution>Mid-Level Flutter Developer</Institution>
          <SubTitle>Tokma Technologies</SubTitle>
          <Duration>Aug, 2024 — Present • 7 mos</Duration>
          <Location>Kathmandu, Nepal</Location>
          <BulletPoints>
            <li>Developed new features and implemented UI designs into code using Flutter.</li>
            <li>Designed and created custom e-form features including scrolling features and data entries.</li>
            <li>Integrated Google and Facebook sign-in for user authentication.</li>
            <li>Designed dynamic functionalities using the BLOC design pattern.</li>
            <li>Integrated APIs for seamless data communication and backend functionality.</li>
            <li>Implemented payment gateway integration like Khalti for secure transactions.</li>
            <li>Collaborated with other developers and backend team to deliver features.</li>
            <li>Participated in team meetings to discuss new features and project updates.</li>
            <li>Ensured smooth functionality and user-friendly experiences throughout the app.</li>
            <li>Performed code review and deployed the app in Playstore and Appstore.</li>
          </BulletPoints>
        </ExperienceItem>

        <ExperienceItem>
          <Institution>Flutter Developer</Institution>
          <SubTitle>Inflancer Technology</SubTitle>
          <Duration>Oct, 2022 — Aug, 2024 • 1 yr, 11 mos</Duration>
          <Location>Kathmandu, Nepal</Location>
          <BulletPoints>
            <li>Developed new features and transformed UI designs into fully functional user interfaces.</li>
            <li>Integrated payment solution like eSewa for secure and seamless transactions.</li>
            <li>Optimized application performance to ensure a smooth and engaging user experience.</li>
            <li>Supported other team members initiatives by developing solutions to common problems and sharing those solutions.</li>
            <li>Identified and resolved bugs, improving app stability and performance.</li>
            <li>Wrote clean, maintainable, and testable code following best practices.</li>
            <li>Utilization of latest version of support libraries to ensure backend compatibility.</li>
            <li>Collaborated with backend developers, designers, and cross-functional teams to deliver scalable, high-quality solutions.</li>
            <li>Performed code review and deployed the app in Playstore and Appstore.</li>
          </BulletPoints>
        </ExperienceItem>

        <ExperienceItem>
          <Institution>Flutter Developer Intern</Institution>
          <SubTitle>YAJ Tech PVT. Ltd</SubTitle>
          <Duration>May, 2022 — Sep, 2022 • 5 mos</Duration>
          <Location>Kathmandu, Nepal</Location>
          <BulletPoints>
            <li>Assisted in developing and maintaining Flutter applications, ensuring seamless functionality and user-friendly interfaces.</li>
            <li>Supported the implementation of visually appealing UI designs that aligned with client requirements and design principles.</li>
            <li>Collaborated with cross-functional teams, including back-end developers and designers, to deliver efficient, high-quality, and scalable solutions.</li>
            <li>Gained hands-on experience in debugging, troubleshooting, and refining app features to improve user experience.</li>
          </BulletPoints>
        </ExperienceItem>
      </Category>
    </Section>
  )
}

export default Resume
