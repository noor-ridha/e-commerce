import './Footer.scss';
import WatchesItem from './../../home/Items/WatchesItem';

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
      <div className="contact-us"></div>
    </footer>
  );
};

export default Footer;
