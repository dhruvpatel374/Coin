const Footer = () => {
  return (
    <div className="pb-14 pt-14 bg-[#f8f7f8] flex justify-between items-center pl-40 pr-40">
      <div>
        <div>
          <a href="/" className="">
            <img
              className="w-[76px] h-[10px] mb-2"
              src="https://coin.zerodha.com/static/img/zerodha-grey-logo.svg"
            ></img>
          </a>
        </div>
        <div className="text-gray-600 font-semibold mb-4  ">
          <a className="text-sm hover:text-[#1749c6]" href="/">
            Support portal{" "}
          </a>
          <span className="pl-2 pr-2 text-sm  ">|</span>
          <a className="text-sm hover:text-[#1749c6]" href="">
            Terms and Conditions
          </a>
        </div>
        <div className="text-gray-600  ">
          <span className="block text-sm">Zerodha Broking Limited:</span>
          <span className="block text-sm">
            Member of NSE & BSE – SEBI Registration no.: INZ000031633
          </span>
          <span className="block text-sm">NPS-POP 319072020</span>
        </div>
      </div>
      <div className="text-gray-600">
        <span className="block text-sm">
          CDSL: Depository services through Zerodha Broking Ltd.
        </span>
        <span className="block text-sm">
          SEBI Registration no.: IN-DP-431-2019
        </span>
      </div>
    </div>
  );
};
export default Footer;
