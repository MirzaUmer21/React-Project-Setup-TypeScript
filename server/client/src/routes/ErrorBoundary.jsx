import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

export default class componentName extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    //   eslint-disable-next-line
    console.log('E: ', error);
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }
    return <Outlet />;
  }
}
