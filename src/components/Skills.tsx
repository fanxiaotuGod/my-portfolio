import styled from '@emotion/styled'

const Section = styled.section`
  margin-bottom: 3rem;
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
  text-align: center;
`

const SkillItem = styled.div`
  img {
    width: 60px;
    height: 60px;
    margin-bottom: 0.5rem;
  }
`

const Skills = () => {
  return (
    <Section>
      <Title>Skills</Title>
      <SkillsGrid>
        <SkillItem>
          <img src="/path-to-flutter-logo.png" alt="Flutter" />
        </SkillItem>
        <SkillItem>
          <img src="/path-to-firebase-logo.png" alt="Firebase" />
        </SkillItem>
        {/* Add more skill items as needed */}
      </SkillsGrid>
    </Section>
  )
}

export default Skills 