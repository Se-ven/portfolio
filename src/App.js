import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SiteHero from './components/SiteHero';
import SectionPortfolio from './components/SectionPortfolio';
import SectionResume from './components/SectionResume';
import SectionAbout from './components/SectionAbout';
import ClientTestimonials from './components/ClientTestimonials';
import SectionServices from './components/SectionServices';


export default class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <SiteHero />
        <SectionPortfolio />
        <SectionResume />
        <SectionAbout />
        <ClientTestimonials />
        <SectionServices />
      </div>
    )  
}
}