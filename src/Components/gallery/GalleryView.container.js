import {connect} from 'react-redux';

import GalleryView from './GalleryView.jsx';
import {getDribblePhotos} from "./gallery-details.actions.js";

const mapStateToProps = reducers => ({
    photoListDetails: reducers.gallery.photoListDetails,
    view: reducers.gallery.view
});
const mapDispatchToProps = dispatch => ({
    getDribblePhotos: (imageNames, token) => dispatch(getDribblePhotos(imageNames, token))
});
export default connect(mapStateToProps, mapDispatchToProps)(GalleryView)