import React from 'react';
import { useNavigate } from 'react-router-dom';

const PoolItem = ({ index, pool }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/pools/${pool.pool}`);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td className='token-pair' onClick={handleDetailClick}>{pool.token0_symbol}/{pool.token1_symbol}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default PoolItem;