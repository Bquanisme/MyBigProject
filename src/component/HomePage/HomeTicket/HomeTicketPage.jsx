import React, { useEffect, useState } from 'react';
import getAPI from '../../API/API';
import HomeTicketUI from './HomeTicketUI';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomeTicketPage = () => {
  const [rooms, setRooms] = useState([]);
  const [show, setShow] = useState(false);
  const Url = 'http://127.0.0.1:8000/api/room';

  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user)

  const handleNavigateTour = () => {
    if(user === null){
      navigate('/Tour')
    }else{
      navigate('User/Tour')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAPI(Url); 
      const data = res.data || [];

      const filterTour = data.filter(data => data.categories?.name === 'Tour đảo')

      const processedRooms = filterTour.map((item) => {
        const start = new Date(item.start_date);
        const end = new Date(item.end_date);

        const diffDays =
          start && end
            ? Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24))
            : 0;

        return {
          id: item.id,
          logo: item.logo,
          name: item.name,
          description: item.categories?.description ,
          days: diffDays,
          people: 10,
          locations: item.categories?.number ,
          tickets: item.can_order,
          cost: typeof item.cost === 'number' ? item.cost : 0,
        };
      });
      setRooms(processedRooms)
    };

    fetchData();
  }, []);

  const visibleRooms = show ? rooms : rooms.slice(0, 3);


  return (
    <div>
      {visibleRooms.map((room) => (
        <HomeTicketUI key={room.id} {...room} />
      ))}

      {!show && rooms.length > 3 && (
        <Box textAlign="center" mt={2} >
          <Button variant="contained" onClick={handleNavigateTour} sx={{ bgcolor: 'error.main' }}>
              Xem thêm
          </Button>
        </Box>
      )}

      {/* {show && (
        <Box textAlign="center" mt={2}>
          <Button variant="contained" onClick={() => setShow(true)} sx={{ bgcolor: 'error.main' }}>
              Thu gọn
          </Button>
        </Box>
      )} */}

      {/* {show && (
        <Box textAlign="center" mt={2}>
          <Button variant="contained" onClick={() => setShow(false)} sx={{ bgcolor: 'error.main' }}>
              Thu gọn
          </Button>
        </Box>
      )} */}
    </div>
  );
};

export default HomeTicketPage;
