import { FC } from 'react';

import BestCollectionItem from './BestCollectionItem';

import './BestCollection.scss';

interface BestListProps {
  watches: Array<any>;
}

const BestCollection: FC<BestListProps> = ({ watches }) => {
  return (
    <section className="best-collection">
      <h2 className="best-collection__title">Best Collection</h2>
      <div className="today-collection__list">
        {watches?.map((watch) => <BestCollectionItem watch={watch} />)}
      </div>
    </section>
  );
};

export default BestCollection;
