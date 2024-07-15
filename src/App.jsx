import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";

export default function App() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom, white 0%, #e6e4ff);
  border-radius: 2rem;
`;
