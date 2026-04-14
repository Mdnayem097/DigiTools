const Card = ({ cart, setCart }) => {
  const handleRemove = (id) => {
    const filtered = cart.filter((item) => item.key !== id);
    setCart(filtered);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-10/12 m-auto mt-10">
      {cart.map((item) => (
        <div key={item.key} className="flex justify-between items-center p-3 mb-2">
          <div className="flex items-center gap-3">
            <img src={item.logo} className="rounded" />

            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-gray-600 text-left">${item.price}</p>
            </div>
          </div>

          <button
            onClick={() => handleRemove(item.key)}
            className="btn text-red-800 btn-sm"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-5 text-right">Total: ${total}</h2>
      <button
        onClick={() => setCart([])}
        className="btn btn-success mt-3 w-full bg-color-rgb text-white"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Card;
