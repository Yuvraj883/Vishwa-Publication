const Header = () => {
  return (
    <>
      <div className="head1 mb-3 mx-1 mt-1 md:m-3 flex justify-between items-center rounded-2xl md:mx-[20px] bg-black p-3">
        <div className="logo">
          {" "}
          <img
            src="./logo.png"
            className="w-[150px] "
            alt="vital vishwa publications logo"
          />
        </div>
     
        <div className="slogan text-right">
          {" "}
          <h1 className="text-white font-bold md:text-4xl my-2">Vital Vishwa Publications</h1>
          <p className="text-white  font-semilight">Nurturing Ideas, Crafting Realities</p>
        </div>
      </div>
    </>
  );
};

export default Header;
