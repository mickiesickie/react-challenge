import React, { useState} from 'react';
import OrderTable from "./components/Table";
import AddProduct from "./components/AddProducts";
import PRODUCTS from "./data";
import PromoCode from "./components/PromoCode";
//import OrderLine from './components/OrderLine';

const App = () => {
    const listResults = []as any;
    const [children,setChildren] = useState(listResults);

  const handleAddProduct = (item:object) => {
      setChildren([...children,item])
  };

  const handlePromoChange = (event: { target: { value: any; }; }) => {
        const text = event.target.value
      console.log('handlePromoChange', text)
  };

  return (
    <div>
      <OrderTable items={{children}} />
      <AddProduct
        products={Object.values(PRODUCTS).map((product) => product.name)}
        onClickAdd={handleAddProduct}
      />

      <PromoCode onClickPromo={handlePromoChange}/>
    </div>
  );
};


export default App;
