import { useState } from 'react'
import styled from '@emotion/styled'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'

const Container = styled.div`
  background-color: #242424;
  border-radius: 1rem;
  padding: 2rem;
`

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`

const NavLink = styled.a<{ active: boolean }>`
  color: ${props => props.active ? '#ffd700' : '#888'};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`

const ContentContainer = styled.div<{ isVisible: boolean }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: all 0.3s ease-out;
  background-color: #242424;
`

type Tab = 'about' | 'resume' | 'projects'

const MainContent = () => {
  const [activeTab, setActiveTab] = useState<Tab>('about')
  const [isVisible, setIsVisible] = useState(true)

  const handleTabChange = (tab: Tab) => {
    setIsVisible(false) // Start fade out
    setTimeout(() => {
      setActiveTab(tab)
      setIsVisible(true) // Start fade in
    }, 300) // Match transition duration
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />
      case 'resume':
        return <Resume />
      case 'projects':
        return <Projects />
      default:
        return <About />
    }
  }

  return (
    <Container>
      <Navigation>
        <NavLink 
          active={activeTab === 'about'} 
          onClick={() => handleTabChange('about')}
        >
          About
        </NavLink>
        <NavLink 
          active={activeTab === 'resume'} 
          onClick={() => handleTabChange('resume')}
        >
          Resume
        </NavLink>
        <NavLink 
          active={activeTab === 'projects'} 
          onClick={() => handleTabChange('projects')}
        >
          Projects
        </NavLink>
      </Navigation>
      
      <ContentContainer isVisible={isVisible}>
        {renderContent()}
      </ContentContainer>
    </Container>
  )
}

export default MainContent 