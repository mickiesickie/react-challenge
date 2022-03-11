import {useState} from "react";

const AddProduct = ({ products, onClickAdd }:any) => {
    const [selectedProduct,setSelectedProduct]= useState('')
    const [selectedQuatity,setSelectedQuatity] = useState('')
    const handleSelectChange = (event: { target: { value: any; }; }) => {
    const name = event.target.value;
    setSelectedProduct(name);

  };

  const handleQuantityChange = (event: { target: { value: any; }; }) => {
    const quantity = event.target.value;
      setSelectedQuatity(quantity)
  };

  const handleAddClick = () => onClickAdd({quantity: selectedQuatity, product: selectedProduct});


  const ProductOption = ({ name }:any) => {
    return (
      <option value={name}>
        {name}
      </option>
    );
  };

  return (
    <div className="add-product">
      <select onChange={handleSelectChange}>
        {products.map((product: any) => (
          <ProductOption name={product} />
        ))}
      </select>
      <input
        type="number"
        placeholder="Quantity"
        className="quantity"
        onChange={handleQuantityChange}
      />
      <button className="add" onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
};

export default AddProduct;
