import './TodayCollectionItem.scss';

import { GrNext } from 'react-icons/gr';

const TodayCollectionItem = () => {
  return (
    <div className="today-item">
      <div className="today-item__circle-effect" />
      <img
        alt="img"
        src="https://i.pinimg.com/originals/a9/35/20/a9352080b2127da1678cad38303a235e.png"
        className="today-item__img"
      />
      <h2 className="today-item__title">Another Watch</h2>
      <div className="today-item__info">
        <p className="today-item__info__price">1000$</p>
        <button
          className="today-item__info__add-cart"
          title="add"
          type="button"
        >
          <GrNext className="today-item__info__add-cart__next" />
        </button>
      </div>
    </div>
  );
};

export default TodayCollectionItem;
