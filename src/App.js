import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SiteHero from './components/SiteHero';
import SectionPortfolio from './components/SectionPortfolio';
import SectionResume from './components/SectionResume';


export default class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <SiteHero />
        <SectionPortfolio />
        <SectionResume />
      </div>
    )  
}
}