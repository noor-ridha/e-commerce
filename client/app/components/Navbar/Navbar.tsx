import Link from 'next/link';
import './Navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className='desktop-nav'>
        <div className='desktop-nav__left'>
          <h1 className='desktop-nav__left__logo'>LOGO</h1>
          <ul className='desktop-nav__left__list'>
            {['Home', 'About', 'Trending', 'Contact', 'Blog'].map(
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
          <div className='mobile-nav__appbar__cart'>CART</div>
        </div>
        <div className='mobile-nav__bottombar'>
          <div className='mobile-nav__bottombar__wishlist'></div>
          <div className='mobile-nav__bottombar__home'></div>
          <div className='mobile-nav__bottombar__profile'></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
