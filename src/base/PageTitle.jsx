import React from 'react'
/**
*页面标题
*水平居中
*/
class PageTitle extends React.Component {
  render() {
    let divStyle = {
      display: 'flex';
      justifyContent: 'center';
      fontSize: 20,
      color: "#00F",
      marginTop: 20,
      marginBottom: 20
    };
    return (
      <div style={divStyle}>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default PageTitle;
