import React from 'react';
import OrderTable from "./components/Table";
import AddProduct from "./components/AddProducts";
import PRODUCTS from "./data";
import PromoCode from "./components/PromoCode";
import OrderLine from './components/OrderLine';

const App = () => {

  const handleAddProduct = (name:any, quantity:any) => {};

  const handlePromoChange = (event:any) => {};

  return (
    <div>
      <OrderTable>{/* Your code here */}</OrderTable>
      <AddProduct
        products={Object.values(PRODUCTS).map((product) => product.name)}
        onClickAdd={handleAddProduct}
      />

      <PromoCode />
    </div>
  );
};


export default App;
