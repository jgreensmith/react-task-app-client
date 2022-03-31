import { useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch } from 'react-redux';

import ProjectCard from "./components/ProjectCard"
import Form from "./components/Form";
import { getProjects } from "./actions/projects";
import Layout from "./components/Layout";

function App() {
  const dispatch = useDispatch();
  //call fetch projects api when dispatch function is called
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

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
