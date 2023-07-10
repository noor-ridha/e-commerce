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

      </nav>
    </>
  );
};

export default Navbar;
