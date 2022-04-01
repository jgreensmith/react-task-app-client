import * as api from '../api';
import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../utils/actionTypes';

export const getProjects = () => async (dispatch) => {
    try {
        //fetch data from database
        const { data } = await api.fetchProjects();
        //dispatch data into redux state management - send to reducers then to redux store
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createProject = (post) => async (dispatch) => {
    try {
        //data is the new post returned from api after passing the post prop created in the form
        const { data } = await api.createProject(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProject = (id) => async (dispatch) => {
    try {
        await api.deleteProject(id);

        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const updateProject = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateProject(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}