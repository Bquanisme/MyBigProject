import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {setAllRooms } from '../../Redux/RoomSlice'
import getAPI from '../API/API';
import RoomUI from './RoomUI';
import RoomSearch from './RoomSearch';
import { Box } from '@mui/material';
import RoomFilter from './RoomFilter';
import '../../AllCss/Home.css'
import SortControl from './SortControl';

const RoomData = () => {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState('');

  const Url = 'http://127.0.0.1:8000/api/room'

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAPI(Url);
      const data = res.data;

      const filterRoom = data.filter(data => data.type_room === 'room')

      const processedItems = filterRoom.map((item) => {
        return {
          id: item.id,
          logo: item.logo,
          name: item.name,
          description: item.categories?.description,
          people: 3,
          tickets: item.can_order,
          cost: typeof item.cost === 'number' ? item.cost : 0,
          categoriesName: item.categories?.name,
        };
      });

      dispatch(setAllRooms(processedItems))
    };

    fetchData();
  }, [dispatch]);


  return (
    <div className='display'>
      <Box width={300} p={2}>
        <RoomSearch />
        <RoomFilter />
      </Box>
      <Box>
        <SortControl onSortChange={setSortType}/> 
        <RoomUI sortType={sortType}/>
      </Box>
    </div>
  );
};

export default RoomData;
