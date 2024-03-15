
const Banner = () => {
  return (
    <div className="">
      {/* <div
        className="hero rounded-xl "
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      <div style={{backgroundImage: 'url("../../../public/images/banner.png")'}} className="rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] mt-5">
      <div className="text-center p-5 lg:p-20 space-y-5 justify-center">
      <h1 className="text-5xl font-bold text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p className="text-white font-light">Welcome to site, where culinary inspiration meets gastronomic delight. Embark on a culinary journey like no other as we invite you to explore a treasure trove of mouthwatering recipes crafted to tantalize your taste buds and ignite your passion for cooking.</p>
      <div className="flex justify-center gap-5">
        <button className="font-bold btn rounded-full border-none bg-[#0BE58A]">Explore Now</button>
        <button className="font-bold btn rounded-full border-none ">Our Feedback</button>
      </div>
      </div>
      </div>
    </div>
  );
};


export default Banner;
