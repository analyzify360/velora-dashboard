import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignalChart from './SignalChart';
import EventList from './EventList';

const PoolDetail = ({ poolAddress }) => {
  const [selectedSignal, setSelectedSignal] = useState('price'); // Default to 'price'
  const [signalData, setSignalData] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState('1d'); // Default to '1 day'
  const [events, setEvents] = useState([]);

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
          `http://localhost:8000/api/pools/${poolAddress}/events`
        );
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [poolAddress]);

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
      <div style={{ flex: 1 }}>
        <h3>Recent Events</h3>
        <EventList events={events} />
      </div>
    </div>
  );
};

export default PoolDetail;
