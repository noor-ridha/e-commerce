import WatchesItem from './WatchesItem';

import './WatchesList.scss';

const WatchesList = ({ watches }) => {
  console.log(watches)
  return (
    <div className='watch-list'>
        <WatchesItem />
    </div>
  );
}

export default WatchesList;
