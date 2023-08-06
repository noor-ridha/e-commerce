import TodayCollectionItem from './TodayCollectionItem';

import './TodayCollection.scss';

const TodayCollection = () => {
  return (
    <div className='today-collection'>
      <h2 className='today-collection__title'>Today's Collection</h2>
      <TodayCollectionItem />
    </div>
  )
}

export default TodayCollection;
