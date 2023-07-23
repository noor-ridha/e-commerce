import './BestCollectionItem.scss';

const BestCollectionItem = () => {
  return (
    <div className="collection-item">
      <img
        className="collection-item__image"
        alt="watch"
        src="https://i.ebayimg.com/images/g/anUAAOSwHUZjaT7N/s-l1600.jpg"
      />
      <div className="collection-item__info">
        <h2 className="collection-item__info__title"></h2>
        <p className="collection-item__info__price"></p>
        <button
          type="button"
          className="btn btn--primary collection-item__add-to-cart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default BestCollectionItem;
