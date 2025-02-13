import { useState } from 'react'
import styled from '@emotion/styled'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ProfileCard = styled.div`
  background-color: #242424;
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  position: relative;
`

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column; /* Default (Desktop) */
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  /* On iPad & Mobile: Make it row */
  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
`


const AvatarContainer = styled.div`
  width: 140px;  /* Increased size */
  height: 140px;
  position: relative;
  background-color: #1a1a1a;
  border-radius: 1.5rem;
  padding: 0.3rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 14px;
    height: 14px;
    background-color: #4CAF50;
    border-radius: 50%;
    border: 2px solid #242424;
  }
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  /* On iPad & Mobile: Align left */
  @media (max-width: 1024px) {
    align-items: flex-start;
  }
`


const Name = styled.h1`
  font-size: 2.2rem;
  color: white;
  margin: 0;
`

const Title = styled.div`
  color: white;
  background-color: #1a1a1a;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
`

const ContactInfo = styled.div<{ isExpanded: boolean }>`
  margin-top: 2rem;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  max-height: ${props => (props.isExpanded ? '500px' : '0')};
  opacity: ${props => (props.isExpanded ? 1 : 0)};

  @media (min-width: 1025px) {
    max-height: none;
    opacity: 1;
  }
`



const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #1a1a1a;
  border-radius: 0.8rem;
`

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffd700;
  font-size: 1.2rem;
`

const ContactLabel = styled.div`
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
`

const ContactValue = styled.div`
  color: white;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  a {
    color: #666;
    text-decoration: none;
    font-size: 1rem;
    
    &:hover {
      color: #ffd700;
    }
  }
`

const ToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #333;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`

const Profile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ProfileCard>
      {/* Toggle Button for Mobile & iPad - Positioned at Top Right */}
      <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Hide Contact" : "Show Contact"}
      </ToggleButton>

      <ProfileContent>
        <AvatarContainer>
          <img src="src/pics/selfie.jpeg" alt="Profile" />
        </AvatarContainer>
        
        <ProfileInfo>
          <Name>Haocheng Fan</Name>
          <Title>Full Stack Developer</Title>
        </ProfileInfo>
      </ProfileContent>

      <ContactInfo isExpanded={isExpanded}>
        <ContactItem>
          <IconContainer><FaEnvelope /></IconContainer>
          <div>
            <ContactLabel>EMAIL</ContactLabel>
            <ContactValue>hfan05@student.ubc.ca</ContactValue>
          </div>
        </ContactItem>

        <ContactItem>
          <IconContainer><FaPhone /></IconContainer>
          <div>
            <ContactLabel>PHONE</ContactLabel>
            <ContactValue>236-513-0760</ContactValue>
          </div>
        </ContactItem>

        <ContactItem>
          <IconContainer><FaMapMarkerAlt /></IconContainer>
          <div>
            <ContactLabel>LOCATION</ContactLabel>
            <ContactValue>Vancouver, BC</ContactValue>
          </div>
        </ContactItem>

        <SocialLinks>
          <a href="https://www.linkedin.com/in/haocheng-stephen-fan-236b16309/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/fanxiaotuGod" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.instagram.com/haocheng.f/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </SocialLinks>
      </ContactInfo>
    </ProfileCard>
  )
}

export default Profile
