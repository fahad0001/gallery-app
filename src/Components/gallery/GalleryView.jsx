import React, {Component} from 'react';
import FullView from "./full-view/FullView";
import ThumbView from "./thumb-view/ThumbView";
import ThreeDotSpinner from '../common/spinner/ThreeDotSpinner.jsx';
import './GalleryView.css'

class GalleryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalStatus: false,
            selectedIndex: 0
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    componentWillMount() {
        const imageList = ["3775242-Love-Obsession", "3952963-4-8-axis", "3908535-404-Page-Exploration", "3386240-Owl-Character-Design",
            "1607412-Bear-Logo-mark", "2781214-Atom", "3156461-Boston-Lobster", "1188443-Sea", "3954699-witch-s-magic"];
        this.props.getDribblePhotos(imageList, true);
    }

    toggleModal() {
        const temp = !this.state.modalStatus;
        this.setState({modalStatus: temp})
    }

    openModal(index) {
        this.setState({selectedIndex: index});
        this.toggleModal();
    }

    render() {
        const {photoListDetails} = this.props;
        return (
            <div>
                {photoListDetails.isFetching ?
                    <div className="spinner-container">
                        <ThreeDotSpinner/>
                    </div> :
                    <div>
                        <div className="thumb-area">
                            {photoListDetails.data.map((itr, index) => {
                                return (
                                    <ThumbView
                                    thumbImg={itr.thumb}
                                    index={index}
                                    title={itr.title}
                                    likes={itr.likes}
                                    views={itr.views}
                                    openModal={this.openModal}/>
                                )
                            })}
                        </div>
                        {this.state.modalStatus &&
                            <FullView
                                imgLink={photoListDetails.data[this.state.selectedIndex].imgLink}
                                title={photoListDetails.data[this.state.selectedIndex].title}
                                description={photoListDetails.data[this.state.selectedIndex].desc}
                                modalStatus={this.state.modalStatus}
                                closeModal={this.toggleModal}
                            />
                        }
                    </div>
                }
            </div>
        )
    }
}

export default GalleryView;