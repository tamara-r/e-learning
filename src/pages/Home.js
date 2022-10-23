import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toolbar, Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import Header from '../components/Header';
import Products from '../components/Products';
import MetaData from '../components/MetaData';

import { getAllProducts } from '../redux/actions/productActions';

const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const [ keyword, setKeyword ] = useState('');

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(
    product => {
      return (
        product
        .name
        .toLowerCase()
        .includes(keyword.toLowerCase()) ||
        product
        .teacher
        .toLowerCase()
        .includes(keyword.toLowerCase()) ||
        product
        .category
        .toLowerCase()
        .includes(keyword.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setKeyword(e.target.value);
  }

  return (
    <Box sx={{ 
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
    }} >
      <MetaData title={'Home'} />
      <Header onChange={handleChange} />
      <Box
        component="main"
        sx={{
          display: 'flex', 
          flexGrow: 1,
          justifyContent: 'center',
          py: 10
        }}
      >
        <Toolbar />
        <Products products={filteredProducts}/>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default Home;
