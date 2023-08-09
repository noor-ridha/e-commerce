'use client';

import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/store';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../Redux/FavoritesSlice';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import './WatchesItem.scss';

interface WatchItemProps {
  watch: {
    _id: string;
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
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.watches);
  const favorite: boolean = favorites.some(
    (favorite) => favorite._id === watch._id,
  );

  return (
    <div className="watch-item">
      {favorite === true ? (
        <AiFillHeart
          className="watch-item__favorite"
          onClick={() => dispatch(removeFromFavorites(watch))}
        />
      ) : (
        <AiOutlineHeart
          className="watch-item__favorite"
          onClick={() => dispatch(addToFavorites(watch))}
        />
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
