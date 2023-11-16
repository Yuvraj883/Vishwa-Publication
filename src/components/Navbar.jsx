// import {Link} from "react-router-dom";
// function Navbar() {
//     return (<>
//         <div className="navbar">
//             <div className="text-white bg-black mx-1 md:mx-[20px] rounded-2xl p-4 list-none flex items-center gap-4">

//                 <Link to="/">Home</Link>
//                 <Link to="/about">About Us</Link>
//                 {/* <Link to="/courses">Courses</Link>
//                 <Link to="/gallery">Gallery</Link> */}

//             </div>
//         </div>
//     </>);
// }

// export default Navbar;

import {Link} from "react-router-dom";
function Navbar() {
    return (<>
        <div className="navbar">
            <div className="text-white bg-black mx-1 md:mx-[20px] rounded-2xl p-4 list-none flex items-center gap-4">

                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                {/* <Link to="/courses">Courses</Link>
                <Link to="/gallery">Gallery</Link> */}

            </div>
        </div>
    </>);
}

export default Navbar;