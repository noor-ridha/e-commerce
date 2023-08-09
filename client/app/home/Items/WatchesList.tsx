import { FunctionComponent } from 'react';

import WatchesItem from './WatchesItem';

import './WatchesList.scss';

interface WatchListProps {
  watches: Array<any>;
}

const WatchesList: FunctionComponent<WatchListProps> = ({ watches }) => {
  return (
    <div className="watch-list">
      {watches?.map((watch) => <WatchesItem watch={watch} key={watch.id} />)}
    </div>
  );
};

export default WatchesList;
