import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.type}</strong> - {event.amount} - {event.timestamp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
