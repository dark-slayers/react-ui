import React from 'react';
import TextInput from './TextInput.jsx';
/**标识符文本输入框，输入框需要提供：label、name、obj、addModel四个属性
*label为输入框标签，name对应obj对象state参数相应KEY,
*obj为调用此输入框的组件，obj需要有handleChange方法或者继承handleChange方法，
* addModel表示组件是否处于添加模式，处于添加模式下的组件可以输入，非添加模式不可编辑
*/
class IdTextInput extends TextInput {
  isAddModel=()=>{
    return this.props.addModel;
  }
}

export default IdTextInput;
