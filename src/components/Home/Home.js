import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import PoolList from './PoolList';

const HomePools = () => {
  const [pools, setPools] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const initialFetchDone = useRef(false);

  const fetchPools = useCallback(async () => {
    if (!hasMore) return;

    try {
      const response = await axios.get(`http://localhost:8000/api/pools?page=${page}`);
      setPools((prevPools) => [...prevPools, ...response.data]);
      setHasMore(response.data.length > 0);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setHasMore(false);
      console.error('Error fetching pools:', error);
    }
  }, [page, hasMore]);

  useEffect(() => {
    if (initialFetchDone.current) return;

    initialFetchDone.current = true;
    fetchPools();
    
  }, [fetchPools]);

  return (
    <InfiniteScroll
      dataLength={pools.length}
      next={fetchPools}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more pools</p>}
    >
      <PoolList pools={pools} />
    </InfiniteScroll>
  );
};

export default HomePools;