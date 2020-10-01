import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SiteHero from './components/SiteHero';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <SiteHero />
      </div>
    )  
}
}