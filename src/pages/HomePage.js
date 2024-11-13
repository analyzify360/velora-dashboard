import React, { useState, useEffect} from 'react';
import InfiniteScrollPools from '../components/InfiniteScroll';
import PoolDetail from '../components/PoolDetail';

const HomePage = () => {
  const [selectedPool, setSelectedPool] = useState(null);

  const handleDetailClick = (pool) => {
    setSelectedPool(pool);
  };

  return (
    <div className="homepage">
      <h1>Uniswap V3 Pools</h1>
      {selectedPool === null ? (
        <InfiniteScrollPools onDetailClick={handleDetailClick} />
      ) : (
        <PoolDetail poolAddress={selectedPool} />
      )}
    </div>
  );
};

export default HomePage;