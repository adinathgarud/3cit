import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoSlider.css";
import logo1 from '../../assets/OEM_Logo/adobe.png';
import logo2 from '../../assets/OEM_Logo/airtel.png';
import logo3 from '../../assets/OEM_Logo/apc.png';
import logo4 from '../../assets/OEM_Logo/avaya.png';
import logo5 from '../../assets/OEM_Logo/aws.png';
import logo6 from '../../assets/OEM_Logo/barco.png';
import logo7 from '../../assets/OEM_Logo/cisco.png';
import logo8 from '../../assets/OEM_Logo/company.png';
import logo9 from '../../assets/OEM_Logo/d link.png';
import logo10 from '../../assets/OEM_Logo/eaton.png';
import logo11 from '../../assets/OEM_Logo/employee_912318.png';
import logo12 from '../../assets/OEM_Logo/epson.png';
import logo13 from '../../assets/OEM_Logo/fortinet.png';
import logo14 from '../../assets/OEM_Logo/hikvison.png';
import logo15 from '../../assets/OEM_Logo/juniper.png';
import logo16 from '../../assets/OEM_Logo/logosss.png';
import logo17 from '../../assets/OEM_Logo/logotech.png';
import logo18 from '../../assets/OEM_Logo/office.png';
import logo19 from '../../assets/OEM_Logo/panasonic.png';
import logo20 from '../../assets/OEM_Logo/pngwing.com (33).png';
import logo21 from '../../assets/OEM_Logo/pngwing.com (35).png';
import logo22 from '../../assets/OEM_Logo/pngwing.com (36).png';
import logo23 from '../../assets/OEM_Logo/pngwing.com (37).png';
import logo24 from '../../assets/OEM_Logo/pngwing.com (38).png';
import logo25 from '../../assets/OEM_Logo/pngwing.com (39).png';
import logo26 from '../../assets/OEM_Logo/pngwing.com (40).png';
import logo27 from '../../assets/OEM_Logo/pngwing.com (41).png';
import logo28 from '../../assets/OEM_Logo/pngwing.com (42).png';
import logo29 from '../../assets/OEM_Logo/pngwing.com (43).png';
import logo30 from '../../assets/OEM_Logo/pngwing.com (44).png';
import logo31 from '../../assets/OEM_Logo/pngwing.com (45).png';
import logo32 from '../../assets/OEM_Logo/pngwing.com (46).png';
import logo33 from '../../assets/OEM_Logo/pngwing.com (47).png';
import logo34 from '../../assets/OEM_Logo/pngwing.com (48).png';
import logo35 from '../../assets/OEM_Logo/pngwing.com (49).png';
import logo36 from '../../assets/OEM_Logo/pngwing.com (54).png';
import logo37 from '../../assets/OEM_Logo/pngwing.com (55).png';
import logo38 from '../../assets/OEM_Logo/pngwing.com (56).png';
import logo39 from '../../assets/OEM_Logo/pngwing.com (57).png';
import logo40 from '../../assets/OEM_Logo/pngwing.com (58).png';
import logo41 from '../../assets/OEM_Logo/pngwing.com (59).png';
import logo42 from '../../assets/OEM_Logo/pngwing.com (60).png';
import logo43 from '../../assets/OEM_Logo/pngwing.com (61).png';
import logo44 from '../../assets/OEM_Logo/polycom.png';
import logo45 from '../../assets/OEM_Logo/quick heal.png';
import logo46 from '../../assets/OEM_Logo/ruba.png';
import logo47 from '../../assets/OEM_Logo/ruckus.png';
import logo48 from '../../assets/OEM_Logo/sonicwall.png';
import logo49 from '../../assets/OEM_Logo/Sophos_logo_PNG3.png';
import logo50 from '../../assets/OEM_Logo/tata communication.png';
import logo51 from '../../assets/OEM_Logo/toppng.com-company-address-comments-company-icon-png-white-980x864.png';
import logo52 from '../../assets/OEM_Logo/trend.png';
import logo53 from '../../assets/OEM_Logo/vertiv.png';
import logo54 from '../../assets/OEM_Logo/vi.png';
import logo55 from '../../assets/OEM_Logo/wifi.png';

