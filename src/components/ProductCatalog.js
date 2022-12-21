import React, { useEffect, useState, ChangeEvent } from 'react';
import {Link} from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import NavBar from './NavBar';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function ProductCatalog() {

// const [prodDetails, setProdDetails] = useState('')

// useEffect(() => {
//   // declare the async data fetching function
//   const fetchData = async () => {
//     // get the data from the api
//     const data = await fetch('http://localhost:5000/prod');
//     // convert the data to json
//     const json = await data.json();

//     // set state with the result
//     let record = "";
//     for (let object = 0; object < json.length; object++) {
//          for (let details in json[object]){
//             record += json[object][details] + " "
//          }
//     }
//     setProdDetails(record);
//   }

//   fetchData()

// },[])
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <NavBar/>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Typography fontSize={20} align='center'>
            <strong>Product List</strong>
          </Typography>
        </Grid>
        <Grid xs={8}>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Grid>
        {/* <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}