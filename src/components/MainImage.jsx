import React from "react";

function MainImage() {
  return (
    <div id="main-img-div" className="relative w-full pt-[43%] top-0">
      <div
        data-sal="fade-in"
        data-sal-delay="100"
        data-sal-duration="600"
        id="main-img"
        className="bg-[url('../public/images/MainLogo1.jpg')] bg-cover bg-no-repeat bg-center flex flex-col items-center
       gap-[105px] p-[8%] absolute top-0 left-0 size-full text-white text-center"
      >
        <h1 id="main-text" className="text-6xl font-extrabold w-[85.5%]">
          ЮРИДИЧНІ ПОСЛУГИ У ЛЬВОВІ ТА ОБЛАСТІ
        </h1>
        <div className="flex flex-col gap-8 w-full">
          <h2
            id="secondary-text-h2"
            className="secondary-text text-4xl font-bold"
          >
            Швидко, якісно та впевнено!
          </h2>
          <h3 className="secondary-text text-4xl font-semibold">
            Допоможемо вирішити будь-яку справу в сфері: цивільного,
            господарського, адміністративного, сімейного та спадкового права
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