const LogoSlider = () => {
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
          <img src={logo1} alt="Adobe" />
        </div>
        <div className="logoslider-container">
          <img src={logo2} alt="Airtel" />
        </div>
        <div className="logoslider-container">
          <img src={logo3} alt="APC" />
        </div>
        <div className="logoslider-container">
          <img src={logo4} alt="Avaya" />
        </div>
        <div className="logoslider-container">
          <img src={logo5} alt="AWS" />
        </div>
        <div className="logoslider-container">
          <img src={logo6} alt="Barco" />
        </div>
        <div className="logoslider-container">
          <img src={logo7} alt="Cisco" />
        </div>
        <div className="logoslider-container">
          <img src={logo8} alt="Company" />
        </div>
        <div className="logoslider-container">
          <img src={logo9} alt="D-Link" />
        </div>
        <div className="logoslider-container">
          <img src={logo10} alt="Eaton" />
        </div>
        <div className="logoslider-container">
          <img src={logo11} alt="Employee" />
        </div>
        <div className="logoslider-container">
          <img src={logo12} alt="Epson" />
        </div>
        <div className="logoslider-container">
          <img src={logo13} alt="Fortinet" />
        </div>
        <div className="logoslider-container">
          <img src={logo14} alt="Hikvision" />
        </div>
        <div className="logoslider-container">
          <img src={logo15} alt="Juniper" />
        </div>
        <div className="logoslider-container">
          <img src={logo16} alt="Logos" />
        </div>
        <div className="logoslider-container">
          <img src={logo17} alt="Logitech" />
        </div>
        <div className="logoslider-container">
          <img src={logo18} alt="Office" />
        </div>
        <div className="logoslider-container">
          <img src={logo19} alt="Panasonic" />
        </div>
        <div className="logoslider-container">
          <img src={logo20} alt="PNG 33" />
        </div>
        <div className="logoslider-container">
          <img src={logo21} alt="PNG 35" />
        </div>
        <div className="logoslider-container">
          <img src={logo22} alt="PNG 36" />
        </div>
        <div className="logoslider-container">
          <img src={logo23} alt="PNG 37" />
        </div>
        <div className="logoslider-container">
          <img src={logo24} alt="PNG 38" />
        </div>
        <div className="logoslider-container">
          <img src={logo25} alt="PNG 39" />
        </div>
        <div className="logoslider-container">
          <img src={logo26} alt="PNG 40" />
        </div>
        <div className="logoslider-container">
          <img src={logo27} alt="PNG 41" />
        </div>
        <div className="logoslider-container">
          <img src={logo28} alt="PNG 42" />
        </div>
        <div className="logoslider-container">
          <img src={logo29} alt="PNG 43" />
        </div>
        <div className="logoslider-container">
          <img src={logo30} alt="PNG 44" />
        </div>
        <div className="logoslider-container">
          <img src={logo31} alt="PNG 45" />
        </div>
        <div className="logoslider-container">
          <img src={logo32} alt="PNG 46" />
        </div>
        <div className="logoslider-container">
          <img src={logo33} alt="PNG 47" />
        </div>
        <div className="logoslider-container">
          <img src={logo34} alt="PNG 48" />
        </div>
        <div className="logoslider-container">
          <img src={logo35} alt="PNG 49" />
        </div>
        <div className="logoslider-container">
          <img src={logo36} alt="PNG 54" />
        </div>
        <div className="logoslider-container">
          <img src={logo37} alt="PNG 55" />
        </div>
        <div className="logoslider-container">
          <img src={logo38} alt="PNG 56" />
        </div>
        <div className="logoslider-container">
          <img src={logo39} alt="PNG 57" />
        </div>
        <div className="logoslider-container">
          <img src={logo40} alt="PNG 58" />
        </div>
        <div className="logoslider-container">
          <img src={logo41} alt="PNG 59" />
        </div>
        <div className="logoslider-container">
          <img src={logo42} alt="PNG 60" />
        </div>
        <div className="logoslider-container">
          <img src={logo43} alt="PNG 61" />
        </div>
        <div className="logoslider-container">
          <img src={logo44} alt="Polycom" />
        </div>
        <div className="logoslider-container">
          <img src={logo45} alt="Quick Heal" />
        </div>
        <div className="logoslider-container">
          <img src={logo46} alt="Ruba" />
        </div>
        <div className="logoslider-container">
          <img src={logo47} alt="Ruckus" />
        </div>
        <div className="logoslider-container">
          <img src={logo48} alt="SonicWall" />
        </div>
        <div className="logoslider-container">
          <img src={logo49} alt="Sophos" />
        </div>
        <div className="logoslider-container">
          <img src={logo50} alt="Tata Communication" />
        </div>
        <div className="logoslider-container">
          <img src={logo51} alt="Company" />
        </div>
        <div className="logoslider-container">
          <img src={logo52} alt="Trend" />
        </div>
        <div className="logoslider-container">
          <img src={logo53} alt="Vertiv" />
        </div>
        <div className="logoslider-container">
          <img src={logo54} alt="Vi" />
        </div>
        <div className="logoslider-container">
          <img src={logo55} alt="WiFi" />
        </div>
      </Slider>
    </div>
  );
};

export default LogoSlider;
