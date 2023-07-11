import Link from 'next/link';

import Cart from '@/app/assets/svg/Cart';

import './Navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className='desktop-nav'>
        <div className='desktop-nav__left'>
          <h1 className='desktop-nav__left__logo'>LOGO</h1>
          <ul className='desktop-nav__left__list'>
            {['Home', 'About', 'Wish', 'Contact'].map(
              (item, index) => (
                <li key={index} className='desktop-nav__left__list__items'>
                  <Link href={`/${item}`}>{item}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className='desktop-nav__right'>
          <button type='button' className='desktop-nav__right__login'>
            Login
          </button>
          <button type='button' className='desktop-nav__right__signup'>
            Signup
          </button>
          <select
            name='language'
            title='langauge'
            className='desktop-nav__right__language'
          >
            <option value='English'>EN</option>
            <option value='Arabic'>AR</option>
          </select>
        </div>
      </nav>
      <nav className='mobile-nav'>
        <div className='mobile-nav__appbar'>
          <h1 className='mobile-nav__appbar__logo'>LOGO</h1>
          <div className='mobile-nav__appbar__cart'><Cart /></div>
        </div>
        <div className='mobile-nav__bottombar'>
          <Link href='/Wish' className='mobile-nav__bottombar__wishlist'>Wish</Link>
          <Link href='/Contact' className='mobile-nav__bottombar__contact'>Contact</Link>
          <Link href='/Home' className='mobile-nav__bottombar__home'>Home</Link>
          <Link href='/About' className='mobile-nav__bottombar__about'>About</Link>
          <Link href='/Profile' className='mobile-nav__bottombar__profile'>Profile</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
