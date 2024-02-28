const Body = () => {
  return (
    <div className=" bg-[#f8f7f8] flex justify-between items-center pt-24 pb-24 ">
      <div>
        <img
          className="w-[768px] h-[600px] right-4 relative "
          src="https://coin.zerodha.com/static/img/landing-hero.png"
        ></img>
      </div>
      <div className=" w-[700px] pl-14 pr-4">
        <h4 className="text-2xl font-semibold text-[32px] ">
          Invest in your long term financial goals
        </h4>
        <h5 className="mt-6 text-gray-600">
          Invest in 0% commission direct mutual funds and Govt, corporate, and
          gold bonds on India’s largest direct mutual funds platform.
        </h5>
        <div className="flex   text-[1rem] mt-6 gap-5">
          <button className="w-[215px] h-[48px] bg-[#1749c6] rounded-3xl text-white hover:bg-black">
            Login
          </button>
          <button className="w-[215px] h-[48px] rounded-3xl border-2 border-[#1749c6] text-[#1749c6]  hover:border-black hover:text-black ">
            Explore
          </button>
        </div>
        <p className="text-gray-600 mt-6 ">
          Don't have a Zerodha account?{" "}
          <a href="/" className="text-[#1749c6] hover:text-black">
            Signup now
          </a>
        </p>
      </div>
    </div>
  );
};
export default Body;
