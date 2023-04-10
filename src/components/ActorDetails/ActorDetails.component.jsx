import React from 'react';

import './ActorDetails.styles.css';

const ActorDetails = ({ actor }) => {
  const { name, profile_path, birthday, place_of_birth, biography } = actor;

  return (
    <div className='actor-details'>
      <img
        className='actor-details-profile'
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : require('../../assets/placeholder-person.jpg')
        }
        alt={name}
      />
      <div className='actor-details-info'>
        <h1 className='actor-details-name'>{name}</h1>
        <p className='actor-details-birthday'>
          <strong>Birthday:</strong> {birthday}
        </p>
        <p className='actor-details-place-of-birth'>
          <strong>Place of Birth:</strong> {place_of_birth}
        </p>
        <p className='actor-details-biography'>
          <strong>Biography:</strong> {biography}
        </p>
      </div>
    </div>
  );
};

export default ActorDetails;
