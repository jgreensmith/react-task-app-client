import axios from 'axios';

const url = 'http://localhost:5000/projects';

export const fetchProjects = () => axios.get(url);
export const createProject = (newProj) => axios.post(url, newProj);
export const deleteProject = (id) => axios.delete(`${url}/${id}`);
