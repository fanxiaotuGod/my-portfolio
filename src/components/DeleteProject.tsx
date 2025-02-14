import axios from 'axios';
import styled from '@emotion/styled';

const DeleteButton = styled.button`
  background-color: #E53935;
  border: none;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.9rem;
  transition: 0.3s;

  &:hover {
    background: #FF5252;
  }
`;

const DeleteProject = ({ projectId, onProjectDeleted }: { projectId: number, onProjectDeleted: () => void }) => {
  const handleDeleteProject = () => {
    axios.delete(`http://localhost:5001/projects/${projectId}`)
      .then(() => onProjectDeleted())
      .catch((error) => console.error('Error deleting project:', error));
  };

  return <DeleteButton onClick={handleDeleteProject}>Delete</DeleteButton>;
};

export default DeleteProject;
