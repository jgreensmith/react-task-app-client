import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Stack, toolbarClasses, Typography, CircularProgress } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TimerIcon from '@mui/icons-material/Timer';
import GroupIcon from '@mui/icons-material/Group';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CommentIcon from '@mui/icons-material/Comment';
import { ExpandMore } from "@mui/icons-material";

import { addPal, deleteProject } from "../../actions/projects";
import { IdContext } from "../../utils/IdContext";
import { ModalContext } from "../../utils/ModalContext";
import LinearProgressWithLabel from "./LinearProgress";
import { Box } from "@mui/system";
import moment from "moment";

export default function ProjectCard({ project }) {

  //context
    const { setCurrentId } = useContext(IdContext);
    const { setModalOpen } = useContext(ModalContext);

    // state
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    //const [progress, setProgress] = useState(0);
    const open = Boolean(anchorEl);
    
    //dropdown functions
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDelete = (id) => {
      setAnchorEl(null);
      dispatch(deleteProject(id));
    }
    const handleEdit = (id) => {
      setAnchorEl(null);
      setCurrentId(id);
      setModalOpen(true);
    }

    //pal functions
    // const addPal = () => {
    //   setProgress((prevProgress) => (prevProgress >= project.pals ? prevProgress : prevProgress + 1));
    // }

    const calcPal = (a, b, plural = 's') => {
      const statement = "More Pal";
      if(a === b) {
        return `No ${statement}${plural}`;
      } else if(a - b === 1){
        plural = '';
      } 
      return `${a - b} ${statement}${plural}`;  
    }
   
  

    return(
        <Card >
                <CardHeader
                  avatar={
                    <Avatar  aria-label="recipe">
                      J
                    </Avatar>
                  }
                  action={
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{padding: '18px 10px 5px 10px', width: '100%'}}>
                        <Tooltip
                          title={
                            <Typography variant="text" component="h3" >
                              {`${calcPal( project.pals , project.palCount )} Required`}
                            </Typography>
                          }
                        >
                          <Box sx={{ width: { sm: '200px', vs: '150px', xs: '100px' } }}>
                            <LinearProgressWithLabel value={project.palCount} project={project} />
                          </Box>
                        </Tooltip>
                      </div>
                      <div style={{padding: '18px 10px 5px 10px'}}>
                        <GroupIcon />
                      </div>
                      <div style={{padding: '18px 10px'}}>
                        <Tooltip 
                          title={
                            <Typography variant="text" component="h3" >
                            {`DEADLINE: ${moment(project.date).format("dddd, MMMM Do YYYY, h:mm a")}`}
                            </Typography>
                          }
                          >
                          <TimerIcon />
                        </Tooltip>
                      </div>
                      <div style={{margin: 'auto'}}>

                        <IconButton
                          aria-label="settings"
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          >
                          <MoreVertIcon />
                        </IconButton>
                      </div>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem onClick={() => handleEdit(project._id)}>Edit Project</MenuItem>
                        <MenuItem onClick={() => handleDelete(project._id)}>Delete Project</MenuItem>
                        <MenuItem onClick={handleClose}>Save Project</MenuItem>
                      </Menu>
                    </div>
                    
                  }
                  title={project.title}
                  subheader="time posted"
                />
            
              
                  {/* <CardMedia
                  component="img"
                  height="194"
                  image={image}
                  alt="Paella dish"
                />
            */}
            
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {project.message}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'space-evenly'}}>
              <Button aria-label="add to favorites" onClick={() => dispatch(addPal(project._id))}>
                <EmojiPeopleIcon />Offer to Help
              </Button>
              
              <Button aria-label="add to favorites">
                <CommentIcon />Comment
              </Button>
            </CardActions>
            {/* {message && <p>{message}</p>} */}
      
      </Card>
    )
    
}