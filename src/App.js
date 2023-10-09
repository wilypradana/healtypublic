import "./App.css";
import Navbar from "./components/Navbar";

import Jumbotron from "./components/Jumbotron";
import LifeBetter from "./components/LifeBetter";
import LifeStory from "./components/Lifestory";
import AboutMH from "./components/AboutMH";
import CardProfesioal from "./components/CardProfesional";
import TabsStrategies from "./components/TabsStrategies";
import Stategies from "./components/AccordionStartegies";
import Footer from "./components/Footer";
import Partner from "./components/PartnerCard";
import SectionMain from "./components/SectionMain";
import Educationblog from "./components/Sourcehelp";
import ProfileCard from "./components/profileCard";
import GejalaDanDampak from "./components/GejalaDanDampak";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Jumbotron />
        <LifeBetter />
        <LifeStory />
        <TabsStrategies />
        <SectionMain />
        <AboutMH />
        <GejalaDanDampak />
        <Stategies />
        <Partner />
        <CardProfesioal />
        <ProfileCard />
        <Educationblog />
        <Footer />
      </div>
    </>
  );
}

export default App;
