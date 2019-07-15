import React from 'react'
import PropTypes from 'prop-types'
import ReactUtil from '../../../js/ReactUtil.js';
class TextLine extends React.Component {
  getColor = () => {
    let color = this.props.color
      ? this.props.color
      : "#FFFFFF";
    return color;
  }

  getFieldList = () => {
    return ReactUtil.getPropsList(this.props, 'fieldList');
  }
  render() {
    const color = this.getColor();
    const tdStyle = {
      border: '1px solid black',
      height: 25
    };
    const trStyle = {
      backgroundColor: color
    };
    const ele = this.props.ele;
    const children = this.getFieldList().map((name, index) => {
      const text = ele[name]
        ? ele[name]
        : "";
      return (<td style={tdStyle} key={index}>{text}</td>);
    });
    return (<tr style={trStyle}>
      {children}
    </tr>);
  }
}

export default TextLine;
