import * as api from '../api';
import { CREATE, FETCH_ALL } from '../utils/actionTypes';

export const getProjects = () => async (dispatch) => {
    try {
        //fetch data from database
        const { data } = await api.fetchProjects();
        //dispatch data into redux state management 
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