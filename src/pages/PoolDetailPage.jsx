import React from 'react';
import { useParams } from 'react-router-dom';
import PoolDetail from '../components/PoolDetail/PoolDetail';
import PoolInfo from '../components/PoolDetail/PoolInfo';

const PoolDetailPage = () => {
    const { poolAddress } = useParams();
    
    return (
        <>
            <div className='pool-details'>
                <div className='pool-details-sidebar'>
                    <PoolInfo poolAddress={poolAddress}/>
                </div>
                <div className='pool-details-content'>
                    <PoolDetail poolAddress={poolAddress} />
                </div>
            </div>
        </>
    );
};

export default PoolDetailPage;
