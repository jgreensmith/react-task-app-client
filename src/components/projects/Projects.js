import React from "react";
import { useSelector } from "react-redux";

import { Stack, CircularProgress } from "@mui/material";

import ProjectCard from "./ProjectCard";


export default function Projects() {
  //select projects array from redux store when page is loaded (useEffect on App.js)
  const projects = useSelector((state) => state.projects);


  return (
    
        !projects.length ? <CircularProgress /> : (
          <Stack spacing={2} sx={{mb: 2}}>
            { projects.map((project) => (
                <div key={project._id} >
                    <ProjectCard project={project} />
                </div>
                
              ))}
          
          
          </Stack> 
        )
    
  );
}