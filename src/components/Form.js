import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { createProject, updateProject } from "../actions/projects";
import { IdContext } from "../utils/IdContext";


export default function Form({ setModelOpen }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        title: '',
        message: '',
        pals: 0
    })
    //update posts
    const { currentId, setCurrentId } = useContext(IdContext);
    const project = useSelector((state) => currentId ? state.projects.find((p) => p._id === currentId) : null )
    
    useEffect(() => {
        if(project) setForm(project);
    }, [project])
// add a project to the data base


    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        setForm({
            ...form,
            [name]: value
        })
    }
    const clear = () => {
        setCurrentId(null);
        setForm({
            title: '',
            message: '',
            pals: 0
        })
        setModelOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updateProject(currentId, form));
        } else {
            dispatch(createProject(form));
        }
        clear();
    }


    return(
        <Paper sx={{mb: 3}}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Find some Pals for your Project</Typography>
                <TextField 
                    name="title"
                    value={form.title}
                    variant="outlined"
                    label="Title"
                    fullWidth
                    sx={{p:2}}
                    onChange={handleChange}
                />
                <TextField
                    name="message"
                    value={form.message}
                    variant="outlined"
                    label="Message"
                    fullWidth
                    sx={{p:2}}
                    onChange={handleChange}
                />
                <FormControl fullWidth sx={{p:2}}>
                    <InputLabel id="demo-simple-select-label">Pals</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="pals"
                        value={form.pals}
                        label="Pals"
                        onChange={handleChange}
                    >
                    {[...Array(100).keys()].map((x) => (
                        <MenuItem key={x + 1} value={x + 1}>
                            {x + 1}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <Button  variant="contained" color="primary" size="large" type="submit" fullWidth sx={{p:2}}>Submit</Button>
                <Button onClick={clear} variant="text" color="secondary" size="small"  fullWidth sx={{p:2}}>Clear</Button>
            </form>
        </Paper>
    )
}