# 自定义React组件项目

## 项目需要使用babel-cli的命令进行编译
`npm install --save-dev babel-cli`

## 调用项目的使用方法：
在项目中安装本项目：<br>
`npm install --save-dev git+ssh://git@github.com:dark-slayers/react-ui.git`
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
              <div>
                <textarea rows="30" cols="130" value={this.state.showText}/>
              </div>
          </div>
      );
  }
}
```
