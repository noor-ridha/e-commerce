import { getSingleWatch } from '../fetch/Watch';

import './Details.scss';

const Page = async ({ params }: { params: { id: string } }) => {
  const watch = await getSingleWatch(params.id);

  console.log(watch);
  return (
    <div className="details-page">
      <div className="details-page__left">
        <div className="details-page__left__bg" />
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
          <p className="details-page__right__row__color">{watch.color}</p>
          <p className="details-page__right__row__gender">{watch.gender}</p>
        </div>
        <p className="details-page__right__price">{`${watch.price} $`}</p>
      </div>
    </div>
  );
};

export default Page;
