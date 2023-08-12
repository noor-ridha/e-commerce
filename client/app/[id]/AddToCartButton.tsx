'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { GrFormNextLink } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';

import { addToCart } from '../Redux/CartSlice';

interface AddToCartButtonProps {
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

const AddToCartButton: FC<AddToCartButtonProps> = ({ watch }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.carts.items);

  console.log(cartItems);

  const clickHandler = () => {
    dispatch(addToCart(watch));
    router.push('/home');
  };

  return (
    <button
      type="button"
      className="details-page__right__add-to-cart"
      onClick={clickHandler}
    >
      Add to cart
      <GrFormNextLink className="details-page__right__add-to-cart__next" />
    </button>
  );
};

export default AddToCartButton;
