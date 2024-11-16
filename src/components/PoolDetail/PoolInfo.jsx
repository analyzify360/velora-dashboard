import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CopyButton from './CopyButton';

const PoolInfo = ({poolAddress}) => {
    const [poolInfo, setPoolInfo] = useState({});
    
    useEffect(() => {
        const fetchPoolInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/pools/${poolAddress}`);
                setPoolInfo(response.data);
            } catch (error) {
                console.error('Error fetching pool info:', error);
            }
        };
        fetchPoolInfo();
    }, [poolAddress]);
    const abbreviateAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-6)}`;
    }
    return (
        <div className="pool-info">
            <h2 style={{color:'GrayText'}}>{poolInfo.token0_symbol}/{poolInfo.token1_symbol}</h2>
            <p>
                Pairs:
                <span title={poolInfo.pool} style={{float: 'right'}}>
                    <small style={{marginRight:'5px'}}>
                        {abbreviateAddress(`${poolInfo.pool}`)}
                    </small>
                    <CopyButton textToCopy={poolInfo.pool} />
                </span>
            </p>
            <p>
                {poolInfo.token0_symbol}: 
                <span title={poolInfo.token0} style={{float: 'right'}}>
                    <small style={{marginRight:'5px'}}>
                        {abbreviateAddress(`${poolInfo.token0}`)}
                    </small>
                    <CopyButton textToCopy={poolInfo.token0} />
                </span>
            </p>
            <p>
                {poolInfo.token1_symbol}: 
                <span title={poolInfo.token1} style={{float: 'right'}}>
                    <small style={{marginRight:'5px'}}>
                        {abbreviateAddress(`${poolInfo.token1}`)}
                    </small>
                    <CopyButton textToCopy={poolInfo.token1} />
                </span>
            </p>
        </div>
    );

}

export default PoolInfo;