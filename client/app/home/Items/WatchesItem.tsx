import { FunctionComponent } from 'react';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import './WatchesItem.scss';

interface WatchItemProps {
  watch: {
    title: string;
    price: number;
    gender: string;
    description: string;
    picture: string;
    color: string;
    brand: string;
  };
}

const WatchesItem: FunctionComponent<WatchItemProps> = ({ watch }) => {
  const favorite: boolean = false;

  return (
    <div className="watch-item">
      {favorite === true ? (
        <AiFillHeart className="watch-item__favorite" />
      ) : (
        <AiOutlineHeart className="watch-item__favorite" />
      )}
      <img src={watch.picture} alt="watch" className="watch-item__image" />
      <div className="watch-item__info">
        <p className="watch-item__info__name">{watch.title}</p>
        <p className="watch-item__info__brand">{watch.brand}</p>
        <p className="watch-item__info__price">{`${watch.price} $`}</p>
        <button type="button" className="watch-item__button">
          Discover
        </button>
      </div>
    </div>
  );
};

export default WatchesItem;
