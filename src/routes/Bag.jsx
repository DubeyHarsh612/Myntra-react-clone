import { useSelector } from "react-redux";
import BagSummary from "../components/BagSummary";
import Bagitem from "../components/Bagitem";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Bag = () => {
  const bagitems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((items) => {
    const itemIndex = bagitems.indexOf(items.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <Bagitem item={item} />
          ))}
        </div>

        <div className="bag-summary">
          <BagSummary />
        </div>
      </div>
    </main>
  );
};

export default Bag;
