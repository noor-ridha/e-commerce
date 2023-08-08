import { NextPage } from 'next';

import Hero from './Hero/Hero';
import WatchesList from './Items/WatchesList';
import BestCollection from './BestCollection/BestCollection';
import TodayCollection from './TodayCollection/TodayCollection';

import './home.scss';

const getData = async () => {
  const res = await fetch('http://localhost:7000/api/watches');
  const watches = await res.json();

  console.log(watches);

  return watches;
};

interface HomePageProps {
}

const Home: NextPage<HomePageProps> = async () => {

  const watches = getData();
  
  console.log(watches);
  return (
    <section className="home">
      <Hero />
      <TodayCollection />
      <h2 className="home__watches-title">Watches</h2>
      <WatchesList watches={watches} />
      <BestCollection />
    </section>
  );
};

export default Home;
