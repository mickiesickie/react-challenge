const PromoCode = ({ placeholder = "Promo Code" ,onClickPromo}:any) => {
  return (
    <div className="promo-code">
      <input type="text" placeholder={placeholder} onChange={onClickPromo}></input>
    </div>
  );
};

export default PromoCode;
