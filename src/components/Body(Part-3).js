const BodyPart3 = () => {
  return (
    <div className="  flex justify-center items-center pb-28">
      <div className="w-[800px] bg-[#f8f7f8] flex pt-10 pb-10 pl-8 pr-8">
        <div>
          <img
            className="w-[355px] h-[325px]"
            src="https://coin.zerodha.com/static/img/coin_landing.png"
          ></img>
        </div>
        <div className="w-[355px] pt-10">
          <h4 className="text-3xl font-bold mb-6">Download the app</h4>
          <p className="text-gray-600 text-[16px] mb-6">
            Investing early makes a huge difference. Download the Coin app and
            make your first investment today.
          </p>
          <div className="">
            <img
              className="inline pr-7"
              src="https://coin.zerodha.com/static/img/appstore-badge.svg"
            ></img>
            <img
              className="inline "
              src="https://coin.zerodha.com/static/img/google-play-badge.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BodyPart3;
