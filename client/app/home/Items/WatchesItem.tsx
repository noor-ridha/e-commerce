import './WatchesItem.scss';

const WatchesItem = () => {
  return <div className="watch-item">
    <div className="watch-item__image">
      <img src="https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="watch" />
    </div>
    <div className="watch-item__info">
      <div className="watch-item__info__name">Watch Name</div>
      <div className="watch-item__info__price">$100</div>
    </div>
    <button type='button' className="watch-item__button">
      Discover
    </button>
  </div>;
};

export default WatchesItem;
