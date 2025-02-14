import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import WhatIDo from './WhatIDo'
import Skills from './Skills'

const Section = styled.section`
  margin-bottom: 3rem;
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  &::after {
    content: '|';
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    from, to { opacity: 1 }
    50% { opacity: 0 }
  }
`

const Description = styled.p`
  color: #888;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const About = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Hi, I'm Haocheng Fan"
  const typingSpeed = 100 // milliseconds per character

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <>
      <Section>
        <Title>{displayText}</Title>
        <Description>
        A UBC Computer Science and Mathematics student passionate about full-stack development and emerging technologies, from AI to decentralized systems. I love turning ideas into reality through hackathons and personal projects, blending functional code with intuitive UI/UX design.
        </Description>
        <Description>
        When I’m not coding, you’ll find me rock climbing, playing basketball, or badminton—activities that fuel my perseverance and teamwork mindset. Eager to collaborate on tech that marries innovation with purpose. Let’s create something impactful!
        </Description>
      </Section>
      
      <WhatIDo />
      <Skills />
    </>
  )
}

export default About 