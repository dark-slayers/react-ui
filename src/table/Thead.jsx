import React from 'react'
import PropTypes from 'prop-types'
import ReactUtil from '../../../js/ReactUtil.js';
class Thead extends React.Component {
  getStyleChangeTh = () => {
    return this.props.styleChangeTh
      ? this.props.styleChangeTh
      : {};
  }
  getList = () => {
    return ReactUtil.getPropsList(this.props, 'list');
  }
  render() {
    const theadStyle = {
      backgroundColor: '#eeeeee'
    };
    const tdStyle = {
      border: '1px solid black',
      height: 25,
      width: 120,
      fontSize:14,
      fontFamily:'微软雅黑',
      fontColor:'#3c3c3c',
      fontWeight:'normal',
      backgroundColor: '#eeeeee',
      textAlign: 'center',
    };
    const styleChangeTh = this.getStyleChangeTh();
    const children = this.getList().map((ele, index) => {
      const text = ele
        ? ele
        : "";
      let style = tdStyle;
      if (styleChangeTh[index] != null) {
        style = styleChangeTh[index];
      }
      return (<th style={style} key={index}>{text}</th>);
    });
    return (<thead>
      <tr style={theadStyle}>
        {children}
      </tr>
    </thead>);
  }
}

export default Thead;
