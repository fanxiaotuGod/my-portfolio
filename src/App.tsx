import { useState } from 'react';
import styled from '@emotion/styled';
import Profile from './components/Profile';
import MainContent from './components/MainContent';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: white;
  padding: 2rem;

  /* iPad/Tablet */
  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  position: relative;

  /* Ensure content is contained */
  width: 100%;
  box-sizing: border-box;

  /* On iPad and smaller, adjust grid layout */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Switch to single column */
    gap: 1.5rem;
    max-width: 100%; /* Ensure no content goes beyond the screen */
  }

  /* On mobile, further adjust for content overflow */
  @media (max-width: 768px) {
    // padding: 0 1rem;  /* Ensure padding for small screens */
    box-sizing: border-box;
  }
`;

const ScrollableContent = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 4rem);
  width: 100%; /* Ensure full width */

  /* On smaller screens, remove overflow handling for smooth scroll */
  @media (max-width: 1024px) {
    max-height: none;
    overflow: visible;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;



const FixedSidebar = styled.div`
  position: sticky;
  top: 2rem;
  height: fit-content;

  /* On iPad and mobile, remove sticky behavior so it scrolls */
  @media (max-width: 1024px) {
    position: relative;
    top: auto;
  }
`;



function App() {
  const [adminMode, setAdminMode] = useState(false); // ✅ Add adminMode state

  return (
    <AppContainer>
      <ContentWrapper>
        <FixedSidebar>
          <Profile setAdminMode={setAdminMode} />  {/* ✅ Pass setAdminMode */}
        </FixedSidebar>
        <ScrollableContent>
          <MainContent adminMode={adminMode} />  {/* Pass adminMode to MainContent */}
        </ScrollableContent>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
