import React, { Component } from 'react';
import './App.css';
import HeaderBloc from './components/HeaderBloc';
import FooterBloc from './components/FooterBloc';
import ContentBloc from './components/ContentBloc';


class App extends Component {
  render() {
    return (
        <div className="body">
          <HeaderBloc/>
          <ContentBloc/>
          <FooterBloc/>
        </div>

    );
  }
}

export default App;
