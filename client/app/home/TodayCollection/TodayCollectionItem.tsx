'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import './TodayCollectionItem.scss';

import { GrNext } from 'react-icons/gr';

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

const TodayCollectionItem: FC<WatchItemProps> = ({ watch }) => {
  const router = useRouter();

  return (
    <div className="today-item">
      <div className="today-item__circle-effect" />
      <img alt="img" src={watch.picture} className="today-item__img" />
      <h2 className="today-item__title">{watch.title}</h2>
      <h2 className="today-item__brand">{watch.brand}</h2>
      <div className="today-item__info">
        <p className="today-item__info__price">{`${watch.price} $`}</p>
        <button
          className="today-item__info__add-cart"
          title="add"
          type="button"
          onClick={() => router.push(`/${watch._id}`)}
        >
          <GrNext className="today-item__info__add-cart__next" />
        </button>
      </div>
    </div>
  );
};

export default TodayCollectionItem;
