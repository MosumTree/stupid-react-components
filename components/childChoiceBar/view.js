import React, { Component } from 'react';


export default class View extends Component {
  render() {
    const style = this.props.hasOwnProperty('show') && !this.props.show && {
      display: 'none'
    };

    if (React.Children.count(this.props.children) > 1) {
      return React.createElement(this.props.component, {
        style: Object.assign({}, this.props.style, style),
        className: this.props.className
      }, this.props.children);
    } else {
      return React.cloneElement(this.props.children, Object.assign({},{
        // onClick:()=>alert('s'),
        style: Object.assign({}, this.props.children.props.style, style),
        fill:this.props.fill,
        width:this.props.width,
        height:this.props.height
      }));
    }
  }
}

