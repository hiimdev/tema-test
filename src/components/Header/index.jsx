import React, { useState } from "react";
import clsx from "clsx";
import "./header.css";
import SvgIcon from "../SvgIcon";
import { images } from "../../constants";

const Header = () => {
  const [lang, setLang] = useState("EN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="header-container-mobile">
        <div className="header-left-mobile">
          <SvgIcon name="logo" size={32} />
          <p className="brand">macode.</p>
        </div>

        <LanguageDropdown value={lang} onChange={setLang} />

        <div style={{ marginLeft: "30px" }} onClick={() => setIsMobileMenuOpen(true)}>
          <SvgIcon name="menuMobile" size={19} />
        </div>
      </header>

      {/* Desktop Header */}
      <header className="header-container">
        <div className="header-left">
          <SvgIcon name="logo" size={32} />
          <nav className="menu-wrap">
            <div className="menu">
              {["Tutorials", "Case studies", "Resources"].map((item) => (
                <a key={item} className="menu-item" href="#">
                  {item}
                </a>
              ))}
            </div>
            <LanguageDropdown value={lang} onChange={setLang} />
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;

const LanguageDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="location-wrap" onClick={toggleDropdown}>
      <div className="location-right">
        <img
          src={value === "EN" ? images.us : images.vn}
          alt="language"
          className="img-location"
          width={21}
          height={21}
        />
        <p className="text-location">{value}</p>
      </div>

      <span className="location-icon">
        <SvgIcon name="chevronUp" size={20} />
      </span>

      {isOpen && (
        <ul className="dropdown-menu">
          {["EN", "VN"].map((lang) => (
            <li key={lang} className={clsx(value === lang && "active")} onClick={() => onChange(lang)}>
              <img
                src={lang === "EN" ? images.us : images.vn}
                alt={lang}
                className="img-location"
                width={21}
                height={21}
              />
              <p>{lang === "EN" ? "ENGLISH" : "VIỆT NAM"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={clsx("menu-mobile", isOpen && "open-menu-mobile")}>
      <div className="menu-mobile-wrap">
        <div className="menu-mobile-header" style={{ justifyContent: "flex-end", display: "flex" }}>
          <span className="menu-mobile-close" onClick={onClose}>
            <SvgIcon name="close" size={24} />
          </span>
        </div>

        <ul className="menu-mobile-list">
          {[
            { name: "Tutorials", icon: "setting" },
            { name: "Case studies", icon: "case" },
            { name: "Resources", icon: "resourse" },
          ].map((item) => (
            <li key={item.name} className="menu-mobile-item">
              <p>
                <SvgIcon name={item.icon} size={30} />
                {item.name}
              </p>
              <SvgIcon name="chevronUp" className="menu-mobile-icon-arrow" size={24} />
            </li>
          ))}
        </ul>

        <div className="menu-mobile-social-wrap">
          <ul className="menu-mobile-social">
            {["facebook", "ins", "linkedin", "twitter", "gmail"].map((social) => (
              <li key={social}>
                <SvgIcon name={social} size={32} />
              </li>
            ))}
          </ul>
          <p className="menu-mobile-copyright">© 2021 Copyright. Macode.io</p>
        </div>
      </div>
    </div>
  );
};
