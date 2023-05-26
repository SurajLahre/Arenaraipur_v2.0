// Copyright © 2017 Arenaanimationraipur All rights Reserved.
// Developed & designed by Suraj Lahre - https://sites.google.com/view/surajlahre/
// Github :: https://github.com/SurajLahre
import Navigation from './components/Navigation';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Gvd from './components/Gvd';
import Animation from './components/Animation';
import Gwdd from './components/Gwdd';
import VfxPrime from './components/VfxPrime';
import ShortTerm from './components/ShortTerm';
import Footer from './components/Footer';
import CopyrightText from './components/CopyrightText';
import UXUI from './components/UXUI';
import DMarketing from './components/DMarketing';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';
import Errorpage404 from './components/Errorpage404';
import GameDev from './components/GameDev';
import Blog from './Blog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/v2.0/" element={<HomePage />} />
          <Route exact path="/AnimationPrime" element={<Animation />} />
          <Route exact path="/VFx" element={<VfxPrime />} />
          <Route exact path="/GameDesign" element={<GameDev />} />
          <Route exact path="/WebDesign" element={<Gwdd />} />
          <Route exact path="/UIUX" element={<UXUI />} />
          <Route exact path="/Graphic" element={<Gvd />} />
          <Route exact path="/Dmarketing" element={<DMarketing />} />
          <Route exact path="/shortTerm" element={<ShortTerm />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/blogs" element={<Blog />} />
          <Route exact path="/enquiry" element={<ContactForm />} />
          <Route exact path="*" element={<Errorpage404 />} />
        </Routes>
        <Footer />
        <CopyrightText />
      </BrowserRouter>
    </>
  );
}
export default App;