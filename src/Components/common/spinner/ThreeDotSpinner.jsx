import React, {Component} from 'react';
import './three-dot-spinner.css';

export default class ThreeDotsSpinner extends Component {

  render() {
    const {style, text, wrapperStyle} = this.props;
    const styles = Object.assign({}, ThreeDotsSpinner.defaultStyles, style || {});

    return (
      <div>
        {text || ''}
        <div className="three-dots-spinner" style={wrapperStyle || {}}>
          <div style={styles}/>
          <div style={styles}/>
          <div style={styles}/>
        </div>
      </div>
    );
  }
}

ThreeDotsSpinner.defaultStyles = {
  backgroundColor:'#666666',
  width: 10,
  height: 10
};
