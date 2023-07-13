import { FunctionComponent } from 'react';

interface CartProps { };

const Cart: FunctionComponent<CartProps> = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='#1C274C'
        strokeWidth='1.5'
        d='M19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0017 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 017 4.172C7.44 4 7.96 4 9 4'
      ></path>
      <path
        stroke='#1C274C'
        strokeWidth='1.5'
        d='M9 4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z'
      ></path>
      <path
        stroke='#1C274C'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8 13v4M16 13v4M12 13v4'
      ></path>
      <path
        stroke='#1C274C'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635.813-.636 1.086-1.727 1.631-3.91.858-3.432 1.287-5.147.387-6.301C19.622 9 17.852 9 14.316 9H9.684c-3.538 0-5.306 0-6.207 1.154-.529.677-.6 1.548-.394 2.846'
      ></path>
    </svg>
  );
};

export default Cart;
