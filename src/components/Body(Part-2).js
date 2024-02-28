const BodyPart2 = () => {
  return (
    <div className="pt-28 pb-28 flex flex-col justify-center items-center pl-24 pr-24 ">
      <div>
        <h1 className="text-3xl font-bold text-center mb-6">
          Many investment options
        </h1>
        <p className="text-center text-gray-600 mb-6 text-lg">
          One platform for all your longterm investment needs
        </p>
      </div>
      <div className="flex items-center justify-center gap-12 w-[700px] pt-14">
        <div>
          <img
            className="w-20 h-20  "
            src="https://coin.zerodha.com/static/img/landing-mf.svg"
          ></img>
        </div>
        <div className="w-[490px]">
          <h4 className="text-xl font-bold mb-2">Direct mutual funds</h4>
          <p className="mb-2">
            Save up to 1% in commissions by Investing in zero commission direct
            mutual funds for free.
          </p>
          <a
            href="/"
            className="text-[#1749c6] font-bold text-lg hover:text-black"
          >
            More
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-12 w-[700px] pt-14">
        <div>
          <img
            className="w-20 h-20  "
            src="https://coin.zerodha.com/static/img/NAV-NPS.svg"
          ></img>
        </div>
        <div className="w-[490px]">
          <h4 className="text-xl font-bold mb-2">National Pension System</h4>
          <p className="mb-2">
            Invest in NPS for a secure future: Simple. Beneficial. Your
            retirement income booster.
          </p>
          <a
            href="/"
            className="text-[#1749c6] font-bold text-lg hover:text-black"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};
export default BodyPart2;
