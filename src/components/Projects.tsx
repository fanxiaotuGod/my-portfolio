/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.active ? '#ffd700' : '#888')};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ProjectCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.6);
  transition: all 0.3s ease-out;

  &.visible {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectInfo = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProjectType = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

type Project = {
  id: number;
  name: string;
  description: string;
  tech_stack: string;
  repo_link: string;
  live_demo: string;
};

type Filter = 'All' | 'Applications' | 'Web development' | 'UI/UX';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [visible, setVisible] = useState(false);

  // ✅ Fetch projects from MySQL API
  useEffect(() => {
    axios.get('http://localhost:5001/projects')
      .then((response) => {
        setProjects(response.data);
        setVisible(true);
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const filteredProjects = projects.filter((project) => 
    activeFilter === 'All' ? true : project.tech_stack.includes(activeFilter)
  );

  return (
    <Section>
      <Title>Projects</Title>

      <FilterTabs>
        <FilterButton active={activeFilter === 'All'} onClick={() => setActiveFilter('All')}>
          All
        </FilterButton>
        <FilterButton active={activeFilter === 'Applications'} onClick={() => setActiveFilter('Applications')}>
          Applications
        </FilterButton>
        <FilterButton active={activeFilter === 'Web development'} onClick={() => setActiveFilter('Web development')}>
          Web development
        </FilterButton>
        <FilterButton active={activeFilter === 'UI/UX'} onClick={() => setActiveFilter('UI/UX')}>
          UI/UX
        </FilterButton>
      </FilterTabs>

      <ProjectGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            className={visible ? 'visible' : ''}
            style={{
              transitionDelay: `${index * 0.1}s`,
            }}
          >
            <ProjectInfo>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectType>{project.tech_stack}</ProjectType>
              <p>{project.description}</p>
              <a href={project.repo_link} target="_blank" rel="noopener noreferrer">GitHub Repo</a> |
              <a href={project.live_demo} target="_blank" rel="noopener noreferrer"> Live Demo</a>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Section>
  );
};

export default Projects;
