import React from 'react';

import './ActorCard.styles.css';

const ActorsCard = ({ actor }) => {
  const { id, name, profile_path } = actor;

  return (
    <li className='actor-item' key={id}>
      <a className='actor-link' href={`/person/${id}`}>
        <img
          className='actor-profile'
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : require('../../assets/placeholder-person.jpg')
          }
          alt={name}
        />
        <span className='actor-name'>{name}</span>
      </a>
    </li>
  );
};

export default ActorsCard;
