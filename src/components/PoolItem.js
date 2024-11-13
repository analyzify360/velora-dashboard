import React from 'react';

const PoolItem = ({ pool, onPoolClick }) => {
  return (
    <div className="pool-item">
      <div className="pool-info">
        <h3>{pool.pool}</h3>
        <p>Token0: ${pool.token0.toLocaleString()}</p>
        <p>Token1: ${pool.token1.toLocaleString()}</p>
        <p>Fee: {pool.fee.toLocaleString()}%</p>
        <p>Pool Address: {pool.pool}</p>
      </div>
      <div className="pool-actions">
        <button onClick={()=>onPoolClick(pool.pool)}>Details</button>
        <button>Trade</button>
        <button>Deposit</button>
      </div>
    </div>
  );
};

export default PoolItem;