'use client';

import Link from 'next/link';

import About from '@/app/assets/svg/About';
import Cart from '@/app/assets/svg/Cart';
import Contact from '@/app/assets/svg/Contact';
import Home from '@/app/assets/svg/Home';
import Profile from '@/app/assets/svg/Profile';
import Wish from '@/app/assets/svg/Wish';

import { usePathname } from 'next/navigation';

import './Navbar.scss';

const Navbar = () => {
  const currentRoute: string = usePathname();

  return (
    <>
      <nav className="desktop-nav">
        <div className="desktop-nav__left">
          <h1 className="desktop-nav__left__logo">LOGO</h1>
          <ul className="desktop-nav__left__list">
            {['Home', 'About', 'Wish', 'Contact'].map((item, index) => (
              <li
                key={index}
                className={`desktop-nav__left__list__items ${
                  currentRoute === `/${item.toLowerCase()}` && 'desktop-active'
                }`}
              >
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="desktop-nav__right">
          <button type="button" className="desktop-nav__right__login">
            Login
          </button>
          <button type="button" className="desktop-nav__right__signup">
            Signup
          </button>
          <select
            name="language"
            title="langauge"
            className="desktop-nav__right__language"
          >
            <option value="English">EN</option>
            <option value="Arabic">AR</option>
          </select>
        </div>
      </nav>
      <nav className="mobile-nav">
        <div className="mobile-nav__appbar">
          <h1 className="mobile-nav__appbar__logo">LOGO</h1>
          <div className="mobile-nav__appbar__cart">
            <Cart />
          </div>
        </div>
        <div className="mobile-nav__bottombar">
          <Link href="/wish" className="mobile-nav__bottombar__wishlist">
            <Wish active={currentRoute === '/wish' ? true : false} />
          </Link>
          <Link href="/contact" className="mobile-nav__bottombar__contact">
            <Contact active={currentRoute === '/contact' ? true : false} />
          </Link>
          <Link href="/home" className="mobile-nav__bottombar__home">
            <Home active={currentRoute === '/home' ? true : false} />
          </Link>
          <Link href="/about" className="mobile-nav__bottombar__about">
            <About active={currentRoute === '/about' ? true : false} />
          </Link>
          <Link href="/profile" className="mobile-nav__bottombar__profile">
            <Profile active={currentRoute === '/profile' ? true : false} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
