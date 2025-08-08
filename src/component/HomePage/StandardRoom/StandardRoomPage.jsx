import React, { useEffect, useState } from 'react';
import getAPI from '../../API/API';
import { Button, Box } from '@mui/material';
import StandardRoomUI from './StandardRoomUI';
import '../../../AllCss/Home.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StandardRoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const [show, setShow] = useState(false);
  const [showRoom, setShowRoom] = useState([]);
  const Url = 'http://127.0.0.1:8000/api/room';

  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user)

  const handleNavigateRoom = () => {
    if(user === null){
      navigate('/Room')
    }else{
      navigate('/User/Room')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAPI(Url); 
      const data = res.data;

      const filterRoom = data.filter(data => data.type_room === 'room')
      const filterSliceRoom = data.filter(data => data.categories?.name === 'Phòng Standard')

      const processedSliceRooms = filterSliceRoom.map((item) => {
        return {
          id: item.id,
          logo: item.logo,
          name: item.name,
          cost: typeof item.cost === 'number' ? item.cost : 0,
        };
      });

      const processedRooms = filterRoom.map((item) => {
        return {
          id: item.id,
          logo: item.logo,
          name: item.name,
          cost: typeof item.cost === 'number' ? item.cost : 0,
        };
      });

      setRooms(processedRooms)
      setShowRoom(processedSliceRooms)
    };

    fetchData();
  }, []);

  const visibleRooms = show ? rooms : showRoom.slice(0, 3);


  return (
    <div className='background-img-for-standard'>
      <h1 className='align'>Khách sạn & Resort</h1>
      <div className='flex-size'>
        {visibleRooms.map((room) => (
            <StandardRoomUI key={room.id} {...room} />
        ))}
    </div>

      {!show && rooms.length > 3 && (
        <Box textAlign="center" mt={2} >
          <Button variant="contained" onClick={handleNavigateRoom} >
              Xem thêm
          </Button>
        </Box>
      )}

      {/* {!show && rooms.length > 3 && (
        <Box textAlign="center" mt={2} >
          <Button variant="contained" onClick={() => setShow(true)} >
              Xem thêm
          </Button>
        </Box>
      )}

      {show && (
        <Box textAlign="center" mt={2}>
          <Button variant="contained" onClick={() => setShow(false)}>
              Thu gọn
          </Button>
        </Box>
      )} */}
    </div>
  );
};

export default StandardRoomPage;
