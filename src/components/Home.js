import { useContext, useEffect, useState } from "react";
import { Button, Container, Dialog, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch } from 'react-redux';

import Projects from "./projects/Projects";
import Form from "./Form";
import { getProjects } from "../actions/projects";
import Layout from "./Layout";
import { IdContext } from "../utils/IdContext";
import SvgButton from "./SvgButton";
import { Box } from "@mui/system";
import { ModalContext } from "../utils/ModalContext";

import "../Home.css";


function App() {
  //dispatch / context
  const dispatch = useDispatch();
  const { currentId } = useContext(IdContext);
  const { modalOpen, setModalOpen } = useContext(ModalContext);

  //mui hooks
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Dialog 
        open={modalOpen}
        fullScreen={fullScreen}
        onClose={() => setModalOpen(false)}
        // className='modal'
        // overlayClassName='overlay'
      >
        <Form />
      </Dialog>
    </Layout>
  );
}

export default App;
