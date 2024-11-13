import React from 'react';
import PoolItem from './PoolItem';

const PoolList = ({ pools, onDetailClick }) => {

  return (
    <div className="pool-list">
      {pools.map((pool, index) => (
        <PoolItem key={index} pool={pool} onPoolClick={onDetailClick}/>
      ))}
    </div>
  );
};

export default PoolList;