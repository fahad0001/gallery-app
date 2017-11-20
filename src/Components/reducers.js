import {combineReducers} from 'redux';
import {gallery} from './gallery/gallery-details.reducers';

const store =  combineReducers({
    gallery: gallery
});
export default store;