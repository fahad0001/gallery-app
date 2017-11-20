import api from '../common/api';
import {mapDribbleData} from "./gallery-details.utils";

export const REQUEST_DRIBBLE_PHOTO = 'REQUEST_DRIBBLE_PHOTO';
export const RECEIVE_DRIBBLE_PHOTO = 'RECEIVE_DRIBBLE_PHOTO';
export const ERROR_DRIBBLE_PHOTO = 'ERROR_DRIBBLE_PHOTO';

//functions dribble API
function _requestDribblePhoto(status) {
    return {
        type: REQUEST_DRIBBLE_PHOTO,
        isFetching: status
    }
}
function _receiveDribblePhoto(data, status) {
    return {
        type: RECEIVE_DRIBBLE_PHOTO,
        data,
        isFetching: status
    }
}
function _errorDribblePhoto(error) {
    return {
        type: ERROR_DRIBBLE_PHOTO,
        error
    }
}

export function getDribblePhotos(imageNameList, accessToken){
    let resultData = [];
    let url = "https://api.dribbble.com/v1/shots/";
    return dispatch => {
        dispatch(_requestDribblePhoto(true));
        imageNameList.forEach((imgName, index) => {
            api({url: url + imgName, method: "GET"}, accessToken)
                .then(response => {
                    resultData.push(mapDribbleData(response.data));
                    if(resultData.length === imageNameList.length) {
                        dispatch(_receiveDribblePhoto(resultData, false));
                    }
                })
                .catch(err => {
                    dispatch(_errorDribblePhoto(`No Response Availale ${err}`))
                })
        });
    }
}