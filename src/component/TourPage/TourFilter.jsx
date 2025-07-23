import React from 'react';
import { Box, Typography, FormControlLabel, Paper, Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../../Redux/TourSlice';

const TourFilter = () => {
    const tourFil = useSelector(state => state.tour.tours)
    const selectedCategory = useSelector(state => state.tour.selectedCategory);
    const dispatch = useDispatch();

    const categoryNames = [...new Set(tourFil.map(item => item.categoriesName))];
    // console.log(categoryNames)

    const handleChange = (e) => {
        dispatch(setSelectedCategory(e.target.value));
    };

    return (
    <Box>
      {/* Khung loại tour */}
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Loại tour
        </Typography>
          <FormControl>
            <RadioGroup
            name="tour-categories"
            value={selectedCategory}
            onChange={handleChange}
            >
            {categoryNames.map((name, index) => (
              <FormControlLabel
                key={index}
                value={name}
                control={<Radio />}
                label={name}
              />
            ))}
            </RadioGroup>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default TourFilter;
