import { FunctionComponent } from 'react';

import WatchesItem from './WatchesItem';

import './WatchesList.scss';

interface WatchListProps {
  watches: Array<any>;
}

const WatchesList: FunctionComponent<WatchListProps> = ({ watches }) => {
  console.log(watches);
  return (
    <div className="watch-list">
      {watches?.map((watch) => (
        <WatchesItem />
      ))}
    </div>
  );
};

export default WatchesList;
