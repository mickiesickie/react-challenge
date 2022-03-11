const PromoCode = ({ placeholder = "Promo Code" }) => {
  return (
    <div className="promo-code">
      <input type="text" placeholder={placeholder}></input>
    </div>
  );
};

export default PromoCode;
