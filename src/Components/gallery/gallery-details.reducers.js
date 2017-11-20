import {
    REQUEST_DRIBBLE_PHOTO,
    RECEIVE_DRIBBLE_PHOTO,
    ERROR_DRIBBLE_PHOTO
} from './gallery-details.actions';

let defaultState = {
    photoListDetails: {
        data: [],
        isFetching: false,
        error: ''
    }
};

export function gallery(state = defaultState, action = {}){
    let newState = {};

    switch (action.type) {

        //Section for Dribble API
        case REQUEST_DRIBBLE_PHOTO:
            newState = {
                data: [],
                isFetching: action.isFetching,
                error: ''
            };
            return Object.assign({}, state, {photoListDetails: newState});

        case RECEIVE_DRIBBLE_PHOTO:
            newState = {
                data: action.data,
                isFetching: action.isFetching,
                error: ''
            };
            return Object.assign({}, state, {photoListDetails: newState});

        case ERROR_DRIBBLE_PHOTO:
            newState = {
                data: [],
                isFetching: false,
                error: action.error
            };
            return Object.assign({}, state, {photoListDetails: newState});

        default:
            return state;
    }
}