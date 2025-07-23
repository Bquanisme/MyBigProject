import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {setAllTours} from '../../Redux/TourSlice'
import getAPI from '../API/API';
import SortControl from '../RoomPage/SortControl';
import TourSearch from './TourSearch';
import TourFilter from './TourFilter';
import TourUI from './TourUI';
import { Box } from '@mui/system';

const TourData = () => {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState('');

  const Url = 'http://127.0.0.1:8000/api/room'

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAPI(Url);
      const data = res.data;

      const filterTourName = data.filter(data => data.type_room === 'tour')

      const processedItems = filterTourName.map((item) => {
        const start = new Date(item.start_date);
        const end = new Date(item.end_date);
        const diffDays = start && end
          ? Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24))
          : 0;

        return {
          id: item.id,
          logo: item.logo,
          name: item.name,
          description: item.categories?.description,
          days: diffDays,
          people: 10,
          tickets: item.can_order,
          cost: typeof item.cost === 'number' ? item.cost : 0,
          categoriesName: item.categories?.name,
        };
      });

      dispatch(setAllTours(processedItems));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div className='display'>
        <Box width={300} p={2}>
          <TourSearch />
          <TourFilter />
        </Box>
        <Box>
          <SortControl onSortChange={setSortType}/> 
          <TourUI sortType={sortType}/>
        </Box>
          </div>
    </div>
  );
};

export default TourData;
