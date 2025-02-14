/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import AddProject from './AddProject';
import EditProject from './EditProject';
import DeleteProject from './DeleteProject';

const Section = styled.section`
  margin-bottom: 3rem;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap; /* ✅ Allow buttons to wrap on mobile */
  justify-content: center; /* ✅ Center items properly */

  @media (max-width: 768px) {
    gap: 0.5rem; /* ✅ Reduce spacing between buttons */
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.active ? '#ffd700' : '#888')};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* ✅ Decrease font size */
    padding: 0.4rem 0.8rem; /* ✅ Reduce padding */
  }

  @media (max-width: 480px) {
    font-size: 0.85rem; /* ✅ Further reduce size for very small screens */
    padding: 0.3rem 0.6rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  min-height: 200px; /* ✅ Ensure there’s space to show items */

  /* ✅ Mobile Fix */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); /* ✅ Adjust grid for mobile */
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* ✅ Single column for very small screens */
    gap: 0.6rem;
  }
`;


const ProjectCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column; /* ✅ Stack content on mobile */
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-out;
  
  /* 🔴 Debugging: Add border to check visibility */
  border: 2px solid red;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
  }
`;


const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProjectType = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

const AdminActions = styled.div`
  display: flex;
  gap: 0.5rem;
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

type Props = {
  adminMode: boolean; // ✅ Receive adminMode as a prop
};

const Projects = ({ adminMode }: Props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  useEffect(() => {
    axios.get('http://localhost:5001/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const handleProjectAdded = () => {
    axios.get('http://localhost:5001/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error refreshing projects:', error));
  };

  const handleProjectUpdated = () => {
    axios.get('http://localhost:5001/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error refreshing projects:', error));
  };

  const handleProjectDeleted = () => {
    axios.get('http://localhost:5001/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error refreshing projects:', error));
  };

  const filteredProjects = projects.filter((project) => 
    activeFilter === 'All' ? true : project.tech_stack.includes(activeFilter)
  );

  return (
    <Section>
      <TitleRow>
        <Title>Projects</Title>
        {adminMode && <AddProject onProjectAdded={handleProjectAdded} />}
      </TitleRow>

      <FilterTabs>
        <FilterButton active={activeFilter === 'All'} onClick={() => setActiveFilter('All')}>
          All
        </FilterButton>
        <FilterButton active={activeFilter === 'Applications'} onClick={() => setActiveFilter('Applications')}>
          Mobile App
        </FilterButton>
        <FilterButton active={activeFilter === 'Web development'} onClick={() => setActiveFilter('Web development')}>
          Web App
        </FilterButton>
        {/* <FilterButton active={activeFilter === 'UI/UX'} onClick={() => setActiveFilter('UI/UX')}>
          UI/UX
        </FilterButton> */}
      </FilterTabs>

      <ProjectGrid>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id}>
      <ProjectInfo>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectType>{project.tech_stack}</ProjectType>
        <p>{project.description}</p>
        
        {/* Ensure URLs have "https://" */}
        <a href={project.repo_link.startsWith('http') ? project.repo_link : `https://${project.repo_link}`} 
          target="_blank" 
          rel="noopener noreferrer">
          GitHub Repo
        </a>
        {" | "}
        <a href={project.live_demo.startsWith('http') ? project.live_demo : `https://${project.live_demo}`} 
          target="_blank" 
          rel="noopener noreferrer">
          Live Demo
        </a>

      </ProjectInfo>


            {adminMode && (  
              <AdminActions>
                <EditProject project={project} onProjectUpdated={handleProjectUpdated} />
                <DeleteProject projectId={project.id} onProjectDeleted={handleProjectDeleted} />
              </AdminActions>
            )}
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Section>
  );
};

export default Projects;
