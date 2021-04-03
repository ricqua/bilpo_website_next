import React from "react";
import Image from "next/image";
import Link from "next/link";

function GiftsetCard(props) {
  const data = props.data;
  //   console.log(data);

  return (
    <React.Fragment>
      <main className="GiftsetCard">
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
          <h4 className="GiftsetCard__title">{data.title}</h4>
          <hr />
          <div>
            {/* <p className="GiftsetCard__sale">{data.sale}</p>
            <p className="GiftsetCard__price">{data.price}</p> */}
          </div>
          <p className="GiftsetCard__description">{data.description}</p>
          <strong>선물세트 상품구성</strong>
          <ul className="GiftsetCard__inventory">
            {data.inventory.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {/* <strong>[개인주문]</strong> <span>{data.orderNote}</span>
          <br />
          <strong>[단체주문]</strong> <span>{data.wholesaleNote}</span> */}
          <div className="GiftsetCard__links">
            {/* <Link href={data.naver}>
              <img
                src="socialIcons/NaverButtonAv1.svg"
                alt="Link to Naver smart store"
              />
            </Link> */}
            {/* <Link href={data.coupang}>
              <img
                src="socialIcons/CoupangButtonAv1.svg"
                alt="Link to Naver smart store"
              />
            </Link> */}
            <Link href="">
              <button>Find out more</button>
            </Link>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default GiftsetCard;
