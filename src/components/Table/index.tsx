// @ts-ignore
const OrderTable = ( {items} :any) => {
    const {children} = items
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

      { children && children.length > 0 && children.map((item:any, index:number) => (
              <tr key={index}>
                  <td>{item?.product}</td>
                  <td>{item?.quantity}</td>
              </tr>
          ))
      }
      </tbody>
    </table>
  );
};

export default OrderTable;
