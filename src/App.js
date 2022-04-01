import { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch } from 'react-redux';

import Projects from "./components/projects/Projects";
import Form from "./components/Form";
import { getProjects } from "./actions/projects";
import Layout from "./components/Layout";
import { IdContext } from "./utils/IdContext";

function App() {
  const dispatch = useDispatch();
  const { currentId } = useContext(IdContext);
  //call fetch projects api when dispatch function is called
  useEffect(() => {
    dispatch(getProjects());
  }, [currentId, dispatch]);

  return (
    <Layout>
      <Container maxWidth="sm">
        <Form />
        <Projects />
      </Container>
    </Layout>
  );
}

export default App;
