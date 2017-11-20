import React from 'react';
import './thumbView.css';
import comment from '../../common/svg/comment.svg';
import heart from '../../common/svg/heart.svg';
import view from '../../common/svg/view.svg';

const ThumbView = ({thumbImg, index, title, likes, views, openModal}) => (
  <div className="outer-area">
      <div className="thumbnail" onClick={()=> openModal(index)}>
          <div className="image-style">
            <img src={thumbImg} alt="Not Available" />
          </div>
          <div className="content">
              <div className="item"><img src={view} className="info-svg" alt="view" /><span className="count">{views}</span></div>
              <div className="item"><img src={heart} className="info-svg" alt="heart" /><span className="count">{likes}</span></div>
          </div>
      </div>
  </div>
);

export default ThumbView;