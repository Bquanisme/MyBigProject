import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import loadinggif from '../../assets/loading.gif'
import PaginationControl from '../RoomPage/PaginationControl'
import TourMap from './TourMap'

const TourUI = ({ sortType }) => {
    const tours = useSelector(state => state.tour.tours)
    console.log(tours)
    const selectedCategory = useSelector(state => state.tour.selectedCategory);

    const [page, setPage] = useState(1);
    const rowsPerPage = 3;

    const filteredTours = selectedCategory
    ? tours.filter(item => item.categoriesName === selectedCategory)
    : tours;

    // Sort logic
    const sortedTours = [...filteredTours].sort((a, b) => {
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

    const totalPages = Math.ceil(sortedTours.length / rowsPerPage);
    const paginatedTours = sortedTours.slice(
      (page - 1) * rowsPerPage,
      page * rowsPerPage
    );

    useEffect(() => {
      setPage(1); 
    }, [selectedCategory, sortType]);
    

    return (
    <div style={{ padding: '16px', paddingRight: '15px' }}>
      {paginatedTours && paginatedTours.length > 0 ? (
        paginatedTours.map((item) => (
          <TourMap 
            key={item.id}
            {...item }
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

export default TourUI
