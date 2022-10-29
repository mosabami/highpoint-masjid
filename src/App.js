import './App.css';
// import "./styles/globals.css"
// import Head from 'next/head'
import { Helmet } from 'react-helmet';
import About from './components/About'
import Contact from './components/Contact'
import ContentSection from './components/ContentSection'
import DonationSection from './components/DonationSection'
import GoogleAnalytics from './components/GoogleAnalytics'
import HeroBanner from './components/HeroBanner'
import MosqueBrandingCSS from './components/MoqueBrandingCSS'
import PrayerTimes from './components/PrayerTimes'
import Team from './components/Team'
import mosques from './data/mosques.json'
import React, { Component } from 'react';
// import mosques from './data/mosques.yml'

console.log(mosques)

// function App({ data }) {
//   return (
//     <div className="App">
//       <Helmet>
//         <title>{data.name} - awesome Website</title>
//         <GoogleAnalytics />
//       </Helmet>

//       <MosqueBrandingCSS data={data} />
//       <HeroBanner data={data} />
//       <PrayerTimes data={data} />
//       <About data={data} />
//       <ContentSection data={data} />
//       <DonationSection data={data} />
//       <Team data={data} />
//       <Contact data={data} />
//     </div>
//   )
// }

// App.getInitialProps = async ({ req }) => {
//   // const data =  mosques
//   return { data: mosques }
// }

class App extends Component {
  constructor() {
    super();
    this.state = mosques
  };

  render() {
    let data = this.state
    return (
      <div className="App">
      <Helmet>
        <title>{data.name} - awesome Website</title>
        <GoogleAnalytics />
      </Helmet>

      <MosqueBrandingCSS data={data} />
      <HeroBanner data={data} />
      <PrayerTimes data={data} />
      <About data={data} />
      <ContentSection data={data} />
      <DonationSection data={data} />
      <Team data={data} />
      <Contact data={data} />
    </div>
    );
  }
}

export default App
