import Head from "next/head";
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Bilpo - Home</title>
      </Head>
      <main className="home">
        <section className="home__heroSection">
          <div>Hero section</div>
        </section>

        <section className="home__giveawaySection">
          <div>
            <div className="home__giveawaySection__img">
              <Image
                src="/giveawayImages/307A0400 edit01.png"
                alt=""
                width={1200}
                height={800}
                loading="lazy"
              />
            </div>
            <div className="home__giveawaySection__info">
              <h2>Giveaway</h2>
              <p>- 무료 빌통 응모하기 -</p>

              <p>(2월 1일 ~ 2월 28일)</p>
              <p>
                빌포팀이 고객님께 선물하는 빌통! 경품응모하고 무료 빌통 2봉을
                받아가세요. 추첨발표는 마감일 다음에 발표됩니다.
              </p>
              <form action="">
                <input type="text" required placeholder="이름" />
                <input type="text" required placeholder="이메일" />
                <button className="button__dark">Submit</button>
              </form>
            </div>
          </div>
        </section>

        <section className="home__biltongVsJerkySection">
          <div>Instagram section</div>
        </section>
        <section className="home__shippingSection">
          <div>Shipping section</div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
