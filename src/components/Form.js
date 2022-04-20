import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { createProject, updateProject } from "../actions/projects";
import { IdContext } from "../utils/IdContext";
import { ModalContext } from "../utils/ModalContext";
import { InputContainer } from "../utils/styles";


export default function Form() {
    const dispatch = useDispatch();
    //const [dateValue, setDateValue] = useState(new Date());

    const [form, setForm] = useState({
        title: '',
        message: '',
        pals: 0,
        date: new Date()
    });
    //update posts
    const { currentId, setCurrentId } = useContext(IdContext);
    const { setModalOpen } = useContext(ModalContext);

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
    // const handleDateChange = (date) => {
    //     setForm({
    //         date: date
    //     })
    // }
    const clear = () => {
        setCurrentId(null);
        setForm({
            title: '',
            message: '',
            pals: 0,
            date: new Date()
        })
        setModalOpen(false);
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
        <Paper sx={{ mb: 3, p: 3, width: { sm: '500px', vs: '350px', xs: '300px'} }}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Find some Pals for your Project</Typography>
                <InputContainer>
                    <TextField 
                        name="title"
                        value={form.title}
                        variant="outlined"
                        label="Title"
                        fullWidth
                        sx={{m:2}}
                        onChange={handleChange}
                    />
                </InputContainer>
                <InputContainer>
                    <TextField
                        name="message"
                        value={form.message}
                        variant="outlined"
                        label="Message"
                        fullWidth
                        sx={{m:2}}
                        onChange={handleChange}
                    />
                </InputContainer>
                <InputContainer>
                    <FormControl fullWidth sx={{m:2}}>
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
                </InputContainer>
                <div style={{ padding: '5px 0 15px 15px'}}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DateTimePicker
                            renderInput={
                                (props) => 
                                    <TextField {...props} />
                            }
                            label="Project Deadline"
                            //make sure value is controlled (not undefined)
                            value={form.date ? form.date : ""}
                            onChange={(newValue) => {
                                setForm({ ...form, date: newValue });
                            }}
                        />
                    </LocalizationProvider>
                </div>
                <Button  variant="contained" color="primary" size="large" type="submit" fullWidth sx={{p:2}}>Submit</Button>
                <Button onClick={clear} variant="text" color="secondary" size="small"  fullWidth sx={{p:2}}>Clear</Button>
            </form>
        </Paper>
    )
}