import { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const API_URL = "https://my-portfolio-production-17cf.up.railway.app/projects";

const PopupForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  width: 300px;
  z-index: 10;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: #333;
  color: white;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background: #ffd700;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-top: 1rem;
  transition: 0.3s;

  &:hover {
    background: #ffed4a;
  }

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #ff4a4a;
  }
`;

const AddButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #ffd700;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: 0.3s;

  &:hover {
    background-color: #ffed4a;
  }
`;

const AddProject = ({ onProjectAdded }: { onProjectAdded: () => void }) => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    tech_stack: '',
    repo_link: '',
    live_demo: '',
  });

  const handleAddProject = async () => {
    if (!newProject.name || !newProject.description || !newProject.tech_stack || !newProject.repo_link || !newProject.live_demo) {
      alert("❌ All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(API_URL, newProject);
      alert("✅ Project added successfully!");
      onProjectAdded();
      setShowForm(false);
      setNewProject({ name: '', description: '', tech_stack: '', repo_link: '', live_demo: '' });
    } catch (error) {
      console.error("❌ Error adding project:", error);
      alert("❌ Failed to add project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AddButton onClick={() => setShowForm(true)}>+ Add Project</AddButton>

      {showForm && (
        <PopupForm>
          <CloseButton onClick={() => setShowForm(false)}>❌</CloseButton>
          <h3>Add New Project</h3>
          <Input type="text" placeholder="Project Name" value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} />
          <Input type="text" placeholder="Description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} />
          <Input type="text" placeholder="Tech Stack" value={newProject.tech_stack} onChange={(e) => setNewProject({ ...newProject, tech_stack: e.target.value })} />
          <Input type="text" placeholder="GitHub Repo" value={newProject.repo_link} onChange={(e) => setNewProject({ ...newProject, repo_link: e.target.value })} />
          <Input type="text" placeholder="Live Demo Link" value={newProject.live_demo} onChange={(e) => setNewProject({ ...newProject, live_demo: e.target.value })} />
          <SubmitButton onClick={handleAddProject} disabled={loading}>
            {loading ? "Adding..." : "Submit"}
          </SubmitButton>
        </PopupForm>
      )}
    </>
  );
};

export default AddProject;
