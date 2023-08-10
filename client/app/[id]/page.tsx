import { GrFormNextLink } from 'react-icons/gr';

import { getSingleWatch } from '../fetch/Watch';

import './Details.scss';

const Page = async ({ params }: { params: { id: string } }) => {
  const watch = await getSingleWatch(params.id);

  return (
    <div className="details-page">
      <div className="details-page__left">
        <div className="details-page__left__bg" />
        <div className="details-page__left__collection" />
        <img
          alt="item"
          src={watch.picture}
          className="details-page__left__img"
        />
      </div>
      <div className="details-page__right">
        <h2 className="details-page__right__title">{watch.title}</h2>
        <h2 className="details-page__right__brand">{watch.brand}</h2>
        <p className="details-page__right__description">{watch.description}</p>
        <div className="details-page__right__row">
          <div className="details-page__right__row__column">
            <h3 className="details-page__right__row__column__title">
              Model Color
            </h3>
            <p
              className="details-page__right__row__column__color"
              style={{ backgroundColor: watch.color }}
            />
          </div>
          <div className="details-page__right__row__column">
            <h3 className="details-page__right__row__column__title">Gender</h3>
            <p className="details-page__right__row__column__gender">
              {watch.gender}
            </p>
          </div>
        </div>
        <p className="details-page__right__price">{`Price: ${watch.price} $`}</p>
        <button type="button" className="details-page__right__add-to-cart">
          Add to cart
          <GrFormNextLink className="details-page__right__add-to-cart__next" />
        </button>
      </div>
    </div>
  );
};

export default Page;
