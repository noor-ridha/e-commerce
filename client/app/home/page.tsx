import { NextPage } from 'next';

import Hero from './Hero/Hero';
import WatchesList from './Items/WatchesList';

import './home.scss';

interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
  return (
    <section className="home">
      <Hero />
      <WatchesList />
    </section>
  );
};

export default Home;
