'use client';
import WatchesList from '../home/Items/WatchesList';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import './Favorites.scss';

const page = () => {
  const favorites = useSelector((state: RootState) => state.favorites.watches);

  return (
    <div className="favorites">
      <h1 className="favorites__title">Favorites</h1>
      <WatchesList watches={favorites} />
    </div>
  );
};

export default page;
