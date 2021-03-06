import Head from "next/head";
import React from "react";
import Image from "next/image";
import LayoutPublic from "../components/LayoutPublic";

export default function About() {
  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - About</title>
      </Head>
      <main className="about">
        <div className="about__splash">
          <Image
            src="/aboutImages/Cape-Town-Table-Mountain.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
          <h1>회사소개</h1>
        </div>

        {/* <section className="about__info"> */}

        <section className="about__bil-po">
          <div>
            <h2>Bil (빌) / po(포)</h2>
            <p>
              빌통: 빌통이라는 단어는 네덜란드의 빌 (엉덩이) 와 통 (조각 혹은
              혀)라는 단어에서 유래되었어요. 육포: 육포는 한국말로 건육 이라는
              뜻으로 (흔히 미국에서는 절키 Jerky ) 알려져 있어요. 빌통과 육포의
              글자를 따서 문화를 함께 상징하는 육포회사 ‘빌포’가 탄생했어요.
            </p>
          </div>
          <div className="about__imageDiv">
            <Image
              src="/aboutImages/307A0318.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section className="about__owners">
          <div>
            <h2>스토리</h2>
            <p>
              한국인 문성씨와 남아프리카 공화국인 리처드씨는 남아프리카 공화국
              케이프 타운으로 신혼여행을 갔어요. 그 곳에서 문성씨는 빌통에 완전
              반해버렸죠. 한국으로 돌아온 이후, 리처드씨는 아내를 위해 특별
              제작한 상자안에 빌통을 만들기 시작하였고, 주위의 친구들에게도
              나눠주기 시작했죠. 남아공 향수병에 걸린 친구들과 독특한 맛을 맛본
              친구들은 계속 빌통을 만들어 달라고 부탁하였고, 그렇게 ‘빌포’
              회사가 탄생하였어요!
            </p>
          </div>
          <div className="about__imageDiv">
            <Image
              src="/aboutImages/about biltong 3 (1800px).png"
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section className="about__history">
          <div>
            <h2>빌통의 역사 </h2>
            <p>
              17세기초 남아프리카에 도착한 초기 유럽인 정착자들 (네덜란드, 독일,
              프랑스)은 야생동물 고기 (일런드) 와 소고기를 보관하고 보존처리
              하기 위해 식초를 사용했어요. 그때 당시, 빌통에 들어가는 후추,
              고수, 그리고 정향같은 양념들은 네덜란드인에 의해 들어오게
              되었구요.
              <br />
              <br />
              오늘날 빌통은 ‘그레이트 트렉’ 시기에 북쪽/북동쪽 케이프 식민지에서
              떠나 남아프리카로 이동한 개척자 들이 만들었는데 (영국인으로부터
              벗어나기 위해), 그들은 마차안에서 이주하는 동안 비축할 수 있는
              식량이 필요해 건육을 만들기 시작했고, 이 식품이 오늘날 빌통이라고
              불리는 남아공 전통 식품이 된거예요. 개척자들은 겨울동안 1-2주일간
              고기를 건조하였고, 고기가 적절하게 건조가 되면 곰팡이가 생기지
              않게 공기 순환이 잘되는 천가방에 보관하였죠.
              <br />
              <br />
              빌통은 한국의 전통식품 김치와 비슷하다고 생각하면 될 것 같아요.
              모든 국민이 즐기는 식품으로 마트나 백화점에서 항상 찾아 볼수 있고,
              여행과 스포츠 게임 관람시 술과 함께 즐기는 국민 안주로 자리 잡기고
              하였죠. 와인농업이 발달하여 특히 와인과 페어링이 완벽한 빌통은
              머스트 해브(must-have) 스낵으로 자리 잡았어요.
            </p>
          </div>
          <div className="about__imageDiv">
            <Image
              src="/aboutImages/about biltong 4 (1800px).png"
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section className="about__VsJerky">
          <div>
            <h2>육포보다 뛰어난 빌통</h2>
            <p>
              빌통와 육포(절키)는 둘다 건조육이예요. 하지만 이 둘은 어떻게
              다르냐구요? 일단 유래된 장소가 달라요. 빌통은 남아프리카에서
              유래되었고, 반면에 육포(절키는) 한국을 비롯해, 북/남 아메리카에서
              유래 되었어요.
              <br />
              <br />
              다른 차이점은 이 두 식품은 생산과정과 재료가 달라서 맛도 달라요.
              빌통을 좋아하는 사람이라면 육질과 맛을 확실하게 구분할 수 있죠.
              육포는 대체로 설탕 간장맛에 절여 고온의 온도에 빠르게 건조되어
              다소 딱딱하고 질긴 식감을 가지고 있는 반면에, 빌통은 식초, 소금,
              간단한 향료와 함께 절여진후 저온에서 천천히 건조되어 부드럽고
              짭쪼름한 향긋한 고기맛을 느낄수 있어요. 빌통은 잘린 구운
              스테이크와 비슷하게 만들어지는데, 건조 정도에 따라 부드러운 정도도
              달라져요.
              <br />
              <br />
              한마디로 빌통은 스테이크처럼 소프트 (레어), 중간 (미디움), 혹은
              바싹 구운 (웰던) 종류가 있다는 의미예요. 오리지널 맛 칠리 맛 등등
              여러가지 맛도 생산가능하죠.
            </p>
          </div>
          <div className="about__imageDiv">
            <Image
              src="/aboutImages/20210314_145454.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </main>
    </LayoutPublic>
  );
}
