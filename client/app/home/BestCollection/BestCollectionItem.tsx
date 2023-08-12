'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import './BestCollectionItem.scss';

interface WatchItemProps {
  watch: {
    title: string;
    price: number;
    gender: string;
    description: string;
    picture: string;
    color: string;
    brand: string;
    _id: string;
  };
}

const BestCollectionItem: FC<WatchItemProps> = ({ watch }) => {
  const router = useRouter();

  return (
    <div className="collection-item">
      <div className="collection-item__img-bg">
        <img
          className="collection-item__img-bg__image"
          alt="watch"
          src={watch.picture}
        />
      </div>
      <div className="collection-item__info">
        <h2 className="collection-item__info__title">{watch.title}</h2>
        <p className="collection-item__info__price">{`${watch.price} $`}</p>
        <div className="btn btn--primary collection-item__discover">
          <button
            type="button"
            className="btn btn--primary collection-item__discover__btn"
            onClick={() => router.push(`/${watch._id}`)}
          >
            Discover Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestCollectionItem;
