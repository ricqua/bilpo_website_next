import ProductCard from "../components/ProductCard";
import { merch } from "../data/productData";

const Merchandise = () => {
  return (
    <main className="merch" id="merchandise">
      {/* <section className="merch__heroSection"></section> */}
      <h2 className="merch__title">추가상품</h2>
      <p className="merch__description">
        This is a description of all the products Bilpo offers.
      </p>
      <div className="merch__cards">
        {merch.map((item) => {
          return (
            <div className="merch__card" key={item.id}>
              <ProductCard data={item} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Merchandise;
