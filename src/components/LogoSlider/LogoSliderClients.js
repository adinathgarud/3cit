import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoSlider.css";
import logo1 from '../../assets/Clients_Logo/anibrain.png';
import logo2 from '../../assets/Clients_Logo/bajaj.png';
import logo3 from '../../assets/Clients_Logo/besttech.png';
import logo4 from '../../assets/Clients_Logo/bhtc.png';
import logo5 from '../../assets/Clients_Logo/emcure.png';
import logo6 from '../../assets/Clients_Logo/firstcry.png';
import logo7 from '../../assets/Clients_Logo/gslabs.png';
import logo8 from '../../assets/Clients_Logo/gsource.png';
import logo9 from '../../assets/Clients_Logo/huf.png';
import logo10 from '../../assets/Clients_Logo/ilfs.png';
import logo11 from '../../assets/Clients_Logo/infotech.png';
import logo12 from '../../assets/Clients_Logo/infrotech.png';
import logo13 from '../../assets/Clients_Logo/jd sequrity.png';
import logo14 from '../../assets/Clients_Logo/jehangir hospital.png';
import logo15 from '../../assets/Clients_Logo/metro.png';
import logo16 from '../../assets/Clients_Logo/pict.png';
import logo17 from '../../assets/Clients_Logo/praj.png';
import logo18 from '../../assets/Clients_Logo/sahyadri hospital.png';
import logo19 from '../../assets/Clients_Logo/smarter logistic.png';
import logo20 from '../../assets/Clients_Logo/sulzer.png';
import logo21 from '../../assets/Clients_Logo/suzlon.png';
import logo22 from '../../assets/Clients_Logo/tata tele.png';
import logo23 from '../../assets/Clients_Logo/ubisoft.png';
import logo24 from '../../assets/Clients_Logo/vyomlabs.png';
import logo25 from '../../assets/Clients_Logo/wellness forever.png';
import logo26 from '../../assets/Clients_Logo/xpressbees.png';
import logo27 from '../../assets/Clients_Logo/zaptech solutions.png';

const LogoSliderClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mainlogoslider-Container">
      <Slider {...settings}>
        <div className="logoslider-container">
          <img src={logo1} alt="Anibrain" />
        </div>
        <div className="logoslider-container">
          <img src={logo2} alt="Bajaj" />
        </div>
        <div className="logoslider-container">
          <img src={logo3} alt="Besttech" />
        </div>
        <div className="logoslider-container">
          <img src={logo4} alt="BHTC" />
        </div>
        <div className="logoslider-container">
          <img src={logo5} alt="Emcure" />
        </div>
        <div className="logoslider-container">
          <img src={logo6} alt="FirstCry" />
        </div>
        <div className="logoslider-container">
          <img src={logo7} alt="GSLabs" />
        </div>
        <div className="logoslider-container">
          <img src={logo8} alt="GSource" />
        </div>
        <div className="logoslider-container">
          <img src={logo9} alt="HUF" />
        </div>
        <div className="logoslider-container">
          <img src={logo10} alt="ILFS" />
        </div>
        <div className="logoslider-container">
          <img src={logo11} alt="Infotech" />
        </div>
        <div className="logoslider-container">
          <img src={logo12} alt="Infrotech" />
        </div>
        <div className="logoslider-container">
          <img src={logo13} alt="JD Security" />
        </div>
        <div className="logoslider-container">
          <img src={logo14} alt="Jehangir Hospital" />
        </div>
        <div className="logoslider-container">
          <img src={logo15} alt="Metro" />
        </div>
        <div className="logoslider-container">
          <img src={logo16} alt="PICT" />
        </div>
        <div className="logoslider-container">
          <img src={logo17} alt="Praj" />
        </div>
        <div className="logoslider-container">
          <img src={logo18} alt="Sahyadri Hospital" />
        </div>
        <div className="logoslider-container">
          <img src={logo19} alt="Smarter Logistic" />
        </div>
        <div className="logoslider-container">
          <img src={logo20} alt="Sulzer" />
        </div>
        <div className="logoslider-container">
          <img src={logo21} alt="Suzlon" />
        </div>
        <div className="logoslider-container">
          <img src={logo22} alt="Tata Tele" />
        </div>
        <div className="logoslider-container">
          <img src={logo23} alt="Ubisoft" />
        </div>
        <div className="logoslider-container">
          <img src={logo24} alt="VyomLabs" />
        </div>
        <div className="logoslider-container">
          <img src={logo25} alt="Wellness Forever" />
        </div>
        <div className="logoslider-container">
          <img src={logo26} alt="XpressBees" />
        </div>
        <div className="logoslider-container">
          <img src={logo27} alt="Zaptech Solutions" />
        </div>
      </Slider>
    </div>
  );
};

export default LogoSliderClients;
