import React from "react";
import { useSelector } from "react-redux";

import { Stack, CircularProgress, Skeleton, Card, CardHeader, CardContent } from "@mui/material";

import ProjectCard from "./ProjectCard";
import SkeletonCard from "./SkeletonCard";


export default function Projects() {
  //select projects array from redux store when page is loaded (useEffect on App.js)
  const projects = useSelector((state) => state.projects);
  //console.log(projects)

  return (
    
        !projects.length ? (
          <React.Fragment>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </React.Fragment>
        ) : (
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