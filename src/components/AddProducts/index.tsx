const AddProduct = ({ products, onClickAdd }:any) => {
  const handleSelectChange = (event: { target: { value: any; }; }) => {
    const name = event.target.value;
  };

  const handleQuantityChange = (event: { target: { value: any; }; }) => {
    const quantity = event.target.value;
  };

  const handleAddClick = () => {};

  const ProductOption = ({ name }:any) => {
    return (
      <option value={name}>
        {name}
      </option>
    );
  };

  return (
    <div className="add-product">
      <select>
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
