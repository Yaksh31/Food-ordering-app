import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice.js";

const FoodCard = ({ id, img, name, price, desc, rating, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col gap-2 rounded-lg">
      <img
        src={img}
        alt="Image"
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out overflow-hidden"
      />
      <div className="flex text-sm justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id,img, name, price, rating, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;


