import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ActorDetails from '../../components/ActorDetails/ActorDetails.component';
import Loader from '../../components/Loader/Loader.component';

import { fetchActorDetails } from '../../services/api';

const ActorDetailsPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    async function fetchActorsData() {
      try {
        const actorsData = await fetchActorDetails(id);
        setActor(actorsData.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchActorsData();
  }, [id]);

  return <>{actor ? <ActorDetails actor={actor} /> : <Loader />}</>;
};

export default ActorDetailsPage;
