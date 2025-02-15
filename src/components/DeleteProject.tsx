import { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

// ✅ Use environment variable for API URL
const API_URL = "https://my-portfolio-production-17cf.up.railway.app/projects";

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

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`;

const DeleteProject = ({ projectId, onProjectDeleted }: { projectId: number, onProjectDeleted: () => void }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteProject = async () => {
    if (!window.confirm("❗ Are you sure you want to delete this project?")) return;

    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${projectId}`);
      alert("✅ Project deleted successfully!");
      onProjectDeleted();
    } catch (error: any) {
      console.error("❌ Error deleting project:", error);
      if (error.response) {
        alert(`❌ Failed: ${error.response.data.error || "Something went wrong"}`);
      } else {
        alert("❌ Network error, check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <DeleteButton onClick={handleDeleteProject} disabled={loading}>
      {loading ? "Deleting..." : "Delete"}
    </DeleteButton>
  );
};

export default DeleteProject;
