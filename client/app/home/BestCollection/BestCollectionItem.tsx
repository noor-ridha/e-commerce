import './BestCollectionItem.scss';

const BestCollectionItem = () => {
  return (
    <div className="collection-item">
      <div className="collection-item__img-bg">
        <img
          className="collection-item__img-bg__image"
          alt="watch"
          src="https://i.ebayimg.com/images/g/anUAAOSwHUZjaT7N/s-l1600.jpg"
        />
      </div>
      <div className="collection-item__info">
        <h2 className="collection-item__info__title">Rolex Purple Diamond</h2>
        <p className="collection-item__info__price">6,899 $</p>
        <div className="btn btn--primary collection-item__discover">
          <button
            type="button"
            className="btn btn--primary collection-item__discover__btn"
            >
            Discover Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestCollectionItem;
