/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../utils/actionTypes';

//projects is the array used to map into front end
//action type is CREATE, FETCH_ALL...
//action.payload is the data returned from the relevent api

export default (projects = [], action) => {
    switch (action.type) {
        case DELETE:
            return projects.filter((project) => project._id !== action.payload);
        case UPDATE:
            return projects.map((project) => project._id === action.payload._id ? action.payload : project);
        case FETCH_ALL: 
            return action.payload;  
        case CREATE: 
            return [ ...projects, action.payload ]; 
        default: 
            return projects;
    }
}