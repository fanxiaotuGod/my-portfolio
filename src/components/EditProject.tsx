import { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  transition: 0.3s;
  color: white;

  &.edit {
    background-color: #4CAF50;
    &:hover { background: #66BB6A; }
  }

  &.save {
    background-color: #FFD700;
    &:hover { background: #FFC107; }
  }

  &.cancel {
    background-color: #888;
    &:hover { background: #666; }
  }
`;

const InputField = styled.input`
  padding: 0.4rem;
  width: 100%;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  background: #333;
  color: white;
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const EditProject = ({ project, onProjectUpdated }: { project: any, onProjectUpdated: () => void }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProject, setUpdatedProject] = useState({ ...project });
  const [saving, setSaving] = useState(false);  // Track saving state

  const handleEditProject = async () => {
    setSaving(true); // Start saving state
    try {
      await axios.put(`http://localhost:5001/projects/${project.id}`, updatedProject);
      onProjectUpdated();  // ✅ Refresh project list
      setIsEditing(false); // ✅ Exit edit mode
    } catch (error) {
      console.error('Error updating project:', error);
    }
    setSaving(false); // Stop saving state
  };

  return (
    <>
      {isEditing ? (
        <EditContainer>
          <InputField
            type="text"
            value={updatedProject.name}
            onChange={(e) => setUpdatedProject({ ...updatedProject, name: e.target.value })}
            placeholder="Project Name"
          />
          <InputField
            type="text"
            value={updatedProject.description}
            onChange={(e) => setUpdatedProject({ ...updatedProject, description: e.target.value })}
            placeholder="Description"
          />
          <InputField
            type="text"
            value={updatedProject.tech_stack}
            onChange={(e) => setUpdatedProject({ ...updatedProject, tech_stack: e.target.value })}
            placeholder="Tech Stack"
          />
          <InputField
            type="text"
            value={updatedProject.repo_link}
            onChange={(e) => setUpdatedProject({ ...updatedProject, repo_link: e.target.value })}
            placeholder="GitHub Link"
          />
          <InputField
            type="text"
            value={updatedProject.live_demo}
            onChange={(e) => setUpdatedProject({ ...updatedProject, live_demo: e.target.value })}
            placeholder="Live Demo Link"
          />

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button className="save" onClick={handleEditProject} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
            <Button className="cancel" onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        </EditContainer>
      ) : (
        <Button className="edit" onClick={() => setIsEditing(true)}>Edit</Button>
      )}
    </>
  );
};

export default EditProject;
