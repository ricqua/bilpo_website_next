import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductCard(props) {
  const data = props.data;
  return (
    <React.Fragment>
      <div className="ProductCard">
        <div>
          <Image
            src={data.img}
            alt={data.alt}
            width={500}
            height={500}
            layout="responsive"
            loading={props.loading}
          />
        </div>
        <section>
          <h4 className="ProductCard__title">{data.title}</h4>
          <hr />
          <div>
            {data.priceOnline ? (
              <p className="ProductCard__priceOnline">{data.priceOnline}</p>
            ) : null}
            <p className="ProductCard__pricePromotion">{data.pricePromotion}</p>
          </div>
          {data.description ? (
            <div className="ProductCard__info">
              <p className="ProductCard__description">{data.description}</p>
            </div>
          ) : null}
          <div className="ProductCard__links">
            {/* <label>Online stores: </label> */}
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
