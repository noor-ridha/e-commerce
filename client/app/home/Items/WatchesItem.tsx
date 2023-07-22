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
        <div className="watch-item__info__name">Watch Name</div>
        <div className="watch-item__info__price">$100</div>
        <button type="button" className="watch-item__button">
          Discover
        </button>
      </div>
    </div>
  );
};

export default WatchesItem;
