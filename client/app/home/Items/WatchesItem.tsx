import './WatchesItem.scss';

const WatchesItem = () => {
  return (
    <div className="watch-item">
      <img
        src="https://i.ebayimg.com/images/g/anUAAOSwHUZjaT7N/s-l1600.jpg"
        alt="watch"
        className="watch-item__image"
      />
      <div className="watch-item__info">
        <p className="watch-item__info__name">Rolex Purple Dimond</p>
        <p className="watch-item__info__price">$6,899</p>
        <button type="button" className="watch-item__button">
          Discover
        </button>
      </div>
    </div>
  );
};

export default WatchesItem;
