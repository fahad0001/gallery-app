import React from 'react';
import './fullView.css';

const FullView = ({imgLink, title, description, modalStatus, closeModal}) => (
    <div>
        <div className={modalStatus? "modal": "modal active"}>
            <div className="modal-content">
                <div>
                    <img alt="Not Available" src={imgLink}/>
                </div>
                <div><h2>{title}</h2></div>
                <div className="description" dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </div>
        <div className={modalStatus? "close": "close active"} onClick={() => closeModal()}>&times;</div>
    </div>
);

export default FullView;