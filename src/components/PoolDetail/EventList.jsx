import React from 'react';

const EventList = ({ events }) => {
  return (
    <>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <div style={{ minWidth: '800px' }}>
        <table className='event-table'>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Type</th>
              <th>Price</th>
              <th>Amount0</th>
              <th>Amount1</th>
              <th>TransactionHash</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.timestamp}</td>
                <td>{event.type}</td>
                <td>{event.price}</td>
                <td>{event.amount0}</td>
                <td>{event.amount1}</td>
                <td>{event.transaction_hash}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </>
  );
};

export default EventList;
