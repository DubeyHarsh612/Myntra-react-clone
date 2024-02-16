import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.bag);
  const elementFound = bagitems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };

  const handleRemoveToBag = () => {
    dispatch(bagAction.removeToBag(item.id));
  };

  // Ensure that 'item' is defined before accessing its properties
  if (!item) {
    return null; // or some fallback UI if 'item' is undefined
  }

  // Check if 'item.rating' is defined before accessing 'stars' and 'count'
  const ratingStars = item.rating ? item.rating.stars : 0;
  const ratingCount = item.rating ? item.rating.count : 0;

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {ratingStars} <CiStar /> | {ratingCount}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!elementFound ? (
        <button
          className=" btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-add-bag btn-danger"
          onClick={handleRemoveToBag}
        >
          remove from bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
