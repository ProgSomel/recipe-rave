const Banner = () => {
  return (
    <div className="">
      <div style={{ backgroundImage: 'url("https://i.postimg.cc/XNGMRtjF/banner.png")' }} className="bg-cover bg-center rounded-[25px]  mt-5">
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
