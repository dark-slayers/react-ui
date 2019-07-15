/** 文本表格，
 * 需要提供属性：
 * headList，lineList，lineFieldList。
 * 可选属性：color
 * 
 */
import React from 'react'
import PropTypes from 'prop-types'
import ReactUtil from '../../../js/ReactUtil.js';
import TextLine from './TextLine.jsx';
import Thead from './Thead.jsx';
class TextTable extends React.Component {
  getColor = () => {
    return this.props.color
      ? this.props.color
      : '#FFFFFF';
  }
  getHeadList = () => {
    return ReactUtil.getPropsList(this.props, 'headList');
  }
  getLineList = () => {
    return ReactUtil.getPropsList(this.props, 'lineList');
  }
  getLineFieldList = () => {
    return ReactUtil.getPropsList(this.props, 'lineFieldList');
  }
  getStyleChangeTh = () => {
    return this.props.styleChangeTh
      ? this.props.styleChangeTh
      : {};
  }
  render() {
    const tableStyle = {
      borderCollapse: 'collapse',
      width: '100%',
      textAlign: 'center',
      fontSize: 14,
      fontFamily: '微软雅黑',
      fontColor: '#3c3c3c'
    };
    const lineFieldList = this.getLineFieldList();
    const children = this.getLineList().map((ele, index) => {
      let color = (index % 2 == 0)
        ? '#ffffff'
        : '#fcfcfc';
      return (<TextLine ele={ele} fieldList={lineFieldList} key={index} color={color} />);
    });
    const headList = this.getHeadList();
    const styleChangeTh = this.getStyleChangeTh();
    return (<table style={tableStyle}><Thead list={headList} styleChangeTh={styleChangeTh} />
      <tbody>{children}</tbody>
    </table>);
  }
}

export default TextTable;
