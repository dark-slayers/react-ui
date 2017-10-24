import React from 'react';
/**基本的文本输入框，输入框需要提供：label、name、obj三个属性
*label为输入框标签，name对应obj对象state参数相应KEY,
*obj为调用此输入框的组件，obj需要有handleChange方法或者继承handleChange方法
*/
class IdTextInput extends TextInput {
  isAddModel=()=>{
    return this.props.addModel;
  }
}

export default IdTextInput;
