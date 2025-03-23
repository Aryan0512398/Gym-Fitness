import { Box, Button, Pagination, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import { exercisesOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const[currentPage,setCurrentPage]=useState(1);
  const exercisesPerPage=4;
  const indexOfLastPage=currentPage*exercisesPerPage;
  const indexOfFirstPage=indexOfLastPage-exercisesPerPage;
  const currentExercises=exercises.slice(indexOfFirstPage,indexOfLastPage)
  const paginate=(e,value)=>{
    setCurrentPage(value)
    window.scroll({top:1800,behaviour:'smooth'})
  }
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  console.log(exercises)
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises?.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length>3 &&(
          <Pagination color="standard" shape='rounded'
          count={Math.ceil(exercises.length/exercisesPerPage)} page={currentPage}
          onChange={paginate} size="large" />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
