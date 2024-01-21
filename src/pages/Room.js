import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRooms } from '../services/api';

const Room= ({ onSelectRoom }) => {
  const { data, isLoading, isError } = useQuery('rooms', fetchRooms);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching rooms</div>;

  return (
    <div>
      <h2>Room Types</h2>
      <ul>
        {data.map((room) => (
          <li key={room.id} onClick={() => onSelectRoom(room)}>
            {room.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Room;
