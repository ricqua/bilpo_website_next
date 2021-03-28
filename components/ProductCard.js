import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductCard(props) {
  const data = props.data;
  return (
    <React.Fragment>
      <div className="ProductCard">
        <Image src={data.img} alt={data.alt} width={500} height={500} />
        <section>
          <h4 className="ProductCard__title">{data.title}</h4>
          <hr />
          <div>
            <p className="ProductCard__sale">{data.sale}</p>
            <p className="ProductCard__price">{data.price}</p>
          </div>
          <div className="ProductCard__info">
            <p className="ProductCard__description">{data.description}</p>
          </div>
          <div className="ProductCard__links">
            {/* <p>Available: </p> */}
            <Link href={data.naver}>
              <img
                src="socialIcons/NaverButtonAv1.svg"
                alt="Link to Naver smart store"
              />
            </Link>
            <Link href={data.coupang}>
              <img
                src="socialIcons/CoupangButtonAv1.svg"
                alt="Link to Naver smart store"
              />
            </Link>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;
