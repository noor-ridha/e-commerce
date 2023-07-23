import BestCollectionItem from './BestCollectionItem';

import './BestCollection.scss';

const BestCollection = () => {
  return (
    <section className="best-collection">
      <h2 className="best-collection__title">Best Collection</h2>
      <BestCollectionItem />
    </section>
  );
}

export default BestCollection;