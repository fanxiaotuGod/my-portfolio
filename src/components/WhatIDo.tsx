import styled from '@emotion/styled'

const Section = styled.section`
  margin-bottom: 3rem;
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`

const Card = styled.div`
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 0.5rem;
`

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const CardDescription = styled.p`
  color: #888;
  line-height: 1.4;
`

const WhatIDo = () => {
  return (
    <Section>
      <Title>What I'm Doing</Title>
      <Grid>
        <Card>
          <CardTitle>
            <span>📱</span>
            Mobile Apps
          </CardTitle>
          <CardDescription>
            Professional development of applications for Android and iOS.
          </CardDescription>
        </Card>

        <Card>
          <CardTitle>
            <span>🖥️</span>
            Web Development
          </CardTitle>
          <CardDescription>
            High-quality development of sites at the professional level.
          </CardDescription>
        </Card>

        <Card>
          <CardTitle>
            <span>🎨</span>
            UI/UX Design
          </CardTitle>
          <CardDescription>
            The most modern and high-quality design made at a professional level.
          </CardDescription>
        </Card>

        <Card>
          <CardTitle>
            <span>⚙️</span>
            Backend Development
          </CardTitle>
          <CardDescription>
            High-performance backend services designed for scalability and seamless user experience.
          </CardDescription>
        </Card>
      </Grid>
    </Section>
  )
}

export default WhatIDo 