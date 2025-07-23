// RoomDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getAPI from '../../API/API';
import loadingGif from '../../../assets/loading.gif'
import RoomDetailUI from './RoomDetailUI';

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await getAPI(`http://127.0.0.1:8000/api/room/detail/${id}`)
      setRoom(res);
    };

    fetchRoom();
  }, [id]);

  console.log("ID gửi lên server:", id);
  if (!room) return <img src={loadingGif} alt="" />;

  return (
    <div>
      <RoomDetailUI room={room}/>
    </div>
  );
};

export default RoomDetail;
