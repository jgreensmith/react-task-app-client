import axios from 'axios';

const url = 'https://project-pals.herokuapp.com/projects';

export const fetchProjects = () => axios.get(url);
export const createProject = (newProj) => axios.post(url, newProj);
export const deleteProject = (id) => axios.delete(`${url}/${id}`);
export const updateProject = (id, updatedProj) => axios.patch(`${url}/${id}`, updatedProj);
