import { NextPage } from 'next';

import './home.scss';

interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
  return <section className="home">page</section>;
};

export default Home;
