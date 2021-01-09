import { useEffect, useState } from 'react';
import './styles.css';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../api';
import Footer from '../Footer';
import OrderLocation from './OrderLocation';

function Orders(){
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
      fetchProducts()
      .then(response => setProducts(response.data)) 
      .catch(error => console.log(error))
    }, [])

    return (
      <>
      <div className="orders-container">
          <StepsHeader />
          <ProductsList products={products} />
          <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
      </div>
      <Footer />
      </>
    )
}

export default Orders;