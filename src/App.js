import { useContext, useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import { useDispatch } from 'react-redux';
import Modal from "react-modal";

import Projects from "./components/projects/Projects";
import Form from "./components/Form";
import { getProjects } from "./actions/projects";
import Layout from "./components/Layout";
import { IdContext } from "./utils/IdContext";
import SvgButton from "./components/SvgButton";
import { Box } from "@mui/system";
import { ModalContext } from "./utils/ModalContext";

import "./App.css";

Modal.setAppElement("body");


function App() {
  const dispatch = useDispatch();
  const { currentId } = useContext(IdContext);
  const { modalOpen, setModalOpen } = useContext(ModalContext);

  //call fetch projects api when dispatch function is called
  useEffect(() => {
    dispatch(getProjects());
  }, [currentId, dispatch]);

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }} >
          <SvgButton onClick={() => setModalOpen(true)}>
            Need some pals for my project
          </SvgButton>
        </Box>
        <Projects  />
      </Container>
      <Modal 
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className='modal'
        overlayClassName='overlay'
      >
        <Form />
      </Modal>
    </Layout>
  );
}

export default App;
