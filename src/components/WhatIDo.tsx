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
            <span>🎓</span>
            UBC Student
          </CardTitle>
          <CardDescription>
            Learning Math and CS. Passionated about programming. CGPA at 3.9.
          </CardDescription>
        </Card>

        <Card>
          <CardTitle>
            <span>🖥️</span>
            Web Development
          </CardTitle>
          <CardDescription>
            Doing my personal projects while learning related tech stacks. Focusing on both front-end and back-end.
          </CardDescription>
        </Card>

        <Card>
          <CardTitle>
            <span>🎮</span>
            Game Dev
          </CardTitle>
          <CardDescription>
            Developing games using unity and c#, collaborate with other teamates.
          </CardDescription>
        </Card>

        <Card>
          <CardTitle>
            <span>📱</span>
            Mobile App Development
          </CardTitle>
          <CardDescription>
            Learning developing high-quality apps for both andrew and ios. 
          </CardDescription>
        </Card>

        <Card>
          <CardTitle>
            <span>🧑‍💻</span>
            About Portfolio
          </CardTitle>
          <CardDescription>
            This portfolio is deployed by setting up CI/CD pipeline using AWS services and host it under a custom domain.
          </CardDescription>
        </Card>
      </Grid>
    </Section>
  )
}

export default WhatIDo 