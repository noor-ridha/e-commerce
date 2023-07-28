import Image from 'next/image';

import MhamadImg from '../../assets/images/Mhamad.jpg';
import NoorImg from '../../assets/images/Noor.jpg';
import GitHubImg from '../../assets/images/GitHub.png';
import LinkedInImg from '../../assets/images/LinkedIn.png';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="about-us">
        <div className="about-us__header">
          <img
            src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
            alt="logo"
            className="about-us__header__img"
          />
          <h1 className="about-us__header__title">Company</h1>
        </div>
        <p className="about-us__description">Best place for your time</p>
      </div>
      <div className="quick-links">
        <h1 className="quick-links__title">Quick Links</h1>
        <ul className="quick-links__list">
          <li className="quick-links__list__item">Home</li>
          <li className="quick-links__list__item">About</li>
          <li className="quick-links__list__item">Wish</li>
          <li className="quick-links__list__item">Contact</li>
        </ul>
      </div>
      <div className="contact-us">
        <h1 className="contact-us__title">Developed by</h1>
        <div className="contact-us__us">
          <div className="contact-us__us__person">
            <Image
              className="contact-us__us__person__bg-img"
              src={MhamadImg}
              alt="Mhamad Raad"
            />
            <Image
              src={GitHubImg}
              alt="Github"
              className="contact-us__us__person__social"
            />
          </div>
          <div className="contact-us__us__person">
            <Image
              className="contact-us__us__person__bg-img"
              src={NoorImg}
              alt="Mhamad Raad"
            />
            <Image
              src={GitHubImg}
              alt="Github"
              className="contact-us__us__person__social"
            />
          </div>
          <div className="contact-us__us__person">
            <Image
              className="contact-us__us__person__bg-img"
              src={MhamadImg}
              alt="Mhamad Raad"
            />
            <Image
              src={LinkedInImg}
              alt="Github"
              className="contact-us__us__person__social"
            />
          </div>
          <div className="contact-us__us__person">
            <Image
              className="contact-us__us__person__bg-img"
              src={NoorImg}
              alt="Mhamad Raad"
            />
            <Image
              src={LinkedInImg}
              alt="Github"
              className="contact-us__us__person__social"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
