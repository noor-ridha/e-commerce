import { NextPage } from 'next';

import Hero from './Hero/Hero';
import WatchesList from './Items/WatchesList';
import BestCollection from './BestCollection/BestCollection';

import './home.scss';

interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
  return (
    <section className="home">
      <Hero />
      <h2 className="home__watches-title">Watches</h2>
      <WatchesList />
      <BestCollection />
    </section>
  );
};

export default Home;
