import React from 'react';
/**基本的文本输入框，输入框需要提供：label、name、obj三个属性
*label为输入框标签，name对应obj对象state参数相应KEY,
*obj为调用此输入框的组件，obj需要有handleChange方法或者继承handleChange方法
*/
class TextInput extends React.Component {
  render() {
      let obj = this.props.obj;
      const name = this.props.name;
      const label = this.props.label;
      const labelWidth=this.props.labelWidth?this.props.labelWidth:100;
      const inputWidth=this.props.inputWidth?this.props.inputWidth:100;
      const labelStyle = {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        width: labelWidth
      };
      const inputStyle = {
        display: 'inline-flex',
        width: inputWidth,
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 1
      };
      return (
        <div>
          <span style={labelStyle}>{label}</span>
          <input style={inputStyle} type="text" name={name} value={obj.state[name]} onChange={obj.handleTextChange}/>
        </div>
      );
  }
}

export default TextInput;
