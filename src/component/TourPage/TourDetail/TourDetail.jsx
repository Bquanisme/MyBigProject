// RoomDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getAPI from '../../API/API';
import loadingGif from '../../../assets/loading.gif'
import TourDetailUI from './TourDetailUI';

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await getAPI(`http://127.0.0.1:8000/api/room/detail/${id}`)
      setTour(res);
      
    };

    fetchRoom();
  }, [id]);

  console.log("ID gửi lên server:", id);
  if (!tour) return <img src={loadingGif} alt=""/>;

  return (
    <div>
      <TourDetailUI tour={tour}/>
    </div>
  );
};

export default TourDetail;
