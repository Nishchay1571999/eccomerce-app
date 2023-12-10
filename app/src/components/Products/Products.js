import {ScrollView, Text} from 'react-native';
import React from 'react';
import ProductsCard from './ProductsCard';
import {ProductsData} from '../../data/ProductsData';

const Products = () => {
  return (
    <ScrollView horizontal>
      {ProductsData.map(p => (
        <ProductsCard key={p._id} p={p} />
      ))}
    </ScrollView>
  );
};

export default Products;
