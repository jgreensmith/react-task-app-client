/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { CREATE, FETCH_ALL } from '../utils/actionTypes';

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