const Header = () => {
  return (
    <div className="flex justify-around items-center h-14 bg-[#f8f7f8]">
      <div className="space-x-4">
        <img
          className="inline gap-2 "
          src="https://coin.zerodha.com/static/img/coin-logo.svg"
        ></img>
        <img
          className="inline gap-2 "
          src="https://coin.zerodha.com/static/img/zerodha-shadow.svg"
        ></img>
      </div>
      <div>
        <ul className="flex gap-10 cursor-pointer">
          <li className=" hover:text-blue-600">Mutual Funds</li>
          <li className=" hover:text-blue-600">NPS</li>
          <li className=" hover:text-blue-600">Login</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
