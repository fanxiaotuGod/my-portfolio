import styled from '@emotion/styled';

// ✅ Ensure correct SVG imports for Webpack/Vite
import FlutterLogo from "../assets/logos/flutter.svg?url";
import ReactLogo from "../assets/logos/react.svg?url";
import MySQLLogo from "../assets/logos/mysql.svg?url";
import NodeJSLogo from "../assets/logos/nodejs.svg?url";
import TypeScriptLogo from "../assets/logos/typescript.svg?url";
import DockerLogo from "../assets/logos/docker.svg?url";
import AWSLogo from "../assets/logos/aws.svg?url";
import Java from "../assets/logos/java.svg?url";

const techLogos = [
  FlutterLogo,
  ReactLogo,
  MySQLLogo,
  NodeJSLogo,
  TypeScriptLogo,
  DockerLogo,
  AWSLogo,
  Java
];

// 🔹 Styled Components
const Section = styled.section`
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  mid-width: 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 80px;
  height: 100%;
  pointer-events: none;
  z-index: 2;

  &:first-of-type {
    left: 0;
    background: linear-gradient(to right, #242424, transparent);
  }

  &:last-of-type {
    right: 0;
    background: linear-gradient(to left, #242424, transparent);
  }

  @media (max-width: 768px) {
    width: 50px;
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  white-space: nowrap;
  width: max-content;
  animation: scroll 15s linear infinite;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 1024px) {
    animation-duration: 12s;
    gap: 2rem;
    width : 800px
  }

  @media (max-width: 768px) {
    animation-duration: 10s;
    gap: 1.5rem;
    width : 250px
  }
`;

const SkillItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;

  img {
    height: 70px;
    width: auto;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 80px;
    img {
      height: 60px;
    }
  }

  @media (max-width: 768px) {
    width: 60px;
    img {
      height: 50px;
    }
  }
`;

const Skills = () => {
  return (
    <Section>
      <Title>Skills</Title>

      <CarouselContainer>
        <GradientOverlay />
        <LogosWrapper>
          {/* 🔥 Double the list to ensure seamless scrolling */}
          {[...techLogos, ...techLogos].map((logo, index) => (
            <SkillItem key={index}>
              <img src={logo} alt={`Tech ${index}`} width="60" height="60" />
            </SkillItem>
          ))}
        </LogosWrapper>
        <GradientOverlay />
      </CarouselContainer>
    </Section>
  );
};

export default Skills;
