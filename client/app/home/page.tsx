import { NextPage } from 'next';

import Hero from './Hero/Hero';

import './home.scss';

interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
  return (
    <section className="home">
      <Hero />
    </section>
  );
};

export default Home;
