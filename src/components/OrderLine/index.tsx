const OrderLine = ({ name, quantity, price, subtotal }:any) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>${subtotal}</td>
    </tr>
  );
};

export default OrderLine