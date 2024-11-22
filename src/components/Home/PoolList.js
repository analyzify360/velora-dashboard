import React from 'react';
import PoolItem from './PoolItem';

const PoolList = ({ pools }) => {

  return (
    <div className="pool-list">
      <table className='pool-table'>
        <thead>
          <tr>
            <th>No</th>
            <th>Pair</th>
            <th>Price</th>
            <th>24H Volume</th>
            <th>Liquidity</th>
          </tr>
        </thead>
        <tbody>
          {pools.map((pool, index) => (
            <PoolItem key={index} index={index} pool={pool} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PoolList;