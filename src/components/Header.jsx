const Header = () => {
  return (
    <>
      <div className="head1 md:m-3 flex justify-between items-center rounded-2xl md:mx-[70px] bg-black p-3">
        <div className="logo">
          {" "}
          <img
            src="./logo.png"
            className="w-[90px] "
            alt="vital vishwa publications logo"
          />
        </div>
        <div className="text-white list-none flex items-center gap-4">
     
                    <li ><a  href="index.html">Home</a></li>
                    <li ><a  href="about_us.html">About us</a></li>
                    <li ><a  href="courses.html">Courses</a></li>
      
        </div>
        <div className="slogan">
          {" "}
          <h1 className="text-white">Vital Vishwa Publications</h1>
          <p className="text-white">Nurturing Ideas, Crafting Realities</p>
        </div>
      </div>
    </>
  );
};

export default Header;
