import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import SignalChart from './SignalChart';
import EventList from './EventList';

const PoolDetail = ({poolAddress}) => {
    const [selectedSignal, setSelectedSignal] = useState('price'); // Default to 'price'
    const [signalData, setSignalData] = useState([]);
    const [selectedInterval, setSelectedInterval] = useState('1d'); // Default to '1 day'
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Fetch signal data based on selected signal type and interval
    useEffect(() => {
        const fetchSignalData = async () => {
            try {
                const response = await axios.get(
                `http://localhost:8000/api/pools/${poolAddress}/signals?type=${selectedSignal}&interval=${selectedInterval}`
                );
                console.log('Signal data:', response.data);
                setSignalData(response.data);
            } catch (error) {
                console.error('Error fetching signal data:', error);
            }
        };

        fetchSignalData();

        const intervalId = setInterval(fetchSignalData, 300000); // Refresh every 5 minutes
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [poolAddress, selectedSignal, selectedInterval]);

    // Fetch events data
    useEffect(() => {
        const fetchEvents = async () => {
        try {
            const response = await axios.get(
            `http://localhost:8000/api/pools/${poolAddress}/events?page=${page}`
            );
            setEvents((prevEvents) => [...prevEvents, ...response.data]);
            setHasMore(response.data.length > 0);
        } catch (error) {
            setHasMore(false);
            console.error('Error fetching events:', error);
        }
        };

        fetchEvents();
    }, [poolAddress, page]);

    const fetchEvents = () => {
        setPage((prevPage) => prevPage + 1);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, marginBottom: '20px' }}>
                <h3>Signals</h3>
                <div>
                <button onClick={() => setSelectedSignal('price')}>Price</button>
                <button onClick={() => setSelectedSignal('liquidity')}>Liquidity</button>
                <button onClick={() => setSelectedSignal('volume')}>Volume</button>
                </div>
                <div style={{ marginTop: '10px' }}>
                <button onClick={() => setSelectedInterval('1d')}>1 Day</button>
                <button onClick={() => setSelectedInterval('7d')}>7 Days</button>
                <button onClick={() => setSelectedInterval('1m')}>1 Month</button>
                </div>
                <SignalChart data={signalData} selectedSignal={selectedSignal} />
            </div>
            <InfiniteScroll
                style={{ width: '100%', overflowX: 'auto' }}
                dataLength={events.length}
                next={fetchEvents}
                hasMore={hasMore}
                loader={<></>}
                endMessage={<p>No more events</p>}
                scrollableTarget="eventScrollableDiv"
                scrollThreshold={0.9}
                >
                <div style={{height: '400px', width: '100%', overflowY: 'scroll', overflowX: 'auto' }} id='eventScrollableDiv'>
                    <h3>Recent Events</h3>
                    <EventList events={events} />
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default PoolDetail;
