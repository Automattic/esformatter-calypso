import React from 'react';

// function component
export function MyFunctionComponent({a,b}){
  return <div>{a},{b}</div>;
}

// extends component
export class MyClassComponent extends React.Component {
  render() {
    return <div>{this.props.a},{this.props.b}</div>;
  }
}

// react class
export const MyReactClass = React.createClass({
  render: function() {
    return <div>{this.props.a},{this.props.b}</div>;
  }
})
