import { FC } from 'react';

import TodayCollectionItem from './TodayCollectionItem';

import './TodayCollection.scss';

interface TodayListProps {
  watches: Array<any>;
}

const TodayCollection: FC<TodayListProps> = ({ watches }) => {
  return (
    <div className="today-collection">
      <h2 className="today-collection__title">Today's Collection</h2>
      <div className="today-collection__list">
        {watches?.map((watch) => <TodayCollectionItem watch={watch} />)}
      </div>
    </div>
  );
};

export default TodayCollection;
