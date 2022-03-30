import { Container } from "@mui/material";
import Form from "./components/Form";
import ProjectCard from "./components/ProjectCard"
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Form />
        <ProjectCard />
      </Container>
    </Layout>
  );
}

export default App;
