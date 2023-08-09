import { NextPage } from 'next';

import Hero from './Hero/Hero';
import WatchesList from './Items/WatchesList';
import BestCollection from './BestCollection/BestCollection';
import TodayCollection from './TodayCollection/TodayCollection';

import { getWatches } from '../fetch/Watch';

import './home.scss';

interface HomePageProps {}

const Home: NextPage<HomePageProps> = async () => {
  const watches: Array<any> = await getWatches();
  return (
    <section className="home">
      <Hero />
      <TodayCollection watches={watches} />
      <h2 className="home__watches-title">Watches</h2>
      <WatchesList watches={watches} />
      <BestCollection watches={watches} />
    </section>
  );
};

export default Home;
