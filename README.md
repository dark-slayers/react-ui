# 自定义React组件项目
## 项目编译
### 使用项目的start命令启动项目的publish.bat
`npm start`
## 项目调用
### 在项目中安装本项目
`npm install --save-dev dark-slayers/react-ui.git`
### 调用例子：
```
import  EmptyForm  from 'react-ui/lib/form/EmptyForm.js';
class JSONCreate extends EmptyForm {
  render() {
      return (
          <div>
              <div>
                  <TextInput obj={this} name="typeName" label="类名："/>
              </div>
              <div>
                  <TextArea obj={this} name="args" label="参数（多个参数之间使用英文,分割）："/>
              </div>
              <div>
                  <button type="button" onClick={this.handleClick}>生成</button>
              </div>
          </div>
      );
  }
}
```
## 组件
### 基本组件,位于react-ui/lib/base
1. PageUtil:包含页面跳转，刷新等方法
2. PageTitle:标题组件，水平居中的文字
### 表单组件，位于react-ui/lib/form
1. EmptyForm:空白表单，实现了当表单中输入框文本改变时改变表单对应state的方法。
2. TextInput:文本输入框，可以在继承了EmptyForm的组件中直接调用，或者在实现了handleTextChange方法的react组件类中使用。
3. TextArea:文本输入区域，多行，使用方法于TextInput相同。
## License
### MIT
