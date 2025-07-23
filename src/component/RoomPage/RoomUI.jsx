import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import loadinggif from '../../assets/loading.gif'
import RoomMap from './RoomMap'
import PaginationControl from './PaginationControl'

const RoomUI = ({ sortType }) => {
    const rooms = useSelector(state => state.room.rooms)
    // console.log(rooms)
    const selectedCategory = useSelector(state => state.room.selectedCategory);

    const [page, setPage] = useState(1);
    const rowsPerPage = 3;

    const filteredRooms = selectedCategory
    ? rooms.filter(item => item.categoriesName === selectedCategory)
    : rooms;

    // Sort logic
    const sortedRooms = [...filteredRooms].sort((a, b) => {
      switch (sortType) {
        case 'priceAsc':
          return a.cost - b.cost;
        case 'priceDesc':
          return b.cost - a.cost;
        case 'nameAsc':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    const totalPages = Math.ceil(sortedRooms.length / rowsPerPage);
    const paginatedRooms = sortedRooms.slice(
      (page - 1) * rowsPerPage,
      page * rowsPerPage
    );

    useEffect(() => {
      setPage(1); 
    }, [selectedCategory, sortType]);
    

    return (
    <div style={{ padding: '16px', paddingRight: '15px' }}>
      {paginatedRooms && paginatedRooms.length > 0 ? (
        paginatedRooms.map((item) => (
          <RoomMap 
            key={item.id}
            id={item.id}
            logo={item.logo}
            name={item.name}
            description={item.description}
            people={item.people}
            tickets={item.tickets}
            cost={item.cost}
          />
        ))
      ) : (
        <img src={loadinggif} alt="" />
      )}
      <PaginationControl
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}

export default RoomUI
