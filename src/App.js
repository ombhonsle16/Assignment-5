import './App.css';
import Header from "./Components/header/header";
import Index from "./Components/navbar/index";
import Hero from"./Components/hero/index";
import Banner1 from "./Components/Banners/banner1";
import DonateInfo from "./Components/donate-info/index";
import MiscHd1 from "./Components/misc-component/header1"
import Card1 from './Components/Card/card1';
import InfoBanner from './Components/misc-component/listing_react';
import Card from './Components/Card/cards'
import Hero2 from './Components/Banners/banner2';
import ContactUs from '../src/Components/ContactUs/contactus'
import Caroussel from './Components/Carousel/Carousel';
import Banner3 from './Components/Banners/banner3';
import Footer from './Components/footer/footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Index/>
    <Hero/>
    <Banner1/>
    <DonateInfo/>
    <MiscHd1/>
    <Card1/>
    <InfoBanner/>
    <Card/>
    <Hero2/>
    <ContactUs/>
    <Caroussel/>
    <Banner3/>
    <Footer/>
    </div>
  );
}

export default App;
