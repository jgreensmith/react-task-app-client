/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { CREATE, FETCH_ALL } from '../utils/actionTypes';

//projects is the array used to map into front end
//action type is CREATE, FETCH_ALL...
//action.payload is the data returned from the relevent api

export default (projects=[], action) => {
    switch (action.type) {
        case CREATE: 
            return [ ...projects, action.payload ];
        case FETCH_ALL: 
            return action.payload;
        default: 
            return projects;
    }
}