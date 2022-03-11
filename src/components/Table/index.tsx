const OrderTable = ({ children }:any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {children && children.length > 0 ? (
          children
        ) : (
          <tr className="empty">
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default OrderTable;
